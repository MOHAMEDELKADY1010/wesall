import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Welcome() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ background: '#F2EDE3' }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(201,169,110,0.3), transparent)' }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(201,169,110,0.3), transparent)' }}
        />
        {/* Large faded ornament background */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: '400px',
            height: '400px',
            border: '1px solid rgba(201,169,110,0.08)',
            borderRadius: '50%',
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: '600px',
            height: '600px',
            border: '1px solid rgba(201,169,110,0.05)',
            borderRadius: '50%',
          }}
        />
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        {/* Floral vase image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="flex justify-center mb-8"
        >
          <div
            className="float-gentle"
            style={{ width: 'clamp(60px, 12vw, 90px)' }}
          >
            <img
              src="https://wedvite.net/floral-vase.png"
              alt="Floral decoration"
              className="w-full h-auto"
              style={{ filter: 'sepia(20%) brightness(0.95)' }}
              onError={(e) => {
                // Fallback SVG floral ornament
                e.target.outerHTML = `<svg width="70" height="90" viewBox="0 0 70 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M35 85 C35 85 10 65 10 45 C10 25 20 15 35 15 C50 15 60 25 60 45 C60 65 35 85 35 85Z" stroke="#C9A96E" strokeWidth="0.8" fill="none" opacity="0.4"/>
                  <circle cx="35" cy="20" r="8" stroke="#C9A96E" strokeWidth="0.8" fill="none" opacity="0.5"/>
                  <circle cx="20" cy="32" r="6" stroke="#C9A96E" strokeWidth="0.8" fill="none" opacity="0.4"/>
                  <circle cx="50" cy="32" r="6" stroke="#C9A96E" strokeWidth="0.8" fill="none" opacity="0.4"/>
                  <path d="M28 55 Q35 65 42 55" stroke="#C9A96E" strokeWidth="0.8" fill="none" opacity="0.5"/>
                  <line x1="35" y1="15" x2="35" y2="80" stroke="#C9A96E" strokeWidth="0.5" opacity="0.3"/>
                </svg>`
              }}
            />
          </div>
        </motion.div>

        {/* Top label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15 }}
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
          With Love
        </motion.p>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, delay: 0.22 }}
          style={{
            fontFamily: "'Cormorant Garant', serif",
            fontSize: 'clamp(38px, 7vw, 64px)',
            fontWeight: '300',
            color: '#2A1F12',
            letterSpacing: '0.04em',
            lineHeight: '1.15',
            marginBottom: '8px',
          }}
        >
          Welcome!
        </motion.h2>

        {/* Ornament */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, #C9A96E)' }} />
          <div style={{ width: '4px', height: '4px', background: '#C9A96E', transform: 'rotate(45deg)' }} />
          <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, #C9A96E, transparent)' }} />
        </motion.div>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, delay: 0.4 }}
          style={{
            fontFamily: "'Cormorant Garant', serif",
            fontSize: 'clamp(18px, 3.5vw, 24px)',
            fontWeight: '300',
            fontStyle: 'italic',
            color: 'rgba(42,31,18,0.7)',
            lineHeight: '1.8',
            letterSpacing: '0.03em',
            maxWidth: '580px',
            margin: '0 auto',
          }}
        >
          We joyfully invite you to celebrate the beginning of our forever. Here you'll find everything you need for our special day.
        </motion.p>

        {/* Couple names */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, delay: 0.55 }}
          className="mt-10 flex items-center justify-center gap-6"
        >
          <div className="text-center">
            <p style={{
              fontFamily: "'Cormorant Garant', serif",
              fontSize: 'clamp(22px, 4vw, 32px)',
              fontWeight: '500',
              color: '#2A1F12',
              letterSpacing: '0.06em',
            }}>
              Mostafa
            </p>
          </div>
          <div style={{
            fontFamily: "'Cormorant Garant', serif",
            fontSize: '28px',
            color: '#C9A96E',
            fontStyle: 'italic',
            fontWeight: '300',
          }}>
            &amp;
          </div>
          <div className="text-center">
            <p style={{
              fontFamily: "'Cormorant Garant', serif",
              fontSize: 'clamp(22px, 4vw, 32px)',
              fontWeight: '500',
              color: '#2A1F12',
              letterSpacing: '0.06em',
            }}>
              Nada
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
