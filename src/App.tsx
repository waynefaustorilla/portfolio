import { Navigation } from "./components/layout/Navigation";
import { HeroSection } from "./components/sections/HeroSection";
import { AboutSection } from "./components/sections/AboutSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { HobbiesSection } from "./components/sections/HobbiesSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { ContactSection } from "./components/sections/ContactSection";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white overflow-x-hidden">
      <Navigation />
      <main className="w-full">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <HobbiesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;