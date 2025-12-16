"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { HiExternalLink, HiCode } from 'react-icons/hi';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { config } from '@/config';

const ProjectCard = ({ project, index }) => {
  const getTitleColor = (id) => {
    const colors = [
      "text-blue-400",
      "text-green-400",
      "text-purple-400",
      "text-orange-400",
      "text-red-400",
      "text-cyan-400"
    ];
    return colors[(id - 1) % colors.length];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="p-6 h-full bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 hover:border-primary/30 transition-colors">
        <div className="flex items-center justify-between mb-4">
          <Badge variant="secondary" className="text-xs">
            {project.technologies[0]}
          </Badge>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-white transition-colors"
          >
            <HiExternalLink className="w-4 h-4" />
          </a>
        </div>
        
        <h3 className={`text-lg font-semibold ${getTitleColor(project.id)} mb-3`}>
          {project.title}
        </h3>
        
        <p className="text-xs text-muted-foreground mb-4">
          {project.description}
        </p>
        
        {project.metrics && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-white mb-2">Key Metrics</h4>
            <ul className="space-y-1">
              {project.metrics.slice(0, 2).map((metric, idx) => (
                <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                  {metric}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="flex flex-wrap gap-1 mt-auto">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-secondary/10 border border-zinc-800/50 px-4 py-2 rounded-full text-primary backdrop-blur-sm mb-6">
            <HiCode className="w-5 h-5" />
            <span className="text-sm font-medium">Featured Projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Systems built under constraints
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These are not demos. Each project forced explicit tradeoffs between performance, security, correctness, and operational complexity.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {config.projects.slice(0, 6).map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </div>

        {/* GitHub Proof Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12 space-y-2"
        >
          <a
            href="https://github.com/AkZcH/EchoTrap"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors font-medium"
          >
            View Representative Code
            <HiExternalLink className="w-4 h-4" />
          </a>
          <div className="text-xs text-muted-foreground/60">
            Clean README • Tests • Commit History
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;