import AboutMeSection from "@/components/sections/AboutMeSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="border-b border-primary"></div>
      <AboutMeSection />
      <div className="border-b border-primary"></div>
      <SkillsSection />
      <div className="border-b border-primary"></div>
      <ProjectsSection />
    </>
  );
}
