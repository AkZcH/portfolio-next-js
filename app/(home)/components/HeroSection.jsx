"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BackgroundPresets } from "@/components/ui/background-effects";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-120px)] flex items-center">
      <BackgroundPresets.Minimal />

      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            show: { transition: { staggerChildren: 0.15 } },
          }}
          className="mx-auto max-w-[75%] grid grid-cols-1 lg:grid-cols-2 gap-20"
        >
          {/* LEFT */}
          <motion.div variants={fade} className="space-y-6">
            {/* <span className="text-xs tracking-widest uppercase text-zinc-500">
              About Me
            </span> */}

            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              Hi, I&apos;m{" "}
              <span className="text-[#e24a4a]">Akshat Chauhan</span>
            </h1>

            {/* Meta */}
            <ul className="space-y-2 text-sm text-zinc-400">
              <li className="flex items-center gap-2">
                <span className="text-[#e24a4a]">●</span>
                Based in India
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#e24a4a]">●</span>
                Backend Systems Engineer
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#e24a4a]">●</span>
                Systems · Infrastructure · Security
              </li>
            </ul>

            {/* Paragraph */}
            <p className="text-zinc-400 leading-relaxed max-w-xl">
              I design and build backend and infrastructure systems that operate
              under real-world constraints — where scale, failures, adversaries,
              and broken assumptions are part of normal operation. My focus is
              correctness, observability, and long-term reliability.
            </p>

            {/* CTAs */}
            <div className="flex gap-4 pt-4">
              <Link
                href="/contact"
                className="px-5 py-2 rounded-md bg-[#e24a4a] text-black font-medium hover:bg-[#d44141] transition"
              >
                Get in Touch
              </Link>
              <Link
                href="/projects"
                className="px-5 py-2 rounded-md border border-zinc-700 text-zinc-300 hover:border-zinc-500 transition"
              >
                View Projects
              </Link>
            </div>

            {/* Stats */}

          </motion.div>

          {/* RIGHT */}
          <motion.div variants={fade} className="space-y-10">
            {/* Key Skills */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">
                Key Skills
              </h3>
              <div className="grid grid-cols-2 gap-y-2 text-sm text-zinc-400">
                <span>Rust</span>
                <span>Go</span>
                <span>Distributed Systems</span>
                <span>Linux</span>
                <span>Docker</span>
                <span>Kubernetes</span>
                <span>Cryptography</span>
                <span>Applied ML</span>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">
                What I Do
              </h3>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>
                  <span className="text-[#e24a4a] mr-2">•</span>
                  Backend System Design
                </li>
                <li>
                  <span className="text-[#e24a4a] mr-2">•</span>
                  Infrastructure & Deployment
                </li>
                <li>
                  <span className="text-[#e24a4a] mr-2">•</span>
                  Distributed Reliability
                </li>
                <li>
                  <span className="text-[#e24a4a] mr-2">•</span>
                  Security-Aware Systems
                </li>
                <li>
                  <span className="text-[#e24a4a] mr-2">•</span>
                  ML under Constraints
                </li>
              </ul>
            </div>

                        <div className="grid grid-cols-3 gap-8 pt-10">
              <div>
                <p className="text-3xl font-bold text-[#e24a4a]">3+</p>
                <p className="text-sm text-zinc-400">Years in Systems</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#e24a4a]">10+</p>
                <p className="text-sm text-zinc-400">Projects Built</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#e24a4a]">∞</p>
                <p className="text-sm text-zinc-400">Failure Modes</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
