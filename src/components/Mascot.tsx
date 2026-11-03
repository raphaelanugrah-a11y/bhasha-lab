import React from 'react';

export type MascotMood = 'happy' | 'waving' | 'listening' | 'celebrating' | 'thinking';

interface MascotProps {
  mood?: MascotMood;
  speechText?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  animate?: boolean;
}

export const Mascot: React.FC<MascotProps> = ({
  mood = 'happy',
  speechText,
  size = 'md',
  className = '',
  animate = true,
}) => {
  const sizeMap = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-36 h-36',
    xl: 'w-44 h-44',
  };

  const animContainerClass = !animate
    ? ''
    : mood === 'celebrating'
    ? 'anim-chalk-hop'
    : mood === 'listening'
    ? 'anim-chalk-bob'
    : 'anim-chalk-breathe';

  return (
    <div className={`relative flex items-center gap-3 ${className}`}>
      {/* Chalkboard Neon Stickman Avatar */}
      <div
        className={`relative shrink-0 ${sizeMap[size]} transition-transform duration-300 hover:scale-105 select-none ${animContainerClass}`}
      >
        <svg
          viewBox="0 0 160 160"
          className="w-full h-full drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Neon Glow Filters */}
          <defs>
            {/* White chalk glow */}
            <filter id="chalk-glow-white" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Neon Green Glow */}
            <filter id="chalk-glow-green" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#58cc02" floodOpacity="0.8" />
            </filter>

            {/* Neon Cyan Glow */}
            <filter id="chalk-glow-cyan" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="0" stdDeviation="3.5" floodColor="#00f0ff" floodOpacity="0.85" />
            </filter>

            {/* Neon Gold Glow */}
            <filter id="chalk-glow-gold" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="0" stdDeviation="3.5" floodColor="#ffc800" floodOpacity="0.85" />
            </filter>

            {/* Neon Purple Glow */}
            <filter id="chalk-glow-purple" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="0" stdDeviation="3.5" floodColor="#ce82ff" floodOpacity="0.85" />
            </filter>
          </defs>

          {/* Chalkboard Ground Shadow */}
          <ellipse cx="80" cy="148" rx="42" ry="7" fill="#0c161a" opacity="0.8" />

          {/* Chalk dust ground line */}
          <path
            d="M44 148 Q80 146 116 148"
            stroke="#2e3f4a"
            strokeWidth="2.5"
            strokeDasharray="4 6"
            strokeLinecap="round"
          />

          {/* ========================================================================= */}
          {/* STICKMAN LEGS & FEET                                                      */}
          {/* ========================================================================= */}
          {mood === 'celebrating' ? (
            /* Jumping legs */
            <g stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" filter="url(#chalk-glow-white)">
              {/* Left jumping leg bent */}
              <path d="M 80 102 L 62 122 L 50 134" />
              <path d="M 50 134 L 42 133" />
              {/* Right jumping leg bent */}
              <path d="M 80 102 L 98 122 L 110 134" />
              <path d="M 110 134 L 118 133" />
            </g>
          ) : (
            /* Standing legs */
            <g stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" filter="url(#chalk-glow-white)">
              {/* Left leg */}
              <path d="M 80 102 L 64 145" />
              <path d="M 64 145 L 54 145" />
              {/* Right leg */}
              <path d="M 80 102 L 96 145" />
              <path d="M 96 145 L 106 145" />
            </g>
          )}

          {/* ========================================================================= */}
          {/* STICKMAN TORSO                                                            */}
          {/* ========================================================================= */}
          <path
            d="M 80 60 L 80 102"
            stroke="#ffffff"
            strokeWidth="5"
            strokeLinecap="round"
            filter="url(#chalk-glow-white)"
          />

          {/* Little Chalk Bowtie / Scarf accent (Neon Green) */}
          <path
            d="M 74 61 L 86 65 M 74 65 L 86 61"
            stroke="#58cc02"
            strokeWidth="3"
            strokeLinecap="round"
            filter="url(#chalk-glow-green)"
          />
          <circle cx="80" cy="63" r="2.5" fill="#58cc02" />

          {/* ========================================================================= */}
          {/* STICKMAN ARMS & PROPS (MOOD-SPECIFIC)                                     */}
          {/* ========================================================================= */}

          {/* 1. WAVING MOOD */}
          {mood === 'waving' && (
            <g>
              {/* Left arm resting on hip */}
              <path
                d="M 80 68 L 62 82 L 72 94"
                stroke="#ffffff"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#chalk-glow-white)"
              />

              {/* Right arm waving in air (Animated) */}
              <g className="anim-chalk-wave">
                <path
                  d="M 80 68 L 102 54 L 118 34"
                  stroke="#ffffff"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#chalk-glow-white)"
                />
                {/* Hand palm & fingers */}
                <circle cx="118" cy="34" r="3.5" fill="#ffffff" filter="url(#chalk-glow-white)" />
                {/* Waving motion chalk streaks */}
                <path
                  d="M 126 26 Q 130 32 127 38"
                  stroke="#58cc02"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  filter="url(#chalk-glow-green)"
                />
                <path
                  d="M 132 28 Q 136 34 133 40"
                  stroke="#58cc02"
                  strokeWidth="2"
                  strokeLinecap="round"
                  filter="url(#chalk-glow-green)"
                />
              </g>
            </g>
          )}

          {/* 2. LISTENING MOOD (Cyan Headphones & DJ Arms) */}
          {mood === 'listening' && (
            <g>
              {/* Left arm holding left headphone earpiece */}
              <path
                d="M 80 68 L 56 62 L 62 44"
                stroke="#ffffff"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#chalk-glow-white)"
              />
              {/* Right arm gesturing to rhythm */}
              <path
                d="M 80 68 L 104 74 L 114 62"
                stroke="#ffffff"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#chalk-glow-white)"
              />

              {/* Floating Neon Cyan Musical Notes */}
              <g className="anim-chalk-wave-sound">
                <text x="120" y="40" fill="#00f0ff" fontSize="16" fontFamily="sans-serif" fontWeight="bold" filter="url(#chalk-glow-cyan)">
                  ♪
                </text>
                <text x="24" y="36" fill="#00f0ff" fontSize="14" fontFamily="sans-serif" fontWeight="bold" filter="url(#chalk-glow-cyan)">
                  ♫
                </text>
              </g>
            </g>
          )}

          {/* 3. CELEBRATING MOOD (Victory Double-V jump + Stars) */}
          {mood === 'celebrating' && (
            <g>
              {/* Left arm raised high */}
              <path
                d="M 80 68 L 56 48 L 44 28"
                stroke="#ffffff"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#chalk-glow-white)"
              />
              {/* Right arm raised high */}
              <path
                d="M 80 68 L 104 48 L 116 28"
                stroke="#ffffff"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#chalk-glow-white)"
              />

              {/* Victory Chalk Stars */}
              <g className="anim-chalk-star">
                {/* Star Top Left */}
                <path
                  d="M 30 18 L 32 23 L 37 23 L 33 26 L 34 31 L 30 28 L 26 31 L 27 26 L 23 23 L 28 23 Z"
                  fill="#ffc800"
                  filter="url(#chalk-glow-gold)"
                />
                {/* Star Top Right */}
                <path
                  d="M 130 18 L 132 23 L 137 23 L 133 26 L 134 31 L 130 28 L 126 31 L 127 26 L 123 23 L 128 23 Z"
                  fill="#58cc02"
                  filter="url(#chalk-glow-green)"
                />
              </g>

              {/* Confetti chalk dots */}
              <circle cx="24" cy="50" r="2.5" fill="#00f0ff" filter="url(#chalk-glow-cyan)" />
              <circle cx="136" cy="48" r="2.5" fill="#ce82ff" filter="url(#chalk-glow-purple)" />
              <circle cx="80" cy="14" r="3" fill="#ffc800" filter="url(#chalk-glow-gold)" />
            </g>
          )}

          {/* 4. THINKING MOOD (Chin tap + Lightbulb) */}
          {mood === 'thinking' && (
            <g>
              {/* Left arm relaxed on waist */}
              <path
                d="M 80 68 L 62 82 L 70 96"
                stroke="#ffffff"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#chalk-glow-white)"
              />
              {/* Right arm bent up touching chin */}
              <path
                d="M 80 68 L 100 80 L 88 54"
                stroke="#ffffff"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#chalk-glow-white)"
              />

              {/* Floating Glowing Chalk Lightbulb */}
              <g className="anim-chalk-bulb">
                {/* Bulb outline */}
                <path
                  d="M 108 18 C 104 18 100 22 100 26 C 100 29 102 31 103 33 L 103 36 L 113 36 L 113 33 C 114 31 116 29 116 26 C 116 22 112 18 108 18 Z"
                  stroke="#ce82ff"
                  strokeWidth="2.5"
                  fill="#ce82ff"
                  fillOpacity="0.25"
                  filter="url(#chalk-glow-purple)"
                />
                {/* Filament */}
                <path d="M 105 26 L 108 23 L 111 26" stroke="#ffc800" strokeWidth="2" strokeLinecap="round" />
                {/* Base */}
                <line x1="104" y1="38" x2="112" y2="38" stroke="#ce82ff" strokeWidth="2.5" />
                {/* Radiating chalk rays */}
                <line x1="108" y1="12" x2="108" y2="15" stroke="#ce82ff" strokeWidth="2" strokeLinecap="round" />
                <line x1="118" y1="16" x2="115" y2="19" stroke="#ce82ff" strokeWidth="2" strokeLinecap="round" />
                <line x1="98" y1="16" x2="101" y2="19" stroke="#ce82ff" strokeWidth="2" strokeLinecap="round" />
              </g>
            </g>
          )}

          {/* 5. HAPPY / DEFAULT MOOD (Mic Singing or Relaxed Welcome) */}
          {mood === 'happy' && (
            <g>
              {/* Left arm relaxed at side with friendly curve */}
              <path
                d="M 80 68 L 60 84 L 54 100"
                stroke="#ffffff"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#chalk-glow-white)"
              />

              {/* Right arm holding golden microphone */}
              <path
                d="M 80 68 L 102 78 L 110 66"
                stroke="#ffffff"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#chalk-glow-white)"
              />

              {/* Golden Chalk Microphone */}
              <g>
                <rect
                  x="108"
                  y="52"
                  width="7"
                  height="12"
                  rx="3.5"
                  fill="#ffc800"
                  stroke="#d4a000"
                  strokeWidth="1.5"
                  filter="url(#chalk-glow-gold)"
                />
                <line x1="111.5" y1="64" x2="111.5" y2="72" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
                <path d="M 107 72 L 116 72" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />

                {/* Radiating sound arcs */}
                <g className="anim-chalk-wave-sound">
                  <path
                    d="M 120 52 Q 124 58 120 64"
                    stroke="#58cc02"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                    filter="url(#chalk-glow-green)"
                  />
                  <path
                    d="M 126 48 Q 132 58 126 68"
                    stroke="#58cc02"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                    filter="url(#chalk-glow-green)"
                  />
                </g>
              </g>
            </g>
          )}

          {/* ========================================================================= */}
          {/* STICKMAN HEAD & FACE                                                      */}
          {/* ========================================================================= */}
          <g>
            {/* Head circle */}
            <circle
              cx="80"
              cy="40"
              r="18"
              stroke="#ffffff"
              strokeWidth="4.5"
              fill="#131f24"
              filter="url(#chalk-glow-white)"
            />

            {/* Neon Headphones (Only on 'listening' mood) */}
            {mood === 'listening' && (
              <g filter="url(#chalk-glow-cyan)">
                {/* Headphone band arc over head */}
                <path
                  d="M 60 40 A 20 20 0 0 1 100 40"
                  stroke="#00f0ff"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Left Ear Pad */}
                <rect x="57" y="32" width="7" height="16" rx="3.5" fill="#00f0ff" />
                {/* Right Ear Pad */}
                <rect x="96" y="32" width="7" height="16" rx="3.5" fill="#00f0ff" />
              </g>
            )}

            {/* Expressive Eyes by Mood */}
            {mood === 'listening' ? (
              /* Eyes closed enjoying the audio: curved peaceful arcs ( ◡ ◡ ) */
              <g stroke="#00f0ff" strokeWidth="2.5" strokeLinecap="round" fill="none" filter="url(#chalk-glow-cyan)">
                <path d="M 72 38 Q 75 42 78 38" />
                <path d="M 82 38 Q 85 42 88 38" />
              </g>
            ) : mood === 'waving' ? (
              /* Winking face: one open dot, one wink arch */
              <g fill="#ffffff">
                <circle cx="74" cy="38" r="2.5" />
                <path d="M 83 38 Q 86 35 89 38" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              </g>
            ) : mood === 'celebrating' ? (
              /* Joyful inverted arcs ( ^ ^ ) */
              <g stroke="#ffc800" strokeWidth="2.5" strokeLinecap="round" fill="none" filter="url(#chalk-glow-gold)">
                <path d="M 72 39 Q 75 35 78 39" />
                <path d="M 82 39 Q 85 35 88 39" />
              </g>
            ) : mood === 'thinking' ? (
              /* Eyes looking up curiously */
              <g fill="#ce82ff" filter="url(#chalk-glow-purple)">
                <circle cx="76" cy="35" r="2.5" />
                <circle cx="86" cy="35" r="2.5" />
              </g>
            ) : (
              /* Default happy smiling eyes (two bright chalk dots) */
              <g fill="#58cc02" filter="url(#chalk-glow-green)">
                <circle cx="74" cy="38" r="2.5" />
                <circle cx="86" cy="38" r="2.5" />
              </g>
            )}

            {/* Expressive Mouth by Mood */}
            {mood === 'celebrating' ? (
              /* Wide open happy chalk smile */
              <path
                d="M 74 46 Q 80 52 86 46 Z"
                fill="#ffc800"
                stroke="#ffc800"
                strokeWidth="1.5"
                strokeLinejoin="round"
                filter="url(#chalk-glow-gold)"
              />
            ) : mood === 'thinking' ? (
              /* Inquisitive wry smirk */
              <path
                d="M 76 47 Q 82 48 86 45"
                stroke="#ffffff"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
            ) : mood === 'happy' ? (
              /* Singing 'O' or big cheerful grin */
              <path
                d="M 74 46 Q 80 52 86 46"
                stroke="#58cc02"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                filter="url(#chalk-glow-green)"
              />
            ) : (
              /* Friendly cheerful smile */
              <path
                d="M 74 46 Q 80 51 86 46"
                stroke="#ffffff"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
            )}
          </g>
        </svg>
      </div>

      {/* Optional Speech Bubble if provided directly */}
      {speechText && (
        <div className="relative bg-[#202f36] border-2 border-[#2e3f4a] p-3 rounded-2xl shadow-md text-xs font-bold text-white max-w-xs">
          <p className="text-[11px] text-[#58cc02] font-black uppercase tracking-wider mb-0.5">
            Chalky says:
          </p>
          <p className="leading-snug text-slate-100">{speechText}</p>
        </div>
      )}
    </div>
  );
};
