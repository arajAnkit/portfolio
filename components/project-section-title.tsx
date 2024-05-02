import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({ subsets: ["latin"], weight: "600" });

const ProjectSectionTitle = () => {
  return (
    <div className="bg-[#540a68] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
      <div className="mb-16">
        <h1
          className={cn(
            "mt-28 lg:mt-32 text-center text-4xl md:text-6xl",
            font.className
          )}
        >
          PROJECTS
        </h1>
        <p className="container text-center mt-4 md:text-xl lg:text-2xl">
          I love building Software, full stack web apps, SaaS and mobile apps
          etc. I have build{" "}
          <span className="text-rose-600 font-bold">18 projects</span> so far in
          different technology stacks like C++, Python, HTML, CSS, JavaScript,
          React, Next Js, Express, Django.
        </p>
      </div>
    </div>
  );
};

export default ProjectSectionTitle;
