import React, { useEffect, useState } from 'react';
import { UserProgressRecord } from '../types';
import { useAuth } from '../firebase/authContext';
import { getUserProgressList } from '../firebase/contentService';
import { Mascot } from './Mascot';
import {
  X,
  Award,
  Sparkles,
  Trophy,
  Diamond,
  Target,
  CheckCircle2,
} from 'lucide-react';

interface AnalyticsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AnalyticsModal: React.FC<AnalyticsModalProps> = ({ isOpen, onClose }) => {
  const { currentUser } = useAuth();
  const [progressRecords, setProgressRecords] = useState<UserProgressRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isOpen && currentUser) {
      setLoading(true);
      getUserProgressList(currentUser.uid)
        .then((records) => setProgressRecords(records))
        .finally(() => setLoading(false));
    }
  }, [isOpen, currentUser]);

  if (!isOpen) return null;

  const totalExercises = progressRecords.length;
  const completedExercises = progressRecords.filter((r) => r.completed).length;
  const averageScore =
    totalExercises > 0
      ? Math.round(progressRecords.reduce((acc, curr) => acc + (curr.score || 0), 0) / totalExercises)
      : 0;
  const totalXp = completedExercises * 20;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="analytics-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
    >
      <div className="relative bg-[#202f36] text-white rounded-3xl max-w-lg w-full shadow-2xl border-2 border-[#2e3f4a] overflow-hidden">
        {/* Header */}
        <div className="bg-[#131f24] px-6 py-4 border-b-2 border-[#2b3e48] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#ffc800] border-b-3 border-[#d4a000] flex items-center justify-center text-[#131f24] shadow-sm">
              <Trophy className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <h2 id="analytics-modal-title" className="text-base font-black text-white">
                Student Progress & Milestones
              </h2>
              <p className="text-xs text-slate-400 font-bold">
                {currentUser?.displayName || 'Student'} • {currentUser?.role === 'teacher' ? 'Teacher Studio' : `Class ${currentUser?.assignedClass || 6}`}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-xl bg-[#202f36] hover:bg-[#2e3f4a] text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Mascot cheer banner */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#131f24] border-2 border-[#2e3f4a]">
            <Mascot mood={completedExercises > 0 ? 'celebrating' : 'waving'} size="sm" animate={true} />
            <div>
              <p className="text-xs font-black text-[#58cc02]">
                {completedExercises > 0 ? 'Shabaash! Excellent learning progress!' : 'Welcome to BhashaLab!'}
              </p>
              <p className="text-xs text-slate-300 mt-0.5">
                {completedExercises > 0
                  ? `You have earned ${totalXp} XP and completed ${completedExercises} exercises.`
                  : 'Start reading, speaking, and listening to earn your first badges and gems!'}
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3.5 bg-[#131f24] rounded-2xl border-2 border-[#2e3f4a] text-center">
              <div className="flex items-center justify-center gap-1 text-[#58cc02] mb-1">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-xl font-black">{completedExercises}</span>
              </div>
              <p className="text-[11px] font-bold text-slate-400">Completed</p>
            </div>

            <div className="p-3.5 bg-[#131f24] rounded-2xl border-2 border-[#2e3f4a] text-center">
              <div className="flex items-center justify-center gap-1 text-[#1cb0f6] mb-1">
                <Target className="w-4 h-4" />
                <span className="text-xl font-black">{averageScore}%</span>
              </div>
              <p className="text-[11px] font-bold text-slate-400">Avg Accuracy</p>
            </div>

            <div className="p-3.5 bg-[#131f24] rounded-2xl border-2 border-[#2e3f4a] text-center">
              <div className="flex items-center justify-center gap-1 text-[#ffc800] mb-1">
                <Diamond className="w-4 h-4 fill-[#ffc800]" />
                <span className="text-xl font-black">{totalXp}</span>
              </div>
              <p className="text-[11px] font-bold text-slate-400">Total XP</p>
            </div>
          </div>

          {/* Badges Earned */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
              Lab Mastery Badges
            </h4>
            <div className="grid grid-cols-2 gap-2.5">
              <div
                className={`p-3 rounded-2xl border-2 flex items-center gap-2.5 ${
                  completedExercises >= 1
                    ? 'bg-[#182c23] border-[#58cc02]/40 text-emerald-100'
                    : 'bg-[#131f24] border-[#2e3f4a] text-slate-500 opacity-60'
                }`}
              >
                <div className="w-9 h-9 rounded-xl bg-[#58cc02]/20 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-[#58cc02]" />
                </div>
                <div>
                  <p className="font-black text-xs text-white">First Step</p>
                  <p className="text-[10px] text-slate-400">Complete 1 lesson</p>
                </div>
              </div>

              <div
                className={`p-3 rounded-2xl border-2 flex items-center gap-2.5 ${
                  averageScore >= 80
                    ? 'bg-[#292212] border-[#ffc800]/40 text-amber-100'
                    : 'bg-[#131f24] border-[#2e3f4a] text-slate-500 opacity-60'
                }`}
              >
                <div className="w-9 h-9 rounded-xl bg-[#ffc800]/20 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-[#ffc800]" />
                </div>
                <div>
                  <p className="font-black text-xs text-white">Phonetic Master</p>
                  <p className="text-[10px] text-slate-400">Score 80%+ on voice drill</p>
                </div>
              </div>
            </div>
          </div>

          {/* Activity Log */}
          <div className="space-y-2">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
              Recent Practice History
            </h4>
            {loading ? (
              <p className="text-xs text-slate-400 animate-pulse">Loading progress records...</p>
            ) : progressRecords.length === 0 ? (
              <p className="text-xs text-slate-400 italic">
                No exercises logged yet. Open any lesson in Reading, Pronunciation, Listening, or Grammar to start practicing!
              </p>
            ) : (
              <div className="max-h-40 overflow-y-auto space-y-2 pr-1">
                {progressRecords.map((rec) => (
                  <div
                    key={rec.id}
                    className="p-3 bg-[#131f24] rounded-2xl border border-[#2e3f4a] flex items-center justify-between text-xs"
                  >
                    <div>
                      <span className="font-black text-white capitalize">{rec.language}</span>
                      <span className="text-slate-400 mx-1.5">•</span>
                      <span className="text-slate-300 capitalize">{rec.section}</span>
                    </div>
                    <span
                      className={`font-black px-2.5 py-0.5 rounded-lg text-xs ${
                        rec.score >= 80
                          ? 'bg-[#182c23] text-[#58cc02] border border-[#58cc02]/30'
                          : 'bg-[#2a2315] text-[#ffc800] border border-[#ffc800]/30'
                      }`}
                    >
                      {rec.score}%
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#131f24] border-t-2 border-[#2b3e48] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-2xl bg-[#58cc02] hover:bg-[#61e002] text-[#131f24] font-black text-xs border-b-3 border-[#46a302] active:border-b-0 active:translate-y-0.5 transition-all cursor-pointer"
          >
            Continue Learning
          </button>
        </div>
      </div>
    </div>
  );
};
