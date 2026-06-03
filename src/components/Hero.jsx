import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative w-full h-screen min-h-screen overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="https://res.cloudinary.com/daqznvdzn/video/upload/v1780113857/hero_fzvisc.mp4"
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          style={{ filter: "brightness(0.75) saturate(0.9)" }}
        />
        {/* Fallback dark cinematic background if video fails */}
        {/* <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              "linear-gradient(135deg, #1a1008 0%, #2d1e0e 50%, #1a1008 100%)",
            zIndex: videoLoaded ? -1 : 0,
          }}
        /> */}
      </div>

      {/* Cinematic overlay */}
      {/* <div className="absolute inset-0 video-overlay" /> */}
      {/* Vignette */}
      {/* <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)",
        }}
      /> */}
      {/* Top & bottom gradient fade */}
      {/* <div
        className="absolute top-0 left-0 right-0 h-40"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.4), transparent)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-40"
        style={{
          background: "linear-gradient(to top, rgba(10,7,5,0.8), transparent)",
        }}
      /> */}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
        {/* Small label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.4 }}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            
            fontSize: "15px",
            letterSpacing: "0.05em",
            fontWeight: "300",
            color: "#fff",
            textTransform: "uppercase",
            marginBottom: "50px",
            marginTop: "-100px",
          }}
        >
          بسم الله الرحمن الرحيم
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.4 }}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "13px",
            letterSpacing: "0.4em",
            fontWeight: "300",
            color: "#fff",
            textTransform: "uppercase",
            marginBottom: "100px",
          }}
        >
          We're Getting Married
        </motion.p>

        {/* Ornament line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.55 }}
          className="flex items-center gap-4 mb-6"
        >
          <div
            style={{
              width: "50px",
              height: "1px",
              background: "linear-gradient(90deg, transparent, #C9A96E)",
            }}
          />
          <div
            style={{
              width: "5px",
              height: "5px",
              background: "#C9A96E",
              transform: "rotate(45deg)",
            }}
          />
          <div
            style={{
              width: "50px",
              height: "1px",
              background: "linear-gradient(90deg, #C9A96E, transparent)",
            }}
          />
        </motion.div>

        {/* Main name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.65, ease: [0.76, 0, 0.24, 1] }}
          style={{
            fontFamily: "'Cormorant Garant', 'Playfair Display', serif",
            fontSize: "clamp(56px, 12vw, 120px)",
            fontWeight: "300",
            color: "#fff",
            lineHeight: "1",
            letterSpacing: "0.06em",
            textShadow: "0 4px 60px rgba(0,0,0,0.5)",
          }}
        >
          Mostafa
        </motion.h1>

        {/* & separator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.85 }}
          style={{
            fontFamily: "'Cormorant Garant', serif",
            fontSize: "clamp(32px, 5vw, 56px)",
            color: "#C9A96E",
            fontStyle: "italic",
            fontWeight: "300",
            letterSpacing: "0.1em",
            marginTop: "4px",
            marginBottom: "4px",
          }}
        >
          &amp;
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 1.0, ease: [0.76, 0, 0.24, 1] }}
          style={{
            fontFamily: "'Cormorant Garant', 'Playfair Display', serif",
            fontSize: "clamp(56px, 12vw, 120px)",
            fontWeight: "300",
            color: "#fff",
            lineHeight: "1",
            letterSpacing: "0.06em",
            textShadow: "0 4px 60px rgba(0,0,0,0.5)",
          }}
        >
          Nada
        </motion.h1>

        {/* Date */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 1.2 }}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "12px",
            letterSpacing: "0.4em",
            fontWeight: "300",
            color: "rgba(255,255,255,0.6)",
            textTransform: "uppercase",
            marginTop: "70px",
          }}
        >
          September 22, 2026
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="20" height="28" viewBox="0 0 20 28" fill="none">
            <rect
              x="1"
              y="1"
              width="18"
              height="26"
              rx="9"
              stroke="rgba(201,169,110,0.5)"
              strokeWidth="1"
            />
            <motion.circle
              cx="10"
              cy="8"
              r="2.5"
              fill="#C9A96E"
              animate={{ cy: [8, 16, 8] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "9px",
            letterSpacing: "0.35em",
            color: "rgba(255,255,255,0.3)",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </p>
      </motion.div>
    </section>
  );
}


