import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const font = Poppins({ subsets: ["latin"], weight: "600" });
const AboutSection = () => {
  return (
    <div className="bg-[#1e231c] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
      <div className="mb-16">
        <h1
          className={cn(
            "mt-28 lg:mt-32 text-center text-4xl md:text-6xl",
            font.className
          )}
        >
          ABOUT ME
        </h1>
        <section className="lg:py-16 container">
          <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-4 place-self-center mt-4 lg:mt-0">
              <div className="rounded-full bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                <Image
                  src="/about-image.png"
                  alt="About Img"
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  width={300}
                  height={300}
                />
              </div>
            </div>
            <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
              <p className="text-[#d7e0e6] text-base sm:text-lg mt-6 md:ml-20 lg:ml-6 lg:text-xl">
                I&apos;m{" "}
                <span className="text-rose-600 font-semibold">
                  Ankit Rajpoot.{" "}
                </span>
                I&apos;m a self-taught full stack developer or software
                engineer, passionate about learning new skills and creating web
                app & software to make the world a better place.
                <br />
                <br />
                <span className="bg-gradient-to-r from-fuchsia-500 via-amber-500 to-cyan-500 bg-clip-text text-transparent">
                  I love to work in JavaScript & TypeScript and React & NextJS.
                  I have doing some stuff on the side on DevOps Tools (Docker,
                  Kubernetes, Cloud & CI/CD Pipelines)
                </span>
                .
                <br />
                <br />
                In my free time, I solve DSA problems or write technical blogs
                or create cheatsheet and roadmaps.
              </p>
              <div className="flex items-center justify-center gap-4 mt-4 md:mt-8">
                <Link href="https://twitter.com/araj_ankit">
                  <Button variant={"outline"}>Twitter</Button>
                </Link>
                <Link href="https://leetcode.com/arajAnkit/">
                  <Button variant={"outline"}>LeetCode</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutSection;
