/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './firebase/authContext';
import { Navbar } from './components/Navbar';
import { SectionTabs } from './components/SectionTabs';
import { LessonDetailModal } from './components/LessonDetailModal';
import { TeacherCMSModal } from './components/TeacherCMSModal';
import { AuthModal } from './components/AuthModal';
import { AnalyticsModal } from './components/AnalyticsModal';
import { WelcomeAuthScreen } from './components/WelcomeAuthScreen';
import { Mascot } from './components/Mascot';
import { LabContentItem, Language, LabSection, DifficultyLevel } from './types';
import { getLabContentList } from './firebase/contentService';
import { GRADE_STAGES, getKidMascotGreeting } from './utils/kidFriendly';
import {
  BookOpen,
  Volume2,
  Sparkles,
  PlusCircle,
  BarChart3,
  Search,
  ArrowRight,
  ShieldCheck,
  GraduationCap,
  ChevronDown,
  ChevronUp,
  LogOut,
  Play,
  Star,
  CheckCircle2,
  SlidersHorizontal,
} from 'lucide-react';

import { SEED_CURRICULUM } from './data/seedCurriculum';

function LanguageLabContent() {
  const { currentUser, signOut } = useAuth();

  const [selectedLanguage, setSelectedLanguage] = useState<Language>('english');
  const [selectedSection, setSelectedSection] = useState<LabSection>('reading');
  const [selectedClass, setSelectedClass] = useState<number>(6); // Default to Class 6
  const [selectedStageId, setSelectedStageId] = useState<'all' | 'primary' | 'middle' | 'secondary' | 'senior'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<'all' | DifficultyLevel>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [showCurriculumGuide, setShowCurriculumGuide] = useState<boolean>(false);

  const [contentItems, setContentItems] = useState<LabContentItem[]>(SEED_CURRICULUM);
  const [loading, setLoading] = useState<boolean>(false);

  // Modals
  const [activeLesson, setActiveLesson] = useState<LabContentItem | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [isCMSModalOpen, setIsCMSModalOpen] = useState<boolean>(false);
  const [isAnalyticsModalOpen, setIsAnalyticsModalOpen] = useState<boolean>(false);
  const [editTargetItem, setEditTargetItem] = useState<LabContentItem | null>(null);

  // Load content
  const loadContent = async () => {
    try {
      setLoading(true);
      const items = await getLabContentList(currentUser?.role || 'student', currentUser?.uid);
      setContentItems(items);
    } catch (err) {
      console.error('Failed to load lab content:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadContent();
  }, [currentUser?.role, currentUser?.uid]);

  // Sync student assigned class if set
  useEffect(() => {
    if (currentUser?.role === 'student' && currentUser.assignedClass) {
      setSelectedClass(currentUser.assignedClass);
    }
  }, [currentUser]);

  const handleSelectLanguage = (lang: Language) => {
    setSelectedLanguage(lang);
    setSearchQuery('');
  };

  const handleSelectSection = (sec: LabSection) => {
    setSelectedSection(sec);
    setSearchQuery('');
  };

  // If user is not logged in, show the Welcome / Login entry page
  if (!currentUser) {
    return <WelcomeAuthScreen onEnterApp={() => {}} />;
  }

  // Grade tier helper for seamless curriculum depth
  const getGradeTier = (grade: number): { name: string; min: number; max: number } => {
    if (grade <= 5) return { name: 'Primary (1–5)', min: 1, max: 5 };
    if (grade <= 8) return { name: 'Middle (6–8)', min: 6, max: 8 };
    if (grade <= 10) return { name: 'Secondary (9–10)', min: 9, max: 10 };
    return { name: 'Senior Sec (11–12)', min: 11, max: 12 };
  };

  const tier = selectedClass > 0 ? getGradeTier(selectedClass) : null;

  // Calculate item counts for current language & sections (with tier guarantee so no category shows 0)
  const sectionCounts: Record<LabSection, number> = {
    reading: 0,
    pronunciation: 0,
    listening: 0,
    grammar: 0,
  };

  (['reading', 'pronunciation', 'listening', 'grammar'] as LabSection[]).forEach((sec) => {
    let count = contentItems.filter((item) => {
      if (item.language !== selectedLanguage) return false;
      if (item.section !== sec) return false;
      if (selectedDifficulty !== 'all' && item.difficulty !== selectedDifficulty) return false;

      if (selectedClass !== 0) {
        return item.classGrade === selectedClass;
      }
      if (selectedStageId !== 'all') {
        const stage = GRADE_STAGES.find((s) => s.id === selectedStageId);
        if (stage && !stage.classes.includes(item.classGrade)) return false;
      }
      return true;
    }).length;

    // Gracefully include tier count if exact grade has fewer than 2 items
    if (selectedClass !== 0 && count < 2 && tier) {
      count = contentItems.filter((item) => {
        if (item.language !== selectedLanguage) return false;
        if (item.section !== sec) return false;
        if (item.classGrade < tier.min || item.classGrade > tier.max) return false;
        if (selectedDifficulty !== 'all' && item.difficulty !== selectedDifficulty) return false;
        return true;
      }).length;
    }

    // Absolute guarantee: if still 0, count all available lessons in this section for the language
    if (count === 0) {
      count = contentItems.filter((item) => item.language === selectedLanguage && item.section === sec).length;
    }

    sectionCounts[sec] = count;
  });

  // Filtered items to display
  let effectiveItems = contentItems.filter((item) => {
    if (item.language !== selectedLanguage) return false;
    if (item.section !== selectedSection) return false;
    if (selectedDifficulty !== 'all' && item.difficulty !== selectedDifficulty) return false;

    if (selectedClass !== 0) {
      return item.classGrade === selectedClass;
    }
    if (selectedStageId !== 'all') {
      const stage = GRADE_STAGES.find((s) => s.id === selectedStageId);
      if (stage && !stage.classes.includes(item.classGrade)) return false;
    }
    return true;
  });

  // If exact class filter returns 0 items, expand to tier stage so student always gets lessons
  if (effectiveItems.length === 0 && selectedClass !== 0 && tier) {
    effectiveItems = contentItems.filter((item) => {
      if (item.language !== selectedLanguage) return false;
      if (item.section !== selectedSection) return false;
      if (item.classGrade < tier.min || item.classGrade > tier.max) return false;
      if (selectedDifficulty !== 'all' && item.difficulty !== selectedDifficulty) return false;
      return true;
    });
  }

  // Absolute fallback: if still 0, show all available lessons in this section
  if (effectiveItems.length === 0) {
    effectiveItems = contentItems.filter(
      (item) => item.language === selectedLanguage && item.section === selectedSection
    );
  }

  const displayedItems = effectiveItems.filter((item) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const matchTitle = item.title.toLowerCase().includes(q);
    const matchDesc = item.description?.toLowerCase().includes(q);
    const matchBody = item.contentBody.toLowerCase().includes(q);
    return matchTitle || matchDesc || matchBody;
  });

  const kidGreeting = getKidMascotGreeting(selectedLanguage, selectedSection, currentUser.displayName);

  return (
    <div className="min-h-screen bg-[#131f24] text-white font-sans selection:bg-[#58cc02] selection:text-[#131f24] pb-12">
      {/* Top Navbar */}
      <Navbar
        selectedLanguage={selectedLanguage}
        onSelectLanguage={handleSelectLanguage}
        selectedClass={selectedClass}
        onSelectClass={(cls) => {
          setSelectedClass(cls);
          if (cls > 0) {
            const stg = GRADE_STAGES.find((s) => s.classes.includes(cls));
            if (stg) setSelectedStageId(stg.id);
          } else {
            setSelectedStageId('all');
          }
          setSearchQuery('');
        }}
        onOpenTeacherCMS={() => setIsCMSModalOpen(true)}
        onOpenAuth={() => setIsAuthModalOpen(true)}
        onOpenAnalytics={() => setIsAnalyticsModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-5 space-y-6">
        {/* Simple & Cheerful Mascot Greeting Card */}
        <section className="relative overflow-hidden rounded-3xl bg-[#202f36] border-2 border-[#2e3f4a] p-4 sm:p-5 shadow-lg">
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Chalky Animated Stickman Mascot */}
            <div className="shrink-0">
              <Mascot mood="waving" size="md" animate={true} />
            </div>

            {/* Speech bubble & Quick Kid Status */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-[#58cc02] text-[#131f24] uppercase tracking-wider">
                  Chalky Says
                </span>
                <span className="text-xs text-slate-400 font-bold hidden sm:inline">
                  • {selectedLanguage.toUpperCase()} LAB
                </span>
                {currentUser.role === 'student' ? (
                  <span className="text-xs text-slate-300 font-bold bg-[#131f24] px-2 py-0.5 rounded-lg border border-[#2e3f4a]">
                    Class {selectedClass || 6}
                  </span>
                ) : (
                  <span className="text-xs text-[#ce82ff] font-bold bg-[#131f24] px-2 py-0.5 rounded-lg border border-[#2e3f4a]">
                    Teacher Mode
                  </span>
                )}
              </div>

              {/* Big, Simple, Friendly Dialogue */}
              <p className="text-base sm:text-xl font-black text-white leading-snug">
                "{kidGreeting}"
              </p>

              {/* Action shortcuts */}
              <div className="flex flex-wrap items-center gap-2 mt-3">
                <button
                  type="button"
                  onClick={() => setIsAnalyticsModalOpen(true)}
                  className="px-3 py-1 rounded-xl bg-[#ffc800] hover:bg-[#ffd226] text-[#131f24] font-black text-xs border-b-2 border-[#d4a000] active:translate-y-0.5 transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Star className="w-3.5 h-3.5 fill-[#131f24]" />
                  <span>My Scores & XP ({currentUser?.totalXp || 0})</span>
                </button>

                {currentUser.role === 'teacher' && (
                  <button
                    type="button"
                    onClick={() => setIsCMSModalOpen(true)}
                    className="px-3 py-1 rounded-xl bg-[#1cb0f6] hover:bg-[#2dc0ff] text-[#131f24] font-black text-xs border-b-2 border-[#1899d6] active:translate-y-0.5 transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <PlusCircle className="w-3.5 h-3.5" />
                    <span>Create New Lesson</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => signOut()}
                  className="px-2.5 py-1 rounded-xl bg-[#131f24] hover:bg-[#283b44] text-slate-400 hover:text-white font-bold text-xs border border-[#2e3f4a] transition-all flex items-center gap-1 cursor-pointer ml-auto"
                  title="Switch user account"
                >
                  <LogOut className="w-3 h-3" />
                  <span className="text-[11px]">Switch Account</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Big, Friendly Learning Sections */}
        <SectionTabs
          currentLanguage={selectedLanguage}
          currentSection={selectedSection}
          onSelectSection={handleSelectSection}
          itemCounts={sectionCounts}
        />

        {/* Simplified Grade Selector (Clean & Friendly) */}
        <div className="bg-[#202f36] border-2 border-[#2e3f4a] rounded-3xl p-3 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
          {/* Simple Stage Tabs for Kids */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            <span className="text-xs font-black text-slate-400 mr-1 flex items-center gap-1 shrink-0">
              <GraduationCap className="w-4 h-4 text-[#58cc02]" />
              <span>Grade:</span>
            </span>

            {GRADE_STAGES.map((stage) => {
              const isStageActive =
                (selectedStageId === stage.id && selectedClass === 0) ||
                (selectedClass > 0 && stage.classes.includes(selectedClass));

              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => {
                    setSelectedStageId(stage.id);
                    setSelectedClass(0);
                    setSearchQuery('');
                  }}
                  className={`px-3 py-1.5 rounded-2xl text-xs font-black transition-all shrink-0 cursor-pointer flex items-center gap-1 active:scale-95 ${
                    isStageActive
                      ? 'bg-[#58cc02] text-[#131f24] border-b-2 border-[#46a302] shadow-sm'
                      : 'bg-[#131f24] text-slate-300 hover:text-white border border-[#2e3f4a]'
                  }`}
                >
                  <span>{stage.emoji}</span>
                  <span>{stage.name}</span>
                </button>
              );
            })}

            <button
              type="button"
              onClick={() => {
                setSelectedStageId('all');
                setSelectedClass(0);
                setSearchQuery('');
              }}
              className={`px-3 py-1.5 rounded-2xl text-xs font-black transition-all shrink-0 cursor-pointer active:scale-95 ${
                selectedStageId === 'all' && selectedClass === 0
                  ? 'bg-[#1cb0f6] text-[#131f24] border-b-2 border-[#1899d6] shadow-sm'
                  : 'bg-[#131f24] text-slate-400 hover:text-white border border-[#2e3f4a]'
              }`}
            >
              All Grades
            </button>
          </div>

          {/* Specific class dropdown + optional search button */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <div className="flex items-center gap-1.5 bg-[#131f24] px-3 py-1.5 rounded-2xl border border-[#2e3f4a]">
              <label htmlFor="exact-grade-select" className="text-xs font-bold text-slate-400">
                Class:
              </label>
              <select
                id="exact-grade-select"
                value={selectedClass}
                onChange={(e) => {
                  const cls = Number(e.target.value);
                  setSelectedClass(cls);
                  if (cls > 0) {
                    const stg = GRADE_STAGES.find((s) => s.classes.includes(cls));
                    if (stg) setSelectedStageId(stg.id);
                  } else {
                    setSelectedStageId('all');
                  }
                  setSearchQuery('');
                }}
                aria-label="Specific Class Grade"
                className="text-xs font-black text-[#58cc02] bg-transparent focus:outline-hidden cursor-pointer"
              >
                <option value={0} className="bg-[#202f36] text-white">All (1–12)</option>
                {Array.from({ length: 12 }, (_, i) => i + 1).map((c) => (
                  <option key={c} value={c} className="bg-[#202f36] text-white">
                    Class {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Subtle Search Toggle */}
            <button
              type="button"
              onClick={() => setShowSearch(!showSearch)}
              className={`p-2 rounded-2xl border transition-all cursor-pointer ${
                showSearch
                  ? 'bg-[#58cc02] text-[#131f24] border-[#46a302]'
                  : 'bg-[#131f24] text-slate-400 hover:text-white border-[#2e3f4a]'
              }`}
              title="Search lessons"
              aria-label="Toggle search box"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Optional Search Bar (hidden by default to keep screen simple) */}
        {showSearch && (
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={`Search in ${selectedLanguage} ${selectedSection}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-xs font-bold bg-[#131f24] text-white border-2 border-[#58cc02] rounded-2xl focus:outline-hidden placeholder:text-slate-500 shadow-sm"
              autoFocus
            />
          </div>
        )}

        {/* Clean, Chunky Kid-Friendly Lesson Cards */}
        {loading && contentItems.length === 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-44 rounded-3xl bg-[#202f36] animate-pulse border-2 border-[#2e3f4a]" />
            ))}
          </div>
        ) : displayedItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayedItems.map((item) => {
              const sectionBadgeColors = {
                reading: { bg: 'bg-[#58cc02]/20', text: 'text-[#58cc02]', border: 'border-[#58cc02]/40', icon: '📖' },
                pronunciation: { bg: 'bg-[#1cb0f6]/20', text: 'text-[#1cb0f6]', border: 'border-[#1cb0f6]/40', icon: '🎙️' },
                listening: { bg: 'bg-[#ffc800]/20', text: 'text-[#ffc800]', border: 'border-[#ffc800]/40', icon: '🎧' },
                grammar: { bg: 'bg-[#ce82ff]/20', text: 'text-[#ce82ff]', border: 'border-[#ce82ff]/40', icon: '✨' },
              }[item.section] || { bg: 'bg-[#58cc02]/20', text: 'text-[#58cc02]', border: 'border-[#58cc02]/40', icon: '📖' };

              return (
                <div
                  key={item.id}
                  className="bg-[#202f36] rounded-3xl border-2 border-[#2e3f4a] hover:border-[#58cc02] shadow-md transition-all p-5 flex flex-col justify-between group cursor-pointer hover:-translate-y-0.5"
                  onClick={() => setActiveLesson(item)}
                >
                  <div className="space-y-3">
                    {/* Top Row: Class + Star XP */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="text-base">{sectionBadgeColors.icon}</span>
                        <span className="px-2.5 py-0.5 rounded-xl text-xs font-black bg-[#131f24] text-white border border-[#2e3f4a]">
                          Class {item.classGrade}
                        </span>
                      </div>

                      <div className="flex items-center gap-1 text-[#ffc800] text-xs font-black bg-[#131f24] px-2.5 py-1 rounded-xl border border-[#2e3f4a]">
                        <Star className="w-3.5 h-3.5 fill-[#ffc800]" />
                        <span>+20 XP</span>
                      </div>
                    </div>

                    {/* Lesson Title */}
                    <div>
                      <h4 className="font-black text-base text-white group-hover:text-[#58cc02] transition-colors leading-snug line-clamp-2">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-300 font-medium mt-1 line-clamp-2 leading-relaxed">
                        {item.description || item.contentBody}
                      </p>
                    </div>
                  </div>

                  {/* Big Chunky 3D Start Button */}
                  <div className="pt-4 mt-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveLesson(item);
                      }}
                      className="w-full py-2.5 px-4 rounded-2xl text-xs font-black text-[#131f24] bg-[#58cc02] hover:bg-[#61e002] border-b-4 border-[#46a302] active:border-b-0 active:translate-y-1 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm select-none"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Start Activity</span>
                      <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Friendly Empty State */
          <div className="p-8 text-center bg-[#202f36] rounded-3xl border-2 border-dashed border-[#2e3f4a] space-y-3">
            <Mascot mood="thinking" size="md" animate={true} />
            <div className="space-y-1">
              <h4 className="font-black text-base text-white">
                No lessons found for Class {selectedClass || 'All'} in this section yet!
              </h4>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Tap below to see all lessons in {selectedLanguage} {selectedSection}!
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setSelectedClass(0);
                setSelectedDifficulty('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-2xl text-xs font-black bg-[#58cc02] text-[#131f24] border-b-3 border-[#46a302] cursor-pointer"
            >
              Show All Lessons
            </button>
          </div>
        )}

        {/* Expandable Curriculum Guide for Teachers & Parents (Kept clean & tucked away for kids) */}
        <section className="bg-[#202f36] rounded-3xl border-2 border-[#2e3f4a] overflow-hidden shadow-xs">
          <button
            type="button"
            onClick={() => setShowCurriculumGuide(!showCurriculumGuide)}
            className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-[#283b44] transition-colors cursor-pointer"
            aria-expanded={showCurriculumGuide}
          >
            <div className="flex items-center gap-2.5">
              <GraduationCap className="w-5 h-5 text-[#58cc02]" />
              <div>
                <h3 className="text-sm font-black text-white">
                  📘 Curriculum Guide for Teachers & Parents
                </h3>
                <p className="text-xs text-slate-400">
                  Classes 1 to 12 progression across Primary, Middle, Secondary, and Senior levels.
                </p>
              </div>
            </div>
            <div className="text-slate-400 flex items-center gap-1 text-xs font-bold">
              <span>{showCurriculumGuide ? 'Hide' : 'View'}</span>
              {showCurriculumGuide ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </div>
          </button>

          {showCurriculumGuide && (
            <div className="p-4 sm:p-6 border-t border-[#2e3f4a] bg-[#1a272e] grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-3.5 rounded-2xl bg-[#131f24] border border-[#2e3f4a] space-y-1.5">
                <span className="text-[11px] font-black text-[#58cc02] uppercase tracking-wider">
                  Primary (Classes 1–5)
                </span>
                <p className="text-xs font-bold text-white">Phonetics, Letters & Early Stories</p>
                <ul className="text-xs text-slate-400 space-y-1 list-disc list-inside">
                  <li><strong className="text-slate-300">English:</strong> Alphabet phonics, silent letters, illustrated fables.</li>
                  <li><strong className="text-slate-300">Hindi:</strong> वर्णमाला, स्वर-व्यञ्जन, पंचतंत्र कथाएं।</li>
                  <li><strong className="text-slate-300">Sanskrit:</strong> देवनागरी अक्षराणि, विसर्ग-उच्चारणम्।</li>
                </ul>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#131f24] border border-[#2e3f4a] space-y-1.5">
                <span className="text-[11px] font-black text-[#ffc800] uppercase tracking-wider">
                  Middle (Classes 6–8)
                </span>
                <p className="text-xs font-bold text-white">Functional Grammar & Fluency</p>
                <ul className="text-xs text-slate-400 space-y-1 list-disc list-inside">
                  <li><strong className="text-slate-300">English:</strong> Dialogue listening, tenses, active voice.</li>
                  <li><strong className="text-slate-300">Hindi:</strong> कारक एवं परसर्ग, कबीर के दोहे।</li>
                  <li><strong className="text-slate-300">Sanskrit:</strong> शब्दरूपाणि, धातुरूपाणि, सुभाषितानि।</li>
                </ul>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#131f24] border border-[#2e3f4a] space-y-1.5">
                <span className="text-[11px] font-black text-[#1cb0f6] uppercase tracking-wider">
                  Secondary (Classes 9–10)
                </span>
                <p className="text-xs font-bold text-white">Analytical Reading & Composition</p>
                <ul className="text-xs text-slate-400 space-y-1 list-disc list-inside">
                  <li><strong className="text-slate-300">English:</strong> Active/Passive voice, clause analysis.</li>
                  <li><strong className="text-slate-300">Hindi:</strong> स्वर संधि के भेद, समास, पदबंध।</li>
                  <li><strong className="text-slate-300">Sanskrit:</strong> सन्धि-नियमाः, वैदिक शान्तिमन्त्रः।</li>
                </ul>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#131f24] border border-[#2e3f4a] space-y-1.5">
                <span className="text-[11px] font-black text-[#ce82ff] uppercase tracking-wider">
                  Senior (Classes 11–12)
                </span>
                <p className="text-xs font-bold text-white">Classical Literature & Rhetoric</p>
                <ul className="text-xs text-slate-400 space-y-1 list-disc list-inside">
                  <li><strong className="text-slate-300">English:</strong> Rhetoric (Ethos, Pathos, Logos), essays.</li>
                  <li><strong className="text-slate-300">Hindi:</strong> रस, छन्द, अलङ्कार, साहित्यिक विमर्श।</li>
                  <li><strong className="text-slate-300">Sanskrit:</strong> नीतिशतकम्, रघुवंशम्, उपनिषद्।</li>
                </ul>
              </div>
            </div>
          )}
        </section>
      </main>

      {/* Clean Footer */}
      <footer className="mt-12 border-t-2 border-[#2b3e48] bg-[#131f24] py-6 text-center text-xs text-slate-400">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-black text-white">BhashaLab</span>
            <span>• Multilingual Language Lab</span>
          </div>
          <p className="text-slate-500">
            English • Hindi (हिन्दी) • Sanskrit (संस्कृतम्) • Classes 1 to 12
          </p>
        </div>
      </footer>

      {/* Modals */}
      {activeLesson && (
        <LessonDetailModal
          item={activeLesson}
          isOpen={Boolean(activeLesson)}
          onClose={() => setActiveLesson(null)}
          onEditByTeacher={(itemToEdit) => {
            setActiveLesson(null);
            setEditTargetItem(itemToEdit);
            setIsCMSModalOpen(true);
          }}
        />
      )}

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        currentClass={selectedClass || 6}
      />

      <TeacherCMSModal
        isOpen={isCMSModalOpen}
        onClose={() => {
          setIsCMSModalOpen(false);
          setEditTargetItem(null);
        }}
        items={contentItems}
        onRefreshItems={loadContent}
        editItemTarget={editTargetItem}
        onClearEditTarget={() => setEditTargetItem(null)}
      />

      <AnalyticsModal
        isOpen={isAnalyticsModalOpen}
        onClose={() => setIsAnalyticsModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <LanguageLabContent />
    </AuthProvider>
  );
}
