import React, { useState } from 'react';
import { useAuth } from '../firebase/authContext';
import { UserRole } from '../types';
import {
  GraduationCap,
  ShieldCheck,
  X,
  Mail,
  Lock,
  User,
  ArrowRight,
  Eye,
  EyeOff,
} from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRole?: UserRole;
  currentClass: number;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  defaultRole = 'student',
  currentClass,
}) => {
  const { signInWithEmail, signUpWithEmail, signInWithGoogle, quickLoginDemo } = useAuth();
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [activeTab, setActiveTab] = useState<UserRole>(defaultRole);
  const [studentClass, setStudentClass] = useState<number>(currentClass || 6);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [displayName, setDisplayName] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!email.trim() || !password.trim()) {
      setErrorMsg('Please enter both email and password.');
      return;
    }

    try {
      setIsSubmitting(true);
      if (authMode === 'login') {
        await signInWithEmail(email, password);
      } else {
        await signUpWithEmail(
          email,
          password,
          displayName,
          activeTab,
          activeTab === 'student' ? studentClass : undefined
        );
      }
      onClose();
    } catch (err: any) {
      setErrorMsg(err.message || 'Authentication error.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setIsSubmitting(true);
      setErrorMsg('');
      await signInWithGoogle(activeTab, activeTab === 'student' ? studentClass : undefined);
      onClose();
    } catch (err: any) {
      setErrorMsg(err?.message || 'Google sign-in was cancelled or encountered an error.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleQuickDemo = async (role: UserRole) => {
    try {
      setIsSubmitting(true);
      setErrorMsg('');
      await quickLoginDemo(role, studentClass);
      onClose();
    } catch (err: any) {
      setErrorMsg(err?.message || 'Demo login error.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
    >
      <div className="relative bg-[#202f36] text-white rounded-3xl max-w-md w-full shadow-2xl border-2 border-[#37464f] overflow-hidden">
        {/* Header */}
        <div className="bg-[#131f24] p-5 border-b-2 border-[#2b3e48] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-[#58cc02] border-b-4 border-[#46a302] flex items-center justify-center font-black text-xl text-[#131f24] shadow-md">
              भा
            </div>
            <div>
              <h2 id="auth-modal-title" className="text-base font-black text-white">
                BhashaLab Account Portal
              </h2>
              <p className="text-xs text-slate-400 font-bold">
                Secure Database Storage • Classes 1–12
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-xl bg-[#202f36] hover:bg-[#2e3f4a] text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mode Tabs: Log In vs Create Account */}
        <div className="grid grid-cols-2 p-1.5 bg-[#18262d] border-b border-[#2b3e48]">
          <button
            type="button"
            onClick={() => {
              setAuthMode('login');
              setErrorMsg('');
            }}
            className={`py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
              authMode === 'login'
                ? 'bg-[#58cc02] text-[#131f24] shadow-md border-b-2 border-[#46a302]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => {
              setAuthMode('register');
              setErrorMsg('');
            }}
            className={`py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
              authMode === 'register'
                ? 'bg-[#1cb0f6] text-[#131f24] shadow-md border-b-2 border-[#1899d6]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Create Account
          </button>
        </div>

        <div className="p-6 space-y-4">
          {errorMsg && (
            <div className="p-3 rounded-xl bg-[#391f24] border border-[#ff4b4b] text-[#ff4b4b] text-xs font-bold">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3.5">
            {authMode === 'register' && (
              <>
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-bold text-slate-300 mb-1">
                    Your Full Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      id="modal-name"
                      type="text"
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      placeholder="e.g. Aarav Patel"
                      required
                      className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-[#131f24] border-2 border-[#37464f] text-white text-xs font-bold focus:border-[#58cc02] focus:outline-hidden"
                    />
                  </div>
                </div>

                {/* Role Switch */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveTab('student')}
                    className={`py-1.5 rounded-xl text-xs font-black border-2 transition-all cursor-pointer flex items-center justify-center gap-1 ${
                      activeTab === 'student'
                        ? 'bg-[#58cc02] border-[#46a302] text-[#131f24]'
                        : 'bg-[#131f24] border-[#37464f] text-slate-300'
                    }`}
                  >
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Student</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('teacher')}
                    className={`py-1.5 rounded-xl text-xs font-black border-2 transition-all cursor-pointer flex items-center justify-center gap-1 ${
                      activeTab === 'teacher'
                        ? 'bg-[#1cb0f6] border-[#1899d6] text-[#131f24]'
                        : 'bg-[#131f24] border-[#37464f] text-slate-300'
                    }`}
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Teacher</span>
                  </button>
                </div>

                {activeTab === 'student' && (
                  <div>
                    <label htmlFor="modal-class" className="block text-xs font-bold text-slate-300 mb-1">
                      School Grade Class:
                    </label>
                    <select
                      id="modal-class"
                      value={studentClass}
                      onChange={(e) => setStudentClass(Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-xl bg-[#131f24] border-2 border-[#37464f] text-white text-xs font-bold focus:border-[#58cc02] focus:outline-hidden cursor-pointer"
                    >
                      {Array.from({ length: 12 }, (_, i) => i + 1).map((c) => (
                        <option key={c} value={c} className="bg-[#202f36] text-white">
                          Class {c}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </>
            )}

            <div>
              <label htmlFor="modal-email" className="block text-xs font-bold text-slate-300 mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  id="modal-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  required
                  className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-[#131f24] border-2 border-[#37464f] text-white text-xs font-bold focus:border-[#58cc02] focus:outline-hidden"
                />
              </div>
            </div>

            <div>
              <label htmlFor="modal-password" className="block text-xs font-bold text-slate-300 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  id="modal-password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 6 characters"
                  required
                  minLength={6}
                  className="w-full pl-9 pr-9 py-2 rounded-xl bg-[#131f24] border-2 border-[#37464f] text-white text-xs font-bold focus:border-[#58cc02] focus:outline-hidden"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider text-[#131f24] border-b-3 active:border-b-0 active:translate-y-0.5 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer ${
                authMode === 'login'
                  ? 'bg-[#58cc02] hover:bg-[#61e002] border-[#46a302]'
                  : 'bg-[#1cb0f6] hover:bg-[#20baff] border-[#1899d6]'
              }`}
            >
              <span>{authMode === 'login' ? 'Sign In' : 'Create & Save Account'}</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>
          </form>

          {/* Quick Demo and Google sign in */}
          <div className="pt-3 border-t border-[#2e3f4a] space-y-2">
            <button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={isSubmitting}
              className="w-full py-2 px-3 rounded-xl text-xs font-bold text-white bg-[#131f24] hover:bg-[#1a2830] border border-[#37464f] flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Sign in with Google</span>
            </button>

            <button
              type="button"
              onClick={() => handleQuickDemo('student')}
              disabled={isSubmitting}
              className="w-full py-1.5 px-3 rounded-xl text-xs font-bold text-[#58cc02] bg-[#131f24] hover:bg-[#1a2830] border border-[#2e3f4a] cursor-pointer"
            >
              ⚡ Quick Authenticated Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
