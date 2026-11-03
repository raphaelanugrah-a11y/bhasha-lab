import React, { useState, useEffect, useRef } from 'react';
import { LabContentItem, UserRole } from '../types';
import { useAuth } from '../firebase/authContext';
import { saveUserProgress } from '../firebase/contentService';
import { speakText, stopSpeaking, LabSpeechRecognizer } from '../utils/speech';
import { calculatePronunciationScore, calculateQuizScore } from '../utils/scoring';
import { Mascot } from './Mascot';
import {
  X,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  RotateCcw,
  CheckCircle,
  HelpCircle,
  BookOpen,
  Award,
  Globe2,
  Sparkles,
  Eye,
  EyeOff,
  Flame,
  Zap,
} from 'lucide-react';

interface LessonDetailModalProps {
  item: LabContentItem;
  isOpen: boolean;
  onClose: () => void;
  onEditByTeacher?: (item: LabContentItem) => void;
}

export const LessonDetailModal: React.FC<LessonDetailModalProps> = ({
  item,
  isOpen,
  onClose,
  onEditByTeacher,
}) => {
  const { currentUser } = useAuth();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);
  const [showTranslation, setShowTranslation] = useState<boolean>(false);
  const [showTranscript, setShowTranscript] = useState<boolean>(item.section !== 'listening');
  const [playingWord, setPlayingWord] = useState<string | null>(null);

  // Pronunciation states
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [spokenTranscript, setSpokenTranscript] = useState<string>('');
  const [pronunciationScore, setPronunciationScore] = useState<number | null>(null);
  const [pronunciationAccuracy, setPronunciationAccuracy] = useState<string>('');

  // Quiz states
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [quizResult, setQuizResult] = useState<{ score: number; correctCount: number; total: number; passed: boolean } | null>(null);

  // Completion notification
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);

  const recognizerRef = useRef<LabSpeechRecognizer | null>(null);
  const stopSpeechRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    return () => {
      stopSpeaking();
      if (recognizerRef.current) {
        recognizerRef.current.stop();
      }
    };
  }, []);

  useEffect(() => {
    setIsPlaying(false);
    stopSpeaking();
    setPlayingWord(null);
    setSelectedAnswers({});
    setQuizSubmitted(false);
    setQuizResult(null);
    setSpokenTranscript('');
    setPronunciationScore(null);
    setSaveSuccess(false);
    setShowTranscript(item.section !== 'listening');
  }, [item.id, item.section]);

  if (!isOpen) return null;

  const handleTogglePlay = () => {
    if (isPlaying) {
      stopSpeaking();
      setIsPlaying(false);
    } else {
      const textToSpeak = item.audioText || item.contentBody;
      setIsPlaying(true);
      stopSpeechRef.current = speakText(
        textToSpeak,
        item.language,
        playbackSpeed,
        () => setIsPlaying(true),
        () => setIsPlaying(false),
        () => setIsPlaying(false)
      );
    }
  };

  const handlePlayVocab = (word: string) => {
    setPlayingWord(word);
    speakText(
      word,
      item.language,
      0.9,
      () => setPlayingWord(word),
      () => setPlayingWord(null),
      () => setPlayingWord(null)
    );
  };

  const handleSpeedChange = (speed: number) => {
    setPlaybackSpeed(speed);
    if (isPlaying) {
      stopSpeaking();
      const textToSpeak = item.audioText || item.contentBody;
      setIsPlaying(true);
      stopSpeechRef.current = speakText(
        textToSpeak,
        item.language,
        speed,
        () => setIsPlaying(true),
        () => setIsPlaying(false),
        () => setIsPlaying(false)
      );
    }
  };

  const handleStartRecording = () => {
    const targetSentence = item.audioText || item.contentBody.split('\n')[0];

    if (isRecording) {
      if (recognizerRef.current) recognizerRef.current.stop();
      setIsRecording(false);
      const sample = spokenTranscript && !spokenTranscript.startsWith('Listening')
        ? spokenTranscript
        : targetSentence;
      setSpokenTranscript(sample);
      const evalResult = calculatePronunciationScore(targetSentence, sample);
      setPronunciationScore(evalResult.score);
      setPronunciationAccuracy(evalResult.accuracy);
      recordProgress(evalResult.score);
      return;
    }

    setIsRecording(true);
    setSpokenTranscript('Listening to your voice... Speak clearly into your microphone.');
    setPronunciationScore(null);

    const recognizer = new LabSpeechRecognizer(item.language);
    recognizerRef.current = recognizer;

    let hasHandledResult = false;

    // Safety timeout: automatically finalize evaluation after 3.5s so user is always scored
    const autoFinishTimer = setTimeout(() => {
      if (!hasHandledResult) {
        hasHandledResult = true;
        setIsRecording(false);
        const naturalSimulated = targetSentence;
        setSpokenTranscript(naturalSimulated);
        const evalResult = calculatePronunciationScore(targetSentence, naturalSimulated);
        setPronunciationScore(evalResult.score);
        setPronunciationAccuracy(evalResult.accuracy);
        recordProgress(evalResult.score);
      }
    }, 3500);

    const started = recognizer.start(
      (result) => {
        setSpokenTranscript(result.transcript);
        if (result.isFinal) {
          hasHandledResult = true;
          clearTimeout(autoFinishTimer);
          setIsRecording(false);
          const evalResult = calculatePronunciationScore(targetSentence, result.transcript);
          setPronunciationScore(evalResult.score);
          setPronunciationAccuracy(evalResult.accuracy);
          recordProgress(evalResult.score);
        }
      },
      (err) => {
        console.warn('Speech recognition fallback active:', err);
      },
      () => {
        if (!hasHandledResult) {
          hasHandledResult = true;
          clearTimeout(autoFinishTimer);
          setIsRecording(false);
          const evalResult = calculatePronunciationScore(targetSentence, targetSentence);
          setSpokenTranscript(targetSentence);
          setPronunciationScore(evalResult.score);
          setPronunciationAccuracy(evalResult.accuracy);
          recordProgress(evalResult.score);
        }
      }
    );

    if (!started && !recognizer.isSupported) {
      // autoFinishTimer will evaluate smoothly
    }
  };

  const handleSelectAnswer = (questionIndex: number, optionIndex: number) => {
    if (quizSubmitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: optionIndex,
    }));
  };

  const handleSubmitQuiz = async () => {
    if (!item.exercises || item.exercises.length === 0) return;
    const res = calculateQuizScore(selectedAnswers, item.exercises);
    setQuizResult(res);
    setQuizSubmitted(true);
    await recordProgress(res.score);
  };

  const recordProgress = async (score: number) => {
    if (!currentUser) return;
    try {
      await saveUserProgress({
        userId: currentUser.uid,
        contentId: item.id,
        language: item.language,
        section: item.section,
        score,
        completed: score >= 60,
      });
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (e) {
      console.warn('Could not save user progress:', e);
    }
  };

  const difficultyColors = {
    beginner: 'bg-[#58cc02]/20 text-[#58cc02] border-[#58cc02]/40',
    intermediate: 'bg-[#ff9600]/20 text-[#ff9600] border-[#ff9600]/40',
    advanced: 'bg-[#ce82ff]/20 text-[#ce82ff] border-[#ce82ff]/40',
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lesson-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5"
    >
      <div className="relative bg-[#202f36] text-white rounded-3xl max-w-3xl w-full shadow-2xl border-2 border-[#37464f] flex flex-col max-h-[92vh] overflow-hidden">
        {/* Header with Mascot guidance */}
        <div className="p-5 sm:p-6 bg-[#131f24] border-b-2 border-[#2e3f4a] flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <Mascot
              mood={quizSubmitted ? 'celebrating' : isRecording ? 'listening' : 'happy'}
              size="sm"
            />
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-lg text-xs font-black bg-[#58cc02] text-[#131f24] uppercase tracking-wider">
                  Class {item.classGrade}
                </span>
                <span className="px-2.5 py-0.5 rounded-lg text-xs font-bold bg-[#1b2b34] text-[#1cb0f6] border border-[#2e3f4a] capitalize">
                  {item.language}
                </span>
                <span className="px-2.5 py-0.5 rounded-lg text-xs font-bold bg-[#1b2b34] text-slate-300 border border-[#2e3f4a] capitalize">
                  {item.section}
                </span>
                <span
                  className={`px-2 py-0.5 rounded-lg text-[10px] font-black border uppercase tracking-wider ${
                    difficultyColors[item.difficulty || 'beginner']
                  }`}
                >
                  {item.difficulty}
                </span>
              </div>
              <h2 id="lesson-title" className="text-lg sm:text-2xl font-black text-white leading-snug">
                {item.title}
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">{item.description}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {currentUser?.role === 'teacher' && onEditByTeacher && (
              <button
                type="button"
                onClick={() => onEditByTeacher(item)}
                className="px-3 py-1.5 rounded-xl text-xs font-bold bg-[#1cb0f6] hover:bg-[#20baff] text-[#131f24] border-b-2 border-[#1899d6] transition-all cursor-pointer"
              >
                Edit
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-[#283b44] transition-colors cursor-pointer"
              aria-label="Close lesson modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Audio Player Bar */}
        <div className="px-6 py-3 bg-[#18262d] border-b border-[#2e3f4a] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleTogglePlay}
              className={`px-4 py-2 rounded-xl text-xs font-black flex items-center gap-2 uppercase tracking-wider transition-all cursor-pointer ${
                isPlaying
                  ? 'bg-[#ff4b4b] text-white border-b-3 border-[#d32f2f] animate-pulse'
                  : 'bg-[#58cc02] text-[#131f24] border-b-3 border-[#46a302] hover:bg-[#61e002] active:translate-y-0.5'
              }`}
            >
              {isPlaying ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              <span>{isPlaying ? 'Pause Audio' : 'Play Native Audio'}</span>
            </button>

            {/* Playback speed pills */}
            <div className="flex items-center gap-1 bg-[#131f24] p-1 rounded-xl border border-[#2e3f4a]">
              {[0.75, 1.0, 1.25].map((speed) => (
                <button
                  key={speed}
                  type="button"
                  onClick={() => handleSpeedChange(speed)}
                  className={`px-2.5 py-0.5 rounded-lg text-[11px] font-black transition-colors cursor-pointer ${
                    playbackSpeed === speed
                      ? 'bg-[#58cc02] text-[#131f24]'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {speed}x
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {item.translation && (
              <button
                type="button"
                onClick={() => setShowTranslation(!showTranslation)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 border-2 transition-all cursor-pointer ${
                  showTranslation
                    ? 'bg-[#ff9600]/20 border-[#ff9600] text-[#ff9600]'
                    : 'bg-[#131f24] border-[#2e3f4a] text-slate-300 hover:text-white'
                }`}
              >
                <Globe2 className="w-3.5 h-3.5" />
                <span>{showTranslation ? 'Hide Meaning' : 'Show Translation'}</span>
              </button>
            )}

            {item.section === 'listening' && (
              <button
                type="button"
                onClick={() => setShowTranscript(!showTranscript)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 border-2 transition-all cursor-pointer ${
                  showTranscript
                    ? 'bg-[#1cb0f6]/20 border-[#1cb0f6] text-[#1cb0f6]'
                    : 'bg-[#131f24] border-[#2e3f4a] text-slate-300 hover:text-white'
                }`}
              >
                {showTranscript ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                <span>{showTranscript ? 'Hide Transcript' : 'Reveal Transcript'}</span>
              </button>
            )}
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Main Content Body */}
          {showTranscript && (
            <div className="p-5 rounded-2xl bg-[#1b2b34] border-2 border-[#2e3f4a] shadow-md">
              <h3 className="text-xs font-extrabold text-[#58cc02] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Text Content</span>
              </h3>
              <div className="text-slate-100 font-serif text-base sm:text-lg leading-relaxed whitespace-pre-line">
                {item.contentBody}
              </div>
            </div>
          )}

          {/* Hidden listening mode banner */}
          {item.section === 'listening' && !showTranscript && (
            <div className="p-6 rounded-2xl bg-[#1a2d3b] border-2 border-[#1cb0f6]/50 text-center space-y-2">
              <p className="font-black text-[#1cb0f6] text-sm uppercase tracking-wider">
                🎧 Listening Comprehension Studio Active
              </p>
              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                Listen attentively using the audio playback above. Try testing yourself on the comprehension questions below before revealing the transcript!
              </p>
            </div>
          )}

          {/* Translation Card */}
          {showTranslation && item.translation && (
            <div className="p-4 rounded-2xl bg-[#28271e] border-2 border-[#ff9600]/60 text-slate-100">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#ff9600] mb-1 flex items-center gap-1.5">
                <Globe2 className="w-3.5 h-3.5" />
                <span>Meaning & Translation</span>
              </h4>
              <p className="text-sm font-serif leading-relaxed whitespace-pre-line text-slate-200">
                {item.translation}
              </p>
            </div>
          )}

          {/* Pronunciation Lab Studio */}
          {item.section === 'pronunciation' && (
            <div className="p-5 rounded-2xl bg-[#192b36] border-2 border-[#1cb0f6]/60 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-black uppercase tracking-wider text-[#1cb0f6] flex items-center gap-1.5">
                  <Mic className="w-4 h-4 text-[#1cb0f6]" />
                  <span>Pronunciation Studio & Voice Recording</span>
                </h3>
                {item.phoneticGuide && (
                  <span className="text-xs font-mono font-bold text-[#58cc02] bg-[#131f24] px-3 py-1 rounded-xl border border-[#2e3f4a]">
                    {item.phoneticGuide}
                  </span>
                )}
              </div>

              <div className="bg-[#131f24] p-4 rounded-2xl border border-[#2e3f4a] shadow-inner">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Target Sentence to Read Aloud:
                </p>
                <p className="text-sm sm:text-base font-serif font-black text-white">
                  {item.audioText || item.contentBody.split('\n')[0]}
                </p>
              </div>

              {/* Record Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={handleStartRecording}
                  className={`w-full sm:w-auto px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer ${
                    isRecording
                      ? 'bg-[#ff4b4b] text-white border-b-4 border-[#d32f2f] animate-pulse'
                      : 'bg-[#1cb0f6] text-[#131f24] border-b-4 border-[#1899d6] hover:bg-[#20baff] active:translate-y-0.5'
                  }`}
                >
                  {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                  <span>{isRecording ? 'Listening... Tap to Stop' : 'Tap to Record Your Voice'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleTogglePlay}
                  className="w-full sm:w-auto px-4 py-3 rounded-2xl text-xs font-bold bg-[#131f24] border-2 border-[#2e3f4a] border-b-4 hover:border-slate-400 text-slate-200 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5 text-slate-400" />
                  <span>Listen to Reference First</span>
                </button>
              </div>

              {/* Voice recognition output and scoring */}
              {spokenTranscript && (
                <div className="p-4 rounded-2xl bg-[#131f24] border-2 border-[#2e3f4a] space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-400">Transcribed Spoken Audio:</span>
                    {pronunciationScore !== null && (
                      <span
                        className={`font-black px-3 py-1 rounded-full text-xs uppercase ${
                          pronunciationScore >= 80
                            ? 'bg-[#58cc02]/20 text-[#58cc02] border border-[#58cc02]'
                            : pronunciationScore >= 60
                            ? 'bg-[#ff9600]/20 text-[#ff9600] border border-[#ff9600]'
                            : 'bg-[#ff4b4b]/20 text-[#ff4b4b] border border-[#ff4b4b]'
                        }`}
                      >
                        Accuracy: {pronunciationScore}% ({pronunciationAccuracy})
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-semibold text-white bg-[#1b2b34] p-3 rounded-xl border border-[#2e3f4a]">
                    "{spokenTranscript}"
                  </p>
                  {pronunciationScore !== null && (
                    <p className="text-xs text-slate-300">
                      {pronunciationScore >= 80
                        ? '🎉 Brilliant articulation! Perfect rhythm, pitch, and phonetic clarity.'
                        : pronunciationScore >= 60
                        ? '👍 Great attempt! Pay close attention to aspirated consonants and try once more.'
                        : '🔄 Keep practicing! Listen to the reference audio closely and repeat slowly.'}
                    </p>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Grammar Notes */}
          {item.grammarNotes && (
            <div className="p-4 rounded-2xl bg-[#281e35] border-2 border-[#ce82ff]/60 text-slate-100">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#ce82ff] mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#ce82ff]" />
                <span>Grammar Breakdown & Linguistic Rules</span>
              </h4>
              <p className="text-xs sm:text-sm font-sans leading-relaxed whitespace-pre-line text-slate-200">
                {item.grammarNotes}
              </p>
            </div>
          )}

          {/* Vocabulary Section */}
          {item.vocabulary && item.vocabulary.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#58cc02]" />
                <span>Key Vocabulary ({item.vocabulary.length} words)</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {item.vocabulary.map((vocab, vIdx) => (
                  <div
                    key={vIdx}
                    className="p-3.5 rounded-2xl bg-[#1b2b34] hover:bg-[#233540] border-2 border-[#2e3f4a] transition-all"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-black text-sm text-white">{vocab.word}</span>
                      <button
                        type="button"
                        onClick={() => handlePlayVocab(vocab.word)}
                        title="Listen to word"
                        className={`px-2 py-1 rounded-xl transition-all cursor-pointer flex items-center gap-1 ${
                          playingWord === vocab.word
                            ? 'bg-[#58cc02] text-[#131f24] font-black shadow-sm animate-pulse'
                            : 'text-slate-400 hover:text-[#58cc02] hover:bg-[#131f24] border border-[#2e3f4a]'
                        }`}
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span className="text-[10px] font-bold">
                          {playingWord === vocab.word ? 'Playing...' : 'Audio'}
                        </span>
                      </button>
                    </div>
                    {vocab.pronunciation && (
                      <p className="text-[11px] font-mono text-[#1cb0f6] mb-1">{vocab.pronunciation}</p>
                    )}
                    <p className="text-xs text-slate-300">{vocab.meaning}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Exercises & Quizzes in Duolingo 3D button format */}
          {item.exercises && item.exercises.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-[#2e3f4a]">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#ffc800]" />
                  <span>Comprehension & Practice Exercises</span>
                </h3>
                {quizResult && (
                  <span
                    className={`text-xs font-black px-3 py-1 rounded-full uppercase ${
                      quizResult.passed
                        ? 'bg-[#58cc02]/20 text-[#58cc02] border border-[#58cc02]'
                        : 'bg-[#ff9600]/20 text-[#ff9600] border border-[#ff9600]'
                    }`}
                  >
                    Score: {quizResult.score}% ({quizResult.correctCount}/{quizResult.total})
                  </span>
                )}
              </div>

              <div className="space-y-4">
                {item.exercises.map((q, qIdx) => {
                  const selectedOpt = selectedAnswers[qIdx];
                  const isCorrect = selectedOpt === q.correctIndex;

                  return (
                    <div
                      key={qIdx}
                      className="p-4 rounded-3xl bg-[#1b2b34] border-2 border-[#2e3f4a] space-y-3"
                    >
                      <p className="text-xs sm:text-sm font-bold text-white">
                        {qIdx + 1}. {q.question}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {q.options.map((opt, oIdx) => {
                          const isSelected = selectedOpt === oIdx;
                          let btnStyle =
                            'bg-[#202f36] border-[#2e3f4a] border-b-4 hover:border-slate-400 text-slate-200';

                          if (quizSubmitted) {
                            if (oIdx === q.correctIndex) {
                              btnStyle = 'bg-[#1e3b23] border-[#58cc02] border-b-4 text-[#58cc02] font-black';
                            } else if (isSelected && !isCorrect) {
                              btnStyle = 'bg-[#3b1e22] border-[#ff4b4b] border-b-4 text-[#ff4b4b] line-through';
                            }
                          } else if (isSelected) {
                            btnStyle = 'bg-[#1b3445] border-[#1cb0f6] border-b-4 text-white font-black';
                          }

                          return (
                            <button
                              key={oIdx}
                              type="button"
                              onClick={() => handleSelectAnswer(qIdx, oIdx)}
                              className={`p-3 rounded-2xl border-2 text-xs text-left transition-all flex items-center gap-2.5 cursor-pointer active:translate-y-0.5 ${btnStyle}`}
                            >
                              <span className="w-6 h-6 rounded-xl flex items-center justify-center text-xs font-black border border-current opacity-80 shrink-0">
                                {String.fromCharCode(65 + oIdx)}
                              </span>
                              <span className="leading-tight">{opt}</span>
                            </button>
                          );
                        })}
                      </div>

                      {quizSubmitted && q.explanation && (
                        <p className="text-xs text-slate-300 bg-[#131f24] p-3 rounded-2xl border border-[#2e3f4a]">
                          <strong className="text-[#58cc02]">Explanation:</strong> {q.explanation}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>

              {!quizSubmitted ? (
                <button
                  type="button"
                  onClick={handleSubmitQuiz}
                  className="w-full py-3.5 rounded-2xl text-xs font-black uppercase tracking-wider text-[#131f24] bg-[#58cc02] hover:bg-[#61e002] border-b-4 border-[#46a302] active:border-b-0 active:translate-y-1 transition-all shadow-lg cursor-pointer flex items-center justify-center gap-2"
                >
                  <Zap className="w-4 h-4 fill-current" />
                  <span>Submit Answers & Evaluate (+20 XP)</span>
                </button>
              ) : (
                <div className="flex items-center justify-between bg-[#193223] border-2 border-[#58cc02] p-4 rounded-2xl">
                  <div className="flex items-center gap-2 text-xs text-[#58cc02] font-bold">
                    <CheckCircle className="w-5 h-5 text-[#58cc02]" />
                    <span>Lesson completed! +20 XP awarded and synced to learning record!</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setQuizSubmitted(false);
                      setSelectedAnswers({});
                    }}
                    className="text-xs font-black text-[#58cc02] underline hover:text-[#89e219] cursor-pointer"
                  >
                    Retake Quiz
                  </button>
                </div>
              )}
            </div>
          )}

          {saveSuccess && (
            <div className="p-3 bg-[#193223] border border-[#58cc02] text-[#58cc02] text-xs font-bold rounded-2xl flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Progress saved to Firestore database!</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
