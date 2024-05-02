"use client";
import { Poppins } from "next/font/google";
import { BackgroundGradientAnimation } from "./additional/bg-gradient-animation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

const font = Poppins({ subsets: ["latin"], weight: "600" });

const HeroSection = () => {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-4xl text-center md:text-5xl lg:text-6xl gap-2 md:gap-4">
        <p>✨💻 </p>
        <p
          className={cn(
            "bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white to-white/80",
            font.className
          )}
        >
          WELCOME TO MY CORNER OF THE NET
        </p>
        <p
          className={cn(
            "bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-amber-500 to-white",
            font.className
          )}
        >
          arajAnkit
        </p>
        <div className="mt-8 flex flex-row justify-center items-center gap-x-4 md:gap-x-6">
          <Link href="https://www.linkedin.com/in/arajankit">
            <FaLinkedin />
          </Link>
          <Link href="https://github.com/arajAnkit">
            <FaGithub />
          </Link>
          <Link href="https://medium.com/@arajAnkit">
            <FaMedium />
          </Link>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
};

export default HeroSection;
