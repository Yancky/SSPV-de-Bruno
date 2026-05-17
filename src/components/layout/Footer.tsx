import { Link } from 'react-router-dom';
import { ShieldCheck, MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sspv-blue-dark text-white pt-16 pb-8 border-t-4 border-sspv-yellow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand & About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-sspv-yellow text-sspv-blue">
                <ShieldCheck size={20} />
              </div>
              <span className="text-xl font-bold font-heading">SSPV</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Société de Sécurité Privée des Volontaires (SSPV). 
              Sécurité, confiance et professionnalisme à votre service au Burkina Faso.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-sspv-yellow hover:text-sspv-blue transition-colors text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-sspv-yellow hover:text-sspv-blue transition-colors text-white">
                <Twitter size={18} />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-sspv-yellow hover:text-sspv-blue transition-colors text-white">
                <Linkedin size={18} />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-sspv-yellow hover:text-sspv-blue transition-colors text-white">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-6 text-white">Liens Rapides</h4>
            <ul className="space-y-3 font-medium text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-sspv-yellow transition-colors inline-block">À propos de nous</Link></li>
              <li><Link to="/services" className="hover:text-sspv-yellow transition-colors inline-block">Nos Services</Link></li>
              <li><Link to="/recrutement" className="hover:text-sspv-yellow transition-colors inline-block">Carrières / Recrutement</Link></li>
              <li><Link to="/galerie" className="hover:text-sspv-yellow transition-colors inline-block">Galerie photos</Link></li>
              <li><Link to="/contact" className="hover:text-sspv-yellow transition-colors inline-block">Prendre contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-6 text-white">Nos Services</h4>
            <ul className="space-y-3 font-medium text-sm text-gray-400">
              <li><Link to="/services" className="hover:text-sspv-yellow transition-colors inline-block">Gardiennage professionnel</Link></li>
              <li><Link to="/services" className="hover:text-sspv-yellow transition-colors inline-block">Sécurité VIP & Rapprochée</Link></li>
              <li><Link to="/services" className="hover:text-sspv-yellow transition-colors inline-block">Surveillance de sites</Link></li>
              <li><Link to="/services" className="hover:text-sspv-yellow transition-colors inline-block">Sécurité événementielle</Link></li>
              <li><Link to="/services" className="hover:text-sspv-yellow transition-colors inline-block">Intervention rapide</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-6 text-white">Contactez-nous</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-sspv-yellow mt-0.5 shrink-0" size={18} />
                <span>Ouagadougou, Kamboincin<br />Burkina Faso</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-sspv-yellow shrink-0" size={18} />
                <div className="flex flex-col">
                  <a href="tel:+22678923910" className="hover:text-white transition-colors">+226 78 92 39 10</a>
                  <a href="tel:+22604250100" className="hover:text-white transition-colors">+226 04 25 01 00</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-sspv-yellow shrink-0" size={18} />
                <a href="mailto:contact@sspv-bf.com" className="hover:text-white transition-colors">contact@sspv-bf.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {currentYear} SSPV Burkina Faso. Tous droits réservés.</p>
          <div className="flex gap-4">
            <Link to="#" className="hover:text-white transition-colors">Politique de confidentialité</Link>
            <Link to="#" className="hover:text-white transition-colors">Mentions légales</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
