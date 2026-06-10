import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import sneha3Img from "./assets/sneha3.jpeg";
 
function useCounter(target, duration, started) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started]);
  return count;
}
 
function Stat({ target, suffix = "", label, started, isDark }) {
  const n = useCounter(target, 1400, started);
  const ac = isDark ? "#c8f135" : "#5b5bd6";
  const lc = isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)";
  return (
    <div>
      <div style={{ fontSize: "clamp(38px,5vw,56px)", fontWeight: 900, color: ac, lineHeight: 1, letterSpacing: "-0.02em", transition: "color 0.5s" }}>{n}{suffix}</div>
      <div style={{ fontSize: 11, fontWeight: 600, color: lc, textTransform: "uppercase", letterSpacing: "0.08em", marginTop: 6, lineHeight: 1.4, transition: "color 0.5s" }}>{label}</div>
    </div>
  );
}
 
export default function About({ isDark }) {
  const [storyOpen, setStoryOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
 
  const tc  = isDark ? "#ffffff" : "#111111";
  const sub = isDark ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.5)";
  const bdr = isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.15)";
  const ac  = isDark ? "#c8f135" : "#5b5bd6";
  const bg  = isDark ? "#1a1a1a" : "#f0ece6";
  const cardBg = isDark ? "#2a2a2a" : "#e0dbd5";
 
  const fadeUp = (delay) => ({
    initial: { opacity: 0, y: 30 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay },
  });
 
  return (
    <motion.section id="about" ref={ref}
      animate={{ backgroundColor: bg }} transition={{ duration: 0.5 }}
      style={{ minHeight: "100vh", padding: "80px 60px", fontFamily: "'Inter',sans-serif", position: "relative", overflow: "hidden" }}>
 
      {/* Grain */}
      <div style={{ position:"absolute", inset:0, pointerEvents:"none", opacity:0.35,
        backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='f'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23f)' opacity='0.06'/%3E%3C/svg%3E")` }} />
 
      {/* Two-column grid */}
      <div style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr 420px", gap: 60, alignItems: "start", maxWidth: 1200, margin: "0 auto" }}>
 
        {/* LEFT COLUMN */}
        <div>
          {/* Title */}
          <motion.h2 {...fadeUp(0.1)}
            style={{ fontSize:"clamp(56px,10vw,110px)", fontWeight:900, letterSpacing:"-0.04em", textTransform:"uppercase", color:tc, lineHeight:0.88, marginBottom:36, transition:"color 0.5s" }}>
            ABOUT ME
          </motion.h2>
 
          {/* Name */}
          <motion.p {...fadeUp(0.2)}
            style={{ fontSize:16, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", color:tc, marginBottom:14, transition:"color 0.5s" }}>
            Sneha Gupta
          </motion.p>
 
          {/* Bio */}
          <motion.p {...fadeUp(0.3)} style={{ fontSize:15, color:sub, lineHeight:1.8, maxWidth:600, marginBottom:14, transition:"color 0.5s" }}>
            Hi, I'm Sneha Gupta, a third-year B.Tech student at BML Munjal University and a passionate Full Stack Developer. I enjoy building impactful digital products that solve real-world problems through technology.
          </motion.p>
          <motion.p {...fadeUp(0.35)} style={{ fontSize:15, color:sub, lineHeight:1.8, maxWidth:600, marginBottom:0, transition:"color 0.5s" }}>
            From crafting full-stack platforms to leading hackathons and marketing campaigns, I bring both technical depth and creative energy to everything I build.
          </motion.p>
 
          {/* Stats */}
          <motion.div {...fadeUp(0.45)} style={{ display:"flex", gap:36, margin:"40px 0 36px", flexWrap:"wrap" }}>
            <Stat target={5} suffix="+" label={"Projects\nBuilt"} started={inView} isDark={isDark} />
            <Stat target={2} label={"Industry\nInternships"} started={inView} isDark={isDark} />
            <Stat target={3} suffix="+" label={"Leadership\nRoles"} started={inView} isDark={isDark} />
            <Stat target={1} label={"Hackathon\nRunner-Up"} started={inView} isDark={isDark} />
          </motion.div>
 
          {/* Buttons */}
          <motion.div {...fadeUp(0.55)} style={{ display:"flex", gap:12, marginBottom:28, flexWrap:"wrap" }}>
            <motion.button onClick={() => setStoryOpen(true)} whileHover={{ scale:1.03 }} whileTap={{ scale:0.97 }}
              style={{ padding:"14px 26px", borderRadius:100, background:ac, color:"#111", fontSize:14, fontWeight:700, border:"none", cursor:"pointer", display:"flex", alignItems:"center", gap:6, fontFamily:"'Inter',sans-serif", transition:"background 0.5s" }}>
              My Story ↗
            </motion.button>
            <motion.button whileHover={{ scale:1.03 }} whileTap={{ scale:0.97 }}
              style={{ padding:"14px 26px", borderRadius:100, background:"transparent", color:tc, fontSize:14, fontWeight:700, border:`1.5px solid ${bdr}`, cursor:"pointer", fontFamily:"'Inter',sans-serif", transition:"color 0.5s, border-color 0.5s" }}>
              Get In Touch
            </motion.button>
          </motion.div>
 
          {/* Contact pills */}
          <motion.div {...fadeUp(0.65)} style={{ display:"flex", gap:12, marginBottom:28, flexWrap:"wrap" }}>
            {[{ label:"+91 91109 11715", href:"tel:+919110911715" }, { label:"snegagupta5004@gmail.com", href:"mailto:snegagupta5004@gmail.com" }].map(c => (
              <a key={c.href} href={c.href}
                style={{ display:"flex", alignItems:"center", gap:8, padding:"10px 18px", borderRadius:100, border:`1.5px solid ${bdr}`, color:sub, fontSize:13, fontWeight:500, textDecoration:"none", transition:"border-color 0.3s, color 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor=ac; e.currentTarget.style.color=ac; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor=bdr; e.currentTarget.style.color=sub; }}>
                <span style={{ width:7, height:7, borderRadius:"50%", background:ac, flexShrink:0 }} />
                {c.label}
              </a>
            ))}
          </motion.div>
 
          {/* Social icons */}
          <motion.div {...fadeUp(0.75)} style={{ display:"flex", gap:12 }}>
            {[
              { href:"https://www.linkedin.com/in/sneha-gupta-515b143a5", title:"LinkedIn", icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg> },
              { href:"https://github.com/Sneha04300", title:"GitHub", icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg> },
            ].map(s => (
              <a key={s.href} href={s.href} target="_blank" rel="noreferrer" title={s.title}
                style={{ width:44, height:44, borderRadius:"50%", border:`1.5px solid ${bdr}`, display:"flex", alignItems:"center", justifyContent:"center", color:sub, textDecoration:"none", background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)", transition:"border-color 0.3s, color 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor=ac; e.currentTarget.style.color=ac; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor=bdr; e.currentTarget.style.color=sub; }}>
                {s.icon}
              </a>
            ))}
          </motion.div>
        </div>
 
        {/* RIGHT COLUMN — Photo card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ width: "100%", borderRadius: 24, overflow: "hidden", background: cardBg, transition: "background 0.5s", aspectRatio: "3/4", position: "sticky", top: 100 }}>
          <img src={sneha3Img} alt="Sneha Gupta"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }} />
        </motion.div>
 
      </div>
 
      {/* MY STORY MODAL */}
      <AnimatePresence>
        {storyOpen && (
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
            onClick={() => setStoryOpen(false)}
            style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.8)", zIndex:999, display:"flex", alignItems:"center", justifyContent:"center", padding:24 }}>
            <motion.div initial={{ scale:0.9, y:24 }} animate={{ scale:1, y:0 }} exit={{ scale:0.9, y:24 }}
              transition={{ type:"spring", stiffness:300, damping:28 }}
              onClick={e => e.stopPropagation()}
              style={{ background: isDark ? "#1a1a1a" : "#f0ece6", borderRadius:24, padding:44, maxWidth:660, width:"100%", border:`1px solid ${bdr}`, position:"relative", maxHeight:"88vh", overflowY:"auto" }}>
 
              <button onClick={() => setStoryOpen(false)}
                style={{ position:"absolute", top:18, right:18, width:34, height:34, borderRadius:"50%", border:`1px solid ${bdr}`, background:"transparent", color:tc, fontSize:20, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Inter',sans-serif" }}>×</button>
 
              <div style={{ fontSize:30, fontWeight:900, textTransform:"uppercase", letterSpacing:"-0.03em", color:tc, marginBottom:4 }}>SNEHA GUPTA</div>
              <div style={{ fontSize:11, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:ac, marginBottom:24 }}>Full Stack Developer · BML Munjal University · B.Tech CSE</div>
 
              {[
                <>Hi, I'm Sneha Gupta — a third-year B.Tech Computer Science student at BML Munjal University and a passionate Full Stack Developer. I enjoy building impactful digital products that solve real-world problems through technology.</>,
                <>I have developed projects like <strong style={{ color:ac }}>SkillHub</strong>, a full-stack mobile platform for skill exchange, learning resources, and recruitment opportunities, and <strong style={{ color:ac }}>ThriftSass</strong>, a full-stack e-commerce platform with MySQL integration.</>,
                <>Beyond development, I have served as an <strong style={{ color:ac }}>ACM Marketing Executive</strong>, <strong style={{ color:ac }}>Social Media Lead for Hacked 4.0</strong>, and <strong style={{ color:ac }}>SIH Host</strong> — leadership roles that sharpened my communication and team management skills.</>,
                <>Currently, I am gaining industry experience as a <strong style={{ color:ac }}>Frontend Developer Intern at Scube Software Systems</strong> and a <strong style={{ color:ac }}>Full Stack Web Developer Intern at BrightCode Software Services</strong>.</>,
                <>I was the <strong style={{ color:ac }}>Runner-Up at the TechStorm Hackathon</strong> during my first year, which strengthened my passion for innovation and problem-solving. I thrive at the intersection of design and technology.</>,
              ].map((para, i) => (
                <p key={i} style={{ fontSize:14, color:sub, lineHeight:1.8, marginBottom:13 }}>{para}</p>
              ))}
 
              <div style={{ display:"flex", gap:12, marginTop:28, flexWrap:"wrap" }}>
                <a href="https://github.com/Sneha04300" target="_blank" rel="noreferrer"
                  style={{ padding:"10px 22px", borderRadius:100, background:ac, color:isDark?"#111":"#fff", fontSize:13, fontWeight:700, textDecoration:"none", letterSpacing:"0.04em" }}>GitHub →</a>
                <a href="https://www.linkedin.com/in/sneha-gupta-515b143a5" target="_blank" rel="noreferrer"
                  style={{ padding:"10px 22px", borderRadius:100, border:`1px solid ${bdr}`, color:tc, fontSize:13, fontWeight:700, textDecoration:"none", letterSpacing:"0.04em" }}>LinkedIn →</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}