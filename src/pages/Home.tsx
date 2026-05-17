import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ShieldCheck, Users, Eye, CheckCircle, 
  MapPin, Star, ShieldAlert, Award
} from 'lucide-react';

const stats = [
  { label: 'Agents formés', value: '500+' },
  { label: 'Clients satisfaits', value: '150+' },
  { label: 'Sites protégés', value: '80+' },
  { label: "Années d'expérience", value: '10+' },
];

const services = [
  {
    title: 'Gardiennage',
    description: 'Surveillance et protection continue de vos locaux professionnels ou résidentiels.',
    icon: ShieldCheck,
  },
  {
    title: 'Protection Rapprochée',
    description: 'Des agents qualifiés pour la sécurité VIP et l\'escorte de personnalités.',
    icon: Users,
  },
  {
    title: 'Sécurité Événementielle',
    description: 'Gestion de foule et sécurisation complète de vos événements.',
    icon: Star,
  },
  {
    title: 'Vidéosurveillance',
    description: 'Systèmes de contrôle d\'accès et télésurveillance 24h/24.',
    icon: Eye,
  },
];

const reasons = [
  'Agents rigoureusement formés',
  'Disponibilité 24h/24 et 7j/7',
  'Réactivité et intervention rapide',
  'Professionnalisme exemplaire',
  'Respect strict des consignes',
  'Confidentialité absolue',
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Fallback image if needed */}
          <div className="absolute inset-0 bg-sspv-blue-dark mix-blend-multiply opacity-60 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop" 
            alt="Security professionals in action" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-sspv-yellow/20 text-sspv-yellow font-medium text-sm mb-6 border border-sspv-yellow/30">
              Société de Sécurité Privée des Volontaires
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-6">
              Votre sécurité, <br/>
              <span className="text-sspv-yellow">notre priorité.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 font-light">
              Des solutions de sécurité sur mesure au Burkina Faso. 
              Sécurité, confiance et professionnalisme pour protéger ce qui compte pour vous.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/contact" 
                className="w-full sm:w-auto px-8 py-4 bg-sspv-yellow text-sspv-blue font-bold rounded hover:bg-yellow-500 transition-colors shadow-lg hover:shadow-xl text-center"
              >
                Demander un devis
              </Link>
              <a 
                href="https://wa.me/22678923910" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-bold rounded backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors text-center"
              >
                Contact WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-sspv-blue font-heading font-bold text-3xl md:text-4xl">
                Qui sommes-nous ?
              </h2>
              <div className="w-20 h-1.5 bg-sspv-yellow mb-6"></div>
              <p className="text-gray-600 leading-relaxed text-lg">
                La Société de Sécurité Privée des Volontaires (SSPV) est une entreprise leader au Burkina Faso, 
                spécialisée dans la protection des personnes, des biens et des installations. 
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Forts de notre expertise et de notre connaissance du terrain, nous déployons des agents rigoureusement 
                formés pour assurer votre tranquillité d'esprit en toutes circonstances.
              </p>
              <ul className="space-y-3 mt-6">
                <li className="flex items-center gap-3 text-sspv-blue font-medium">
                  <CheckCircle className="text-sspv-yellow" size={20} /> Mission : Protéger avec excellence
                </li>
                <li className="flex items-center gap-3 text-sspv-blue font-medium">
                  <CheckCircle className="text-sspv-yellow" size={20} /> Vision : Devenir la référence en Afrique de l'Ouest
                </li>
                <li className="flex items-center gap-3 text-sspv-blue font-medium">
                  <CheckCircle className="text-sspv-yellow" size={20} /> Valeurs : Intégrité, Vigilance, Courage
                </li>
              </ul>
              <div className="pt-4">
                <Link to="/about" className="text-sspv-blue font-bold hover:text-sspv-yellow transition-colors inline-flex items-center gap-2">
                  En savoir plus sur nous <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="relative"
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1590424564858-a83ad1c168ff?q=80&w=2670&auto=format&fit=crop" 
                  alt="Équipe de sécurité SSPV" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-sspv-blue p-8 rounded-lg shadow-xl text-white">
                <div className="flex items-center gap-4">
                  <Award size={40} className="text-sspv-yellow" />
                  <div>
                    <div className="text-2xl font-bold font-heading text-sspv-yellow">Agrée</div>
                    <div className="text-sm">Par l'État du Burkina Faso</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sspv-blue font-heading font-bold text-3xl md:text-4xl mb-4">
              Nos Domaines d'Expertise
            </h2>
            <div className="w-20 h-1.5 bg-sspv-yellow mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              Des solutions de sécurité complètes adaptées à chaque besoin, des résidences privées aux grands complexes industriels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-sspv-yellow/50 transition-colors group cursor-pointer"
              >
                <div className="h-14 w-14 rounded-lg bg-sspv-blue/5 flex items-center justify-center mb-6 group-hover:bg-sspv-blue transition-colors">
                  <service.icon size={28} className="text-sspv-blue group-hover:text-sspv-yellow transition-colors" />
                </div>
                <h3 className="text-xl font-bold font-heading text-sspv-blue mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <Link to="/services" className="text-sm font-bold text-sspv-yellow group-hover:text-sspv-blue transition-colors flex items-center gap-1">
                  Découvrir <span aria-hidden="true">&rarr;</span>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex px-8 py-4 bg-sspv-blue text-white font-bold rounded hover:bg-sspv-blue-dark transition-colors shadow-lg">
              Voir tous nos services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-sspv-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-10 w-96 h-96 bg-sspv-yellow rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 -right-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="text-4xl md:text-5xl font-extrabold font-heading text-sspv-yellow">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base font-medium text-gray-300 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1585728748176-35fe200ed43d?q=80&w=1000&auto=format&fit=crop" 
                  alt="Security Guard" 
                  className="rounded-lg h-64 w-full object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1000&auto=format&fit=crop" 
                  alt="Surveillance" 
                  className="rounded-lg h-64 w-full object-cover mt-8"
                />
              </div>
            </motion.div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-sspv-blue font-heading font-bold text-3xl md:text-4xl mb-4">
                  Pourquoi Choisir SSPV ?
                </h2>
                <div className="w-20 h-1.5 bg-sspv-yellow mb-6"></div>
                <p className="text-gray-600 text-lg">
                  La sécurité n'est pas une option, c'est une nécessité. Nous nous engageons à offrir 
                  le plus haut niveau de service pour garantir la protection totale de nos clients.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {reasons.map((reason, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 border border-gray-100"
                  >
                    <ShieldAlert className="text-sspv-yellow flex-shrink-0" size={20} />
                    <span className="font-medium text-sspv-blue font-heading tracking-tight">{reason}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sspv-blue font-heading font-bold text-3xl md:text-4xl mb-4">
              Ce que disent nos clients
            </h2>
            <div className="w-20 h-1.5 bg-sspv-yellow mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "Une équipe très professionnelle et toujours ponctuelle. Nous leur confions la sécurité de nos chantiers en toute sérénité.", author: "Directeur BTP", company: "Entreprise de Construction B." },
              { text: "Les agents de SSPV sont discrets et efficaces. Leur réactivité lors de nos événements est exemplaire.", author: "Organisatrice", company: "Agence Événementielle Ouaga" },
              { text: "Depuis que nous avons confié la sécurité de notre résidence à SSPV, nous dormons tranquilles.", author: "Client Résidentiel", company: "Quartier Ouaga 2000" }
            ].map((testimonial, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <div className="flex gap-1 text-sspv-yellow mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-bold text-sspv-blue font-heading">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-sspv-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-sspv-blue mb-6">
            Prêt à sécuriser vos installations ?
          </h2>
          <p className="text-xl text-sspv-blue-dark/80 mb-10">
            Contactez nos experts pour une évaluation gratuite de vos besoins en sécurité.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link 
                to="/contact" 
                className="px-8 py-4 bg-sspv-blue text-white font-bold rounded hover:bg-sspv-blue-dark transition-colors shadow-lg"
              >
                Demander un devis gratuit
              </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
