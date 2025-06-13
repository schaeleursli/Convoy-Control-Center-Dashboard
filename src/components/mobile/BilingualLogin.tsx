import React, { useState } from 'react';
import { TruckIcon, UserIcon, LockIcon, EyeIcon, EyeOffIcon, PhoneIcon, GlobeIcon } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
const BilingualLogin: React.FC = () => {
  const {
    language,
    setLanguage,
    t
  } = useLanguage();
  const [showPassword, setShowPassword] = useState(false);
  const [loginType, setLoginType] = useState<'driver' | 'convoy'>('driver');
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };
  return <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] p-4">
      {/* Language Toggle */}
      <button onClick={toggleLanguage} className="absolute top-4 right-4 p-2 bg-[#1e293b]/80 rounded-lg text-gray-300 hover:bg-[#1e293b] transition-colors flex items-center space-x-2">
        <GlobeIcon className="w-5 h-5" />
        <span>{language.toUpperCase()}</span>
      </button>
      {/* Logo and Header */}
      <div className="flex flex-col items-center py-8">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ff8200] to-[#cc6600] flex items-center justify-center mb-4">
          <TruckIcon className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-white mb-1">
          {t('convoy.convoy')} {t('nav.track')}
        </h1>
        <p className="text-sm text-gray-400">
          {language === 'en' ? 'Driver Access Portal' : 'Portal de Acceso del Conductor'}
        </p>
      </div>
      {/* Login Type Selection */}
      <div className="space-y-3 mb-6">
        <button onClick={() => setLoginType('driver')} className={`w-full p-4 rounded-lg flex items-center ${loginType === 'driver' ? 'bg-[#ff8200] text-white' : 'bg-[#1e293b]/80 text-gray-300'} transition-colors`}>
          <UserIcon className="w-5 h-5 mr-3" />
          <div className="text-left">
            <div className="font-medium">
              {language === 'en' ? 'Driver Account' : 'Cuenta de Conductor'}
            </div>
            <div className="text-sm opacity-75">
              {language === 'en' ? 'Full access to all convoy features' : 'Acceso completo a todas las funciones'}
            </div>
          </div>
        </button>
        <button onClick={() => setLoginType('convoy')} className={`w-full p-4 rounded-lg flex items-center ${loginType === 'convoy' ? 'bg-[#ff8200] text-white' : 'bg-[#1e293b]/80 text-gray-300'} transition-colors`}>
          <TruckIcon className="w-5 h-5 mr-3" />
          <div className="text-left">
            <div className="font-medium">
              {language === 'en' ? 'Convoy Direct Access' : 'Acceso Directo al Convoy'}
            </div>
            <div className="text-sm opacity-75">
              {language === 'en' ? 'Quick access with convoy code' : 'Acceso rápido con código de convoy'}
            </div>
          </div>
        </button>
      </div>
      {/* Login Form */}
      <form className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">
            {t('auth.driverId')}
          </label>
          <div className="relative">
            <input type="text" className="w-full bg-[#1e293b]/80 border border-white/10 rounded-lg px-4 py-3 text-white text-base focus:ring-2 focus:ring-[#ff8200] focus:border-transparent transition-all outline-none" placeholder={language === 'en' ? 'Enter your ID' : 'Ingrese su identificación'} />
            <UserIcon className="absolute right-4 top-3.5 h-5 w-5 text-gray-500" />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">
            {t('auth.password')}
          </label>
          <div className="relative">
            <input type={showPassword ? 'text' : 'password'} className="w-full bg-[#1e293b]/80 border border-white/10 rounded-lg px-4 py-3 text-white text-base focus:ring-2 focus:ring-[#ff8200] focus:border-transparent transition-all outline-none" placeholder={language === 'en' ? 'Enter password' : 'Ingrese su contraseña'} />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-3.5 text-gray-500">
              {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>
        <button type="submit" className="w-full bg-gradient-to-r from-[#ff8200] to-[#cc6600] text-white font-semibold py-4 px-4 rounded-lg shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 active:transform active:translate-y-0.5 transition-all">
          {t('auth.login')}
        </button>
      </form>
      {/* Emergency Contact */}
      <div className="mt-6 bg-red-500/10 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-red-400">
              {t('auth.emergencyContact')}
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
export default BilingualLogin;