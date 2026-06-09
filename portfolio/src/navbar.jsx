import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import snehaImg from "./assets/sneha.png";
 
const navLinks = ["Home", "About", "Projects", "Blogs"];
 
export default function Navbar() {
  const [active, setActive] = useState(null);
  const [scrolled, setScrolled] = useState(false);
 
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
 
  return (
    <motion.nav
      style={{
        position: "fixed",
        top: "16px",
        left: "50%",
        x: "-50%",
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        borderRadius: "100px",
        border: scrolled
          ? "1px solid rgba(255,255,255,0.12)"
          : "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        padding: "8px 8px",
        boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.5)" : "none",
      }}
      animate={{
        backgroundColor: scrolled
          ? "rgba(10,10,10,0.95)"
          : "rgba(17,17,17,0.9)",
      }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Avatar */}
      <div
        style={{
          width: 42,
          height: 42,
          borderRadius: "50%",
          overflow: "hidden",
          border: "1.5px solid rgba(255,255,255,0.15)",
          flexShrink: 0,
          marginRight: 8,
          background: "#2a2a2a",
        }}
      >
        <img
          src={snehaImg}
          alt="Avatar"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
 
      {/* Nav Links */}
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          listStyle: "none",
          margin: "0 6px",
          padding: 0,
        }}
      >
        {navLinks.map((link) => (
          <li key={link} style={{ position: "relative" }}>
            <a
              href={`#${link.toLowerCase()}`}
              onClick={() => setActive(link)}
              style={{
                display: "block",
                padding: "8px 16px",
                borderRadius: "100px",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 450,
                letterSpacing: "0.01em",
                position: "relative",
                background: "transparent",
                cursor: "pointer",
              }}
            >
              <SlideText label={link} isActive={active === link} />
            </a>
 
            {/* Green dot — only on clicked/active link */}
            <AnimatePresence>
              {active === link && (
                <motion.span
                  key={`dot-${link}`}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  style={{
                    position: "absolute",
                    bottom: -10,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 9,
                    height: 9,
                    borderRadius: "50%",
                    background: "#c8f135",
                    pointerEvents: "none",
                    display: "block",
                  }}
                />
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
 
      {/* CTA Button */}
      <motion.a
        href="#contact"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "10px 20px",
          borderRadius: "100px",
          fontSize: 14,
          fontWeight: 500,
          letterSpacing: "0.01em",
          textDecoration: "none",
          marginLeft: 6,
          cursor: "pointer",
          overflow: "hidden",
          whiteSpace: "nowrap",
          border: scrolled
            ? "1px solid rgba(200,241,53,0.25)"
            : "1px solid transparent",
        }}
        animate={{
          backgroundColor: scrolled ? "#1a1a1a" : "#ffffff",
          color: scrolled ? "#c8f135" : "#111111",
        }}
        whileHover={{ scale: 0.97 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        <AnimatePresence>
          {scrolled && (
            <motion.span
              key="cta-dot"
              initial={{ scale: 0, opacity: 0, width: 0, marginRight: 0 }}
              animate={{ scale: 1, opacity: 1, width: 7, marginRight: 0 }}
              exit={{ scale: 0, opacity: 0, width: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              style={{
                height: 7,
                borderRadius: "50%",
                background: "#c8f135",
                flexShrink: 0,
                display: "block",
              }}
            />
          )}
        </AnimatePresence>
 
        <div
          style={{
            height: "1.2em",
            overflow: "hidden",
            position: "relative",
            minWidth: scrolled ? 122 : 50,
            transition: "min-width 0.4s ease",
          }}
        >
          <motion.span
            animate={{ y: scrolled ? "-100%" : "0%", opacity: scrolled ? 0 : 1 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            style={{
              display: "block",
              lineHeight: "1.2em",
              position: "absolute",
              top: 0,
              left: 0,
              whiteSpace: "nowrap",
            }}
          >
            Contact
          </motion.span>
          <motion.span
            animate={{ y: scrolled ? "0%" : "100%", opacity: scrolled ? 1 : 0 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            style={{
              display: "block",
              lineHeight: "1.2em",
              position: "absolute",
              top: 0,
              left: 0,
              whiteSpace: "nowrap",
            }}
          >
            Available for work
          </motion.span>
        </div>
      </motion.a>
    </motion.nav>
  );
}
 
function SlideText({ label, isActive }) {
  const [hovered, setHovered] = useState(false);
  const showGreen = hovered || isActive;
 
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        height: "1.2em",
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
      }}
    >
      {/* Original text — slides out on hover */}
      <motion.span
        animate={{
          y: hovered ? "-100%" : "0%",
          opacity: hovered ? 0 : 1,
        }}
        transition={{ duration: 0.38, ease: [0.76, 0, 0.24, 1] }}
        style={{
          display: "block",
          lineHeight: "1.2em",
          whiteSpace: "nowrap",
          color: isActive ? "#c8f135" : "rgba(255,255,255,0.75)",
        }}
      >
        {label}
      </motion.span>
 
      {/* Green text — slides in from below on hover */}
      <motion.span
        animate={{
          y: hovered ? "0%" : "100%",
          opacity: hovered ? 1 : 0,
        }}
        transition={{ duration: 0.38, ease: [0.76, 0, 0.24, 1] }}
        style={{
          display: "block",
          lineHeight: "1.2em",
          position: "absolute",
          top: 0,
          left: 0,
          whiteSpace: "nowrap",
          color: "#c8f135",
        }}
      >
        {label}
      </motion.span>
    </span>
  );
}