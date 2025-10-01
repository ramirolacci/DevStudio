import React from 'react';
import { Mail, Linkedin, Github, Instagram, ExternalLink } from 'lucide-react';

interface Technology {
  name: string;
  level: number;
}

interface Developer {
  name: string;
  title: string;
  tagline: string;
  description: string;
  skills: string[];
  technologies: Technology[];
  hobbies?: string[];
  quote: string;
  contacts: {
    email: string;
    linkedin: string;
    github: string;
    instagram?: string;
  };
  gradient: string;
}

interface DeveloperCardProps {
  developer: Developer;
}

const DeveloperCard: React.FC<DeveloperCardProps> = ({ developer }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Header con gradiente */}
      <div className={`h-32 bg-gradient-to-r ${developer.gradient} relative`}>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute -bottom-12 left-6">
          <div className="w-24 h-24 bg-white dark:bg-gray-700 rounded-full shadow-lg flex items-center justify-center overflow-hidden">
            <img 
              src={developer.name === 'Facu Carrizo' ? '/facu.jpg' : '/rami.png'} 
              alt={developer.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="pt-16 px-6 pb-6">
        {/* Información básica */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{developer.name}</h3>
          <p className="text-blue-600 font-semibold mb-2">{developer.title}</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">{developer.tagline}</p>
        </div>

        {/* Descripción */}
        <div className="mb-6">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{developer.description}</p>
        </div>

        {/* Habilidades */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Habilidades</h4>
          <ul className="space-y-2">
            {developer.skills.map((skill, index) => (
              <li key={index} className="text-gray-700 dark:text-gray-300 text-sm flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Tecnologías */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Tecnologías</h4>
          <div className="space-y-3">
            {developer.technologies.slice(0, 8).map((tech, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
                <div className="flex-1 mx-3 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div 
                    className={`h-2 bg-gradient-to-r ${developer.gradient} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${tech.level}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">{tech.level}%</span>
              </div>
            ))}
            {developer.technologies.length > 8 && (
              <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Y {developer.technologies.length - 8} tecnologías más...
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Hobbies (solo para Ramiro) */}
        {developer.hobbies && (
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Fuera del código</h4>
            <div className="space-y-2">
              {developer.hobbies.map((hobby, index) => (
                <div key={index} className="flex items-center text-gray-700 dark:text-gray-300 text-sm">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                  {hobby}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quote */}
        <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border-l-4 border-blue-500">
          <p className="text-gray-700 dark:text-gray-300 italic">"{developer.quote}"</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">— {developer.name}</p>
        </div>

        {/* Contactos */}
        <div className="flex justify-center space-x-4">
          <a 
            href={developer.contacts.email} 
            className="w-10 h-10 bg-gray-100 dark:bg-gray-600 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300"
            title="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a 
            href={developer.contacts.linkedin} 
            className="w-10 h-10 bg-gray-100 dark:bg-gray-600 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300"
            title="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href={developer.contacts.github} 
            className="w-10 h-10 bg-gray-100 dark:bg-gray-600 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300"
            title="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          {developer.contacts.instagram && (
            <a 
              href={developer.contacts.instagram} 
            className="w-10 h-10 bg-gray-100 dark:bg-gray-600 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300"
              title="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeveloperCard;