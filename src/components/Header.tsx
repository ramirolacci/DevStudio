import React, { useState, useEffect } from 'react';
import { Code2, Menu, X, Moon, Sun, Globe } from 'lucide-react';

// Contexto para el tema y idioma
interface AppContextType {
  isDarkMode: boolean;
  currentLanguage: string;
  toggleDarkMode: () => void;
  setLanguage: (lang: string) => void;
}

export const AppContext = React.createContext<AppContextType | null>(null);

interface HeaderProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  currentLanguage: string;
  setCurrentLanguage: (lang: string) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  isDarkMode, 
  setIsDarkMode, 
  currentLanguage, 
  setCurrentLanguage 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'pt', name: 'Português', flag: '🇧🇷' }
  ];

  // Textos según idioma
  const texts = {
    es: {
      inicio: 'Inicio',
      equipo: 'Equipo',
      contacto: 'Contacto',
      darkMode: 'Modo oscuro',
      lightMode: 'Modo claro',
      changeLanguage: 'Cambiar idioma'
    },
    en: {
      inicio: 'Home',
      equipo: 'Team',
      contacto: 'Contact',
      darkMode: 'Dark mode',
      lightMode: 'Light mode',
      changeLanguage: 'Change language'
    },
    pt: {
      inicio: 'Início',
      equipo: 'Equipe',
      contacto: 'Contato',
      darkMode: 'Modo escuro',
      lightMode: 'Modo claro',
      changeLanguage: 'Mudar idioma'
    }
  };

  const currentTexts = texts[currentLanguage as keyof typeof texts] || texts.es;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
  };

  const toggleLanguage = () => {
    const currentIndex = languages.findIndex(lang => lang.code === currentLanguage);
    const nextIndex = (currentIndex + 1) % languages.length;
    const newLanguage = languages[nextIndex].code;
    setCurrentLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === currentLanguage) || languages[0];
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    } z-50`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className={`text-xl font-bold transition-colors ${
              isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'
            }`}>
              Tech Development
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className={`hover:text-blue-500 transition-colors ${
                isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'
              }`}
            >
              {currentTexts.inicio}
            </button>
            <button 
              onClick={() => scrollToSection('equipo')}
              className={`hover:text-blue-500 transition-colors ${
                isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'
              }`}
            >
              {currentTexts.equipo}
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className={`hover:text-blue-500 transition-colors ${
                isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'
              }`}
            >
              {currentTexts.contacto}
            </button>
            
            {/* Controles adicionales */}
            <div className="flex items-center space-x-4 ml-4">
              {/* Toggle modo oscuro */}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-colors ${
                  isScrolled 
                    ? 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300' 
                    : 'hover:bg-white/10 text-white'
                }`}
                title={isDarkMode ? currentTexts.lightMode : currentTexts.darkMode}
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              {/* Toggle idioma */}
              <button
                onClick={toggleLanguage}
                className={`flex items-center space-x-1 p-2 rounded-full transition-colors ${
                  isScrolled 
                    ? 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300' 
                    : 'hover:bg-white/10 text-white'
                }`}
                title={currentTexts.changeLanguage}
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">
                  {getCurrentLanguage().flag}
                </span>
              </button>
            </div>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`} />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-700 z-50">
            <nav className="flex flex-col py-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="px-6 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-500"
              >
                {currentTexts.inicio}
              </button>
              <button 
                onClick={() => scrollToSection('equipo')}
                className="px-6 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-500"
              >
                {currentTexts.equipo}
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="px-6 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-500"
              >
                {currentTexts.contacto}
              </button>
              
              {/* Controles móviles */}
              <div className="px-6 py-3 border-t border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center">
                  <button
                    onClick={toggleDarkMode}
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-500"
                  >
                    {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    <span className="text-sm">{isDarkMode ? currentTexts.lightMode : currentTexts.darkMode}</span>
                  </button>
                  
                  <button
                    onClick={toggleLanguage}
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-500"
                  >
                    <Globe className="w-4 h-4" />
                    <span className="text-sm">{getCurrentLanguage().name}</span>
                  </button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;