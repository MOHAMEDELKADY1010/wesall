// // import { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";

// // export default function Envelope({ onOpen, setplaying }) {
// //   const [isOpening, setIsOpening] = useState(false);

// //   const handleOpen = () => {
// //     if (isOpening) return;

// //     setplaying(true);
// //     setIsOpening(true);

// //     setTimeout(() => {
// //       onOpen();
// //     }, 500);
// //   };

// //   return (
// //     <AnimatePresence>
// //       <motion.div
// //         key="intro"
// //         className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden cursor-pointer"
// //         style={{ background: "#f8f5ef" }}
// //         initial={{ opacity: 1 }}
// //         exit={{
// //           opacity: 0,
// //           scale: 0.5,
// //           transition: {
// //             duration: 0.5,
// //             ease: [0.76, 0, 0.24, 0.5],
// //           },
// //         }}
// //         onClick={handleOpen}
// //       >
// //         {/* Floating particles */}
// //         <div className="absolute inset-0 pointer-events-none overflow-hidden">
// //           {[...Array(12)].map((_, i) => (
// //             <motion.div
// //               key={i}
// //               className="absolute rounded-full"
// //               style={{
// //                 width: Math.random() * 3 + 1 + "px",
// //                 height: Math.random() * 3 + 1 + "px",
// //                 background: "#C9A96E",
// //                 left: Math.random() * 100 + "%",
// //                 top: Math.random() * 100 + "%",
// //                 opacity: 0,
// //               }}
// //               animate={{
// //                 opacity: [0, 0.6, 0],
// //                 y: [0, -30, -60],
// //               }}
// //               transition={{
// //                 duration: Math.random() * 4 + 4,
// //                 repeat: Infinity,
// //                 delay: Math.random() * 6,
// //               }}
// //             />
// //           ))}
// //         </div>

// //         {/* Envelope */}
// //         <motion.div
// //           className="relative w-[92vw] max-w-[550px]"
// //           animate={{
// //             scale: isOpening ? 1.08 : 1,
// //           }}
// //           transition={{
// //             duration: 1.2,
// //           }}
// //         >
// //           {/* Card */}
// //           <motion.div
// //             className="
// //               absolute
// //               left-1/2
// //               bottom-[20%]
// //               w-[78%]
// //               h-[70%]
// //               bg-white
// //               rounded-sm
// //               shadow-2xl
// //               z-0
// //             "
// //             style={{
// //               x: "-50%",
// //             }}
// //             animate={{
// //               y: isOpening ? -180 : 40,
// //             }}
// //             transition={{
// //               duration: 1.4,
// //               ease: [0.76, 0, 0.24, 1],
// //             }}
// //           />

// //           {/* Envelope Image */}
// //           <motion.img
// //             src="https://res.cloudinary.com/daqznvdzn/image/upload/v1780340635/a3c0d516-a895-4de2-abe4-79acd79bb7fd_isufxp.jpg"
// //             alt=""
// //             draggable={false}
// //             className="relative z-10 w-full select-none"
// //             animate={{
// //               scale: isOpening ? 1.02 : 1,
// //             }}
// //           />

// //           {/* Seal */}
// //           <AnimatePresence>
// //             {!isOpening && (
// //               <motion.div
// //                 initial={{ scale: 1 }}
// //                 exit={{
// //                   scale: 0,
// //                   rotate: 180,
// //                   opacity: 0,
// //                 }}
// //                 transition={{
// //                   duration: 0.7,
// //                 }}
// //                 className="
// //                   absolute
// //                   left-1/2
// //                   top-[58%]
// //                   -translate-x-1/2
// //                   -translate-y-1/2
// //                   z-20
// //                   w-[72px]
// //                   h-[72px]
// //                   rounded-full
// //                   cursor-pointer
// //                 "
// //               >
// //                 <div
                 
// //                 />
// //               </motion.div>
// //             )}
// //           </AnimatePresence>

// //           {/* Opening light */}
// //           <AnimatePresence>
// //             {isOpening && (
// //               <motion.div
// //                 initial={{ opacity: 0 }}
// //                 animate={{ opacity: 0.9 }}
// //                 exit={{ opacity: 0 }}
// //                 transition={{ duration: 1 }}
// //                 className="
// //                   absolute
// //                   inset-0
// //                   bg-white
// //                   z-30
// //                   pointer-events-none
// //                 "
// //               />
// //             )}
// //           </AnimatePresence>
// //         </motion.div>

// //         {/* Bottom Text */}
// //         <motion.div
// //           className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-40"
// //           animate={{
// //             opacity: isOpening ? 0 : 1,
// //           }}
// //         >
// //           <p
// //             style={{
// //               fontFamily: "'Cormorant Garamond', serif",
// //               fontSize: "11px",
// //               color: "rgba(80,80,80,0.7)",
// //               letterSpacing: "0.2em",
// //               fontStyle: "italic",
// //             }}
// //           >
// //             اضغط لفتح الدعوة
// //           </p>

// //           <p
// //             style={{
// //               fontFamily: "'Montserrat', sans-serif",
// //               fontSize: "9px",
// //               color: "rgba(80,80,80,0.6)",
// //               letterSpacing: "0.10em",
// //               textTransform: "uppercase",
// //               fontWeight: "300",
// //             }}
// //           >
// //             Click anywhere to open
// //           </p>
// //         </motion.div>
// //       </motion.div>
// //     </AnimatePresence>
// //   );
// // }
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const CLOSED = "https://res.cloudinary.com/daqznvdzn/image/upload/v1780340635/a3c0d516-a895-4de2-abe4-79acd79bb7fd_isufxp.jpg";
// const OPEN   = "https://res.cloudinary.com/daqznvdzn/image/upload/v1780340784/b77e90e1-ef48-4d71-8266-942ea7bf9d1d_lquson.jpg";

// export default function Envelope({ onOpen, setplaying }) {
//   const [isOpening, setIsOpening] = useState(false);

//   const handleOpen = () => {
//     if (isOpening) return;
//     setplaying(true);
//     setIsOpening(true);
//     setTimeout(() => onOpen(), 400);
//   };

//   return (
//     <AnimatePresence>
//       <motion.div
//         key="intro"
//         className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden cursor-pointer"
//         style={{ background: "#f8f5ef" }}
//         initial={{ opacity: 1 }}
//         exit={{
//           opacity: 0,
//           scale: 0.5,
//           transition: { duration: 0.45, ease: [0.76, 0, 0.24, 0.5] },
//         }}
//         onClick={handleOpen}
//       >

//         {/* ── جزيئات عائمة ── */}
//         <div className="absolute inset-0 pointer-events-none overflow-hidden">
//           {[...Array(12)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute rounded-full"
//               style={{
//                 width:   Math.random() * 3 + 1 + "px",
//                 height:  Math.random() * 3 + 1 + "px",
//                 background: "#C9A96E",
//                 left: Math.random() * 100 + "%",
//                 top:  Math.random() * 100 + "%",
//                 opacity: 0,
//               }}
//               animate={{ opacity: [0, 0.6, 0], y: [0, -30, -60] }}
//               transition={{
//                 duration: Math.random() * 4 + 4,
//                 repeat: Infinity,
//                 delay: Math.random() * 6,
//               }}
//             />
//           ))}
//         </div>

//         {/* ── الجواب — يملأ الشاشة كاملة ── */}
//         <motion.div
//           className="absolute inset-0"
//           animate={isOpening ? { scale: 1.05 } : { scale: 1 }}
//           transition={{ duration: 0.3 }}
//         >
//           {/* صورة الجواب المقفول */}
//           <motion.img
//             src={CLOSED}
//             alt=""
//             draggable={false}
//             className="absolute inset-0 w-full h-full select-none"
//             style={{ objectFit: "cover", objectPosition: "center" }}
//             animate={{ opacity: isOpening ? 0 : 1 }}
//             transition={{ duration: 0.3 }}
//           />

//           {/* صورة الجواب المفتوح */}
//           <motion.img
//             src={OPEN}
//             alt=""
//             draggable={false}
//             className="absolute inset-0 w-full h-full select-none"
//             style={{ objectFit: "cover", objectPosition: "center" }}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: isOpening ? 1 : 0 }}
//             transition={{ duration: .35 }}
//           />
//         </motion.div>

//         {/* ── نص أسفل ── */}
//         <motion.div
//           className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-40"
//           animate={{ opacity: isOpening ? 0 : 1 }}
//           transition={{ duration: 0.2 }}
//         >
//           <p style={{
//             fontFamily: "'Cormorant Garamond', serif",
//             fontSize: "11px",
//             color: "rgba(80,80,80,0.7)",
//             letterSpacing: "0.2em",
//             fontStyle: "italic",
//           }}>اضغط لفتح الدعوة</p>
//           <p style={{
//             fontFamily: "'Montserrat', sans-serif",
//             fontSize: "9px",
//             color: "rgba(80,80,80,0.6)",
//             letterSpacing: "0.10em",
//             textTransform: "uppercase",
//             fontWeight: "300",
//           }}>Click anywhere to open</p>
//         </motion.div>

//       </motion.div>
//     </AnimatePresence>
//   );
// }
import { useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const VIDEO_URL =
  "https://res.cloudinary.com/daqznvdzn/video/upload/v1780439818/WhatsApp_Video_2026-06-03_at_1.35.04_AM_rkzjzv.mp4";

// Stable particle data – generated once outside the component so
// Math.random() doesn't re-run on every render.
const PARTICLES = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  size: Math.random() * 3 + 1,
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: Math.random() * 4 + 4,
  delay: Math.random() * 6,
}));

export default function Envelope({ onOpen, setplaying }) {
  const videoRef = useRef(null);

  // "idle"    → waiting for user tap, showing bottom CTA
  // "loading" → user tapped, video is buffering before playing
  // "playing" → video is running
  // "ended"   → video finished, exit animation in progress
  const [phase, setPhase] = useState("idle");
  const [isReady, setIsReady] = useState(false);

  // Fires once the browser has buffered enough to play
  const handleCanPlay = useCallback(() => {
    setIsReady(true);
  }, []);

  // Called when the user taps/clicks anywhere on the cover
  const handleOpen = useCallback(async () => {
    if (phase !== "idle" || !videoRef.current) return;

    setPhase("loading");
    setplaying(true);

    try {
      // play() MUST be called directly inside a user-gesture handler for iOS Safari
      await videoRef.current.play();
      videoRef.current.playbackRate = 2.5;
      setPhase("playing");
    } catch (err) {
      // Playback was blocked (e.g. strict autoplay policy) – let the user retry
      console.warn("Playback prevented:", err);
      setplaying(false);
      setPhase("idle");
    }
  }, [phase, setplaying]);

  const handleEnded = useCallback(() => {
    setPhase("ended");
    onOpen();
  }, [onOpen]);

  const isIdle = phase === "idle";
  const isLoading = phase === "loading";

  return (
    <AnimatePresence>
      {phase !== "ended" && (
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
          // Click anywhere on the cover triggers playback
          onClick={handleOpen}
        >
          {/* ── Full-screen video background ── */}
          <div className="absolute inset-0 w-full h-full">
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.05, ease: "easeOut" }}
            >
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                src={VIDEO_URL}
                muted
                playsInline
                webkit-playsinline="true"   /* iOS Safari legacy */
                x5-playsinline="true"       /* WeChat / Android WebView */
                poster="/images/hero1.jpeg"
                preload="auto"
                controls={false}
                disablePictureInPicture
                onCanPlay={handleCanPlay}
                onEnded={handleEnded}
                style={{ filter: "brightness(0.75) saturate(0.9)" }}
              />
            </motion.div>
          </div>

          {/* ── Floating gold dust particles ── */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {PARTICLES.map((p) => (
              <motion.div
                key={p.id}
                className="absolute rounded-full"
                style={{
                  width: p.size + "px",
                  height: p.size + "px",
                  background: "#C9A96E",
                  left: p.left + "%",
                  top: p.top + "%",
                  opacity: 0,
                }}
                animate={{
                  opacity: [0, 0.6, 0],
                  y: [0, -30, -60],
                }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  delay: p.delay,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>

          {/* ── Loading spinner (video buffering after first tap) ── */}
          <AnimatePresence>
            {isLoading && (
              <motion.div
                key="spinner"
                className="relative z-20 pointer-events-none"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.25 }}
              >
                <Spinner />
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Bottom CTA: Arabic + English ── */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-20 pointer-events-none"
            animate={{ opacity: isIdle ? (isReady ? 1 : 0.4) : 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Subtle loading pulse on the text while video isn't ready yet */}
            <motion.p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "11px",
                color: "rgba(255,255,255,0.5)",
                letterSpacing: "0.2em",
                fontStyle: "italic",
              }}
              animate={!isReady ? { opacity: [0.4, 0.8, 0.4] } : { opacity: 1 }}
              transition={
                !isReady
                  ? { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
                  : { duration: 0.3 }
              }
            >
              {isReady ? "" : " "}
            </motion.p>

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
              {isReady ? "" : ""}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── Minimal gold spinner ── */
function Spinner({ size = 40 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className="animate-spin"
    >
      <circle
        cx="20"
        cy="20"
        r="17"
        stroke="rgba(201,169,110,0.2)"
        strokeWidth="2.5"
      />
      <path
        d="M20 3 a17 17 0 0 1 17 17"
        stroke="#C9A96E"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}