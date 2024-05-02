import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import ServiceCard from "./service-card";
import Link from "next/link";
import { Button } from "./ui/button";

const font = Poppins({ subsets: ["latin"], weight: "600" });

const services = [
  {
    id: 1,
    title: "Software Developer",
    description:
      "💻🚀 As a Software developer, I find myself immersed in lines of code, my mind dancing between algorithms and data structures. My world is one of curly braces, semicolons, and version control commits. 🌟💻",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    description:
      "💻🌐  As a Full Stack developer, imagine me as a digital architect who crafts both the visible and hidden layers of a web application. My canvas spans both front-end and back-end landscapes, where I blend creativity with logic. 🌙💻",
  },
  {
    id: 3,
    title: "Freelancer",
    description:
      "💻🌟 As a freelance developer, I weave intricate solutions to real-world problems. My keyboard is my wand, and the screen before me transforms into a canvas where I paint elegant algorithms and user-friendly interfaces. 🚀💻",
  },
  {
    id: 4,
    title: "Technical Content Writer",
    description:
      "💻📝 As a Technical Content Writer, I weave captivating stories that bridge complex technologies and curious readers. Whether it’s a blog post or a whitepaper, I empower understanding through digestible prose. ✨💻",
  },
];

const SkillsSection = () => {
  return (
    <div className="bg-[#394703] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
      <div className="mb-16">
        <h1
          className={cn(
            "mt-28 lg:mt-32 text-center text-4xl md:text-6xl",
            font.className
          )}
        >
          SKILLS & SERVICES
        </h1>
        <p className="container text-center mt-4 md:text-xl lg:text-2xl">
          I am proficient in{" "}
          <span className="font-semibold text-red-600">
            C, C++, Python and JavaScript
          </span>
          . My strong grasp of{" "}
          <span className="font-semibold text-rose-500">
            {" "}
            Data Structures & Algorithms{" "}
          </span>
          enables me to tackle complex problems effectively. In web development,
          I am skilled in{" "}
          <span className="font-semibold text-amber-500">
            HTML, CSS,Tailwind CSS, Node.js, React.js, and Next.js{" "}
          </span>
          for building dynamic web applications. Also, I am familiar with
          <span className="font-semibold text-rose-500">
            {" "}
            MySQL and MongoDB
          </span>
          . Lastly, I handle cloud deployment efficiently using{" "}
          <span className="font-semibold text-red-600">
            Linux, Git, Docker, and AWS services{" "}
          </span>
          .
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-8 lg:flex-row">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
      <Link href="/skills" className="flex items-center justify-center mt-12">
        <Button variant="secondary">Let&apos;s Explore My Skills</Button>
      </Link>
    </div>
  );
};

export default SkillsSection;
