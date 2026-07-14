import AboutMeSection from "@/components/sections/AboutMeSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ToolsSection from "@/components/sections/ToolsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="border-primary border-b"></div>
      <AboutMeSection />
      <div className="border-primary border-b"></div>
      <ToolsSection />
      <div className="border-primary border-b"></div>
      <ProjectsSection />
    </>
  );
}
