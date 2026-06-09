import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import sneha3Img from "./assets/sneha3.jpeg";

export default function Hero( {isDark, setIsDark }) {
  
  const [waving, setWaving] = useState(false);
  const [showHand, setShowHand] = useState(false);
  const intervalRef = useRef(null);

  const doWave = () => {
    setWaving(false);
    setTimeout(() => setWaving(true), 10);
  };

  useEffect(() => {
    intervalRef.current = setInterval(doWave, 4000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const bg       = isDark ? "#1e1e1e" : "#f0ece6";
  const tc       = isDark ? "#ffffff" : "#111111";
  const sub      = isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)";
  const lbl      = isDark ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.5)";
  const btnBg    = isDark ? "#c8f135" : "#5b5bd6";
  const btnTxt   = isDark ? "#111" : "#fff";
  const dotBg    = isDark ? "#c8f135" : "#5b5bd6";

  return (
    <motion.section
      animate={{ backgroundColor: bg }}
      transition={{ duration: 0.5 }}
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 300px 1fr",
        alignItems: "center",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Holographic gradient — light mode only */}
      <motion.div
        animate={{ opacity: isDark ? 0 : 0.55 }}
        transition={{ duration: 0.5 }}
        style={{
          position: "absolute", top: "-10%", left: "-10%",
          width: "55%", height: "120%",
          background: "conic-gradient(from 180deg at 40% 50%, #ffd6e7, #ffb3c6, #c8b6ff, #a8d8ff, #b8f0c8, #fffab3, #ffd6e7)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* LEFT */}
      <div style={{ position: "relative", zIndex: 1, padding: "0 12px 0 60px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
     
        <motion.div animate={{ color: tc }} transition={{ duration: 0.5 }}
          style={{ fontSize: "clamp(56px, 9vw, 120px)", fontWeight: 900, lineHeight: 0.88, letterSpacing: "-0.04em", textTransform: "uppercase" }}>
          SNEHA
        </motion.div>
       
      </div>

      {/* CENTER */}
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 0" }}>

        {/* Portrait + Hi button */}
        <div style={{ position: "relative", width: 280 }}>
          <div style={{ width: 280, height: 370, borderRadius: 24, overflow: "hidden", background: isDark ? "#3a3a3a" : "#d0ccc6", transition: "background 0.5s" }}>
            <img src={sneha3Img} alt="Sneha Gupta" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>

          {/* Hi button — bottom-left overlapping */}
          <div style={{ position: "absolute", bottom: -30, left: -30, zIndex: 4 }}>
            <motion.button
              onClick={doWave}
              onHoverStart={() => setShowHand(true)}
              onHoverEnd={() => setShowHand(false)}
              animate={waving ? { rotate: [0, -18, 18, -12, 12, 0], scale: [1, 1.06, 1.06, 1.06, 1.06, 1] } : {}}
              transition={{ duration: 0.7 }}
              onAnimationComplete={() => setWaving(false)}
              style={{
                width: 110, height: 110, borderRadius: "50%",
                background: btnBg, border: "none", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "background 0.5s",
                position: "relative", overflow: "hidden",
              }}
            >
              <AnimatePresence mode="wait">
                {showHand ? (
                  <motion.span key="hand" initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.7 }} transition={{ duration: 0.2 }}>
                    <svg width="42" height="42" viewBox="0 0 64 64" fill="none">
                      <path d="M20 52C20 52 10 44 10 28C10 24 13 21 17 21C17 21 17 14 21 12C25 10 28 13 28 16V10C28 7 31 5 34 6C37 7 38 10 38 13V16C38 14 41 12 44 14C47 16 46 20 46 20C46 20 50 21 50 26C50 36 44 46 38 50L20 52Z" fill={btnTxt}/>
                    </svg>
                  </motion.span>
                ) : (
                  <motion.span key="hi" initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.7 }} transition={{ duration: 0.2 }}
                    style={{ fontSize: 36, fontWeight: 800, color: btnTxt, lineHeight: 1, transition: "color 0.5s" }}>
                    Hi
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Toggle */}
        <div style={{ marginTop: 50 }}
          onClick={() => setIsDark(!isDark)}
        >
          <motion.div
            animate={{ backgroundColor: btnBg }}
            transition={{ duration: 0.5 }}
            style={{ width: 60, height: 30, borderRadius: 999, position: "relative", cursor: "pointer" }}
          >
            <motion.div
              animate={{ left: isDark ? 5 : 35, backgroundColor: isDark ? "#111" : "#fff" }}
              transition={{ type: "spring", stiffness: 450, damping: 25 }}
              style={{ position: "absolute", top: 5, width: 20, height: 20, borderRadius: "50%" }}
            />
          </motion.div>
        </div>
      </div>

      {/* RIGHT */}
      <div style={{ position: "relative", zIndex: 1, padding: "0 60px 0 12px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <motion.div animate={{ backgroundColor: dotBg }} transition={{ duration: 0.5 }}
          style={{ width: 10, height: 10, borderRadius: "50%", marginBottom: 10 }} />
        <motion.div animate={{ color: tc }} transition={{ duration: 0.5 }}
          style={{ fontSize: "clamp(56px, 9vw, 120px)", fontWeight: 900, lineHeight: 0.88, letterSpacing: "-0.04em", textTransform: "uppercase" }}>
          GUPTA
        </motion.div>
       <p style={{ fontSize: 13.5, color: sub, lineHeight: 1.65, marginTop: 18, maxWidth: 260, transition: "color 0.5s" }}>
          I'm a B.Tech 3rd year student <br /> at BML Munjal University
        </p>
      </div>
    </motion.section>
  );
}