import React from 'react';
import { Code2, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo y descripción */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">DevStudio</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Equipo de desarrolladores Full Stack especializados en soluciones
              digitales innovadoras y escalables.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Servicios</h4>
            <ul className="space-y-2 text-gray-400 dark:text-gray-300">
              <li>Desarrollo Web Frontend</li>
              <li>Desarrollo Backend</li>
              <li>Aplicaciones Full Stack</li>
              <li>Modelado 3D</li>
              <li>Desarrollo de AR</li>
              <li>Desarrollo de agentes IA</li>
              <li>Consultoría Técnica</li>
              <li>Arquitectura de Software</li>
            </ul>
          </div>

          {/* Tecnologías principales */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Tecnologías</h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'Python', 'JavaScript', '.NET', 'Java', 'PHP'].map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1 bg-gray-800 dark:bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="text-center">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} DevStudio. Transformando ideas en código.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;