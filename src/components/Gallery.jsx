import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// Gallery placeholder images — users can replace with real wedding photos
const photos = [
  { id: 1, src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80', alt: 'Wedding moment 1', wide: false },
  { id: 2, src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80', alt: 'Wedding moment 2', wide: true },
  { id: 3, src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=80', alt: 'Wedding moment 3', wide: false },
  { id: 4, src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80', alt: 'Wedding moment 4', wide: false },
  { id: 5, src: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&q=80', alt: 'Wedding moment 5', wide: true },
  { id: 6, src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80', alt: 'Wedding moment 6', wide: false },
]

function GalleryPhoto({ photo, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 1.1, delay: index * 0.12, ease: [0.76, 0, 0.24, 1] }}
      className={`relative overflow-hidden group ${photo.wide ? 'md:col-span-2' : ''}`}
      style={{ aspectRatio: photo.wide ? '2/1' : '3/4' }}
    >
      <motion.img
        src={photo.src}
        alt={photo.alt}
        className="w-full h-full object-cover"
        style={{ filter: 'sepia(15%) saturate(0.9) brightness(0.95)' }}
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      />
      {/* Hover overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{ background: 'linear-gradient(135deg, rgba(201,169,110,0.15) 0%, rgba(0,0,0,0.2) 100%)' }}
      />
      {/* Subtle frame overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{ boxShadow: 'inset 0 0 80px rgba(0,0,0,0.3)' }}
      />
    </motion.div>
  )
}

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: '#F9F6F1' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,169,110,0.25), transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '10px',
              letterSpacing: '0.4em',
              fontWeight: '300',
              color: '#C9A96E',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            Memories
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.1 }}
            style={{
              fontFamily: "'Cormorant Garant', serif",
              fontSize: 'clamp(34px, 6vw, 56px)',
              fontWeight: '300',
              color: '#2A1F12',
              letterSpacing: '0.04em',
              marginBottom: '8px',
            }}
          >
            Our Moments
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="flex items-center justify-center gap-3"
          >
            <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, #C9A96E)' }} />
            <div style={{ width: '4px', height: '4px', background: '#C9A96E', transform: 'rotate(45deg)' }} />
            <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, #C9A96E, transparent)' }} />
          </motion.div>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {photos.map((photo, index) => (
            <GalleryPhoto key={photo.id} photo={photo} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
