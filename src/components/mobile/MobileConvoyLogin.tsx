import React, { useState } from 'react';
import { TruckIcon, UserIcon, LockIcon, EyeIcon, EyeOffIcon, PhoneIcon } from 'lucide-react';
const MobileConvoyLogin: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginType, setLoginType] = useState<'driver' | 'convoy'>('driver');
  return <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] p-4">
      {/* Logo and Header */}
      <div className="flex flex-col items-center py-8">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ff8200] to-[#cc6600] flex items-center justify-center mb-4">
          <TruckIcon className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-white mb-1">
          Convoy Participation System
        </h1>
        <p className="text-sm text-gray-400">Driver Access Portal</p>
      </div>
      {/* Login Type Selection */}
      <div className="space-y-3 mb-6">
        <button onClick={() => setLoginType('driver')} className={`w-full p-4 rounded-lg flex items-center ${loginType === 'driver' ? 'bg-[#ff8200] text-white' : 'bg-[#1e293b]/80 text-gray-300'} transition-colors`}>
          <UserIcon className="w-5 h-5 mr-3" />
          <div className="text-left">
            <div className="font-medium">Driver Account</div>
            <div className="text-sm opacity-75">
              Full access to all convoy features
            </div>
          </div>
        </button>
        <button onClick={() => setLoginType('convoy')} className={`w-full p-4 rounded-lg flex items-center ${loginType === 'convoy' ? 'bg-[#ff8200] text-white' : 'bg-[#1e293b]/80 text-gray-300'} transition-colors`}>
          <TruckIcon className="w-5 h-5 mr-3" />
          <div className="text-left">
            <div className="font-medium">Convoy Direct Access</div>
            <div className="text-sm opacity-75">
              Quick access with convoy code
            </div>
          </div>
        </button>
      </div>
      {/* Login Form */}
      <form className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">Driver ID</label>
          <div className="relative">
            <input type="text" className="w-full bg-[#1e293b]/80 border border-white/10 rounded-lg px-4 py-3 text-white text-base focus:ring-2 focus:ring-[#ff8200] focus:border-transparent transition-all outline-none" placeholder="Enter your ID" />
            <UserIcon className="absolute right-4 top-3.5 h-5 w-5 text-gray-500" />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">Password</label>
          <div className="relative">
            <input type={showPassword ? 'text' : 'password'} className="w-full bg-[#1e293b]/80 border border-white/10 rounded-lg px-4 py-3 text-white text-base focus:ring-2 focus:ring-[#ff8200] focus:border-transparent transition-all outline-none" placeholder="Enter password" />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-3.5 text-gray-500">
              {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>
        <button type="submit" className="w-full bg-gradient-to-r from-[#ff8200] to-[#cc6600] text-white font-semibold py-4 px-4 rounded-lg shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 active:transform active:translate-y-0.5 transition-all">
          Sign In Securely
        </button>
      </form>
      {/* Quick Access Section */}
      <div className="mt-6">
        <button className="w-full bg-[#1e293b]/80 border border-white/10 text-gray-300 font-medium py-4 px-4 rounded-lg hover:bg-[#1e293b] transition-colors flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-[#ff8200]/20 flex items-center justify-center mr-2">
            <TruckIcon className="w-4 h-4 text-[#ff8200]" />
          </div>
          Quick Convoy Access
        </button>
      </div>
      {/* Emergency Contact */}
      <div className="mt-6 bg-red-500/10 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-red-400">
              Emergency Contact
            </div>
            <div className="text-lg font-bold text-red-500">
              1-800-CONVOY-911
            </div>
          </div>
          <a href="tel:1-800-266869911" className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
            <PhoneIcon className="w-6 h-6 text-red-500" />
          </a>
        </div>
      </div>
    </div>;
};
export default MobileConvoyLogin;