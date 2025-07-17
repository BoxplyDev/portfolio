import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [engineReady, setEngineReady] = useState(false);
  const [dots, setDots] = useState("");

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setTimeout(() => setEngineReady(true), 1800);
    });
  }, []);

  useEffect(() => {
    if (engineReady) return;

    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev.length >= 3) return "";
        return prev + ".";
      });
    }, 500);

    return () => clearInterval(interval);
  }, [engineReady]);

  useEffect(() => {
    document.body.style.overflow = engineReady ? "" : "hidden";
    return () => (document.body.style.overflow = "");
  }, [engineReady]);

  return (
    <>
      {engineReady && (
        <Particles
  id="tsparticles"
  className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
  options={{
    fullScreen: false,
    background: {
      color: {
        value: "#1a1a1a",
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: false },
        onClick: { enable: false },
        resize: true,
      },
    },
    particles: {
      number: {
        value: 120,
        density: {
          enable: true,
          area: 1000,
        },
      },
      color: {
        value: "#ffffff", // pure white
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.3,
        random: true,
      },
      size: {
        value: { min: 1, max: 2 },
        random: true,
      },
      move: {
        enable: true,
        direction: "bottom",
        outModes: {
          default: "out",
        },
        speed: 1.5,
      },
      links: {
        enable: false,
      },
    },
    detectRetina: true,
  }}
/>

      )}

      {/* LOADING ANIMATION */}
      <AnimatePresence>
        {!engineReady && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#1a1a1a]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="text-white text-2xl font-medium font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Loading{dots}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN HERO CONTENT */}
      <AnimatePresence>
        {engineReady && (
          <motion.div
            className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold tracking-wide"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hey, I’m{" "}
              <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]">
                BoxplyDev
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg md:text-xl max-w-2xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              A developer who blends creativity and code to build smooth digital experiences.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
