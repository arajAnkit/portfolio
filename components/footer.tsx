import Link from "next/link";
import React from "react";

import { FaGithub, FaLinkedin, FaTwitter, FaMedium } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="left-0 right-0 bottom-0 py-4 px-4 bg-transparent backdrop-blur-lg z-[100] flex items-center border border-b-[1px] border-neutral-900 justify-between">
      <div className="flex items-center gap-3 md:gap-4">
        <Link href="https://github.com/arajAnkit" target="_blank">
          <FaGithub className="h-6 w-6 md:h-8 md:w-8" />
        </Link>
        <Link href="https://www.linkedin.com/in/arajankit/" target="_blank">
          <FaLinkedin className="h-6 w-6 md:h-8 md:w-8" />
        </Link>
        <Link href="https://twitter.com/araj_ankit" target="_blank">
          <FaTwitter className="h-6 w-6 md:h-8 md:w-8" />
        </Link>
        <Link href="https://medium.com/@arajAnkit" target="_blank">
          <FaMedium className="h-6 w-6 md:h-8 md:w-8" />
        </Link>
      </div>
      <div className="flex items-center mr-4">
        <h2 className="md:text-xl">&copy; arajAnkit 2024</h2>
      </div>
    </footer>
  );
};

export default Footer;
