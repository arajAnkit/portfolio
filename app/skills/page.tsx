import React from "react";
import Hero from "./_components/hero";
import Skills from "./_components/skills";

const SkillsPage = () => {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
      </div>
    </main>
  );
};

export default SkillsPage;
