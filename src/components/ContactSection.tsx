import React from 'react';
import { Mail, MessageCircle, Coffee, X, User, Phone, Github } from 'lucide-react';

const ContactSection = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = React.useState(false);
  const [isGithubModalOpen, setIsGithubModalOpen] = React.useState(false);

  const teamEmails = [
    {
      name: 'Facu Carrizo',
      email: 'facu14carrizo@gmail.com',
      role: 'Full Stack Developer',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Ramiro Lacci', 
      email: 'ramiroalejandrolacci19@gmail.com',
      role: 'Full Stack Developer',
      color: 'from-blue-500 to-teal-500'
    }
  ];

  const teamGithub = [
    {
      name: 'Facu Carrizo',
      username: 'Facu14Carrizo',
      role: 'Full Stack Developer',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Ramiro Lacci',
      username: 'ramirolacci',
      role: 'Full Stack Developer',
      color: 'from-blue-500 to-teal-500'
    }
  ];

  const teamWhatsApp = [
    {
      name: 'Facu Carrizo',
      phone: '+54 9 1163704522',
      role: 'Full Stack Developer',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Ramiro Lacci',
      phone: '+54 9 3876117799',
      role: 'Full Stack Developer',
      color: 'from-blue-500 to-teal-500'
    }
  ];
  const handleEmailClick = (email: string) => {
    window.location.href = `mailto:${email}`;
    setIsModalOpen(false);
  };

  const handleWhatsAppClick = (phone: string) => {
    const whatsappUrl = `https://wa.me/${phone.replace(/\s/g, '')}`;
    window.open(whatsappUrl, '_blank');
    setIsWhatsAppModalOpen(false);
  };

  const handleGithubClick = (username: string) => {
    const githubUrl = `https://github.com/${username}`;
    window.open(githubUrl, '_blank');
    setIsGithubModalOpen(false);
  };
  return (
    <section id="contacto" className="py-20 bg-white dark:bg-gray-900 relative transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            ¿Trabajamos Juntos?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Si tienes un proyecto en mente o necesitas desarrolladores comprometidos 
            con la excelencia, no dudes en contactarnos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="text-center p-6 rounded-xl bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors block"
          >
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email Directo</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Escríbenos para discutir tu proyecto</p>
          </button>

          <button 
            onClick={() => setIsWhatsAppModalOpen(true)}
            className="text-center p-6 rounded-xl bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors block w-full"
          >
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Consulta Rápida</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Pregúntanos sobre cualquier tecnología</p>
          </button>

          <div className="text-center p-6 rounded-xl bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Coffee className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Café Virtual</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Charlemos sobre ideas innovadoras</p>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => setIsGithubModalOpen(true)}
              className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:border-blue-500 hover:text-blue-500 transition-all duration-300"
            >
              Ver Perfiles Completos
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
            {/* Header del modal */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white relative">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-2xl font-bold mb-2">Contactar al Equipo</h3>
              <p className="text-blue-100">Elige con quién quieres comunicarte</p>
            </div>

            {/* Contenido del modal */}
            <div className="p-6">
              <div className="space-y-4">
                {teamEmails.map((member, index) => (
                  <button
                    key={index}
                    onClick={() => handleEmailClick(member.email)}
                    className="w-full p-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:border-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 text-left group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${member.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                          {member.name}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{member.role}</p>
                        <p className="text-sm text-blue-600 font-medium">{member.email}</p>
                      </div>
                      <Mail className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-600">
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  Haz clic en cualquier opción para abrir tu cliente de correo
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal WhatsApp */}
      {isWhatsAppModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
            {/* Header del modal */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-white relative">
              <button
                onClick={() => setIsWhatsAppModalOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-2xl font-bold mb-2">WhatsApp</h3>
              <p className="text-green-100">Chatea directamente con nosotros</p>
            </div>

            {/* Contenido del modal */}
            <div className="p-6">
              <div className="space-y-4">
                {teamWhatsApp.map((member, index) => (
                  <button
                    key={index}
                    onClick={() => handleWhatsAppClick(member.phone)}
                    className="w-full p-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:border-green-300 hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300 text-left group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${member.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-green-600 transition-colors">
                          {member.name}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{member.role}</p>
                        <p className="text-sm text-green-600 font-medium">{member.phone}</p>
                      </div>
                      <MessageCircle className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors" />
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-600">
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  Haz clic en cualquier opción para abrir WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal GitHub */}
      {isGithubModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
            {/* Header del modal */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 text-white relative">
              <button
                onClick={() => setIsGithubModalOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-2xl font-bold mb-2">Perfiles de GitHub</h3>
              <p className="text-gray-300">Explora nuestros proyectos y código</p>
            </div>

            {/* Contenido del modal */}
            <div className="p-6">
              <div className="space-y-4">
                {teamGithub.map((member, index) => (
                  <button
                    key={index}
                    onClick={() => handleGithubClick(member.username)}
                    className="w-full p-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:border-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 text-left group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${member.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <Github className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                          {member.name}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{member.role}</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">@{member.username}</p>
                      </div>
                      <Github className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-600">
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  Haz clic en cualquier perfil para ver sus proyectos en GitHub
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;