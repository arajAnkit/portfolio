"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
  docsUrl: string;
}

const SkillDataProvider = ({ src, width, height, index, docsUrl }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
    >
      <Link href={docsUrl}>
        <Image src={src} width={width} height={height} alt="skill image"/>
      </Link>
    </motion.div>
  );
};

export default SkillDataProvider;
