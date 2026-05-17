import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhatsAppFAB() {
  const phoneNumber = "22678923910";
  const message = "Bonjour SSPV, je souhaite obtenir des informations sur vos services de sécurité.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 hover:bg-green-600 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
      aria-label="Contactez-nous sur WhatsApp"
    >
      <MessageCircle size={28} />
    </motion.a>
  );
}
