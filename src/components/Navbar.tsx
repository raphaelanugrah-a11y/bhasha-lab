import React from 'react';
import { Language, UserRole } from '../types';
import { useAuth } from '../firebase/authContext';
import {
  BookOpen,
  GraduationCap,
  Sparkles,
  LogOut,
  PlusCircle,
  BarChart2,
  Flame,
  Diamond,
  Heart,
} from 'lucide-react';

interface NavbarProps {
  selectedLanguage: Language;
  onSelectLanguage: (lang: Language) => void;
  selectedClass: number; // 0 for all or 1-12
  onSelectClass: (cls: number) => void;
  onOpenTeacherCMS?: () => void;
  onOpenAuth: () => void;
  onOpenAnalytics?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  selectedLanguage,
  onSelectLanguage,
  selectedClass,
  onSelectClass,
  onOpenTeacherCMS,
  onOpenAuth,
  onOpenAnalytics,
}) => {
  const { currentUser, signOut } = useAuth();

  const languageLabels: Record<Language, { label: string; script: string; color: string }> = {
    english: { label: 'English', script: 'A B C', color: '#1cb0f6' },
    hindi: { label: 'Hindi', script: 'हिन्दी', color: '#ff9600' },
    sanskrit: { label: 'Sanskrit', script: 'संस्कृतम्', color: '#ce82ff' },
  };

  return (
    <header className="sticky top-0 z-40 bg-[#131f24]/95 backdrop-blur-md border-b-2 border-[#2b3e48] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-2">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#58cc02] border-b-3 border-[#46a302] flex items-center justify-center text-[#131f24] font-black text-lg shadow-sm">
              भा
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-black tracking-wide text-white">
                  BhashaLab
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-extrabold uppercase bg-[#233540] text-[#58cc02] rounded-md border border-[#37464f]">
                  Classes 1–12
                </span>
              </div>
            </div>
          </div>

          {/* Gamification Stats (Streak, XP, Hearts) from Database */}
          <div className="hidden md:flex items-center gap-4 px-3 py-1 bg-[#1b2b34] rounded-2xl border border-[#2b3e48]">
            <div className="flex items-center gap-1.5 text-xs font-black text-[#ff9600]" title="Daily Study Streak">
              <Flame className="w-4 h-4 fill-[#ff9600]" />
              <span>{currentUser?.streakDays || 1}d</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-black text-[#ffc800]" title="Total XP Earned">
              <Diamond className="w-4 h-4 fill-[#ffc800]" />
              <span>{currentUser?.totalXp || 0} XP</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-black text-[#ff4b4b]" title="Practice Hearts">
              <Heart className="w-4 h-4 fill-[#ff4b4b]" />
              <span>5</span>
            </div>
          </div>

          {/* Language Switcher in Dark Pill */}
          <div className="flex items-center bg-[#1b2b34] p-1 rounded-2xl border border-[#2e3f4a]">
            {(['english', 'hindi', 'sanskrit'] as Language[]).map((lang) => {
              const active = selectedLanguage === lang;
              return (
                <button
                  key={lang}
                  type="button"
                  onClick={() => onSelectLanguage(lang)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer ${
                    active
                      ? 'bg-[#58cc02] text-[#131f24] shadow-md border-b-2 border-[#46a302]'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  aria-pressed={active}
                >
                  <span className="text-[11px] font-bold">{languageLabels[lang].script}</span>
                  <span className="capitalize hidden sm:inline">{languageLabels[lang].label}</span>
                </button>
              );
            })}
          </div>

          {/* Grade/Class Selector */}
          <div className="hidden lg:flex items-center gap-1.5 bg-[#1b2b34] px-3 py-1.5 rounded-2xl border border-[#2e3f4a]">
            <GraduationCap className="w-4 h-4 text-[#ffc800]" />
            <label htmlFor="grade-select" className="text-xs font-bold text-slate-300">
              Grade:
            </label>
            <select
              id="grade-select"
              value={selectedClass}
              onChange={(e) => onSelectClass(Number(e.target.value))}
              className="text-xs font-black bg-transparent text-[#58cc02] focus:outline-hidden cursor-pointer"
            >
              <option value={0} className="bg-[#202f36] text-white">All Classes (1-12)</option>
              {Array.from({ length: 12 }, (_, i) => i + 1).map((c) => (
                <option key={c} value={c} className="bg-[#202f36] text-white">
                  Class {c}
                </option>
              ))}
            </select>
          </div>

          {/* Right Action buttons */}
          <div className="flex items-center gap-2">
            {currentUser ? (
              <div className="flex items-center gap-2">
                {currentUser.role === 'teacher' && onOpenTeacherCMS && (
                  <button
                    type="button"
                    onClick={onOpenTeacherCMS}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-black bg-[#1cb0f6] hover:bg-[#20baff] text-[#131f24] border-b-3 border-[#1899d6] active:border-b-0 active:translate-y-0.5 transition-all shadow-sm cursor-pointer"
                  >
                    <PlusCircle className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span>Teacher Studio</span>
                  </button>
                )}

                <div className="flex items-center gap-2 bg-[#202f36] border border-[#2e3f4a] rounded-2xl px-2.5 py-1">
                  <div className="w-7 h-7 rounded-xl bg-[#58cc02] text-[#131f24] flex items-center justify-center font-black text-xs uppercase shadow-xs">
                    {currentUser.displayName ? currentUser.displayName.charAt(0) : 'U'}
                  </div>
                  <div className="text-left hidden sm:block">
                    <p className="text-xs font-bold text-white leading-tight max-w-[120px] truncate">
                      {currentUser.displayName}
                    </p>
                    <p className="text-[10px] text-slate-400 font-bold capitalize">
                      {currentUser.role === 'teacher'
                        ? 'Teacher'
                        : `Class ${currentUser.assignedClass || selectedClass || 6}`}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={signOut}
                    title="Sign Out / Switch Account"
                    className="p-1 text-slate-400 hover:text-[#ff4b4b] rounded-lg transition-colors cursor-pointer"
                    aria-label="Sign out"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={onOpenAuth}
                  className="px-4 py-1.5 text-xs font-black uppercase tracking-wider rounded-xl text-[#131f24] bg-[#58cc02] hover:bg-[#61e002] border-b-3 border-[#46a302] active:border-b-0 active:translate-y-0.5 transition-all shadow-md cursor-pointer"
                >
                  Sign In
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
