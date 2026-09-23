import Navbar from "./components/Navbar";

import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import GithubSection from "./sections/GitHubSection";
import ContactSection from "./sections/ContactSection";
import Education from "./sections/EducationSection";
import TechnicalSkills from "./sections/TechnicalSkills";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main>
        <HeroSection />

        <AboutSection />

        <Education/>
        <TechnicalSkills/>

        <ExperienceSection />

        <ProjectsSection />

        <GithubSection />
        
        <ContactSection/>
        <Footer/>
        
        
      </main>
      
    </div>
  );
};

export default App;