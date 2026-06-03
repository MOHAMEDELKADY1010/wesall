import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function CountdownUnit({ value, label }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      className="flex flex-col items-center"
    >
      <div
        className="relative flex items-center justify-center"
        style={{
          width: 'clamp(72px, 16vw, 110px)',
          height: 'clamp(72px, 16vw, 110px)',
        }}
      >
        {/* Background circle */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: '1px solid rgba(201,169,110,0.2)',
            background: 'rgba(201,169,110,0.04)',
          }}
        />
        {/* Number */}
        <span
          style={{
            fontFamily: "'Cormorant Garant', serif",
            fontSize: 'clamp(32px, 7vw, 52px)',
            fontWeight: '300',
            color: '#2A1F12',
            letterSpacing: '-0.02em',
            lineHeight: 1,
          }}
        >
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <p
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '10px',
          letterSpacing: '0.3em',
          fontWeight: '400',
          color: '#C9A96E',
          textTransform: 'uppercase',
          marginTop: '12px',
        }}
      >
        {label}
      </p>
    </motion.div>
  )
}

export default function Countdown() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const targetDate = new Date('2026-09-22T19:00:00')

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const calculate = () => {
      const now = new Date()
      const diff = targetDate - now
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)
      setTimeLeft({ days, hours, minutes, seconds })
    }
    calculate()
    const interval = setInterval(calculate, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-paper-texture overflow-hidden"
    >
      {/* Subtle background decorations */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(201,169,110,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Section label */}
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
          Counting Down
        </motion.p>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, delay: 0.1 }}
          style={{
            fontFamily: "'Cormorant Garant', serif",
            fontSize: 'clamp(32px, 6vw, 52px)',
            fontWeight: '300',
            color: '#2A1F12',
            letterSpacing: '0.04em',
            marginBottom: '8px',
          }}
        >
          Countdown
        </motion.h2>

        {/* Ornament */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, #C9A96E)' }} />
          <div style={{ width: '4px', height: '4px', background: '#C9A96E', transform: 'rotate(45deg)' }} />
          <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, #C9A96E, transparent)' }} />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.25 }}
          style={{
            fontFamily: "'Cormorant Garant', serif",
            fontSize: 'clamp(16px, 3vw, 20px)',
            fontWeight: '300',
            fontStyle: 'italic',
            color: 'rgba(42,31,18,0.55)',
            letterSpacing: '0.06em',
            marginBottom: '52px',
          }}
        >
          Until 22 September 2026
        </motion.p>

        {/* Countdown Units */}
        <div className="flex items-center justify-center gap-1 md:gap-10">
          <CountdownUnit value={timeLeft.days} label="Days" />

          <div style={{ fontSize: 'clamp(20px, 4vw, 36px)', color: '#C9A96E', fontFamily: "'Cormorant Garant', serif", paddingBottom: '28px', opacity: 0.6 }}>·</div>

          <CountdownUnit value={timeLeft.hours} label="Hours" />

          <div style={{ fontSize: 'clamp(20px, 4vw, 36px)', color: '#C9A96E', fontFamily: "'Cormorant Garant', serif", paddingBottom: '28px', opacity: 0.6 }}>·</div>

          <CountdownUnit value={timeLeft.minutes} label="Mins" />

          <div style={{ fontSize: 'clamp(20px, 4vw, 36px)', color: '#C9A96E', fontFamily: "'Cormorant Garant', serif", paddingBottom: '28px', opacity: 0.6 }}>·</div>

          <CountdownUnit value={timeLeft.seconds} label="Secs" />
        </div>
      </div>
    </section>
  )
}
