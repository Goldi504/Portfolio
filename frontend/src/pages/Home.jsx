import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import SkillsSection from "../sections/SkillsSection";
import ProjectsSection from "../sections/ProjectsSection";
import ExperienceSection from "../sections/ExperienceSection";
import EducationSection from "../sections/EducationSection";
import GitHubSection from "../sections/GitHubSection";
import ContactSection from "../sections/ContactSection";
const Home = () => {
  return (
    <div className="min-h-screen bg-[#f7f8fc]">

      <Navbar />

      <main>
        <HeroSection />

        <AboutSection />

        <SkillsSection />

        <ProjectsSection />

        <ExperienceSection />

        <EducationSection />

        <GitHubSection />

        <ContactSection />
        

      </main>

      <Footer />
    </div>
  );
};

export default Home;