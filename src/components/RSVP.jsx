import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function RSVP() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formState, setFormState] = useState({ name: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formState.name.trim() || !formState.message.trim()) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: '#F2EDE3' }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(201,169,110,0.3), transparent)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: '600px',
            height: '600px',
            border: '1px solid rgba(201,169,110,0.06)',
            borderRadius: '50%',
          }}
        />
      </div>

      <div className="max-w-xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
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
            Your Wishes
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.1 }}
            style={{
              fontFamily: "'Cormorant Garant', serif",
              fontSize: 'clamp(34px, 6vw, 52px)',
              fontWeight: '300',
              color: '#2A1F12',
              letterSpacing: '0.04em',
              marginBottom: '8px',
            }}
          >
            Leave a Message
          </motion.h2>

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

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.25 }}
            style={{
              fontFamily: "'Cormorant Garant', serif",
              fontSize: 'clamp(17px, 3vw, 21px)',
              fontStyle: 'italic',
              fontWeight: '300',
              color: 'rgba(42,31,18,0.6)',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
            }}
          >
            Share your love, wishes, or a note for the happy couple!
          </motion.p>
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.76, 0, 0.24, 1] }}
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center py-12"
            >
              {/* Success ornament */}
              <div className="flex items-center justify-center mb-6">
                <div style={{
                  width: '64px',
                  height: '64px',
                  border: '1px solid rgba(201,169,110,0.4)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12 L10 17 L19 7" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <p style={{
                fontFamily: "'Cormorant Garant', serif",
                fontSize: '28px',
                fontWeight: '300',
                color: '#2A1F12',
                letterSpacing: '0.04em',
                marginBottom: '8px',
              }}>
                Thank You!
              </p>
              <p style={{
                fontFamily: "'Cormorant Garant', serif",
                fontSize: '18px',
                fontStyle: 'italic',
                fontWeight: '300',
                color: 'rgba(42,31,18,0.55)',
                letterSpacing: '0.03em',
              }}>
                Your message has been received.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Guest Name(s)"
                  value={formState.name}
                  onChange={(e) => setFormState(s => ({ ...s, name: e.target.value }))}
                  required
                  style={{
                    width: '100%',
                    padding: '16px 0',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid rgba(42,31,18,0.2)',
                    fontFamily: "'Cormorant Garant', serif",
                    fontSize: '18px',
                    fontWeight: '300',
                    color: '#2A1F12',
                    letterSpacing: '0.04em',
                    outline: 'none',
                    transition: 'border-color 0.3s ease',
                  }}
                  onFocus={(e) => e.target.style.borderBottomColor = '#C9A96E'}
                  onBlur={(e) => e.target.style.borderBottomColor = 'rgba(42,31,18,0.2)'}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  height: '1px',
                  background: '#C9A96E',
                  width: '0%',
                  transition: 'width 0.4s ease',
                }} />
              </div>

              {/* Message textarea */}
              <div className="relative">
                <textarea
                  placeholder="Your Message"
                  value={formState.message}
                  onChange={(e) => setFormState(s => ({ ...s, message: e.target.value }))}
                  required
                  rows={5}
                  style={{
                    width: '100%',
                    padding: '16px 0',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid rgba(42,31,18,0.2)',
                    fontFamily: "'Cormorant Garant', serif",
                    fontSize: '18px',
                    fontWeight: '300',
                    color: '#2A1F12',
                    letterSpacing: '0.04em',
                    outline: 'none',
                    resize: 'none',
                    transition: 'border-color 0.3s ease',
                  }}
                  onFocus={(e) => e.target.style.borderBottomColor = '#C9A96E'}
                  onBlur={(e) => e.target.style.borderBottomColor = 'rgba(42,31,18,0.2)'}
                />
              </div>

              {/* Submit button */}
              <div className="flex justify-center mt-4">
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '11px',
                    letterSpacing: '0.35em',
                    fontWeight: '400',
                    color: '#F9F6F1',
                    textTransform: 'uppercase',
                    background: '#2A1F12',
                    border: '1px solid #2A1F12',
                    padding: '15px 44px',
                    cursor: loading ? 'wait' : 'pointer',
                    transition: 'all 0.4s ease',
                    opacity: loading ? 0.7 : 1,
                  }}
                  onMouseEnter={(e) => {
                    if (!loading) {
                      e.currentTarget.style.background = '#C9A96E'
                      e.currentTarget.style.borderColor = '#C9A96E'
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#2A1F12'
                    e.currentTarget.style.borderColor = '#2A1F12'
                  }}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        style={{ display: 'inline-block', width: 12, height: 12, border: '1px solid rgba(255,255,255,0.4)', borderTopColor: '#fff', borderRadius: '50%' }}
                      />
                      Sending...
                    </span>
                  ) : 'Send Message'}
                </motion.button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
