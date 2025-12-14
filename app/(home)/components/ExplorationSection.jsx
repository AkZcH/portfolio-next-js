"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { HiLightningBolt, HiCog, HiChip, HiShieldCheck } from 'react-icons/hi';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { config } from '@/config';

const explorationItems = [
  {
    title: "Fully Homomorphic Encryption (FHE) PoC",
    description: "Developing proof-of-concept implementations for secure computation on encrypted data",
    icon: <HiShieldCheck className="w-6 h-6" />,
    status: "Active Research",
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    title: "GPU-accelerated BLAKE3 hashing",
    description: "Optimizing cryptographic hash functions for parallel GPU computation",
    icon: <HiChip className="w-6 h-6" />,
    status: "Performance Testing",
    color: "bg-green-500/10 text-green-500"
  },
  {
    title: "Optimizing zk-SNARK proving systems",
    description: "Enhancing zero-knowledge proof generation efficiency and verification speed",
    icon: <HiLightningBolt className="w-6 h-6" />,
    status: "Optimization Phase",
    color: "bg-yellow-500/10 text-yellow-500"
  },
  {
    title: "PQ signature schemes (Dilithium, Falcon)",
    description: "Implementing and analyzing post-quantum digital signature algorithms",
    icon: <HiCog className="w-6 h-6" />,
    status: "Implementation",
    color: "bg-purple-500/10 text-purple-500"
  }
];

const researchFocusAreas = [
  "Post-quantum encryption (Lattice, LWE, PQCrypto)",
  "Hash function benchmarking (BLAKE3, SHA-256, SHA-3)",
  "Secure network instrumentation & protocol hardening",
  "Zero-knowledge proof systems and optimization",
  "Memory-hard functions (Argon2) and timing analysis",
  "Distributed & hybrid cryptographic key exchange"
];

const ExplorationSection = () => {
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
            <HiLightningBolt className="w-5 h-5" />
            <span className="text-sm font-medium">Current Exploration</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Cutting-Edge Research
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Exploring the frontiers of cryptography and security, pushing the boundaries 
            of what&apos;s possible in quantum-resistant systems.
          </p>
        </motion.div>

        {/* Current Exploration Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {explorationItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-card/50 border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${item.color.split(' ')[0]}`}>
                    <div className={item.color.split(' ').slice(1).join(' ')}>
                      {item.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-white">
                        {item.title}
                      </h3>
                      <Badge variant="secondary" className="text-xs">
                        {item.status}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Research Focus Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="p-8 bg-gradient-to-br from-secondary/5 to-primary/5 border-secondary/20">
            <h3 className="text-xl font-bold text-white mb-6 text-center">
              Research Focus Areas
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {researchFocusAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-card/30 border border-zinc-800/30"
                >
                  <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    {area}
                  </span>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ExplorationSection;