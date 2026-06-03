import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function MusicPlayer({playing,setPlaying}) {
  // const [playing, setPlaying] = useState(false)
  const [visible, setVisible] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    // Show music button after a delay
    const timer = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.play().catch(() => setPlaying(false))
    } else {
      audioRef.current.pause()
    }
  }, [playing])

  const toggle = () => setPlaying(p => !p)

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/music.mp3"
        loop
        preload="auto"
      />

      {/* <AnimatePresence>
        {visible && (
          <motion.button
            key="music-btn"
            initial={{ opacity: 0, scale: 0.7, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            onClick={toggle}
            title={playing ? 'Pause music' : 'Play music'}
            className="fixed z-50 flex flex-col items-center justify-center gap-1"
            style={{
              bottom: '28px',
              right: '28px',
              width: '52px',
              height: '52px',
              background: 'rgba(10,7,5,0.85)',
              border: '1px solid rgba(201,169,110,0.35)',
              borderRadius: '50%',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              transition: 'border-color 0.3s ease, background 0.3s ease',
            }}
            whileHover={{
              scale: 1.1,
              borderColor: 'rgba(201,169,110,0.7)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated rings when playing */}
            {/* {playing && (
              <>
                <motion.div
                  className="absolute rounded-full pointer-events-none"
                  style={{ width: '66px', height: '66px', border: '1px solid rgba(201,169,110,0.2)' }}
                  animate={{ scale: [1, 1.25, 1], opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute rounded-full pointer-events-none"
                  style={{ width: '80px', height: '80px', border: '1px solid rgba(201,169,110,0.12)' }}
                  animate={{ scale: [1, 1.3, 1], opacity: [0.12, 0.3, 0.12] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                />
              </>
            )} */}

            {/* Icon */}
            {/* {playing ? (
              // Pause icon — two bars
              <div className="flex items-center gap-1">
                <div style={{ width: '3px', height: '14px', background: '#C9A96E', borderRadius: '1px' }} />
                <div style={{ width: '3px', height: '14px', background: '#C9A96E', borderRadius: '1px' }} />
              </div>
            ) : (
              // Play icon — triangle
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 2 L14 8 L4 14 Z" fill="#C9A96E" />
              </svg>
            )} 
          </motion.button>
        )}
      </AnimatePresence> */}

      {/* Sound waves when playing */}
      <AnimatePresence>
        {playing && visible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed z-40 flex items-end gap-1"
            style={{ bottom: '30px', right: '50px' }}
          >
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                style={{
                  width: '3px',
                  background: 'rgba(201,169,110,0.7)',
                  borderRadius: '2px',
                  originY: 1,
                }}
                animate={{ scaleY: [0.3, 1, 0.4, 0.8, 0.3] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.15,
                }}
                initial={{ height: `${8 + i * 3}px` }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
