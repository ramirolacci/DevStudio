import React from 'react';
import DeveloperCard from './DeveloperCard';

const TeamSection = () => {
  const facuData = {
    name: "Facu Carrizo",
    title: "Full Stack Developer",
    tagline: "Bajista🎸 | Full Stack Dev💻 | Actor🎭 | Stargazing Scholar🔭🪐",
    description: "Soy un desarrollador Full Stack, apasionado por transformar ideas en soluciones digitales innovadoras y eficientes. Mi enfoque está en construir aplicaciones escalables y modernas, combinando las mejores prácticas de desarrollo con un diseño limpio y funcional.",
    skills: [
      "Experto en tecnologías frontend y backend",
      "Apasionado por la mejora continua, la colaboración y el aprendizaje constante",
      "Me gusta enfrentar desafíos complejos y convertirlos en código que impacta",
      "Enfoque en aplicaciones escalables y modernas"
    ],
    technologies: [
      { name: "JavaScript", level: 95 },
      { name: "Node.js", level: 90 },
      { name: "React", level: 92 },
      { name: "Angular", level: 85 },
      { name: ".NET", level: 88 },
      { name: "Java", level: 82 },
      { name: "Spring Boot", level: 80 },
      { name: "Maven", level: 78 },
      { name: "Python", level: 85 },
      { name: "Django", level: 78 },
      { name: "Flask", level: 80 },
      { name: "Tkinter", level: 75 },
      { name: "C++", level: 75 },
      { name: "MySQL", level: 88 },
      { name: "Bootstrap", level: 85 }
    ],
    hobbies: [
      "💪🏻 Entrenar",
      "🎮 Jugar videojuegos", 
      "🎭 Actuación y Teatro",
      "🎸 Tocar el Bajo"
    ],
    quote: "Transformando desafíos en código, y código en soluciones que impactan.",
    contacts: {
      email: "mailto:facu.carrizo@example.com",
      linkedin: "https://linkedin.com/in/facu-carrizo",
      github: "https://github.com/facu-carrizo",
      instagram: "https://instagram.com/facu.carrizo"
    },
    gradient: "from-purple-500 to-pink-500"
  };

  const ramiroData = {
    name: "Ramiro Lacci",
    title: "Full Stack Developer",
    tagline: "Desarrollador Full Stack | Innovación Digital | Soluciones Creativas",
    description: "Soy un desarrollador Full Stack especializado en HTML, CSS, JavaScript, Python y PHP. Me encanta aprender y construir algo nuevo, productivo, innovador y creativo. Tengo gran interés en el diseño web, desarrollo de aplicaciones web y marketing digital.",
    skills: [
      "🌱 Actualmente aprendiendo Java y .Net",
      "🌐 Colaboración en proyectos open source",
      "✔ Siempre dispuesto a ayudar y resolver problemas",
      "💡 Enfoque en soluciones innovadoras y productivas"
    ],
    technologies: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 93 },
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 88 },
      { name: "PHP", level: 85 },
      { name: "Java", level: 70 },
      { name: ".NET", level: 68 },
      { name: "MySQL", level: 82 },
      { name: "Git", level: 85 }
    ],
    hobbies: [
      "💪🏻 Ir al gimnasio",
      "🎮 Jugar videojuegos", 
      "🎵 Escuchar música",
      "📖 Leer libros de educación financiera"
    ],
    quote: "¡Contáctame y construyamos soluciones juntos que realmente marquen la diferencia!",
    contacts: {
      email: "mailto:ramiroalejandrolacci19@gmail.com",
      linkedin: "https://linkedin.com/in/ramiro-lacci",
      github: "https://github.com/ramiro-lacci"
    },
    gradient: "from-blue-500 to-teal-500"
  };

  return (
    <section id="equipo" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Nuestro Equipo
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Somos dos desarrolladores apasionados por crear soluciones tecnológicas 
            que impactan positivamente en las personas y las empresas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <DeveloperCard developer={facuData} />
          <DeveloperCard developer={ramiroData} />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;