import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function DetailCard({ icon, label, value, delay, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.0, delay, ease: [0.76, 0, 0.24, 1] }}
      className="flex flex-col items-center text-center gap-3"
    >
      <div style={{ color: "#C9A96E", opacity: 0.7 }}>{icon}</div>
      <div>
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "9px",
            letterSpacing: "0.35em",
            fontWeight: "400",
            color: "#C9A96E",
            textTransform: "uppercase",
            marginBottom: "6px",
          }}
        >
          {label}
        </p>
        <p
          style={{
            fontFamily: "'Cormorant Garant', serif",
            fontSize: "clamp(20px, 3.5vw, 28px)",
            fontWeight: "400",
            color: "#2A1F12",
            letterSpacing: "0.04em",
          }}
        >
          {value}
        </p>
      </div>
    </motion.div>
  );
}

export default function EventDetails() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: "#2A1F12" }}
    >
      {/* Top separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(201,169,110,0.4), transparent)",
        }}
      />

      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(201,169,110,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "10px",
              letterSpacing: "0.4em",
              fontWeight: "300",
              color: "#C9A96E",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            The Celebration
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.1 }}
            style={{
              fontFamily: "'Cormorant Garant', serif",
              fontSize: "clamp(34px, 6vw, 56px)",
              fontWeight: "300",
              color: "#F9F6F1",
              letterSpacing: "0.04em",
              marginBottom: "8px",
            }}
          >
            When &amp; Where
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="flex items-center justify-center gap-3"
          >
            <div
              style={{
                width: "40px",
                height: "1px",
                background: "linear-gradient(90deg, transparent, #C9A96E)",
              }}
            />
            <div
              style={{
                width: "4px",
                height: "4px",
                background: "#C9A96E",
                transform: "rotate(45deg)",
              }}
            />
            <div
              style={{
                width: "40px",
                height: "1px",
                background: "linear-gradient(90deg, #C9A96E, transparent)",
              }}
            />
          </motion.div>
        </div>

        {/* Detail cards row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <DetailCard
            isInView={isInView}
            delay={0.3}
            icon={
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect
                  x="2"
                  y="4"
                  width="24"
                  height="22"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  fill="none"
                />
                <line
                  x1="2"
                  y1="10"
                  x2="26"
                  y2="10"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <line
                  x1="8"
                  y1="2"
                  x2="8"
                  y2="7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <line
                  x1="20"
                  y1="2"
                  x2="20"
                  y2="7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle
                  cx="14"
                  cy="19"
                  r="2"
                  fill="currentColor"
                  opacity="0.7"
                />
              </svg>
            }
            label="Date"
            value="September 22, 2026"
          />
          <DetailCard
            isInView={isInView}
            delay={0.4}
            icon={
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle
                  cx="14"
                  cy="14"
                  r="11"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  fill="none"
                />
                <line
                  x1="14"
                  y1="7"
                  x2="14"
                  y2="14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <line
                  x1="14"
                  y1="14"
                  x2="19"
                  y2="17"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            }
            label="Start Time"
            value="7 PM"
          />
          <DetailCard
            isInView={isInView}
            delay={0.5}
            icon={
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle
                  cx="14"
                  cy="14"
                  r="11"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  fill="none"
                />
                <line
                  x1="14"
                  y1="7"
                  x2="14"
                  y2="14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <line
                  x1="14"
                  y1="14"
                  x2="10"
                  y2="17"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            }
            label="End Time"
            value="11 PM"
          />
          <DetailCard
            isInView={isInView}
            delay={0.6}
            icon={
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path
                  d="M14 3C10.13 3 7 6.13 7 10C7 15.25 14 25 14 25C14 25 21 15.25 21 10C21 6.13 17.87 3 14 3Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  fill="none"
                />
                <circle
                  cx="14"
                  cy="10"
                  r="3"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  fill="none"
                />
              </svg>
            }
            label="Venue"
            value="Elmassia.eg"
          />
        </div>

        {/* Venue card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, delay: 0.65, ease: [0.76, 0, 0.24, 1] }}
          className="relative overflow-hidden"
          style={{
            border: "1px solid rgba(201,169,110,0.2)",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          {/* Venue sketch image */}
          <div className="relative h-56 md:h-72 overflow-hidden">
            <img
              src="https://wedvite.net/venue-sketch.png"
              alt="Elmassia.eg"
              className="w-full h-full object-cover"
              style={{
                filter: "sepia(20%) brightness(0.85) saturate(0.8)",
                opacity: 0.9,
              }}
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentElement.style.background =
                  "linear-gradient(135deg, #1a1208 0%, #2d1e0e 100%)";
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 30%, rgba(10,7,5,0.9) 100%)",
              }}
            />
            <div className="absolute bottom-6 left-0 right-0 text-center">
              <p
                style={{
                  fontFamily: "'Cormorant Garant', serif",
                  fontSize: "clamp(22px, 4vw, 32px)",
                  fontWeight: "300",
                  color: "#F9F6F1",
                  letterSpacing: "0.1em",
                }}
              >
                Elmassia
              </p>
            </div>
          </div>

          {/* Venue info */}
          <div className="p-8 md:p-10 text-center">
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "10px",
                letterSpacing: "0.35em",
                fontWeight: "300",
                color: "#C9A96E",
                textTransform: "uppercase",
                marginBottom: "10px",
              }}
            >
              The Venue
            </p>
            <p
              style={{
                fontFamily: "'Cormorant Garant', serif",
                fontSize: "clamp(22px, 4vw, 30px)",
                fontWeight: "400",
                color: "#F9F6F1",
                letterSpacing: "0.05em",
                marginBottom: "6px",
              }}
            ></p>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "13px",
                fontWeight: "300",
                color: "rgba(249,246,241,0.5)",
                letterSpacing: "0.12em",
                marginBottom: "20px",
                lineHeight: "1.8",
              }}
            >
              نادي التجديف لضباط الشرطة شارع المشاية السفلي mansoura
            </p>

            <a
              href="https://maps.app.goo.gl/Z1V1PEm3AXvhyaqr5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 group"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.3em",
                fontWeight: "400",
                color: "#C9A96E",
                textTransform: "uppercase",
                textDecoration: "none",
                border: "1px solid rgba(201,169,110,0.35)",
                padding: "12px 28px",
                transition: "all 0.4s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#C9A96E";
                e.currentTarget.style.color = "#2A1F12";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#C9A96E";
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M7 1C5.07 1 3.5 2.57 3.5 4.5C3.5 7.125 7 13 7 13C7 13 10.5 7.125 10.5 4.5C10.5 2.57 8.93 1 7 1Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  fill="none"
                />
                <circle
                  cx="7"
                  cy="4.5"
                  r="1.5"
                  stroke="currentColor"
                  strokeWidth="1.1"
                  fill="none"
                />
              </svg>
              View on Maps
            </a>
          </div>
        </motion.div>

        {/* Google Map embed */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, delay: 0.8 }}
          className="mt-6 overflow-hidden"
          style={{ border: "1px solid rgba(201,169,110,0.15)" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3418.274209257934!2d31.358469984860974!3d31.046465081528883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79dd799be713b%3A0xe26db5e924aa4ef!2z2KfZhNmF2KfYs9mK2Kk!5e0!3m2!1sar!2seg!4v1780086717417!5m2!1sar!2seg"
            width="100%"
            height="380"
              style={{
              border: 0,
              display: "block",
              color:"#0000",
              filter: "grayscale(30%) sepia(10%)",
            }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Elmassia halal location"
          />
        </motion.div>
      </div>
    </section>
  );
}
