"use client";
import React from "react";
import { BackgroundGradient } from "./additional/bg-gradient";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {
  imgUrl: string;
  altText: string;
  title: string;
  description: string;
  sourceCodeUrl: string;
  livePreviewUrl: string;
};

export function ProjectCard({
  imgUrl,
  altText,
  title,
  description,
  sourceCodeUrl,
  livePreviewUrl,
}: Props) {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={imgUrl}
          alt={altText}
          height="400"
          width="400"
          className="object-contain rounded-lg"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {title}
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
        <div className="flex  justify-start gap-4 mt-2">
          <Link href={sourceCodeUrl} target="_blank">
            <Button variant="outline" className="mt-1 rounded-full">
              Source Code
            </Button>
          </Link>
          <Link href={livePreviewUrl} target="_blank">
            <Button variant="outline" className="mt-1 rounded-full">
              Live Preview
            </Button>
          </Link>
        </div>
      </BackgroundGradient>
    </div>
  );
}
