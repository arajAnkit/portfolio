import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ProjectSectionTitle from "@/components/project-section-title";
import ProjectSection from "@/components/project-section";

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col overflow-hidden relative">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectSectionTitle />
      <ProjectSection />
      <div className="mb-24" />
    </div>
  );
}
