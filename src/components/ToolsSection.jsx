import FadeInSection from "./FadeInSection";
import unityLogo from "../assets/logos/unity-game-engine-icon.png";
import { motion } from "framer-motion";
import { useState } from "react";

const tools = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Unity", logo: unityLogo },
];

const fadeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

export default function ToolsSection() {
  const [startAnim, setStartAnim] = useState(false);

  return (
    <section className="py-20 bg-transparent text-white flex justify-center">
      <FadeInSection full onShow={() => setStartAnim(true)}>
        <div className="max-w-6xl w-full rounded-xl bg-[#111111] px-8 py-12 text-center">
          <motion.h2
            className="text-5xl font-bold mb-10 text-teal-400"
            variants={fadeVariants}
            initial="hidden"
            animate={startAnim ? "visible" : "hidden"}
            custom={0}
          >
            I often work with:
          </motion.h2>

          <ul className="flex flex-wrap justify-center gap-10">
            {tools.map((tool, i) => (
              <motion.li
                key={tool.name}
                className="flex flex-col items-center space-y-2 w-24"
                variants={fadeVariants}
                initial="hidden"
                animate={startAnim ? "visible" : "hidden"}
                custom={i + 1}
              >
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="h-16 w-16 object-contain filter grayscale hover:grayscale-0 hover:scale-110 transition-transform duration-300"
                />
                <span className="text-sm font-medium text-gray-300">{tool.name}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </FadeInSection>
    </section>
  );
}
