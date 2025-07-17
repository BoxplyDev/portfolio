import Hero from './components/Hero';
import About from './components/About'
import Projects from './components/Projects';
import ToolsSection from './components/ToolsSection';
import GetInTouch from './components/GetInTouch';

function App() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <Hero />
      <About />
      <ToolsSection />
      <Projects />
      <GetInTouch />
    </div>
  );
}

export default App;
