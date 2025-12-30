"use client";

import React from "react";
import { motion } from "framer-motion";
import { HiChip } from "react-icons/hi";
import { cn } from "@/lib/utils";
import { config } from "@/config";

const containerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemAnimation = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.23, 1, 0.32, 1] },
  },
};

// Brand color mapping for hover effects
const getBrandColor = (skillName) => {
  const colorMap = {
    "Go": "#00ADD8",           // Cyan
    "Rust": "#CE4127",         // Orange-red
    "C": "#A8B9CC",            // Muted blue-gray
    "Docker": "#2496ED",       // Blue
    "Kubernetes": "#326CE5",   // Blue
    "AWS": "#FF9900",          // Orange
    "Linux": "#FCC624",        // Yellow accent
    "Git": "#F05032",          // Orange-red
    "PyTorch": "#EE4C2C",      // Orange-red
    "OpenCV": "#5C3EE8",       // Purple-blue
  };
  return colorMap[skillName] || null;
};

const SkillItem = ({ skill }) => {
  const brandColor = getBrandColor(skill.name);
  const hasBrandColor = brandColor !== null;

  return (
    <motion.div
      variants={itemAnimation}
      className="group relative flex flex-col items-center justify-center gap-2 cursor-pointer"
    >
      {/* Icon */}
      {skill.icon && (
        <span
          className="text-5xl transition-all duration-300 ease-out"
          style={{
            color: hasBrandColor ? brandColor : '#71717a',
            opacity: hasBrandColor ? 0.5 : 1,
            transform: 'scale(1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.3)';
            if (hasBrandColor) {
              e.currentTarget.style.opacity = '1';
            } else {
              e.currentTarget.style.color = '#a1a1aa';
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            if (hasBrandColor) {
              e.currentTarget.style.opacity = '0.5';
            } else {
              e.currentTarget.style.color = '#71717a';
            }
          }}
        >
          {skill.icon}
        </span>
      )}
      
      {/* Tool name */}
      <span className="text-xs font-medium text-zinc-400 text-center leading-tight group-hover:text-white transition-colors duration-300">
        {skill.name}
      </span>
      
      {skill.note && (
        <span className="text-xs text-zinc-600 text-center">
          {skill.note}
        </span>
      )}
    </motion.div>
  );
};

const CategorySection = ({ category }) => (
  <div className="space-y-6">
    <div className="w-[80%] mx-auto">
      <div className="flex items-center gap-4">
        {/* Square icon card */}
        <div
          className={cn(
            "group w-12 h-12 flex items-center justify-center rounded-xl",
            category.bgClass
          )}
        >
          <div
            className={cn(
              "w-5 h-5 text-zinc-400 transition-colors duration-200",
              category.iconClass
            )}
          >
            {category.icon}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-primary">
            {category.title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {category.description}
          </p>
        </div>
      </div>
    </div>

    <div className="w-[80%] mx-auto">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-6">
        {category.skills.map((skill, idx) => (
          <SkillItem key={idx} skill={skill} />
        ))}
      </div>
    </div>
  </div>
);

const SkillsSection = () => {
  const skills = config.skills;

  return (
    <section className="py-24" id="skills">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Header */}
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div
              className="inline-flex items-center gap-2
                         bg-secondary/10 border border-zinc-900/70
                         px-4 py-2 rounded-full"
            >
              <HiChip className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">
                Tech Stack
              </span>
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Engineering Toolchain
              </h2>
              <p className="text-lg text-muted-foreground">
                Technologies I’ve used to build, deploy, and operate real systems.
              </p>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-16">
            {skills.map((category, index) => (
              <CategorySection key={index} category={category} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
