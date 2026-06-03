import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
// import IntroCover from './components/IntroCover'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import Welcome from './components/Welcome'
import Gallery from './components/Gallery'
import EventDetails from './components/EventDetails'
import RSVP from './components/RSVP'
import Footer from './components/Footer'
import MusicPlayer from './components/MusicPlayer'
import SectionDivider from './components/SectionDivider'
import Envelope from './components/Envelope'

export default function App() {
  const [introVisible, setIntroVisible] = useState(true)
  const [mainVisible, setMainVisible] = useState(false)
  const [playing, setplaying] = useState(false)

  const handleOpen = () => {
    setIntroVisible(false)
    setTimeout(() => setMainVisible(true), 800)
  }

  return (
    <div style={{ background: '#F9F6F1', minHeight: '100vh' }}>
    
      {/* Page transition overlay */}
      <AnimatePresence>
        {introVisible && (
          <Envelope onOpen={handleOpen} setplaying={setplaying} />
        )}
      </AnimatePresence>

      {/* Transition black flash */}
      <AnimatePresence>
        {!introVisible && !mainVisible && (
          <motion.div
            key="transition"
            className="fixed inset-0 z-40"
            style={{ background: '#0a0705' }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        )}
      </AnimatePresence>

      {/* Main content */}
      <AnimatePresence>
        {mainVisible && (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            {/* Hero with video background */}
            <Hero  />

            {/* Countdown */}
            <Countdown />

            {/* Section divider */}
            <SectionDivider />

            {/* Welcome / Couple */}
            <Welcome />

            {/* Section divider */}
            <SectionDivider />

            {/* Gallery */}
            <Gallery />

            {/* Event Details — dark section */}
            <EventDetails />

            {/* RSVP */}
            <RSVP />

            {/* Footer */}
            <Footer />

            {/* Floating music player */}
            <MusicPlayer  playing={playing}
              setplaying={setplaying}
            />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  )
}
