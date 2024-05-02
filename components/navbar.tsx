import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="fixed left-0 right-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
      <aside className="flex items-center gap-[2px]">
        <p className="text-3xl font-bold">
          <Link href="/">arajAnkit</Link>
        </p>
      </aside>
      <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
        <ul className="flex items-center gap-4 list-none text-lg">
          <li className="border-rose-600 hover:border-b hover:text-amber-500">
            <Link href="/">Home</Link>
          </li>
          <li className=" border-rose-600 hover:border-b hover:text-amber-500">
            <Link href="/skills">Skills</Link>
          </li>
          <li className=" border-rose-600 hover:border-b hover:text-amber-500">
            <Link
              href="https://drive.google.com/file/d/1Ov0hy_izRlK12KpjQDIb2fyP07SwvJm0/view?usp=sharing"
              target="_blank"
            >
              Resume
            </Link>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-4">
        <Link
          href="/contact"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Contact Me
          </span>
        </Link>
      </aside>
    </header>
  );
};

export default Navbar;
