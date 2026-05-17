import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Upload, FileText, CheckCircle, Briefcase, GraduationCap, Users } from 'lucide-react';

const conditions = [
  "Être de nationalité burkinabè",
  "Avoir au moins 21 ans et au plus 45 ans",
  "Casier judiciaire vierge",
  "Bonne condition physique",
  "Savoir lire et écrire le français",
  "Accepter de travailler en équipe et de nuit", "Formation militaire ou paramilitaire (un atout)"
];

const profils = [
  { title: "Agent de Sécurité (Gardiennage)", desc: "Surveillance de sites, contrôle d'accès et rondes de sécurité." },
  { title: "Agent de Protection Rapprochée", desc: "Expérience exigée, formation spécifique pour l'escorte VIP." },
  { title: "Opérateur de Télésurveillance", desc: "Maîtrise de l'outil informatique, forte concentration et réactivité." },
  { title: "Chef d'Équipe / Superviseur", desc: "Expérience en gestion d'équipe de sécurité et reporting." }
];

export default function Recruitment() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      // Reset after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="flex flex-col bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-sspv-blue overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6">
              Rejoignez <span className="text-sspv-yellow">Notre Équipe</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
              Bâtissez une carrière solide au sein d'une entreprise leader dans la sécurité privée au Burkina Faso.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            
            {/* Info Section */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="text-2xl font-bold font-heading text-sspv-blue mb-4 flex items-center gap-3">
                  <Briefcase className="text-sspv-yellow" />
                  Profils Recherchés
                </h2>
                <div className="space-y-4 mt-6">
                  {profils.map((profil, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                      <h4 className="font-bold text-sspv-blue mb-1">{profil.title}</h4>
                      <p className="text-sm text-gray-600">{profil.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-heading text-sspv-blue mb-4 flex items-center gap-3">
                  <CheckCircle className="text-sspv-yellow" />
                  Conditions Requises
                </h2>
                <ul className="space-y-3 mt-6 bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                  {conditions.map((cond, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-sspv-yellow mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{cond}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
                <h2 className="text-3xl font-bold font-heading text-sspv-blue mb-2">Formulaire de Candidature</h2>
                <p className="text-gray-600 mb-8">Remplissez ce formulaire et joignez votre CV. Notre service RH vous contactera si votre profil correspond.</p>

                {formStatus === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 p-8 rounded-xl text-center"
                  >
                    <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
                    <h3 className="text-xl font-bold text-green-800 mb-2">Candidature Envoyée !</h3>
                    <p className="text-green-700">Nous avons bien reçu votre dossier. Nous vous recontacterons très prochainement.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="nom" className="text-sm font-medium text-gray-700">Nom(s)</label>
                        <input type="text" id="nom" required className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-sspv-blue focus:ring-1 focus:ring-sspv-blue outline-none transition-colors" placeholder="Votre nom" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="prenom" className="text-sm font-medium text-gray-700">Prénom(s)</label>
                        <input type="text" id="prenom" required className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-sspv-blue focus:ring-1 focus:ring-sspv-blue outline-none transition-colors" placeholder="Votre prénom" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="telephone" className="text-sm font-medium text-gray-700">Téléphone</label>
                        <input type="tel" id="telephone" required className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-sspv-blue focus:ring-1 focus:ring-sspv-blue outline-none transition-colors" placeholder="+226 XX XX XX XX" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email (Optionnel)</label>
                        <input type="email" id="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-sspv-blue focus:ring-1 focus:ring-sspv-blue outline-none transition-colors" placeholder="votre@email.com" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="poste" className="text-sm font-medium text-gray-700">Poste visé</label>
                      <select id="poste" required className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-sspv-blue focus:ring-1 focus:ring-sspv-blue outline-none transition-colors">
                        <option value="">Sélectionnez un poste</option>
                        {profils.map((p, i) => <option key={i} value={p.title}>{p.title}</option>)}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Votre CV (PDF ou DOC)</label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-sspv-yellow transition-colors cursor-pointer bg-gray-50">
                        <div className="space-y-1 text-center">
                          <Upload className="mx-auto h-12 w-12 text-gray-400" />
                          <div className="flex text-sm text-gray-600 justify-center">
                            <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-sspv-blue hover:text-sspv-yellow focus-within:outline-none px-2 py-1">
                              <span>Télécharger un fichier</span>
                              <input id="file-upload" name="file-upload" type="file" className="sr-only" accept=".pdf,.doc,.docx" />
                            </label>
                          </div>
                          <p className="text-xs text-gray-500">PDF, DOC jusqu'à 5MB</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-700">Lettre de motivation ou explications</label>
                      <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-sspv-blue focus:ring-1 focus:ring-sspv-blue outline-none transition-colors" placeholder="Présentez brièvement vos motivations..."></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={formStatus === 'submitting'}
                      className="w-full py-4 bg-sspv-yellow text-sspv-blue font-bold rounded-lg hover:bg-yellow-500 transition-colors shadow-md flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {formStatus === 'submitting' ? (
                        <>Traitement en cours...</>
                      ) : (
                        <>Participer au recrutement <FileText size={20} /></>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
