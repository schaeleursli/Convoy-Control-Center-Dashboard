import React, { useEffect, useState, createContext, useContext } from 'react';
type Language = 'en' | 'es';
type Region = 'US' | 'MX' | 'ES';
interface LanguageContextType {
  language: Language;
  region: Region;
  setLanguage: (lang: Language) => void;
  setRegion: (region: Region) => void;
  t: (key: string) => string;
}
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
export const languageContent = {
  en: {
    nav: {
      home: 'Home',
      track: 'Track',
      setup: 'Setup',
      help: 'Help',
      profile: 'Profile'
    },
    convoy: {
      convoy: 'Convoy',
      section: 'Section',
      loadVehicle: 'Load Vehicle',
      escort: 'Escort',
      checkpoint: 'Checkpoint',
      route: 'Route',
      emergency: 'Emergency'
    },
    actions: {
      takePhoto: 'Take Photo',
      sendReport: 'Send Report',
      checkIn: 'Check In',
      startTracking: 'Start Tracking',
      emergency: 'Emergency'
    },
    status: {
      active: 'Active',
      ready: 'Ready',
      pending: 'Pending',
      completed: 'Completed',
      delayed: 'Delayed'
    },
    auth: {
      login: 'Sign In Securely',
      driverId: 'Driver ID',
      password: 'Password',
      rememberMe: 'Remember me',
      forgotPassword: 'Forgot password?',
      emergencyContact: 'Emergency Contact'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      track: 'Ruta',
      setup: 'Config',
      help: 'Ayuda',
      profile: 'Perfil'
    },
    convoy: {
      convoy: 'Convoy',
      section: 'Sección',
      loadVehicle: 'Vehículo de Carga',
      escort: 'Escolta',
      checkpoint: 'Punto de Control',
      route: 'Ruta',
      emergency: 'Emergencia'
    },
    actions: {
      takePhoto: 'Tomar Foto',
      sendReport: 'Enviar Reporte',
      checkIn: 'Registrarse',
      startTracking: 'Iniciar Seguimiento',
      emergency: 'Emergencia'
    },
    status: {
      active: 'Activo',
      ready: 'Listo',
      pending: 'Pendiente',
      completed: 'Completado',
      delayed: 'Retrasado'
    },
    auth: {
      login: 'Iniciar Sesión Segura',
      driverId: 'ID del Conductor',
      password: 'Contraseña',
      rememberMe: 'Recordarme',
      forgotPassword: '¿Olvidó su contraseña?',
      emergencyContact: 'Contacto de Emergencia'
    }
  }
};
export const LanguageProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [region, setRegionState] = useState<Region>('US');
  useEffect(() => {
    const storedLang = localStorage.getItem('preferredLanguage') as Language;
    const storedRegion = localStorage.getItem('preferredRegion') as Region;
    if (storedLang) {
      setLanguageState(storedLang);
    } else {
      const browserLang = navigator.language.substring(0, 2) as Language;
      setLanguageState(browserLang === 'es' ? 'es' : 'en');
    }
    if (storedRegion) {
      setRegionState(storedRegion);
    }
  }, []);
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('preferredLanguage', lang);
    document.documentElement.setAttribute('lang', lang);
  };
  const setRegion = (reg: Region) => {
    setRegionState(reg);
    localStorage.setItem('preferredRegion', reg);
  };
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = languageContent[language];
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        console.warn(`Translation missing for key: ${key}`);
        return key;
      }
    }
    return value;
  };
  return <LanguageContext.Provider value={{
    language,
    region,
    setLanguage,
    setRegion,
    t
  }}>
      {children}
    </LanguageContext.Provider>;
};
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};