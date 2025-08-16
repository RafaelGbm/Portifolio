import { Award, Star, Database } from "lucide-react";

export default function Certificados() {
  const certifications = [
    { name: 'Design Thinking', icon: <Award size={32} className="mx-auto mb-4 text-purple-400" /> },
    { name: 'Blockchain', icon: <Star size={32} className="mx-auto mb-4 text-purple-400" /> },
    { name: 'Formação Social e Sustentabilidade', icon: <Award size={32} className="mx-auto mb-4 text-purple-400" /> },
    { name: 'Big Data & Analytics', icon: <Database size={32} className="mx-auto mb-4 text-purple-400" /> },
  ];

  return (
    <section id="certificados" className="py-24 text-white text-center">
      {/* Título da seção */}
      <div className="px-6 lg:px-12">
        <h3 className="text-3xl font-bold mb-12">Certificados</h3>
      </div>

      {/* Grid de certificados */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-6 lg:px-12">
        {certifications.map((cert, idx) => (
          <div 
            key={idx}
            className="bg-white/10 p-8 rounded-xl shadow-lg
                       hover:shadow-purple-700 transform hover:scale-105
                       transition-all duration-300 flex flex-col items-center"
          >
            {cert.icon}
            <h4 className="text-xl font-semibold mt-2">{cert.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}