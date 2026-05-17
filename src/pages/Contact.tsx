import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="flex flex-col bg-white min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-sspv-blue overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6">
              Contactez <span className="text-sspv-yellow">SSPV</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
              Notre équipe est à votre disposition 24h/24 et 7j/7 pour répondre à toutes vos demandes de sécurité.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-3xl font-bold font-heading text-sspv-blue mb-6">Informations</h2>
                <p className="text-gray-600 mb-8">N'hésitez pas à nous contacter pour un devis gratuit ou pour toute question concernant nos services de sécurité.</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="h-12 w-12 rounded-full bg-sspv-blue/5 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-sspv-yellow" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sspv-blue mb-1">Siège Social</h4>
                    <p className="text-gray-600">Ouagadougou, Kamboincin<br/>Burkina Faso</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="h-12 w-12 rounded-full bg-sspv-blue/5 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-sspv-yellow" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sspv-blue mb-1">Téléphones</h4>
                    <p className="text-gray-600">+226 78 92 39 10</p>
                    <p className="text-gray-600">+226 04 25 01 00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="h-12 w-12 rounded-full bg-sspv-blue/5 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-sspv-yellow" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sspv-blue mb-1">Email</h4>
                    <p className="text-gray-600">contact@sspv-bf.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="h-12 w-12 rounded-full bg-sspv-blue/5 flex items-center justify-center flex-shrink-0">
                    <Clock className="text-sspv-yellow" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sspv-blue mb-1">Horaires (Bureaux)</h4>
                    <p className="text-gray-600">Lundi - Vendredi : 08h00 - 17h00</p>
                    <p className="text-sspv-yellow font-medium mt-1 text-sm">Intervention & Télésurveillance : 24h/24 - 7j/7</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a 
                  href="https://wa.me/22678923910"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2 w-full py-4 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-colors shadow-md"
                >
                  <MessageCircle size={20} />
                  Discuter sur WhatsApp
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm h-full">
                <h2 className="text-2xl font-bold font-heading text-sspv-blue mb-6">Envoyez-nous un message</h2>
                
                {formStatus === 'success' ? (
                  <div className="bg-green-50 border border-green-200 p-8 rounded-xl text-center h-full flex flex-col justify-center">
                    <Send className="text-green-500 mx-auto mb-4" size={48} />
                    <h3 className="text-xl font-bold text-green-800 mb-2">Message Envoyé !</h3>
                    <p className="text-green-700">Merci de nous avoir contactés. Notre équipe commerciale vous répondra dans les plus brefs délais.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="nom" className="text-sm font-medium text-gray-700">Nom complet *</label>
                        <input type="text" id="nom" required className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-sspv-blue focus:ring-1 focus:ring-sspv-blue outline-none transition-colors" placeholder="Votre nom" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="telephone" className="text-sm font-medium text-gray-700">Téléphone *</label>
                        <input type="tel" id="telephone" required className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-sspv-blue focus:ring-1 focus:ring-sspv-blue outline-none transition-colors" placeholder="+226 XX XX XX XX" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">Email *</label>
                      <input type="email" id="email" required className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-sspv-blue focus:ring-1 focus:ring-sspv-blue outline-none transition-colors" placeholder="votre@email.com" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="sujet" className="text-sm font-medium text-gray-700">Sujet *</label>
                      <select id="sujet" required className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-sspv-blue focus:ring-1 focus:ring-sspv-blue outline-none transition-colors">
                        <option value="">Sélectionnez un sujet</option>
                        <option value="devis">Demande de devis</option>
                        <option value="info_services">Information sur les services</option>
                        <option value="partenariat">Demande de partenariat</option>
                        <option value="autre">Autre demande</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-700">Message *</label>
                      <textarea id="message" required rows={5} className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-sspv-blue focus:ring-1 focus:ring-sspv-blue outline-none transition-colors" placeholder="Comment pouvons-nous vous aider ?"></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={formStatus === 'submitting'}
                      className="w-full py-4 bg-sspv-blue text-white font-bold rounded-lg hover:bg-sspv-blue-dark transition-colors shadow-md flex justify-center items-center gap-2"
                    >
                      {formStatus === 'submitting' ? 'Envoi en cours...' : <>Envoyer le message <Send size={18} /></>}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[400px] w-full bg-gray-200 relative">
        {/* Placeholder for Google Maps - Since we don't have an API key, we use an iframe embed or standard image for Kamboincin Burkina Faso */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126402.1340156972!2d-1.6111166318991316!3d12.36873583272993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe2ebe45a557ef2f%3A0xe6ab30e463a9afef!2sKamboins%C3%A9%2C%20Burkina%20Faso!5e0!3m2!1sfr!2sfr!4v1716000000000!5m2!1sfr!2sfr" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Carte de localisation SSPV Kamboincin"
        ></iframe>
      </section>
    </div>
  );
}
