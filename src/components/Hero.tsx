import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToTeam = () => {
    const element = document.getElementById('equipo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background con las fotos */}
      <div className="absolute inset-0 z-0">
        {/* Foto de Facu - lado izquierdo */}
        <div className="absolute top-0 left-0 w-1/2 h-full">
          <img 
            src="/facu.jpg" 
            alt="Facu Carrizo" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/60"></div>
        </div>
        
        {/* Foto de Ramiro - lado derecho */}
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <img 
            src="/rami.png" 
            alt="Ramiro Lacci" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-purple-900/80 to-purple-600/60"></div>
        </div>
        
        {/* Overlay central para mejor legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/30 to-transparent"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-1">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-white/5 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-white/5 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-white/5 animate-ping"></div>
      </div>

      <div className="relative z-40 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            <span className="text-blue-400">Dev</span><span className="typewriter-studio text-white">Studio</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
            Desarrolladores Full Stack especializados en crear soluciones 
            digitales innovadoras que transforman ideas en realidad.
          </p>
          
          {/* Etiquetas con nombres */}
          <div className="flex justify-center items-center space-x-8 mb-8">
            <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl">
              <span className="text-lg font-bold text-gray-800">Facu Carrizo</span>
              <span className="block text-sm text-blue-600">Full Stack Developer</span>
            </div>
            <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl">
              <span className="text-lg font-bold text-gray-800">Ramiro Lacci</span>
              <span className="block text-sm text-purple-600">Full Stack Developer</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
            >
              Contactar
            </button>
          </div>
        </div>
        
        <div className="animate-bounce mt-16">
          <button onClick={scrollToTeam} className="text-white/80 hover:text-white transition-colors">
            <ArrowDown className="w-8 h-8 mx-auto drop-shadow-lg" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;