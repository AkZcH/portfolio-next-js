'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HiCode } from 'react-icons/hi';
import { 
    SiGo, SiRust, SiC, SiPython, SiNodedotjs, SiSpring, SiExpress,
    SiRedis, SiDocker, SiKubernetes, SiTerraform,
    SiMongodb, SiPostgresql, SiGithubactions,
    SiPytorch, SiTensorflow, SiOpencv, SiGit, SiLinux, SiVisualstudiocode
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { FaAws } from 'react-icons/fa';

const techStack = {
    // Systems & Low-Level Programming
    "Systems & Low-Level Programming": {
        descriptor: "Performance & concurrency",
        technologies: [
            { name: "Go", icon: <SiGo className="w-5 h-5" /> },
            { name: "Rust", icon: <SiRust className="w-5 h-5" /> },
            { name: "C", icon: <SiC className="w-5 h-5" /> }
        ]
    },
    
    // Backend & Application Engineering
    "Backend & Application Engineering": {
        descriptor: "Services & APIs",
        technologies: [
            { name: "Java", icon: <DiJava className="w-5 h-5" /> },
            { name: "Python", icon: <SiPython className="w-5 h-5" /> },
            { name: "Node.js", icon: <SiNodedotjs className="w-5 h-5" /> },
            { name: "Spring Boot", icon: <SiSpring className="w-5 h-5" /> },
            { name: "Express", icon: <SiExpress className="w-5 h-5" /> }
        ]
    },
    
    // Distributed Systems & Messaging
    "Distributed Systems & Messaging": {
        descriptor: "Async & coordination",
        technologies: [
            { name: "Redis", icon: <SiRedis className="w-5 h-5" /> }
        ]
    },
    
    // Cloud & Infrastructure
    "Cloud & Infrastructure": {
        descriptor: "Compute & networking",
        technologies: [
            { name: "AWS", icon: <FaAws className="w-5 h-5" /> },
            { name: "Docker", icon: <SiDocker className="w-5 h-5" /> },
            { name: "Kubernetes", icon: <SiKubernetes className="w-5 h-5" /> },
            { name: "Terraform", icon: <SiTerraform className="w-5 h-5" /> }
        ]
    },
    
    // Databases & Storage
    "Databases & Storage": {
        descriptor: "Persistence & caching",
        technologies: [
            { name: "MongoDB", icon: <SiMongodb className="w-5 h-5" /> },
            { name: "PostgreSQL", icon: <SiPostgresql className="w-5 h-5" /> },
            { name: "Redis", icon: <SiRedis className="w-5 h-5" /> }
        ]
    },
    
    // DevOps, CI/CD & Observability
    "DevOps, CI/CD & Observability": {
        descriptor: "Deployment & monitoring",
        technologies: [
            { name: "Docker", icon: <SiDocker className="w-5 h-5" /> },
            { name: "GitHub Actions", icon: <SiGithubactions className="w-5 h-5" /> }
        ]
    },
    
    // AI/ML (Applied)
    "AI/ML (Applied)": {
        descriptor: "Production inference",
        technologies: [
            { name: "PyTorch", icon: <SiPytorch className="w-5 h-5" /> },
            { name: "TensorFlow", icon: <SiTensorflow className="w-5 h-5" /> },
            { name: "OpenCV", icon: <SiOpencv className="w-5 h-5" /> }
        ]
    },
    
    // Tooling & Developer Environment
    "Tooling & Developer Environment": {
        descriptor: "Development workflow",
        technologies: [
            { name: "Git", icon: <SiGit className="w-5 h-5" /> },
            { name: "Linux", icon: <SiLinux className="w-5 h-5" /> },
            { name: "VS Code", icon: <SiVisualstudiocode className="w-5 h-5" /> }
        ]
    }
};

const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.2
        }
    }
};

const itemAnimation = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.23, 1, 0.32, 1]
        }
    }
};

const SkillsShowcase = () => {
    return (
        <motion.div
            variants={containerAnimation}
            initial="hidden"
            animate="show"
            className="w-full mt-20"
        >
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
                {/* Section Header */}
                <motion.div 
                    variants={itemAnimation} 
                    className="flex flex-col items-center gap-4 mb-12 justify-center"
                >
                    <p className="text-xs text-muted-foreground/80 text-center">
                        Tools are replaceable. Mental models are not.
                    </p>
                    <div className="inline-flex items-center space-x-2 bg-secondary/10 border-[1.8px] border-zinc-900/70 px-4 py-2 rounded-full text-primary backdrop-blur-sm shadow-lg">
                        <HiCode className="w-5 h-5 text-primary" />
                        <span className="text-sm font-semibold text-primary">Technical Stack</span>
                    </div>
                </motion.div>

                {/* Tech Stack Grid */}
                <motion.div
                    variants={containerAnimation}
                    className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto"
                >
                    {Object.entries(techStack).map(([category, { descriptor, technologies }]) => (
                        <motion.div
                            key={category}
                            variants={itemAnimation}
                            className="space-y-4 p-6 bg-black/50 border border-white/20 rounded-xl backdrop-blur-sm hover:border-white/30 transition-colors"
                        >
                            {/* Category Header */}
                            <div className="space-y-1">
                                <h3 className="text-lg font-semibold text-white">{category}</h3>
                                <p className="text-xs text-muted-foreground uppercase tracking-wide">{descriptor}</p>
                            </div>
                            
                            {/* Technologies */}
                            <div className="flex flex-wrap gap-3">
                                {technologies.map((tech) => (
                                    <div
                                        key={tech.name}
                                        className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/20 rounded-lg hover:bg-white/10 transition-colors"
                                    >
                                        <div className="text-white">{tech.icon}</div>
                                        <span className="text-sm text-white font-medium">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default SkillsShowcase;