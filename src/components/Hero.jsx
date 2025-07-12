import { useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import HeroButton from "./HeroButton";

export default function Hero() {
  const [startTyping, setStartTyping] = useState(false);
  const [particlesInitDone, setParticlesInitDone] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setParticlesInitDone(true));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setStartTyping(true), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center bg-[#0d0d0d] text-white overflow-hidden">
      {/* Particles */}
      {particlesInitDone && (
        <Particles
          id="tsparticles"
          options={{
            fpsLimit: 60,
            background: { color: "transparent" },
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
                onClick: { enable: true, mode: "push" },
                resize: true,
              },
              modes: {
                repulse: { distance: 100, duration: 0.4 },
                push: { quantity: 4 },
              },
            },
            particles: {
              number: { value: 60, density: { enable: true, area: 1000 } },
              color: { value: "#888" },
              shape: { type: "circle" },
              opacity: { value: 0.3 },
              size: { value: { min: 1, max: 3 } },
              move: {
                enable: true,
                speed: 0.8,
                direction: "none",
                outModes: { default: "bounce" },
              },
              links: {
                enable: true,
                distance: 150,
                color: "#666",
                opacity: 0.2,
                width: 1,
              },
            },
            detectRetina: true,
          }}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
      )}

      {/* Scanline effect */}
      <div className="absolute inset-0 z-10 bg-repeat opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "100% 4px" }} />

      {/* Background animated symbols */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="animate-float text-white/5 text-8xl font-mono absolute top-1/4 left-1/4">ψ</div>
        <div className="animate-float2 text-white/5 text-7xl font-mono absolute top-[60%] right-[20%]">λ</div>
        <div className="animate-float3 text-white/5 text-6xl font-mono absolute bottom-[10%] left-[15%]">Ω</div>
      </div>

      {/* Glowing ring */}
      <div className="absolute z-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-800 via-indigo-700 to-transparent rounded-full blur-3xl opacity-10" />

      {/* Hero content */}
      <motion.div
        className="relative z-20 w-full max-w-5xl text-center px-10 py-24 bg-[#111111]/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_0_30px_#000] overflow-hidden before:absolute before:inset-0 before:rounded-2xl before:border before:border-purple-500/10 before:animate-glow"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="text-6xl md:text-7xl font-extrabold mb-8 tracking-tight font-grotesk bg-gradient-to-br from-white via-gray-300 to-gray-600 bg-clip-text text-transparent">
          {startTyping ? (
            <Typewriter
              words={["Raahim Tai"]}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={0}
              delaySpeed={1500}
              loop={1}
            />
          ) : (
            <span style={{ minWidth: "20ch", display: "inline-block" }} />
          )}
        </h1>

        <motion.p
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Aspiring Game Developer & Software Engineer crafting immersive digital experiences that feel alive.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          <HeroButton href="#projects">View Projects</HeroButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
