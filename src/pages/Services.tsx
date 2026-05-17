import { motion } from 'motion/react';
import { 
  Building2, ShieldAlert, Crosshair, PackageSearch, 
  MapPin, Star, UserCheck, KeySquare, MonitorPlay, Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const allServices = [
  {
    title: 'Gardiennage professionnel',
    description: 'Protection physique de vos sites par des agents formés, dissuasifs et réactifs. Contrôle des entrées/sorties, rondes régulières et maintien de l\'ordre.',
    icon: Building2,
    benefits: ['Agents qualifiés et formés', 'Rondes diurnes et nocturnes', 'Rapports journaliers'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop'
  },
  {
    title: 'Sécurité VIP & Rapprochée',
    description: 'Service de protection rapprochée pour les personnalités, VIP et cadres dirigeants. Agents formés à la gestion de crise et aux mesures d\'évacuation.',
    icon: UserCheck,
    benefits: ['Chauffeurs et gardes du corps', 'Planification d\'itinéraires', 'Confidentialité stricte'],
    image: 'https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=1000&auto=format&fit=crop'
  },
  {
    title: 'Surveillance industrielle',
    description: 'Sécurisation des sites industriels, usines et entrepôts. Prévention des vols, protection des équipements lourds et respect des normes de sécurité.',
    icon: PackageSearch,
    benefits: ['Contrôle des flux routiers', 'Fouille des véhicules', 'Prévention incendie'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop'
  },
  {
    title: 'Sécurité des commerces',
    description: 'Lutte contre la démarque inconnue, prévention des vols à l\'étalage et sécurisation du personnel et des clients dans les centres commerciaux.',
    icon: Crosshair,
    benefits: ['Agents de sécurité magasin', 'Vidéosurveillance', 'Gestion des conflits'],
    image: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=1000&auto=format&fit=crop'
  },
  {
    title: 'Sécurité des chantiers',
    description: 'Protection des zones de construction contre le vol de matériel, le vandalisme et les intrusions en dehors des heures de travail.',
    icon: MapPin,
    benefits: ['Gardiennage de nuit', 'Contrôle d\'accès pointu', 'Sécurisation des engins'],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop'
  },
  {
    title: 'Sécurité événementielle',
    description: 'Gestion complète de la sécurité pour vos concerts, conférences, foires ou événements sportifs. Canalisations de foules et contrôle billets.',
    icon: Star,
    benefits: ['Palpation de sécurité', 'Gestion des VIP', 'Coordination avec les secours'],
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop'
  },
  {
    title: 'Escorte sécurisée',
    description: 'Transport et escorte de fonds, de biens de valeur ou de matériels sensibles avec des véhicules adaptés et un personnel surentraîné.',
    icon: ShieldAlert,
    benefits: ['Véhicules banalisés', 'Agents armés (selon la loi)', 'Procédure stricte'],
    image: 'https://images.unsplash.com/photo-1563284768-e392ff15201c?q=80&w=1000&auto=format&fit=crop'
  },
  {
    title: 'Contrôle d’accès',
    description: 'Installation et gestion de systèmes de contrôle d\'accès (badges, biométrie) pour limiter l\'entrée aux personnes autorisées.',
    icon: KeySquare,
    benefits: ['Gestion informatisée', 'Badges RFID', 'Filtrage à l\'accueil'],
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1000&auto=format&fit=crop'
  },
  {
    title: 'Télésurveillance',
    description: 'Surveillance à distance 24h/24 via des caméras CCTV avec un centre opérationnel prêt à déclencher une alerte en cas d\'anomalie.',
    icon: MonitorPlay,
    benefits: ['Caméras HD', 'Détection de mouvement', 'Enregistrement sécurisé'],
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1000&auto=format&fit=crop'
  },
  {
    title: 'Intervention d’urgence',
    description: 'Équipes d\'intervention rapide prêtes à se déployer sur votre site suite au déclenchement d\'une alarme ou d\'une alerte de télésurveillance.',
    icon: Zap,
    benefits: ['Patrouilles mobiles', 'Délais d\'intervention réduits', 'Levée de doute physique'],
    image: 'https://images.unsplash.com/photo-1626242207903-88bc117aadc8?q=80&w=1000&auto=format&fit=crop'
  }
];

export default function Services() {
  return (
    <div className="flex flex-col bg-gray-50 min-h-screen">
      {/* Services Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-sspv-blue-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop" 
            alt="Background Services" 
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
              Nos <span className="text-sspv-yellow">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
              Des solutions de sécurité professionnelles et sur mesure pour répondre aux exigences les plus strictes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {allServices.map((service, index) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-16 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative group">
                  <div className="absolute inset-0 bg-sspv-blue/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20 flex h-14 w-14 items-center justify-center rounded-xl bg-sspv-yellow text-sspv-blue shadow-lg">
                    <service.icon size={28} />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <h2 className="text-3xl lg:text-4xl font-bold font-heading text-sspv-blue">
                    {service.title}
                  </h2>
                  <div className="w-16 h-1 bg-sspv-yellow"></div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h4 className="font-bold font-heading text-sspv-blue mb-4">Avantages :</h4>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-700">
                          <Zap size={18} className="text-sspv-yellow flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Link 
                      to={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center justify-center px-6 py-3 bg-sspv-blue text-white font-semibold rounded hover:bg-sspv-yellow hover:text-sspv-blue transition-colors shadow-md"
                    >
                      Demander un devis
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
