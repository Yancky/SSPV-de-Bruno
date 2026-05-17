import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn } from 'lucide-react';

const categories = ['Tous', 'Missions', 'Agents', 'Uniformes', 'Véhicules', 'Équipements'];

const photos = [
  { id: 1, category: 'Missions', src: 'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop', alt: 'Agent en mission' },
  { id: 2, category: 'Agents', src: 'https://images.unsplash.com/photo-1590424564858-a83ad1c168ff?q=80&w=1000&auto=format&fit=crop', alt: 'Équipe SSPV' },
  { id: 3, category: 'Uniformes', src: 'https://images.unsplash.com/photo-1585728748176-35fe200ed43d?q=80&w=1000&auto=format&fit=crop', alt: 'Uniforme officiel' },
  { id: 4, category: 'Véhicules', src: 'https://images.unsplash.com/photo-1563284768-e392ff15201c?q=80&w=1000&auto=format&fit=crop', alt: 'Véhicule d\'intervention' },
  { id: 5, category: 'Équipements', src: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1000&auto=format&fit=crop', alt: 'Contrôle d\'accès' },
  { id: 6, category: 'Missions', src: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1000&auto=format&fit=crop', alt: 'Télésurveillance' },
  { id: 7, category: 'Véhicules', src: 'https://images.unsplash.com/photo-1626242207903-88bc117aadc8?q=80&w=1000&auto=format&fit=crop', alt: 'Patrouille mobile' },
  { id: 8, category: 'Missions', src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop', alt: 'Sécurité de nuit' },
  { id: 9, category: 'Agents', src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop', alt: 'Sécurité événementielle' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

  const filteredPhotos = activeCategory === 'Tous' 
    ? photos 
    : photos.filter(p => p.category === activeCategory);

  return (
    <div className="flex flex-col bg-gray-50 min-h-screen">
      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-sspv-yellow transition-colors"
              onClick={() => setSelectedPhoto(null)}
            >
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedPhoto.src} 
              alt={selectedPhoto.alt}
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <section className="pt-32 pb-12 bg-sspv-blue text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">
            Notre <span className="text-sspv-yellow">Galerie</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10">
            Découvrez nos équipes, nos équipements et nos missions en images.
          </p>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat 
                    ? 'bg-sspv-yellow text-sspv-blue' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredPhotos.map((photo) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={photo.id}
                  className="aspect-square rounded-xl overflow-hidden relative group cursor-pointer shadow-md bg-white"
                  onClick={() => setSelectedPhoto(photo)}
                >
                  <img 
                    src={photo.src} 
                    alt={photo.alt} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-sspv-blue/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                    <ZoomIn className="text-sspv-yellow mb-2" size={32} />
                    <span className="text-white font-medium font-heading">{photo.alt}</span>
                    <span className="text-gray-300 text-xs mt-1 px-2 py-1 bg-white/20 rounded-full">{photo.category}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredPhotos.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              Aucune photo disponible dans cette catégorie.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
