import React from "react";
import { ProjectCard } from "./project-card";

const projects = [
  {
    id: 1,
    imgUrl: "/2.png",
    altText: "Plura",
    title: "Plura - Drag & Drop Website Builder Solution",
    description:
      "Plura is a SaaS application designed to revolutionize the way agency owners work in a market full of opportunities for innovation. As a white-labeled, multi-tenant platform, Plura offers an extensive tools and features.",
    sourceCodeUrl: "https://github.com/arajAnkit/plura",
    livePreviewUrl: "/",
  },
  {
    id: 2,
    imgUrl: "/1.png",
    altText: "Url",
    title: "Lingo - Mordern Solution for Language Learning",
    description:
      "Lingo is a cool online service that helps you learn languages with fun lessons. You will hear AI voices that sound like real people guiding you through each step. Lingo is all about making language learning easy, engaging, and rewarding.",
    sourceCodeUrl: "https://github.com/arajAnkit/lingo",
    livePreviewUrl: "/",
  },
  {
    id: 3,
    imgUrl: "/3.png",
    altText: "Url",
    title: "Fuzzie - Mordern Solution to Automate Your Work",
    description:
      "Fuzzie is a modern solution designed to streamline your workflow and boost productivity. Whether you are a busy professional, a creative thinker, or someone who values efficiency.Fuzzie is more than just a tool;",
    sourceCodeUrl: "https://github.com/arajAnkit/fuzzie",
    livePreviewUrl: "/",
  },
];

const ProjectSection = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-12 mb-12">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imgUrl={project.imgUrl}
            altText={project.altText}
            title={project.title}
            description={project.description}
            sourceCodeUrl={project.sourceCodeUrl}
            livePreviewUrl={project.livePreviewUrl}
          />
        ))}
      </div>
      <div className="mt-16 mb-16" />
    </div>
  );
};

export default ProjectSection;
