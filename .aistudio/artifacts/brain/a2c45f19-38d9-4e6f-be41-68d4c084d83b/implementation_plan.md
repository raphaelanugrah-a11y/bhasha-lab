# Chalkboard Neon-Glow Animated Stickman Mascot

Transform the language lab mascot from Mithu the Parrot into a clean, playful, and animated **Chalkboard Neon-Glow Stickman ("Chalky" / चाक-मित्र)**. The character features hand-drawn chalk strokes, vivid neon radiance (emerald, cyan, gold, and purple), and fluid SVG keyframe animations tailored to each student activity.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> The following design decisions were confirmed in Phase 1:
> - **Visual Style**: Chalkboard style animated stickman with neon chalk glow strokes against dark slate/board textures.
> - **Animation Scope**: Full multi-state animated repertoire: waving greeting, listening with glowing headphones, mic singing/pronouncing, thinking with lightbulb/question mark, celebrating with neon victory stars, and idle rhythmic breathing.

- **Confirmed Mascot Identity**: "Chalky" (The Chalkboard Stick Buddy) — minimalist, expressive, and immediately relatable for students of all age groups (Classes 1 to 12).
- **Target Surfaces**: Welcome/Registration screen, top student guide banner, lesson activity modal (mic drills & listening), empty states, and XP achievement modal.

---

## 1. Overview & Core Concept

- **What It Delivers**: Replaces the detailed parrot illustration with an ultra-clean, charming, hand-crafted chalkboard stick figure. Uses crisp vector line art with SVG glow filters and CSS keyframe rigging, giving it organic personality without visual clutter.
- **Target Audience**: Students across Classes 1–12, providing an encouraging, clutter-free guide that feels like a friendly classroom blackboard coming to life.
- **Key Value**: Low visual fatigue, high contrast, delightful kinetic motion, and instant clarity on whether the student is expected to read, speak, listen, or celebrate.

---

## 2. User Experience & Visual Design

### A. Stickman Character States & Animations

| State | Visual Props & Pose | Keyframe Animation | Accent Glow |
| :--- | :--- | :--- | :--- |
| **Waving / Greeting** | Right arm bent upwards with hand waving side-to-side; left arm rested on hip; friendly smiling face. | 1.8s cyclical hand waving & subtle head tilt. | Emerald Green (`#58cc02`) |
| **Listening** | Wearing glowing over-ear studio headphones; eyes closed in musical bliss; gentle side-to-side head bobbing. | 1.2s rhythmic headphone pulse & head sway. | Neon Cyan (`#00f0ff`) |
| **Speaking / Mic** | Holding an animated chalkboard microphone; mouth open in vocalization; radiating sound arc waves. | Radiating sound ripples expanding outwards. | Golden Amber (`#ffc800`) |
| **Thinking** | Hand tapping chin; eyes looking up thoughtfully; floating glowing chalk lightbulb or question mark. | Gentle float & soft filament pulse. | Violet Magic (`#ce82ff`) |
| **Celebrating** | Dual arms raised in high-V victory jump; eyes curved in joy; sparkling chalk stars & confetti. | Victory hop bounce with spinning neon stars. | Multi-neon burst |
| **Idle / Happy** | Relaxed standing pose, warm smile, gentle breathing rise and fall. | 2.4s calm breathing vertical offset. | Clean Chalk White (`#e2e8f0`) |

### B. Aesthetic Direction & Chalkboard Shader Tokens

- **Chalkboard Slate Canvas**: Background cards maintain `#202f36` and `#131f24` dark slate board textures.
- **Neon Chalk Strokes**:
  - Main Body: `stroke="#ffffff"` with `stroke-width="3.5"` to `4.5` and `stroke-linecap="round"`.
  - Neon Filter: SVG `<filter id="chalk-glow">` with `<feGaussianBlur stdDeviation="2.5" />` and `<feMerge>` for authentic neon blackboard chalk radiance.
  - Chalk Texture: Subtle roughness using SVG `<feTurbulence>` or crisp chalk dash patterns.
- **Typography & Speech Bubbles**:
  - Dialogues attributed to "Chalky says:" (or language equivalents: "चाक-मित्र कहता है:" / "शुक-मित्रः कथयति:").
  - Short, punchy 1-sentence encouraging prompts matching each section.

---

## 3. Key Product Decisions & Trade-Offs

- **Vector SVG vs Raster Lottie/GIF**:
  - *Chosen Approach*: Pure inline React SVG with CSS keyframe animation classes.
  - *Why*: Zero external HTTP requests, zero loading latency, flawless scaling from small avatar (36px) to hero display (140px), and instant theme reactivity without bundle bloat.
  - *Alternatives Considered*: Lottie animations (requires external player library and JSON asset management) and canvas sprite sheets (harder to style dynamically with neon filters).
- **Universal Mascot Component Interface**:
  - Preserve the existing `<Mascot mood={...} size={...} animate={...} speechText={...} />` component interface so that all parent components (`App.tsx`, `WelcomeAuthScreen.tsx`, `LessonDetailModal.tsx`, `AnalyticsModal.tsx`) update seamlessly without breaking existing props.

---

## 4. Technical Architecture & Component Structure

```
┌────────────────────────────────────────────────────────────────────────┐
│                        BhashaLab Application Shell                     │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
         ┌──────────────────────────┼───────────────────────────┐
         ▼                          ▼                           ▼
┌──────────────────┐      ┌──────────────────┐       ┌──────────────────┐
│ WelcomeAuthScreen│      │     App.tsx      │       │LessonDetailModal │
│  (Hero Mascot)   │      │ (Banner & Empty) │       │(Speaking/Listen) │
└────────┬─────────┘      └─────────┬────────┘       └─────────┬────────┘
         │                          │                          │
         └──────────────────────────┼──────────────────────────┘
                                    ▼
                 ┌──────────────────────────────────────┐
                 │       src/components/Mascot.tsx      │
                 │   - SVG Skeleton Rig & Joints        │
                 │   - Neon Glow Filter Definitions     │
                 │   - Keyframe Motion Controllers:     │
                 │     • anim-wave (hand wave)          │
                 │     • anim-headbob (headphones sync) │
                 │     • anim-radiate (mic soundwaves)  │
                 │     • anim-hop (victory celebration) │
                 │     • anim-pulse (lightbulb thought) │
                 └──────────────────────────────────────┘
```

### Files Targeted for Update:
1. `src/components/Mascot.tsx`: Complete redesign to Chalkboard Neon Stickman with dedicated SVGs and animations for each mood.
2. `src/App.tsx`: Synchronize mascot badge from "Mithu the Parrot" to "Chalky" and update speech bubble references.
3. `src/components/WelcomeAuthScreen.tsx`: Update mascot dialog and subtitle from Mithu to Chalky.
4. `src/components/AnalyticsModal.tsx`: Update celebration dialogue to reflect Chalky's encouragement.
