"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import { BackgroundPresets } from "@/components/ui/background-effects";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-120px)] flex items-center">
      <BackgroundPresets.Minimal />

      <div className="container mx-auto px-6">
        {/* 80% WIDTH WRAPPER */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-[60%] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >
          {/* LEFT — TEXT */}
          <div className="space-y-6">
            <motion.h1
              variants={item}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              hi, Akshat here.
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg text-zinc-300"
            >
              20yo Backend Systems Engineer from India
            </motion.p>

            <motion.p
              variants={item}
              className="text-zinc-400 leading-relaxed max-w-xl"
            >
              I design and build backend and infrastructure systems that operate
              {/* under real constraints. */}
              under real constraints: scale, failures, adversaries, and
              assumptions.
               {/* My work spans distributed systems, security-aware
              services, and applied ML in production environments. */}
            </motion.p>

            {/* ACTIONS */}
            <motion.div
              variants={item}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link href="/projects">
                <Button
                  variant="expandIcon"
                  Icon={HiArrowRight}
                  iconPlacement="right"
                  className="rounded-full px-6 py-6 text-base font-semibold bg-white text-black hover:bg-gray-200"
                >
                  View my work
                </Button>
              </Link>

              <Link href="/contact">
                <Button
                  variant="outline"
                  className="rounded-full px-6 py-6 text-base font-semibold border-white/20 text-white hover:bg-white/10"
                >
                  Resume
                </Button>
              </Link>
            </motion.div>

            {/* SOCIAL ICONS */}
            <motion.div
              variants={item}
              className="flex gap-5 pt-3"
            >
              {/* GitHub */}
              {/* <a
                href="https://github.com/AkZcH"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 transition-colors hover:text-[#f0f6fc]"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a> */}

              {/* LinkedIn */}
              {/* <a
                href="https://linkedin.com/in/akshat-chauhan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 transition-colors hover:text-[#0A66C2]"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a> */}

              {/* X */}
              {/* <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 transition-colors hover:text-white"
                aria-label="X"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2H21.552L14.33 10.292L22.827 22H16.172L10.964 14.882L4.769 22H1.46L9.167 13.143L1.013 2H7.839L12.552 8.347L18.244 2ZM17.083 20H18.916L6.837 4H4.869L17.083 20Z" />
                </svg>
              </a> */}

              {/* Reddit */}
              {/* <a
                href="https://reddit.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 transition-colors hover:text-[#FF4500]"
                aria-label="Reddit"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12z" />
                </svg>
              </a> */}
            </motion.div>
          </div>

          {/* RIGHT — IMAGE */}
          <motion.div
            variants={item}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-80 rounded-2xl overflow-hidden border border-zinc-800">
              <Image
                src="/profilepic.png"
                alt="Akshat Chauhan"
                fill
                priority
                className="object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Ambient glow */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
        <div className="w-[420px] h-[420px] bg-primary/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
