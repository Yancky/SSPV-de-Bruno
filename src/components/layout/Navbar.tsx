import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Nos Services', path: '/services' },
    { name: 'À propos', path: '/about' },
    { name: 'Recrutement', path: '/recrutement' },
    { name: 'Galerie', path: '/galerie' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        isScrolled ? 'bg-sspv-blue/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sspv-yellow text-sspv-blue transition-transform group-hover:scale-105">
              <ShieldCheck size={24} />
            </div>
            <div className="flex flex-col">
              <span className={cn('text-xl font-bold font-heading leading-none', isScrolled ? 'text-white' : 'text-white')}>SSPV</span>
              <span className={cn('text-[10px] font-medium tracking-widest', isScrolled ? 'text-sspv-yellow' : 'text-sspv-yellow')}>SÉCURITÉ</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-sspv-yellow',
                    isActive ? 'text-sspv-yellow' : 'text-gray-200'
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-md bg-sspv-yellow text-sspv-blue font-semibold text-sm hover:bg-yellow-500 transition-colors shadow-md hover:shadow-lg"
            >
              Demander un devis
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center p-2 text-white hover:text-sspv-yellow focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-sspv-blue border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={cn(
                      'text-lg font-medium py-2 transition-colors',
                      isActive ? 'text-sspv-yellow' : 'text-gray-300 hover:text-white'
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4 mt-2 border-t border-white/10">
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center px-5 py-3 rounded-md bg-sspv-yellow text-sspv-blue font-bold text-base hover:bg-yellow-500 transition-colors"
                >
                  Demander un devis
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
