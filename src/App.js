import Hero from './components/Hero';
import About from './components/About'
import Projects from './components/Projects';
import ToolsSection from './components/ToolsSection';
import GetInTouch from './components/GetInTouch';
import LogoToggle from './components/LogoToggle';

function App() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      <LogoToggle />
      <Hero />
      <About />
      <ToolsSection />
      <Projects />
      <GetInTouch />
    </div>
  );
}

export default App;
