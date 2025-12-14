"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { HiUser } from 'react-icons/hi';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-secondary/10 border border-zinc-800/50 px-4 py-2 rounded-full text-primary backdrop-blur-sm mb-6">
              <HiUser className="w-5 h-5" />
              <span className="text-sm font-medium">Identity Core</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              About Me
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
              Self-engineered systems thinker focused on building scalable, 
              reliable solutions at the intersection of engineering disciplines.
            </p>
            <p className="text-sm text-muted-foreground/80 max-w-2xl mx-auto">
              <em>Interested in Backend, Infrastructure, Distributed Systems, and AI Platform Engineering intern roles.</em>
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 items-center justify-center max-w-6xl mx-auto">
            {/* Left Column - Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Profile Image Placeholder */}
              <div className="relative flex flex-col items-center">
                <div className="w-80 h-80 bg-zinc-900/50 border border-zinc-800/50 rounded-lg overflow-hidden">
                  <Image
                    src="/profilepic.png"
                    alt="Akshat Chauhan"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Socials under photo */}
                <div className="mt-6 flex items-center gap-6">
                  <a href="https://github.com/AkZcH" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="https://linkedin.com/in/akshat-chauhan" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Primary Stack */}
              {/* <div className="space-y-4">
                <div className="h-px bg-zinc-800/50"></div>
                <div>
                  <h4 className="text-sm text-zinc-400 font-mono mb-3">PRIMARY STACK</h4>
                  <div className="space-y-1">
                    {['Java', 'Spring Boot', 'AWS', 'SQL', 'Linux'].map((tech) => (
                      <div key={tech} className="text-white font-mono text-sm">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div> */}
            </motion.div>

            {/* Right Column - Identity Statement */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-8"
            >
              {/* Hero Quote */}
              <div className="space-y-2">
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  "I didn't inherit skill —
                </h2>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  I engineered it."
                </h2>
              </div>

              {/* Divider */}
              <div className="h-px bg-zinc-800/50"></div>

              {/* Core Description */}
              <div className="space-y-6 text-zinc-400 leading-relaxed">
                <p>
                  I consider myself a self-engineered systems thinker.
                  I don't learn for grades or certificates — I learn to understand how real systems break and how to rebuild them better.
                </p>
                <p>
                  My work sits at the intersection of backend engineering, cloud infrastructure, and intelligent systems.
                  I obsess over scalability, reliability, and decision-making under constraints — the same principles that govern real-world platforms, not toy projects.
                </p>
                <p>
                  I build because clarity compounds.
                  And systems don't forgive shallow thinking.
                </p>
              </div>

              {/* Focus Areas */}
              {/* <div className="space-y-4">
                <div className="h-px bg-zinc-800/50"></div>
                <div>
                  <h4 className="text-sm text-zinc-400 font-mono mb-3">FOCUS AREAS</h4>
                  <div className="space-y-1">
                    {['Backend Systems', 'Cloud Architecture', 'Distributed Systems', 'AI-Assisted Engineering'].map((area) => (
                      <div key={area} className="text-white font-mono text-sm">
                        {area}
                      </div>
                    ))}
                  </div>
                </div>
              </div> */}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;