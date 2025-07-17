import { useState } from "react";
import ProjectCard from "./ProjectCard";
import FadeInSection from "./FadeInSection";
import { motion } from "framer-motion";

// Thumbnails
import GokuThumbnail from "../assets/thumbnails/GOKUTHUMBNAILHORROR4.png";
import GokuChase from "../assets/thumbnails/GOKUCHASE.png";
import OrbitalChaos from "../assets/thumbnails/OrbitalChaos.png";
import OrbitalThumbnail from "../assets/thumbnails/orbitalthumbnail.png";
import KarlsonTutorialThumbnail from "../assets/thumbnails/karlson_pic_drop_thumbnail.jpg";

const allProjects = [
  {
    id: 1,
    title: "I Heard You're Pretty Strong",
    category: "Games",
    imageUrl: GokuChase,
    link: "https://boxply-dev.itch.io/heyitsmegoku",
  },
  {
    id: 2,
    title: "I Turned Goku into a HORROR GAME in 24 Hours!",
    category: "Video",
    imageUrl: GokuThumbnail,
    link: "https://www.youtube.com/watch?v=2-k6YTlm9tw",
  },
  {
    id: 3,
    title: "Orbital Chaos 2D",
    category: "Games",
    imageUrl: OrbitalChaos,
    link: "https://boxply-dev.itch.io/orbital-chaos",
  },
  {
    id: 4,
    title: "1 Hour To Remake my First MOBILE GAME in 3D!",
    category: "Video",
    imageUrl: OrbitalThumbnail,
    link: "https://www.youtube.com/watch?v=JLWsl3irlsM",
  },
  {
    id: 5,
    title: "How To Pick & Drop Physics Objects like Karlson | Unity",
    category: "Video",
    imageUrl: KarlsonTutorialThumbnail,
    link: "https://www.youtube.com/watch?v=saMBLw-JdHU",
  },
];

const categories = ["All", "Video", "Games"];

const fadeVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.2 + i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [startAnim, setStartAnim] = useState(false);

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="min-h-screen text-white px-6 py-20 flex justify-center items-start"
    >
      <FadeInSection onShow={() => setStartAnim(true)}>
        <div className="max-w-6xl w-full rounded-xl px-8 py-12">
          {/* Heading */}
          <h2 className="text-5xl font-bold mb-12 text-white">
            Projects
            <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]">.</span>
          </h2>

          {/* Category Filter */}
          <nav className="flex space-x-6 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-md font-medium transition duration-300 ${
                  activeCategory === cat
                    ? "text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]"
                    : "text-gray-400 hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </nav>

          {/* Grid of Projects */}
          <div className="grid md:grid-cols-3 gap-10 justify-items-center">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                variants={fadeVariants}
                initial="hidden"
                animate={startAnim ? "visible" : "hidden"}
                custom={i}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
