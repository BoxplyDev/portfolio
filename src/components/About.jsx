import FadeInSection from "./FadeInSection";
import { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.3 + i * 0.3, duration: 0.6, ease: "easeOut" },
    }),
  };

export default function About() {
  const [startTyping, setStartTyping] = useState(false);

  return (
    <section className="px-6 py-20 flex justify-center items-start">
      <FadeInSection onShow={() => setStartTyping(true)}>
        <div className="max-w-6xl w-full rounded-xl px-8 py-12 text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-10 leading-tight min-h-[6rem] text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]">
            {startTyping ? (
              <Typewriter
                words={["I’m Raahim — a game & front-end developer."]}
                cursor
                cursorStyle="|"
                typeSpeed={30}
                deleteSpeed={0}
                delaySpeed={1000}
                loop={1}
              />
            ) : (
              
              <span style={{ visibility: "hidden" }}>
                I’m Raahim — a developer obsessed with bringing ideas to life.
              </span>
            )}
          </h1>

          {[
            "I started out experimenting with Unity & Unreal Engine, trying to recreate the games I loved as a kid. That led me into a world of programming, creativity, and curiosity.",
            "Alongside my projects, I studied Computer Science in school and completed my A-Levels in the subject. Now I’m pursuing a Bachelor’s degree in Computer Science & Engineering, pushing further into the field.",
            "I’m especially drawn to the concepts of Artificial Intelligence — the way machines can learn, adapt, and replicate human behavior. It’s an area I want to branch into more deeply as I continue my journey.",
            "Today, I focus on building immersive experiences — games, tools, and appealing front-end interfaces — that feel alive and aesthetically designed.",
            "This whole coding journey began for me when I was 13. I like to think that I racked up quite a bit of experience in the field — ready to use it for you.",
          ].map((text, i) => (
            <motion.p
              key={i}
              className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6"
              variants={fadeVariants}
              initial="hidden"
              animate={startTyping ? "visible" : "hidden"}
              custom={i + 1}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
}
