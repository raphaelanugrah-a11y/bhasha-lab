import React, { useState } from 'react';
import { useAuth } from '../firebase/authContext';
import { Mascot } from './Mascot';
import { UserRole } from '../types';
import {
  GraduationCap,
  ShieldCheck,
  ArrowRight,
  Lock,
  Mail,
  User,
  Eye,
  EyeOff,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

interface WelcomeAuthScreenProps {
  onEnterApp: () => void;
}

export const WelcomeAuthScreen: React.FC<WelcomeAuthScreenProps> = ({ onEnterApp }) => {
  const { signInWithEmail, signUpWithEmail, signInWithGoogle, quickLoginDemo } = useAuth();

  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [selectedRole, setSelectedRole] = useState<UserRole>('student');
  const [selectedClass, setSelectedClass] = useState<number>(6);

  // Form fields
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [displayName, setDisplayName] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!email.trim() || !password.trim()) {
      setErrorMsg('Please enter both email and password.');
      return;
    }

    if (authMode === 'register' && password.length < 6) {
      setErrorMsg('Password must be at least 6 characters.');
      return;
    }

    try {
      setIsSubmitting(true);
      if (authMode === 'login') {
        await signInWithEmail(email, password);
      } else {
        await signUpWithEmail(email, password, displayName, selectedRole, selectedRole === 'student' ? selectedClass : undefined);
      }
      onEnterApp();
    } catch (err: any) {
      setErrorMsg(err.message || 'Authentication error.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleQuickDemo = async (role: UserRole, grade = 6) => {
    try {
      setIsSubmitting(true);
      setErrorMsg('');
      await quickLoginDemo(role, grade);
      onEnterApp();
    } catch (err: any) {
      setErrorMsg(err.message || 'Demo login error.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setIsSubmitting(true);
      setErrorMsg('');
      await signInWithGoogle(selectedRole, selectedRole === 'student' ? selectedClass : undefined);
      onEnterApp();
    } catch (err: any) {
      setErrorMsg(err?.message || 'Google sign-in was cancelled or encountered an error.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#131f24] text-white flex flex-col justify-between selection:bg-[#58cc02] selection:text-black">
      {/* Top minimal brand bar */}
      <header className="max-w-5xl mx-auto w-full px-5 py-4 flex items-center justify-between border-b border-[#2b3e48]">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-2xl bg-[#58cc02] border-b-4 border-[#46a302] flex items-center justify-center font-black text-xl text-[#131f24] shadow-md">
            भा
          </div>
          <div>
            <span className="text-xl font-black tracking-wide text-white">BhashaLab</span>
            <span className="hidden sm:inline-block ml-2 px-2 py-0.5 text-[10px] font-extrabold uppercase bg-[#233540] text-[#58cc02] rounded-md border border-[#37464f]">
              Database Secured
            </span>
          </div>
        </div>

        {/* Database Quick Test Logins */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => handleQuickDemo('student', 6)}
            disabled={isSubmitting}
            className="px-3.5 py-1.5 rounded-xl text-xs font-black bg-[#58cc02] text-[#131f24] border-b-2 border-[#46a302] active:translate-y-0.5 transition-all cursor-pointer shadow-xs"
            title="Authenticate with real demo student credentials"
          >
            🚀 Test Student Login
          </button>
          <button
            type="button"
            onClick={() => handleQuickDemo('teacher')}
            disabled={isSubmitting}
            className="px-3 py-1.5 rounded-xl text-xs font-bold bg-[#202f36] hover:bg-[#283b44] text-[#1cb0f6] border border-[#2e3f4a] transition-all cursor-pointer hidden sm:inline-block"
            title="Authenticate with real demo teacher credentials"
          >
            Teacher Login
          </button>
        </div>
      </header>

      {/* Main Friendly Card for Kids */}
      <main className="max-w-4xl mx-auto w-full px-4 py-6 sm:py-8 flex-1 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        {/* Mascot Greeting */}
        <div className="flex-1 text-center md:text-left space-y-4 max-w-md">
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <Mascot mood="waving" size="lg" animate={true} />
            <div className="bg-[#202f36] border-2 border-[#37464f] p-4 rounded-3xl text-left shadow-lg relative">
              <p className="text-xs font-extrabold text-[#58cc02] uppercase tracking-wider mb-0.5">
                Chalky the Stickman says:
              </p>
              <p className="text-sm font-black text-white leading-snug">
                "Welcome to BhashaLab! Log in to save your reading progress, speech accuracy, and earned XP in the database!"
              </p>
            </div>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Secure Language Lab <br />
              <span className="text-[#58cc02]">with Cloud Scores!</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
              Store your login credentials safely, record voice drills, and keep score history across English, Hindi, and Sanskrit.
            </p>
          </div>

          {/* Security Features */}
          <div className="grid grid-cols-2 gap-2.5 pt-1 text-left">
            <div className="p-2.5 rounded-2xl bg-[#1b2b34] border border-[#2e3f4a] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#58cc02] shrink-0" />
              <span className="text-[11px] font-bold text-slate-300">Firebase Auth Encrypted</span>
            </div>
            <div className="p-2.5 rounded-2xl bg-[#1b2b34] border border-[#2e3f4a] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1cb0f6] shrink-0" />
              <span className="text-[11px] font-bold text-slate-300">Firestore Cloud Scores</span>
            </div>
          </div>
        </div>

        {/* Database-Backed Login / Register Box */}
        <div className="w-full max-w-sm bg-[#202f36] border-2 border-[#37464f] rounded-3xl p-5 sm:p-6 shadow-xl space-y-4">
          {/* Mode Tabs: Log In vs Create Account */}
          <div className="grid grid-cols-2 p-1 bg-[#131f24] rounded-2xl border border-[#2b3e48]">
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

          {errorMsg && (
            <div className="p-2.5 rounded-xl bg-[#391f24] border border-[#ff4b4b] text-[#ff4b4b] text-xs font-bold leading-relaxed">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3.5">
            {/* If Registering: Name + Role + Class */}
            {authMode === 'register' && (
              <>
                <div>
                  <label htmlFor="auth-name" className="block text-xs font-bold text-slate-300 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      id="auth-name"
                      type="text"
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      placeholder="e.g. Aarav Patel"
                      required
                      className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-[#131f24] border-2 border-[#37464f] text-white text-xs font-bold focus:border-[#58cc02] focus:outline-hidden"
                    />
                  </div>
                </div>

                {/* Role Selector */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Select Account Role:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedRole('student')}
                      className={`py-1.5 rounded-xl text-xs font-black border-2 transition-all cursor-pointer flex items-center justify-center gap-1 ${
                        selectedRole === 'student'
                          ? 'bg-[#58cc02] border-[#46a302] text-[#131f24]'
                          : 'bg-[#131f24] border-[#37464f] text-slate-300'
                      }`}
                    >
                      <GraduationCap className="w-3.5 h-3.5" />
                      <span>Student</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedRole('teacher')}
                      className={`py-1.5 rounded-xl text-xs font-black border-2 transition-all cursor-pointer flex items-center justify-center gap-1 ${
                        selectedRole === 'teacher'
                          ? 'bg-[#1cb0f6] border-[#1899d6] text-[#131f24]'
                          : 'bg-[#131f24] border-[#37464f] text-slate-300'
                      }`}
                    >
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Teacher</span>
                    </button>
                  </div>
                </div>

                {/* If Student: Class Selection */}
                {selectedRole === 'student' && (
                  <div>
                    <label htmlFor="auth-class" className="block text-xs font-bold text-slate-300 mb-1">
                      School Grade Class (1 to 12):
                    </label>
                    <select
                      id="auth-class"
                      value={selectedClass}
                      onChange={(e) => setSelectedClass(Number(e.target.value))}
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

            {/* Email Field */}
            <div>
              <label htmlFor="auth-email" className="block text-xs font-bold text-slate-300 mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  id="auth-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  required
                  className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-[#131f24] border-2 border-[#37464f] text-white text-xs font-bold focus:border-[#58cc02] focus:outline-hidden"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="auth-password" className="block text-xs font-bold text-slate-300 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  id="auth-password"
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

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-5 rounded-2xl text-xs font-black uppercase tracking-wider text-[#131f24] border-b-4 active:border-b-0 active:translate-y-1 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer select-none ${
                authMode === 'login'
                  ? 'bg-[#58cc02] hover:bg-[#61e002] border-[#46a302]'
                  : 'bg-[#1cb0f6] hover:bg-[#20baff] border-[#1899d6]'
              }`}
            >
              <span>{authMode === 'login' ? 'Secure Sign In' : 'Register & Save Profile'}</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>
          </form>

          {/* Google Sign-in Alternative */}
          <div className="pt-2 border-t border-[#2e3f4a] space-y-2">
            <button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={isSubmitting}
              className="w-full py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-[#131f24] hover:bg-[#1a2830] border border-[#37464f] flex items-center justify-center gap-2 cursor-pointer transition-colors"
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
              <span>Continue with Google</span>
            </button>
            <p className="text-[10px] text-center text-slate-400">
              🔒 Credentials and scores stored in Firestore Database.
            </p>
          </div>
        </div>
      </main>

      <footer className="max-w-5xl mx-auto w-full px-5 py-3 text-center text-xs text-slate-500 border-t border-[#2b3e48]">
        BhashaLab • Cloud-Backed Multilingual Language Lab (English • Hindi • Sanskrit)
      </footer>
    </div>
  );
};
