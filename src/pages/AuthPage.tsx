import React, { useState } from 'react';
import { MailIcon, LockIcon, EyeIcon, EyeOffIcon, TruckIcon } from 'lucide-react';
interface AuthPageProps {
  onLogin: () => void;
}
const AuthPage: React.FC<AuthPageProps> = ({
  onLogin
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 1500);
  };
  return <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] relative overflow-hidden">
      {/* Animated orbs in background */}
      <div className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-[#ff8200] to-[#ffb366] opacity-10 blur-3xl -top-10 -left-10 animate-float"></div>
      <div className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#10b981] opacity-10 blur-3xl bottom-0 right-0 animate-float-delayed"></div>
      <div className="max-w-md w-full px-4">
        {/* Auth Card */}
        <div className="bg-[#1e293b]/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-8 w-full">
          {/* Logo & Header */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ff8200] to-[#cc6600] flex items-center justify-center mb-4 shadow-lg shadow-orange-500/30">
              <TruckIcon className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-extrabold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Convoy Control Center
            </h1>
            <p className="text-gray-400 mt-1">Secure Access Portal</p>
          </div>
          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <MailIcon className="w-5 h-5 text-gray-400" />
              </div>
              <input type="email" className="w-full bg-[#0f172a]/50 border border-gray-700 text-white rounded-lg pl-10 pr-4 py-3 focus:ring-2 focus:ring-[#ff8200] focus:border-transparent transition-all outline-none" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>
            {/* Password Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <LockIcon className="w-5 h-5 text-gray-400" />
              </div>
              <input type={showPassword ? 'text' : 'password'} className="w-full bg-[#0f172a]/50 border border-gray-700 text-white rounded-lg pl-10 pr-12 py-3 focus:ring-2 focus:ring-[#ff8200] focus:border-transparent transition-all outline-none" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
              <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-200 transition-colors" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOffIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
              </button>
            </div>
            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-700 bg-[#0f172a]/50 text-[#ff8200] focus:ring-[#ff8200] focus:ring-offset-[#1e293b]" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
                <label htmlFor="remember-me" className="ml-2 text-sm text-gray-300">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm font-medium text-[#ff8200] hover:text-[#ffb366] transition-colors">
                Forgot password?
              </a>
            </div>
            {/* Sign In Button */}
            <button type="submit" disabled={isLoading} className="w-full bg-gradient-to-r from-[#ff8200] to-[#cc6600] text-white font-semibold py-3 px-4 rounded-lg shadow-lg shadow-orange-500/30 hover:translate-y-[-1px] hover:shadow-xl hover:shadow-orange-500/40 active:translate-y-0 transition-all flex items-center justify-center">
              {isLoading ? <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg> : 'Sign In Securely'}
            </button>
            {/* SSO Button */}
            <button type="button" className="w-full bg-[#0f172a]/50 border border-gray-700 text-white font-semibold py-3 px-4 rounded-lg hover:bg-[#0f172a]/70 transition-colors flex items-center justify-center">
              Sign in with Microsoft Azure AD
            </button>
          </form>
          {/* Demo Credentials */}
          <div className="mt-8 bg-[#0f172a]/50 backdrop-blur-md rounded-lg border border-gray-800 p-4">
            <h3 className="text-sm font-medium text-gray-300 mb-2">
              Demo Credentials
            </h3>
            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between">
                <span className="text-red-400">Admin:</span>
                <span className="text-gray-400">
                  admin@convoy.com / admin123
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-400">Supervisor:</span>
                <span className="text-gray-400">
                  super@convoy.com / super123
                </span>
              </div>
            </div>
          </div>
          {/* Security Footer */}
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500 flex items-center justify-center">
              <LockIcon className="w-3 h-3 mr-1" /> Authorized Personnel Only
            </p>
          </div>
        </div>
      </div>
    </div>;
};
export default AuthPage;