import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <footer
      ref={ref}
      className="relative py-16 overflow-hidden"
      style={{ background: '#0a0705' }}
    >
      {/* Top line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,169,110,0.4), transparent)' }}
      />

      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at center, rgba(201,169,110,0.05) 0%, transparent 70%)',
      }} />

      <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
        {/* Ornament top */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1.2 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div style={{ width: '50px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,169,110,0.5))' }} />
          <div style={{ width: '5px', height: '5px', background: '#C9A96E', transform: 'rotate(45deg)', opacity: 0.6 }} />
          <div style={{ width: '50px', height: '1px', background: 'linear-gradient(90deg, rgba(201,169,110,0.5), transparent)' }} />
        </motion.div>

        {/* Names */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, delay: 0.15 }}
          style={{
            fontFamily: "'Cormorant Garant', serif",
            fontSize: 'clamp(32px, 7vw, 52px)',
            fontWeight: '300',
            color: '#F9F6F1',
            letterSpacing: '0.08em',
          }}
        >
        Mostafa  
          <span style={{ color: '#C9A96E', fontStyle: 'italic', margin: '0 10px' }}>
            &amp;
          </span>
          Nada
        </motion.h2>

        {/* Date */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.3 }}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '11px',
            letterSpacing: '0.35em',
            fontWeight: '300',
            color: 'rgba(249,246,241,0.35)',
            textTransform: 'uppercase',
            marginTop: '12px',
            marginBottom: '32px',
          }}
        >
          September 22, 2026
        </motion.p>

        {/* Bottom ornament */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.35 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,169,110,0.3))' }} />
          <div style={{ width: '3px', height: '3px', background: 'rgba(201,169,110,0.4)', transform: 'rotate(45deg)' }} />
          <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, rgba(201,169,110,0.3), transparent)' }} />
        </motion.div>

        {/* Credit */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.45 }}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '11px',
            letterSpacing: '0.15em',
            fontWeight: '300',
            color: 'rgba(249,246,241,0.2)',
          }}
        >
          Made with love by{' '}
          <a
            href="https://mohamedelkady.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'rgba(201,169,110,0.5)', textDecoration: 'none', transition: 'color 0.3s' }}
            onMouseEnter={(e) => e.target.style.color = '#C9A96E'}
            onMouseLeave={(e) => e.target.style.color = 'rgba(201,169,110,0.5)'}
          >
         Mohamed Elkady
          </a>
          {' '}❤️
        </motion.p>
      </div>
    </footer>
  )
}
