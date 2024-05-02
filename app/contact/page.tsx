"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./_components/hero-highlight";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaMedium, FaTwitter } from "react-icons/fa";

const ContactPage = () => {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        I&apos;m always up for a chat! <br />I can be reached at{" "}
        <Highlight className="text-black dark:text-white">
          work.araj@gamil.com
        </Highlight>
        <br /> or give me a shout on social media.
      </motion.h1>
      <div className="mt-8 flex flex-row justify-center items-center gap-x-4 md:gap-x-6">
        <Link href="https://www.linkedin.com/in/arajankit/">
          <FaLinkedin className="h-10 w-10" />
        </Link>
        <Link href="https://twitter.com/araj_ankit">
          <FaTwitter className="h-10 w-10" />
        </Link>
        <Link href="https://github.com/arajAnkit">
          <FaGithub className="h-10 w-10" />
        </Link>
      </div>
    </HeroHighlight>
  );
};

export default ContactPage;
