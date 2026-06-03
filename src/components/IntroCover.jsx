import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroCover({ onOpen, setplaying }) {
  const [isOpening, setIsOpening] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const videoRef = useRef(null);

  const handleOpen = () => {
    if (isOpening) return;
    setplaying(true);
    setIsOpening(true);

    if (videoRef.current) {
      videoRef.current.play().then(() => {
        videoRef.current.playbackRate = 2.5;
      });
      videoRef.current.onended = () => {
        onOpen();
      };
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        key="intro"
        className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden cursor-pointer"
        style={{ background: "transparent" }}
        initial={{ opacity: 1 }}
        exit={{
          opacity: 0,
          scale: 0.5,
          transition: { duration: 0.5, ease: [0.76, 0, 0.24, 0.5] },
        }}
        onClick={handleOpen}
      >
        <div className="absolute inset-0 w-full h-full">
          <motion.div
            className="absolute inset-0 ken-burns-bg"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.05, ease: "easeOut" }}
          >
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              src="https://res.cloudinary.com/daqznvdzn/video/upload/v1780190661/WhatsApp_Video_2026-05-31_at_4.22.18_AM_l9djy0.mp4"
              muted
              playsInline
              poster="/images/hero.jpeg"
              preload="auto"
              onLoadedData={() => {
                setVideoLoaded(true);
              }}
              style={{
                filter: "brightness(0.75) saturate(0.9)",
              }}
            />
          </motion.div>
        </div>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 3 + 1 + "px",
                height: Math.random() * 3 + 1 + "px",
                background: "#C9A96E",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
                opacity: 0,
              }}
              animate={{
                opacity: [0, 0.6, 0],
                y: [0, -30, -60],
              }}
              transition={{
                duration: Math.random() * 4 + 4,
                repeat: Infinity,
                delay: Math.random() * 6,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-20"
          animate={{ opacity: isOpening ? 0 : 1 }}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "11px",
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.2em",
              fontStyle: "italic",
            }}
          >
            اضغط لفتح الدعوة
          </p>

          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "9px",
              color: "rgba(255,255,255,0.4)",
              letterSpacing: "0.10em",
              textTransform: "uppercase",
              fontWeight: "300",
            }}
          >
            Click anywhere to open
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
