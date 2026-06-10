import { useState } from "react";
import Navbar from "./navbar";
import Hero from "./Hero";
import Services from "./Services";
import About from "./about";

function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div style={{ background: isDark ? "#1e1e1e" : "#f0ece6", minHeight: "100vh", transition: "background 0.5s" }}>
      <Navbar />
      <Hero isDark={isDark} setIsDark={setIsDark} />
      <Services isDark={isDark} desktopImg={null} />
       <About isDark={isDark} />
    </div>
  )
}

export default App;