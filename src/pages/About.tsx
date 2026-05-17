import { motion } from 'motion/react';
import { Target, Flag, ShieldCheck, Award, HeartHandshake, Eye } from 'lucide-react';

const timeline = [
  { year: '2014', title: 'Création de SSPV', description: 'Lancement avec une première équipe de 20 agents formés.' },
  { year: '2017', title: 'Expansion Nationale', description: 'Ouverture de nouvelles agences à Bobo-Dioulasso et Koudougou.' },
  { year: '2020', title: 'Département Télésurveillance', description: 'Création du centre opérationnel de télésurveillance et interventions 24/7.' },
  { year: '2023', title: 'Certification Qualité', description: 'Obtention de normes de qualité confirmant notre professionnalisme.' },
];

const values = [
  { icon: ShieldCheck, title: 'Vigilance absolue', text: 'Une attention de tous les instants pour prévenir tout risque.' },
  { icon: HeartHandshake, title: 'Intégrité', text: 'Honnêteté et transparence dans toutes nos actions et rapports.' },
  { icon: Award, title: 'Professionnalisme', text: 'Des agents formés, équipés et respectueux des protocoles.' },
  { icon: Target, title: 'Réactivité', text: 'Une capacité d\'action immédiate face aux imprévus.' },
];

export default function About() {
  return (
    <div className="flex flex-col bg-white min-h-screen">
      {/* About Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-sspv-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <img 
            src="https://images.unsplash.com/photo-1590424564858-a83ad1c168ff?q=80&w=2670&auto=format&fit=crop" 
            alt="About Background" 
            className="w-full h-full object-cover object-center grayscale"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6">
              À propos de <span className="text-sspv-yellow">SSPV</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
              Notre histoire, nos valeurs et notre passion pour la sécurité de nos clients au Burkina Faso.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro & Philosophy */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl lg:text-4xl font-bold font-heading text-sspv-blue">
                Notre Philosophie de Sécurité
              </h2>
              <div className="w-20 h-1.5 bg-sspv-yellow"></div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Fondée à Ouagadougou (Kamboincin), la Société de Sécurité Privée des Volontaires (SSPV) est née d'un constat simple : la sécurité moderne exige plus que de la simple présence. 
                Elle demande de l'intelligence stratégique, une formation continue, et une capacité d'adaptation aux nouvelles menaces.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Notre philosophie repose sur l'anticipation. Nous croyons fermement qu'une bonne sécurité est d'abord préventive. 
                C'est pourquoi nous investissons massivement dans la formation de nos agents et dans les technologies de surveillance.
              </p>
              
              <div className="flex gap-4 pt-6">
                <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100 flex-1">
                  <div className="text-3xl font-bold text-sspv-yellow mb-2 font-heading">10+</div>
                  <div className="text-sm font-medium text-sspv-blue">Années d'excellence</div>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100 flex-1">
                  <div className="text-3xl font-bold text-sspv-yellow mb-2 font-heading">24/7</div>
                  <div className="text-sm font-medium text-sspv-blue">Opérationnel</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                 <img 
                  src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop" 
                  alt="Fondateur SSPV" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 lg:-left-12 bg-white p-6 rounded-xl shadow-xl w-72">
                <p className="italic text-gray-600 mb-4 text-sm">
                  "La confiance ne s'achète pas, elle se gagne au quotidien par le professionnalisme et la rigueur."
                </p>
                <div className="font-bold text-sspv-blue font-heading">L'Équipe Dirigeante</div>
                <div className="text-xs text-sspv-yellow uppercase font-bold tracking-wider mt-1">SSPV Burkina</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-sspv-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-white/5 p-8 rounded-2xl border border-white/10"
            >
              <div className="h-16 w-16 bg-sspv-yellow rounded-xl flex items-center justify-center mb-8">
                <Flag size={32} className="text-sspv-blue" />
              </div>
              <h3 className="text-3xl font-bold font-heading mb-4">Notre Mission</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Garantir la quiétude de nos clients en offrant des services de sécurité de haute qualité, 
                adaptés à leurs besoins spécifiques, dans le strict respect de la loi et de la dignité humaine.
              </p>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="bg-white/5 p-8 rounded-2xl border border-white/10"
            >
              <div className="h-16 w-16 bg-sspv-yellow rounded-xl flex items-center justify-center mb-8">
                <Eye size={32} className="text-sspv-blue" />
              </div>
              <h3 className="text-3xl font-bold font-heading mb-4">Notre Vision</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Être reconnue comme l'entreprise de sécurité privée de référence au Burkina Faso, 
                innovante, intègre et engagée dans le développement socio-économique par la création 
                d'emplois durables.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading text-sspv-blue">
              Notre Évolution
            </h2>
            <div className="w-20 h-1.5 bg-sspv-yellow mx-auto mt-4"></div>
          </div>
          
          <div className="relative border-l-4 border-sspv-yellow/30 ml-4 md:ml-1/2">
            {timeline.map((item, index) => (
              <motion.div 
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-12 ml-8 relative"
              >
                <div className="absolute -left-[45px] bg-white h-6 w-6 rounded-full border-4 border-sspv-yellow"></div>
                <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold font-heading text-sspv-yellow mb-2">{item.year}</div>
                  <h4 className="text-xl font-bold text-sspv-blue mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values & Quality */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading text-sspv-blue">
              Nos Valeurs et Engagement Qualité
            </h2>
            <div className="w-20 h-1.5 bg-sspv-yellow mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <motion.div 
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md text-center border-b-4 hover:border-sspv-yellow transition-colors"
                style={{ borderColor: 'transparent' }} // Default state for hover effect
                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#D4A017'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}
              >
                <div className="mx-auto h-16 w-16 bg-sspv-blue/5 rounded-full flex items-center justify-center mb-6 text-sspv-blue">
                  <val.icon size={32} />
                </div>
                <h4 className="text-xl font-bold font-heading text-sspv-blue mb-4">{val.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{val.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 bg-sspv-blue p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center gap-8 justify-between">
            <div className="text-white max-w-2xl">
              <h3 className="text-2xl font-bold font-heading mb-4">Certifications et Agréments</h3>
              <p className="text-gray-300">
                SSPV opère dans le plus strict respect de la législation burkinabè sur la sécurité privée. 
                Toutes nos activités sont agréées par letat, et notre personnel est déclaré et rigoureusement encadré.
              </p>
            </div>
            <div className="flex-shrink-0">
               <Award size={80} className="text-sspv-yellow opacity-80" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
