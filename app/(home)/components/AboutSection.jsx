"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiUser } from "react-icons/hi";

const AboutSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {/* Header */}
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/60 text-sm text-zinc-300">
              <HiUser className="w-4 h-4" />
              Identity Core
            </div>
          </div>

          {/* Main */}
          <div className="flex flex-col gap-10">
            {/* Identity Row */}
            <div className="flex items-start gap-6">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border border-zinc-800">
                <Image
                  src="/profilepic.png"
                  alt="Akshat Chauhan"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-white">
                  Akshat Chauhan
                </h2>
                <p className="text-zinc-400 mt-1">
                  Systems Engineer · Backend · Infrastructure
                </p>

                {/* Socials */}
                {/* Socials */}
<div className="flex gap-5 mt-4">
  {/* GitHub */}
  <a
    href="https://github.com/AkZcH"
    target="_blank"
    rel="noopener noreferrer"
    className="text-zinc-400 transition-colors duration-200 hover:text-white"
    aria-label="GitHub"
  >
    <svg
      className="w-5 h-5 transition-colors duration-200 hover:text-[#f0f6fc]"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  </a>

  {/* LinkedIn */}
  <a
    href="https://linkedin.com/in/akshat-chauhan"
    target="_blank"
    rel="noopener noreferrer"
    className="text-zinc-400 transition-colors duration-200 hover:text-[#0A66C2]"
    aria-label="LinkedIn"
  >
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  </a>

  {/* X (Twitter) */}
  <a
    href="https://x.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="X"
    className="text-zinc-400 transition-colors hover:text-white"
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2H21.552L14.33 10.292L22.827 22H16.172L10.964 14.882L4.769 22H1.46L9.167 13.143L1.013 2H7.839L12.552 8.347L18.244 2ZM17.083 20H18.916L6.837 4H4.869L17.083 20Z" />
    </svg>
  </a>

  {/* Reddit */}
  <a
    href="https://reddit.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Reddit"
    className="text-zinc-400 transition-colors hover:text-[#FF4500]"
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12zm-4.25-.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25c-.39 0-.73-.18-.97-.46-1.02 1.55-3.08 2.63-5.53 2.63s-4.51-1.08-5.53-2.63c-.24.28-.58.46-.97.46-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25c.38 0 .72.17.96.44 1.09-.78 2.61-1.29 4.3-1.38l.92-4.32 3.01.64c.13-.31.44-.53.8-.53.48 0 .87.39.87.87s-.39.87-.87.87c-.36 0-.66-.22-.79-.53l-2.14-.46-.65 3.06c1.77.06 3.37.58 4.5 1.38.24-.27.58-.44.96-.44z" />
    </svg>
  </a>
</div>

              </div>
            </div>

            {/* Intro */}
            <div className="max-w-3xl text-zinc-400 leading-relaxed">
              <p>
                I’m a systems-focused engineer interested in software that
                operates under pressure — where scale, failures, adversaries,
                and imperfect inputs are part of normal operation.
              </p>
            </div>

            {/* What I Do */}
            <div>
              <h3 className="text-white font-medium mb-4">What I do:</h3>
              <ul className="space-y-2 text-zinc-400 list-disc list-inside">
                <li>Design and build backend systems with real failure modes</li>
                <li>Work across infrastructure, security, and distributed systems</li>
                <li>Build ML-enabled systems under strict resource constraints</li>
                <li>Optimize for correctness, observability, and long-term reliability</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
