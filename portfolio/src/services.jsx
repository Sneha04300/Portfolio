import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Replace this import with your actual desktop/workspace image
import sneha2Img from "./assets/sneha2.png";

const SERVICES = [
  {
    id: 1,
    title: "FULL STACK  WEB DEVELOPMENT",
    items: [
      "Responsive and modern website development",
      "MERN stack web application development",
      "Authentication and user management systems",
      "REST API and database integration",
    ],
  },

  {
    id: 2,
    title: "DATA SCIENCE",
    items: [
      "Data cleaning and preprocessing",
      "Exploratory data analysis and insights",
      "Data visualization and interactive dashboards",
      "Machine learning model implementation",
    ],
  },

  {
    id: 3,
    title: "GENERATIVE AI",
    items: [
      "AI chatbot and virtual assistant development",
      "OpenAI and Gemini API integration",
      "Prompt engineering and AI workflows",
      "AI-powered web application features",
    ],
  },

  {
    id: 4,
    title: "MACHINE LEARNING",
    items: [
      "Supervised and unsupervised learning models",
      "Model training evaluation and optimization",
      "Predictive analytics and forecasting",
      "End-to-end machine learning pipelines",
    ],
  },
];
// Checkmark circle SVG
function CheckIcon({ color }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
      <circle cx="9" cy="9" r="8.5" stroke={color} strokeWidth="1.2" />
      <path d="M5.5 9.2L7.8 11.5L12.5 6.5" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Services({ isDark, desktopImg }) {
  const [openId, setOpenId] = useState(null);

  const bg    = isDark ? "#1e1e1e" : "#f0ece6";
  const tc    = isDark ? "#ffffff" : "#111111";
  const sub   = isDark ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.45)";
  const divider = isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)";
  const accent = isDark ? "#c8f135" : "#5b5bd6";

  const toggle = (id) => setOpenId(prev => prev === id ? null : id);

  return (
    <section
      style={{
        minHeight: "100vh",
        backgroundColor: bg,
        display: "grid",
        gridTemplateColumns: "1fr 420px",
        gap: 0,
        fontFamily: "'Inter', sans-serif",
        transition: "background-color 0.5s",
        overflow: "hidden",
      }}
    >
      {/* LEFT — content */}
      <div
        style={{
          padding: "80px 60px 80px 60px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Heading */}
        <motion.h2
          animate={{ color: tc }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: "clamp(48px, 7vw, 96px)",
            fontWeight: 900,
            lineHeight: 0.9,
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
            margin: "0 0 24px 0",
          }}
        >
          MY TECH STACK 
          <br />
          AND EXPERTISE
        </motion.h2>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 15,
            color: sub,
            lineHeight: 1.7,
            maxWidth: 420,
            margin: "0 0 48px 0",
            transition: "color 0.5s",
          }}
        >
         Building scalable web applications, intelligent AI solutions, and data-driven products that solve real-world problems.
        </p>

        {/* Accordion */}
        <div style={{ width: "100%", maxWidth: 640 }}>
          {SERVICES.map((svc, idx) => {
            const isOpen = openId === svc.id;
            return (
              <div key={svc.id}>
                {/* Divider top (always, first item too) */}
                <div style={{ height: 1, backgroundColor: divider, transition: "background-color 0.5s" }} />

                {/* Row */}
                <motion.div
                  onClick={() => toggle(svc.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "24px 0",
                    cursor: "pointer",
                    userSelect: "none",
                  }}
                  whileHover={{ opacity: 0.85 }}
                >
                  <motion.span
                    animate={{ color: isOpen ? accent : tc }}
                    transition={{ duration: 0.3 }}
                    style={{
                      fontSize: "clamp(22px, 3vw, 32px)",
                      fontWeight: 900,
                      letterSpacing: "-0.02em",
                      textTransform: "uppercase",
                    }}
                  >
                    {idx + 1}.&nbsp; {svc.title}
                  </motion.span>

                  {/* Chevron */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0, color: isOpen ? accent : tc }}
                    transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                    style={{ color: tc, transition: "color 0.3s", flexShrink: 0 }}
                  >
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path
                        d="M5 14L11 8L17 14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                </motion.div>

                {/* Expanded content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <div style={{ paddingBottom: 24, display: "flex", flexDirection: "column", gap: 14 }}>
                        {svc.items.map((item, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.06 }}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: 12,
                            }}
                          >
                            <CheckIcon color={accent} />
                            <span
                              style={{
                                fontSize: 15,
                                color: sub,
                                lineHeight: 1.5,
                                transition: "color 0.5s",
                              }}
                            >
                              {item}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
          {/* Bottom divider */}
          <div style={{ height: 1, backgroundColor: divider, transition: "background-color 0.5s" }} />
        </div>
      </div>

      {/* RIGHT — sticky image */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {desktopImg ? (
          <img
            src={desktopImg}
            alt="Workspace"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          />
        ) : (
          /* Placeholder when no image provided */
          <div
            style={{
              width: "100%",
              height: "100%",
              background: isDark ? "#2a2a2a" : "#d8d4ce",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.5s",
            }}
          >
            <span style={{ color: sub, fontSize: 14 }}>Desktop image here</span>
          </div>
        )}
      </div>
    </section>
  );
}