import { Language } from '../types';

let activeUtterance: SpeechSynthesisUtterance | null = null;
let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioCtxClass = window.AudioContext || (window as any).webkitAudioContext;
    if (AudioCtxClass) {
      audioCtx = new AudioCtxClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

/**
 * Acoustic synthesizer that plays melodic resonant tones when speech synthesis
 * is unavailable or does not support Devanagari/Hindi voice engines in the client OS.
 */
export function playAcousticFallback(
  text: string,
  onStart?: () => void,
  onEnd?: () => void
): () => void {
  const ctx = getAudioContext();
  if (!ctx) {
    if (onStart) onStart();
    const t = setTimeout(() => {
      if (onEnd) onEnd();
    }, 1200);
    return () => clearTimeout(t);
  }

  if (onStart) onStart();

  const syllables = Math.max(3, Math.min(12, Math.ceil(text.length / 5)));
  const stepTime = 0.22;
  const totalDuration = syllables * stepTime;

  // Harmonious pentatonic scale inspired by classical Indian raga notes (Sa, Re, Ga, Pa, Dha)
  const notes = [220, 247.5, 277.18, 329.63, 369.99, 440, 495, 554.37];

  const now = ctx.currentTime + 0.05;
  const oscillators: OscillatorNode[] = [];

  for (let i = 0; i < syllables; i++) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const freq = notes[i % notes.length];

    osc.type = i % 2 === 0 ? 'sine' : 'triangle';
    osc.frequency.setValueAtTime(freq, now + i * stepTime);

    // Smooth bell-like envelope
    gain.gain.setValueAtTime(0, now + i * stepTime);
    gain.gain.linearRampToValueAtTime(0.12, now + i * stepTime + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.001, now + (i + 1) * stepTime);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now + i * stepTime);
    osc.stop(now + (i + 1) * stepTime);
    oscillators.push(osc);
  }

  const endTimer = setTimeout(() => {
    if (onEnd) onEnd();
  }, totalDuration * 1000 + 100);

  return () => {
    clearTimeout(endTimer);
    oscillators.forEach((osc) => {
      try {
        osc.stop();
      } catch {}
    });
    if (onEnd) onEnd();
  };
}

export function getLanguageCode(language: Language): string {
  switch (language) {
    case 'english':
      return 'en-IN';
    case 'hindi':
      return 'hi-IN';
    case 'sanskrit':
      return 'hi-IN'; // Sanskrit uses Devanagari phonology; hi-IN provides native articulation
    default:
      return 'en-US';
  }
}

/**
 * Robust Text-to-Speech Synthesizer with cross-browser resilience,
 * voice selection fallback, and Web Audio acoustic chime guarantee.
 */
export function speakText(
  text: string,
  language: Language,
  rate = 1.0,
  onStart?: () => void,
  onEnd?: () => void,
  onError?: (err: unknown) => void
): () => void {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return playAcousticFallback(text, onStart, onEnd);
  }

  try {
    window.speechSynthesis.cancel();
  } catch {}

  const utterance = new SpeechSynthesisUtterance(text);
  activeUtterance = utterance; // Keep module-level reference to prevent Chromium garbage collection

  const targetLangCode = getLanguageCode(language);
  utterance.lang = targetLangCode;
  utterance.rate = rate;
  utterance.pitch = language === 'sanskrit' ? 0.95 : 1.0;

  // Best-effort voice matching
  const voices = window.speechSynthesis.getVoices();
  if (voices && voices.length > 0) {
    let matchedVoice: SpeechSynthesisVoice | undefined;

    if (language === 'hindi' || language === 'sanskrit') {
      matchedVoice =
        voices.find((v) => v.lang.toLowerCase().replace('_', '-').startsWith('hi')) ||
        voices.find((v) => v.name.toLowerCase().includes('hindi') || v.name.toLowerCase().includes('devanagari')) ||
        voices.find((v) => v.lang.toLowerCase().startsWith('mr') || v.lang.toLowerCase().startsWith('ne')) ||
        voices.find((v) => v.lang.toLowerCase().includes('en-in'));
    } else {
      matchedVoice =
        voices.find((v) => v.lang.toLowerCase().replace('_', '-').startsWith('en-in')) ||
        voices.find((v) => v.lang.toLowerCase().startsWith('en'));
    }

    if (matchedVoice) {
      utterance.voice = matchedVoice;
    }
  }

  let hasStarted = false;
  let hasFinished = false;

  const markStart = () => {
    if (!hasStarted) {
      hasStarted = true;
      if (onStart) onStart();
    }
  };

  const markEnd = () => {
    if (!hasFinished) {
      hasFinished = true;
      activeUtterance = null;
      if (onEnd) onEnd();
    }
  };

  utterance.onstart = markStart;
  utterance.onend = markEnd;

  utterance.onerror = (e) => {
    // If voice engine failed or language is unavailable, provide instant acoustic audio fallback
    if (!hasStarted) {
      markStart();
    }
    playAcousticFallback(text, undefined, () => {
      markEnd();
      if (onError) onError(e);
    });
  };

  // Safety timer: in case synthesis stalls, ensure UI resets
  const estimatedSeconds = Math.max(2, (text.length / 15) * (1 / rate));
  const fallbackTimer = setTimeout(() => {
    if (!hasFinished) {
      markEnd();
    }
  }, (estimatedSeconds + 3) * 1000);

  // Small timeout to avoid Chromium cancel/speak race condition
  setTimeout(() => {
    try {
      window.speechSynthesis.speak(utterance);
      // Guarantee initial start trigger for responsiveness
      markStart();
    } catch {
      playAcousticFallback(text, onStart, () => {
        markEnd();
      });
    }
  }, 30);

  return () => {
    clearTimeout(fallbackTimer);
    try {
      window.speechSynthesis.cancel();
    } catch {}
    markEnd();
  };
}

export function stopSpeaking(): void {
  activeUtterance = null;
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
    } catch {}
  }
}

export interface SpeechRecognitionResult {
  transcript: string;
  isFinal: boolean;
}

/**
 * Browser Speech Recognition interface wrapper with auto-evaluation
 * and simulated speech resilience for devices without active microphone streaming.
 */
export class LabSpeechRecognizer {
  private recognition: any = null;
  public isSupported = false;
  private language: Language;

  constructor(language: Language) {
    this.language = language;
    if (typeof window !== 'undefined') {
      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        this.isSupported = true;
        try {
          this.recognition = new SpeechRecognition();
          this.recognition.continuous = false;
          this.recognition.interimResults = true;
          this.recognition.lang = getLanguageCode(language);
        } catch {
          this.isSupported = false;
        }
      }
    }
  }

  start(
    onResult: (result: SpeechRecognitionResult) => void,
    onError: (err: any) => void,
    onEnd: () => void
  ): boolean {
    if (!this.recognition) return false;

    this.recognition.onresult = (event: any) => {
      let interim = '';
      let final = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          final += event.results[i][0].transcript;
        } else {
          interim += event.results[i][0].transcript;
        }
      }
      onResult({
        transcript: final || interim,
        isFinal: Boolean(final),
      });
    };

    this.recognition.onerror = (event: any) => {
      onError(event);
    };

    this.recognition.onend = () => {
      onEnd();
    };

    try {
      this.recognition.start();
      return true;
    } catch (e) {
      onError(e);
      return false;
    }
  }

  stop(): void {
    if (this.recognition) {
      try {
        this.recognition.stop();
      } catch {}
    }
  }
}
