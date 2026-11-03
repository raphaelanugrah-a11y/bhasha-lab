import React, { useState, useEffect } from 'react';
import {
  LabContentItem,
  Language,
  LabSection,
  DifficultyLevel,
  VocabularyItem,
  QuizQuestion,
} from '../types';
import { useAuth } from '../firebase/authContext';
import {
  saveLabContentItem,
  deleteLabContentItem,
  seedStandardCurriculum,
} from '../firebase/contentService';
import {
  X,
  Plus,
  Trash2,
  Edit3,
  BookOpen,
  Check,
  Save,
  RotateCcw,
  Sparkles,
  Database,
  Filter,
} from 'lucide-react';

interface TeacherCMSModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: LabContentItem[];
  onRefreshItems: () => Promise<void>;
  editItemTarget?: LabContentItem | null;
  onClearEditTarget?: () => void;
}

export const TeacherCMSModal: React.FC<TeacherCMSModalProps> = ({
  isOpen,
  onClose,
  items,
  onRefreshItems,
  editItemTarget,
  onClearEditTarget,
}) => {
  const { currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState<'list' | 'editor'>('list');

  // Filter state for list
  const [filterLang, setFilterLang] = useState<string>('all');
  const [filterSection, setFilterSection] = useState<string>('all');
  const [filterClass, setFilterClass] = useState<number>(0);

  // Form states for creating / editing
  const [editingId, setEditingId] = useState<string>('');
  const [formLanguage, setFormLanguage] = useState<Language>('english');
  const [formSection, setFormSection] = useState<LabSection>('reading');
  const [formClassGrade, setFormClassGrade] = useState<number>(6);
  const [formTitle, setFormTitle] = useState<string>('');
  const [formDescription, setFormDescription] = useState<string>('');
  const [formDifficulty, setFormDifficulty] = useState<DifficultyLevel>('beginner');
  const [formContentBody, setFormContentBody] = useState<string>('');
  const [formTranslation, setFormTranslation] = useState<string>('');
  const [formAudioText, setFormAudioText] = useState<string>('');
  const [formPhoneticGuide, setFormPhoneticGuide] = useState<string>('');
  const [formGrammarNotes, setFormGrammarNotes] = useState<string>('');
  const [formStatus, setFormStatus] = useState<'published' | 'draft'>('published');

  // Dynamic vocab & quizzes
  const [vocabulary, setVocabulary] = useState<VocabularyItem[]>([]);
  const [newVocabWord, setNewVocabWord] = useState('');
  const [newVocabMeaning, setNewVocabMeaning] = useState('');
  const [newVocabPron, setNewVocabPron] = useState('');

  const [exercises, setExercises] = useState<QuizQuestion[]>([]);
  const [newQText, setNewQText] = useState('');
  const [newQOpts, setNewQOpts] = useState(['', '', '', '']);
  const [newQCorrect, setNewQCorrect] = useState(0);
  const [newQExpl, setNewQExpl] = useState('');

  const [isSaving, setIsSaving] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(
    null
  );

  useEffect(() => {
    if (editItemTarget) {
      loadItemIntoEditor(editItemTarget);
      setActiveTab('editor');
    }
  }, [editItemTarget]);

  if (!isOpen) return null;

  const resetForm = () => {
    setEditingId('');
    setFormLanguage('english');
    setFormSection('reading');
    setFormClassGrade(6);
    setFormTitle('');
    setFormDescription('');
    setFormDifficulty('beginner');
    setFormContentBody('');
    setFormTranslation('');
    setFormAudioText('');
    setFormPhoneticGuide('');
    setFormGrammarNotes('');
    setFormStatus('published');
    setVocabulary([]);
    setExercises([]);
    setNewVocabWord('');
    setNewVocabMeaning('');
    setNewVocabPron('');
    setNewQText('');
    setNewQOpts(['', '', '', '']);
    setNewQCorrect(0);
    setNewQExpl('');
    if (onClearEditTarget) onClearEditTarget();
  };

  const loadItemIntoEditor = (item: LabContentItem) => {
    setEditingId(item.id);
    setFormLanguage(item.language);
    setFormSection(item.section);
    setFormClassGrade(item.classGrade);
    setFormTitle(item.title);
    setFormDescription(item.description || '');
    setFormDifficulty(item.difficulty || 'beginner');
    setFormContentBody(item.contentBody);
    setFormTranslation(item.translation || '');
    setFormAudioText(item.audioText || '');
    setFormPhoneticGuide(item.phoneticGuide || '');
    setFormGrammarNotes(item.grammarNotes || '');
    setFormStatus(item.status);
    setVocabulary(item.vocabulary ? [...item.vocabulary] : []);
    setExercises(item.exercises ? [...item.exercises] : []);
  };

  const handleAddVocab = () => {
    if (!newVocabWord.trim() || !newVocabMeaning.trim()) return;
    setVocabulary((prev) => [
      ...prev,
      {
        word: newVocabWord.trim(),
        meaning: newVocabMeaning.trim(),
        pronunciation: newVocabPron.trim() || undefined,
      },
    ]);
    setNewVocabWord('');
    setNewVocabMeaning('');
    setNewVocabPron('');
  };

  const handleRemoveVocab = (index: number) => {
    setVocabulary((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAddQuestion = () => {
    const validOpts = newQOpts.map((o) => o.trim()).filter(Boolean);
    if (!newQText.trim() || validOpts.length < 2) return;
    setExercises((prev) => [
      ...prev,
      {
        question: newQText.trim(),
        options: validOpts,
        correctIndex: Math.min(newQCorrect, validOpts.length - 1),
        explanation: newQExpl.trim() || undefined,
      },
    ]);
    setNewQText('');
    setNewQOpts(['', '', '', '']);
    setNewQCorrect(0);
    setNewQExpl('');
  };

  const handleRemoveQuestion = (index: number) => {
    setExercises((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSaveForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim() || !formContentBody.trim()) {
      setFeedbackMsg({ type: 'error', text: 'Title and Content Body are required.' });
      return;
    }

    try {
      setIsSaving(true);
      setFeedbackMsg(null);

      const generatedId =
        editingId ||
        `${formLanguage.slice(0, 3)}-cls${formClassGrade}-${formSection.slice(0, 4)}-${Date.now()
          .toString(36)
          .slice(-6)}`;

      const newItem: LabContentItem = {
        id: generatedId,
        language: formLanguage,
        section: formSection,
        classGrade: Number(formClassGrade),
        title: formTitle.trim(),
        description: formDescription.trim(),
        difficulty: formDifficulty,
        contentBody: formContentBody.trim(),
        translation: formTranslation.trim() || undefined,
        audioText: formAudioText.trim() || formContentBody.trim(),
        phoneticGuide: formPhoneticGuide.trim() || undefined,
        grammarNotes: formGrammarNotes.trim() || undefined,
        vocabulary: vocabulary.length > 0 ? vocabulary : undefined,
        exercises: exercises.length > 0 ? exercises : undefined,
        authorId: currentUser?.uid || 'teacher',
        authorName: currentUser?.displayName || 'Teacher',
        status: formStatus,
      };

      await saveLabContentItem(newItem);
      await onRefreshItems();
      setFeedbackMsg({
        type: 'success',
        text: editingId ? 'Module updated successfully!' : 'New module created and published!',
      });
      setActiveTab('list');
      resetForm();
    } catch (err: any) {
      setFeedbackMsg({ type: 'error', text: err?.message || 'Failed to save module to Firestore.' });
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteItem = async (itemId: string) => {
    try {
      setIsSaving(true);
      await deleteLabContentItem(itemId);
      await onRefreshItems();
      setFeedbackMsg({ type: 'success', text: 'Module deleted from database.' });
    } catch (err: any) {
      setFeedbackMsg({ type: 'error', text: err?.message || 'Could not delete item.' });
    } finally {
      setIsSaving(false);
    }
  };

  const handleSeedStandardCurriculum = async () => {
    try {
      setIsSaving(true);
      setFeedbackMsg(null);
      const count = await seedStandardCurriculum();
      await onRefreshItems();
      setFeedbackMsg({
        type: 'success',
        text: `Standard curriculum initialized! ${count} lessons loaded into Firestore database.`,
      });
    } catch (err: any) {
      setFeedbackMsg({ type: 'error', text: 'Error seeding database.' });
    } finally {
      setIsSaving(false);
    }
  };

  const filteredItems = items.filter((item) => {
    if (filterLang !== 'all' && item.language !== filterLang) return false;
    if (filterSection !== 'all' && item.section !== filterSection) return false;
    if (filterClass !== 0 && item.classGrade !== filterClass) return false;
    return true;
  });

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cms-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5"
    >
      <div className="relative bg-[#202f36] text-white rounded-3xl max-w-4xl w-full shadow-2xl border-2 border-[#37464f] flex flex-col max-h-[92vh] overflow-hidden">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#131f24] border-b-2 border-[#2e3f4a] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#1cb0f6] border-b-3 border-[#1899d6] flex items-center justify-center text-[#131f24] font-black">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 id="cms-modal-title" className="text-lg sm:text-xl font-black text-white">
                Teacher Curriculum Studio
              </h2>
              <p className="text-xs text-slate-400">
                Manage, author, and edit learning modules for Classes 1–12
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleSeedStandardCurriculum}
              disabled={isSaving}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-black bg-[#1b2b34] hover:bg-[#283b44] text-[#1cb0f6] border border-[#2e3f4a] transition-all cursor-pointer"
              title="Populate standard curriculum into Firestore"
            >
              <Database className="w-3.5 h-3.5" />
              <span>Seed DB</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-[#283b44] transition-colors cursor-pointer"
              aria-label="Close CMS"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab switch */}
        <div className="flex items-center justify-between px-6 py-2.5 bg-[#18262d] border-b border-[#2e3f4a] text-xs">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => {
                setActiveTab('list');
                resetForm();
              }}
              className={`px-3.5 py-1.5 rounded-xl font-black transition-all cursor-pointer ${
                activeTab === 'list'
                  ? 'bg-[#1cb0f6] text-[#131f24] border-b-2 border-[#1899d6]'
                  : 'text-slate-400 hover:text-white bg-[#131f24] border border-[#2e3f4a]'
              }`}
            >
              Curriculum Catalog ({filteredItems.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('editor')}
              className={`px-3.5 py-1.5 rounded-xl font-black transition-all flex items-center gap-1 cursor-pointer ${
                activeTab === 'editor'
                  ? 'bg-[#58cc02] text-[#131f24] border-b-2 border-[#46a302]'
                  : 'text-slate-400 hover:text-white bg-[#131f24] border border-[#2e3f4a]'
              }`}
            >
              <Plus className="w-3.5 h-3.5" />
              <span>{editingId ? 'Edit Module' : 'Create New Module'}</span>
            </button>
          </div>

          {feedbackMsg && (
            <span
              className={`text-xs font-black px-3 py-1 rounded-xl ${
                feedbackMsg.type === 'success'
                  ? 'bg-[#58cc02]/20 text-[#58cc02] border border-[#58cc02]'
                  : 'bg-[#ff4b4b]/20 text-[#ff4b4b] border border-[#ff4b4b]'
              }`}
            >
              {feedbackMsg.text}
            </span>
          )}
        </div>

        {/* Body content */}
        <div className="p-6 overflow-y-auto flex-1">
          {activeTab === 'list' ? (
            <div className="space-y-4">
              {/* Filter Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 p-3.5 bg-[#131f24] rounded-2xl border-2 border-[#2e3f4a] text-xs">
                <div>
                  <label htmlFor="filter-lang-select" className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Language
                  </label>
                  <select
                    id="filter-lang-select"
                    value={filterLang}
                    onChange={(e) => setFilterLang(e.target.value)}
                    className="w-full p-2.5 border border-[#2e3f4a] rounded-xl bg-[#202f36] text-white font-bold cursor-pointer"
                  >
                    <option value="all">All Languages</option>
                    <option value="english">English</option>
                    <option value="hindi">Hindi</option>
                    <option value="sanskrit">Sanskrit</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="filter-sec-select" className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Section
                  </label>
                  <select
                    id="filter-sec-select"
                    value={filterSection}
                    onChange={(e) => setFilterSection(e.target.value)}
                    className="w-full p-2.5 border border-[#2e3f4a] rounded-xl bg-[#202f36] text-white font-bold cursor-pointer"
                  >
                    <option value="all">All Sections</option>
                    <option value="reading">Reading</option>
                    <option value="pronunciation">Pronunciation</option>
                    <option value="listening">Listening</option>
                    <option value="grammar">Grammar</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="filter-class-select" className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Class Grade
                  </label>
                  <select
                    id="filter-class-select"
                    value={filterClass}
                    onChange={(e) => setFilterClass(Number(e.target.value))}
                    className="w-full p-2.5 border border-[#2e3f4a] rounded-xl bg-[#202f36] text-white font-bold cursor-pointer"
                  >
                    <option value={0}>All Classes (1-12)</option>
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((c) => (
                      <option key={c} value={c}>
                        Class {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-2.5">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-2xl bg-[#1b2b34] border-2 border-[#2e3f4a] hover:border-[#1cb0f6] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-md"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-lg text-[10px] font-black bg-[#58cc02] text-[#131f24] uppercase">
                          Class {item.classGrade}
                        </span>
                        <span className="px-2 py-0.5 rounded-lg text-[10px] font-bold bg-[#131f24] text-[#1cb0f6] border border-[#2e3f4a] capitalize">
                          {item.language}
                        </span>
                        <span className="px-2 py-0.5 rounded-lg text-[10px] font-bold bg-[#131f24] text-slate-300 border border-[#2e3f4a] capitalize">
                          {item.section}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded-lg text-[10px] font-black uppercase ${
                            item.difficulty === 'advanced'
                              ? 'bg-[#ce82ff]/20 text-[#ce82ff]'
                              : item.difficulty === 'intermediate'
                              ? 'bg-[#ff9600]/20 text-[#ff9600]'
                              : 'bg-[#58cc02]/20 text-[#58cc02]'
                          }`}
                        >
                          {item.difficulty}
                        </span>
                      </div>
                      <h4 className="font-bold text-sm text-white">{item.title}</h4>
                      <p className="text-xs text-slate-400 line-clamp-1">{item.description}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          loadItemIntoEditor(item);
                          setActiveTab('editor');
                        }}
                        className="px-3 py-1.5 rounded-xl text-xs font-bold bg-[#202f36] hover:bg-[#283b44] text-[#1cb0f6] border border-[#2e3f4a] transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>Edit</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteItem(item.id)}
                        className="p-2 rounded-xl text-slate-400 hover:text-[#ff4b4b] hover:bg-[#391f24] transition-colors cursor-pointer"
                        title="Delete module"
                        aria-label={`Delete module ${item.title}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}

                {filteredItems.length === 0 && (
                  <div className="p-8 text-center bg-[#131f24] rounded-2xl border-2 border-dashed border-[#2e3f4a]">
                    <p className="text-xs text-slate-400">No lessons match the selected filters.</p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Editor Form */
            <form onSubmit={handleSaveForm} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                <div>
                  <label htmlFor="form-lang-select" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Language *
                  </label>
                  <select
                    id="form-lang-select"
                    value={formLanguage}
                    onChange={(e) => setFormLanguage(e.target.value as Language)}
                    className="w-full p-2.5 text-xs border border-[#2e3f4a] rounded-xl bg-[#131f24] text-white font-bold cursor-pointer"
                  >
                    <option value="english">English</option>
                    <option value="hindi">Hindi</option>
                    <option value="sanskrit">Sanskrit</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="form-sec-select" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Section *
                  </label>
                  <select
                    id="form-sec-select"
                    value={formSection}
                    onChange={(e) => setFormSection(e.target.value as LabSection)}
                    className="w-full p-2.5 text-xs border border-[#2e3f4a] rounded-xl bg-[#131f24] text-white font-bold cursor-pointer"
                  >
                    <option value="reading">Reading</option>
                    <option value="pronunciation">Pronunciation</option>
                    <option value="listening">Listening</option>
                    <option value="grammar">Grammar</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="form-class-select" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Target Grade *
                  </label>
                  <select
                    id="form-class-select"
                    value={formClassGrade}
                    onChange={(e) => setFormClassGrade(Number(e.target.value))}
                    className="w-full p-2.5 text-xs border border-[#2e3f4a] rounded-xl bg-[#131f24] text-[#58cc02] font-black cursor-pointer"
                  >
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((c) => (
                      <option key={c} value={c}>
                        Class {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="form-diff-select" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Difficulty Level *
                  </label>
                  <select
                    id="form-diff-select"
                    value={formDifficulty}
                    onChange={(e) => setFormDifficulty(e.target.value as DifficultyLevel)}
                    className="w-full p-2.5 text-xs border border-[#2e3f4a] rounded-xl bg-[#131f24] text-[#ffc800] font-black cursor-pointer"
                  >
                    <option value="beginner">Beginner (प्रारंभिक)</option>
                    <option value="intermediate">Intermediate (मध्यम)</option>
                    <option value="advanced">Advanced (उच्च/प्रौढ़)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="form-title-input" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Lesson Title *
                </label>
                <input
                  id="form-title-input"
                  type="text"
                  required
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  placeholder="e.g. Active and Passive Voice / शब्दरूपाणि / पंचतंत्र कथा"
                  className="w-full px-3.5 py-2.5 text-xs border border-[#2e3f4a] rounded-xl bg-[#131f24] text-white focus:border-[#58cc02] focus:outline-hidden"
                />
              </div>

              <div>
                <label htmlFor="form-desc-input" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Brief Summary / Description
                </label>
                <input
                  id="form-desc-input"
                  type="text"
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  placeholder="Short explanation of concepts covered"
                  className="w-full px-3.5 py-2.5 text-xs border border-[#2e3f4a] rounded-xl bg-[#131f24] text-white focus:border-[#58cc02] focus:outline-hidden"
                />
              </div>

              <div>
                <label htmlFor="form-content-input" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Content Body (Passage, rules, dialogue, or shloka text) *
                </label>
                <textarea
                  id="form-content-input"
                  required
                  rows={6}
                  value={formContentBody}
                  onChange={(e) => setFormContentBody(e.target.value)}
                  placeholder="Enter the primary study passage, speech script, or grammatical reference table..."
                  className="w-full p-3.5 text-xs border border-[#2e3f4a] rounded-xl bg-[#131f24] text-white font-serif focus:border-[#58cc02] focus:outline-hidden leading-relaxed"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="form-trans-input" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Bilingual Translation / Meaning
                  </label>
                  <textarea
                    id="form-trans-input"
                    rows={3}
                    value={formTranslation}
                    onChange={(e) => setFormTranslation(e.target.value)}
                    placeholder="Translation in English or Hindi"
                    className="w-full p-2.5 text-xs border border-[#2e3f4a] rounded-xl bg-[#131f24] text-white"
                  />
                </div>

                <div>
                  <label htmlFor="form-audio-input" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Spoken Audio Synthesizer Script
                  </label>
                  <textarea
                    id="form-audio-input"
                    rows={3}
                    value={formAudioText}
                    onChange={(e) => setFormAudioText(e.target.value)}
                    placeholder="Text synthesized by TTS player (defaults to content body)"
                    className="w-full p-2.5 text-xs border border-[#2e3f4a] rounded-xl bg-[#131f24] text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="form-phon-input" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Phonetic Guide / IAST / Syllable Breakdown
                  </label>
                  <input
                    id="form-phon-input"
                    type="text"
                    value={formPhoneticGuide}
                    onChange={(e) => setFormPhoneticGuide(e.target.value)}
                    placeholder="e.g. /knaɪt/, Rāmaḥ (/raːmɐh/)"
                    className="w-full px-3 py-2 text-xs border border-[#2e3f4a] rounded-xl bg-[#131f24] text-[#58cc02] font-mono"
                  />
                </div>

                <div>
                  <label htmlFor="form-status-select" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Publishing Status
                  </label>
                  <select
                    id="form-status-select"
                    value={formStatus}
                    onChange={(e) => setFormStatus(e.target.value as 'published' | 'draft')}
                    className="w-full p-2 text-xs border border-[#2e3f4a] rounded-xl bg-[#131f24] text-white font-bold cursor-pointer"
                  >
                    <option value="published">Published (Visible to Students)</option>
                    <option value="draft">Draft (Visible only to Teachers)</option>
                  </select>
                </div>
              </div>

              {/* Dynamic Vocabulary builder */}
              <div className="p-4 rounded-2xl bg-[#131f24] border-2 border-[#2e3f4a] space-y-3">
                <h4 className="text-xs font-black uppercase tracking-wider text-[#ff9600] flex items-center justify-between">
                  <span>Vocabulary Builder ({vocabulary.length} words added)</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <input
                    type="text"
                    placeholder="Word (e.g. Acorn, विनयम्)"
                    value={newVocabWord}
                    onChange={(e) => setNewVocabWord(e.target.value)}
                    className="px-3 py-2 text-xs border border-[#2e3f4a] rounded-xl bg-[#1b2b34] text-white"
                  />
                  <input
                    type="text"
                    placeholder="Meaning / Definition"
                    value={newVocabMeaning}
                    onChange={(e) => setNewVocabMeaning(e.target.value)}
                    className="px-3 py-2 text-xs border border-[#2e3f4a] rounded-xl bg-[#1b2b34] text-white"
                  />
                  <div className="flex gap-1.5">
                    <input
                      type="text"
                      placeholder="Pronunciation (optional)"
                      value={newVocabPron}
                      onChange={(e) => setNewVocabPron(e.target.value)}
                      className="px-3 py-2 text-xs border border-[#2e3f4a] rounded-xl bg-[#1b2b34] text-white flex-1"
                    />
                    <button
                      type="button"
                      onClick={handleAddVocab}
                      className="px-3.5 py-2 bg-[#ff9600] hover:bg-[#ffa726] text-[#131f24] rounded-xl text-xs font-black cursor-pointer"
                    >
                      Add
                    </button>
                  </div>
                </div>

                {vocabulary.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {vocabulary.map((v, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1b2b34] border border-[#2e3f4a] rounded-xl text-xs font-bold text-slate-200"
                      >
                        <strong className="text-white">{v.word}</strong>: {v.meaning}
                        <button
                          type="button"
                          onClick={() => handleRemoveVocab(i)}
                          className="text-slate-400 hover:text-[#ff4b4b] cursor-pointer"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Dynamic Exercise & Quiz builder */}
              <div className="p-4 rounded-2xl bg-[#131f24] border-2 border-[#2e3f4a] space-y-3">
                <h4 className="text-xs font-black uppercase tracking-wider text-[#1cb0f6] flex items-center justify-between">
                  <span>Interactive Exercises & Quiz ({exercises.length} questions added)</span>
                </h4>

                <div className="space-y-2.5">
                  <input
                    type="text"
                    placeholder="Question prompt (e.g. Which rhetorical appeal targets logic?)"
                    value={newQText}
                    onChange={(e) => setNewQText(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-[#2e3f4a] rounded-xl bg-[#1b2b34] text-white"
                  />

                  <div className="grid grid-cols-2 gap-2">
                    {newQOpts.map((opt, optI) => (
                      <div key={optI} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="correct-opt-radio"
                          checked={newQCorrect === optI}
                          onChange={() => setNewQCorrect(optI)}
                          title="Mark as correct answer"
                          className="cursor-pointer"
                        />
                        <input
                          type="text"
                          placeholder={`Option ${String.fromCharCode(65 + optI)}`}
                          value={opt}
                          onChange={(e) => {
                            const updated = [...newQOpts];
                            updated[optI] = e.target.value;
                            setNewQOpts(updated);
                          }}
                          className="w-full px-2.5 py-1.5 text-xs border border-[#2e3f4a] rounded-xl bg-[#1b2b34] text-white"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Answer explanation / context (optional)"
                      value={newQExpl}
                      onChange={(e) => setNewQExpl(e.target.value)}
                      className="flex-1 px-3 py-2 text-xs border border-[#2e3f4a] rounded-xl bg-[#1b2b34] text-white"
                    />
                    <button
                      type="button"
                      onClick={handleAddQuestion}
                      className="px-4 py-2 bg-[#1cb0f6] hover:bg-[#20baff] text-[#131f24] rounded-xl text-xs font-black cursor-pointer"
                    >
                      Add Question
                    </button>
                  </div>
                </div>

                {exercises.length > 0 && (
                  <div className="space-y-2 pt-1">
                    {exercises.map((q, qIdx) => (
                      <div
                        key={qIdx}
                        className="p-3 bg-[#1b2b34] border border-[#2e3f4a] rounded-2xl text-xs flex items-center justify-between gap-2"
                      >
                        <div>
                          <p className="font-bold text-white">
                            {qIdx + 1}. {q.question}
                          </p>
                          <p className="text-[11px] text-[#58cc02] font-bold">
                            Correct: Option {String.fromCharCode(65 + q.correctIndex)} ({q.options[q.correctIndex]})
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleRemoveQuestion(qIdx)}
                          className="text-slate-400 hover:text-[#ff4b4b] p-1 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Form submit buttons */}
              <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#2e3f4a]">
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('list');
                    resetForm();
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSaving}
                  className="px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider text-[#131f24] bg-[#58cc02] hover:bg-[#61e002] border-b-3 border-[#46a302] active:translate-y-0.5 transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
                >
                  <Save className="w-4 h-4" />
                  <span>{editingId ? 'Save Changes' : 'Publish to Curriculum'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
