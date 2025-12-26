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

const SkillItem = ({ skill }) => (
  <motion.div
    variants={itemAnimation}
    className="group flex items-center gap-3 px-4 py-3 rounded-xl
               border border-zinc-800/60 bg-zinc-900/30
               transition-colors"
  >
    {skill.icon && (
      <span className="text-xl text-zinc-400 transition-colors duration-200 group-hover:text-current">
        {skill.icon}
      </span>
    )}
    <div className="flex flex-col">
      <span className="text-sm font-medium text-primary">
        {skill.name}
      </span>
      {skill.note && (
        <span className="text-xs text-muted-foreground">
          {skill.note}
        </span>
      )}
    </div>
  </motion.div>
);

const CategorySection = ({ category }) => (
  <div className="space-y-6">
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

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {category.skills.map((skill, idx) => (
        <SkillItem key={idx} skill={skill} />
      ))}
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
