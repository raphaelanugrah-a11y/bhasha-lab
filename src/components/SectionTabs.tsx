import React from 'react';
import { LabSection, Language } from '../types';
import { BookOpen, Mic, Headphones, Sparkles } from 'lucide-react';

interface SectionTabsProps {
  currentLanguage: Language;
  currentSection: LabSection;
  onSelectSection: (section: LabSection) => void;
  itemCounts: Record<LabSection, number>;
}

export const SectionTabs: React.FC<SectionTabsProps> = ({
  currentLanguage,
  currentSection,
  onSelectSection,
  itemCounts,
}) => {
  const sectionMeta: Record<
    LabSection,
    {
      titleEn: string;
      titleHi: string;
      titleSa: string;
      subtitle: string;
      icon: React.ElementType;
      activeColor: string;
      borderActive: string;
      badgeColor: string;
    }
  > = {
    reading: {
      titleEn: 'Story Time',
      titleHi: 'कहानियां (पठन)',
      titleSa: 'पठनम् (Reading)',
      subtitle: 'Read & Learn',
      icon: BookOpen,
      activeColor: 'bg-[#58cc02] text-[#131f24]',
      borderActive: 'border-[#46a302]',
      badgeColor: 'bg-[#46a302] text-white',
    },
    pronunciation: {
      titleEn: 'Say It Out Loud!',
      titleHi: 'बोलकर सीखो (उच्चारण)',
      titleSa: 'उच्चारणम् (Speaking)',
      subtitle: 'Speak in Mic',
      icon: Mic,
      activeColor: 'bg-[#1cb0f6] text-[#131f24]',
      borderActive: 'border-[#1899d6]',
      badgeColor: 'bg-[#1899d6] text-white',
    },
    listening: {
      titleEn: 'Listen Up!',
      titleHi: 'सुनो और समझो (श्रवण)',
      titleSa: 'श्रवणम् (Listening)',
      subtitle: 'Audio Stories',
      icon: Headphones,
      activeColor: 'bg-[#ffc800] text-[#131f24]',
      borderActive: 'border-[#d4a000]',
      badgeColor: 'bg-[#d4a000] text-[#131f24]',
    },
    grammar: {
      titleEn: 'Word Magic',
      titleHi: 'व्याकरण के नियम',
      titleSa: 'व्याकरणम् (Grammar)',
      subtitle: 'Puzzles & Rules',
      icon: Sparkles,
      activeColor: 'bg-[#ce82ff] text-[#131f24]',
      borderActive: 'border-[#a552e6]',
      badgeColor: 'bg-[#a552e6] text-white',
    },
  };

  const getSectionTitle = (sec: LabSection) => {
    if (currentLanguage === 'hindi') return sectionMeta[sec].titleHi;
    if (currentLanguage === 'sanskrit') return sectionMeta[sec].titleSa;
    return sectionMeta[sec].titleEn;
  };

  const sections: LabSection[] = ['reading', 'pronunciation', 'listening', 'grammar'];

  return (
    <nav aria-label="Learning sections" className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {sections.map((sec) => {
          const meta = sectionMeta[sec];
          const Icon = meta.icon;
          const isActive = currentSection === sec;
          const count = itemCounts[sec] || 0;

          return (
            <button
              key={sec}
              type="button"
              onClick={() => onSelectSection(sec)}
              className={`p-3.5 sm:p-4 rounded-3xl text-left transition-all flex flex-col justify-between relative cursor-pointer select-none ${
                isActive
                  ? `${meta.activeColor} border-b-4 ${meta.borderActive} shadow-lg scale-[1.02]`
                  : 'bg-[#202f36] hover:bg-[#283b44] border-2 border-[#2e3f4a] border-b-4 hover:border-slate-500 text-slate-100'
              }`}
              aria-pressed={isActive}
            >
              <div className="flex items-center justify-between w-full mb-2 sm:mb-3">
                <div
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center font-bold ${
                    isActive ? 'bg-black/15 text-current' : 'bg-[#131f24] text-white'
                  }`}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
                </div>
                <span
                  className={`text-[11px] font-black px-2.5 py-0.5 rounded-full ${
                    isActive ? meta.badgeColor : 'bg-[#131f24] text-slate-300 border border-[#2e3f4a]'
                  }`}
                >
                  {count} {count === 1 ? 'activity' : 'activities'}
                </span>
              </div>

              <div>
                <h3 className="font-black text-sm sm:text-base leading-tight">
                  {getSectionTitle(sec)}
                </h3>
                <p
                  className={`text-[11px] sm:text-xs mt-0.5 font-bold ${
                    isActive ? 'opacity-90' : 'text-slate-400'
                  }`}
                >
                  {meta.subtitle}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
