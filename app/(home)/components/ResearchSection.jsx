"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { HiAcademicCap, HiLightBulb, HiTrendingUp } from 'react-icons/hi';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

const researchPapers = [
  {
    title: "EchoTrap: Cryptographic Hardening Study",
    category: "Secure Networking",
    date: "Nov 2025",
    problem: "Monitoring systems face tradeoffs between detection capability and operational security under adversarial conditions.",
    solution: "Designed system architecture where timing constraints, logging integrity, and attack resistance shaped core implementation decisions.",
    findings: [
      "Scale: 2M+ adversarial TCP events captured across 10k concurrent connections",
      "Constraint: Detection + response under 50ms to avoid fingerprinting",
      "Decision: Added timing obfuscation at async runtime layer instead of network layer to reduce overhead",
      "→ Result: Reduced timing-based classifier accuracy by 38% without throughput loss"
    ],
    impact: "Enables safer honeypot deployments and deeper adversarial intelligence collection.",
    tags: ["Security", "Rust", "TCP", "Honeypots"]
  },
  {
    title: "BLAKE3 vs SHA-256 Performance Analysis",
    category: "Hashing",
    date: "Oct 2025",
    problem: "Distributed systems require hash function choices that balance performance predictability with resource constraints across heterogeneous infrastructure.",
    solution: "Built evaluation framework modeling how algorithmic choices impact system behavior under contention and varying hardware constraints.",
    findings: [
      "Scale: Benchmarked hashing throughput on 8-core CPU across 10GB datasets",
      "Constraint: High thread contention under shared memory workloads",
      "Decision: Chose BLAKE3 for parallelism after SHA-256 degraded 40% under contention",
      "→ Result: BLAKE3 sustained ~1200 MB/s vs SHA-256 degradation under load"
    ],
    impact: "Helps engineers choose optimal hashing algorithms for backend pipelines and distributed storage systems.",
    tags: ["Hashing", "BLAKE3", "SHA-256", "Benchmarks"]
  },
  {
    title: "Zero-Knowledge Proof Implementation",
    category: "Zero Knowledge",
    date: "Sep 2025",
    problem: "Privacy-preserving systems require cryptographic components that balance security guarantees with operational feasibility.",
    solution: "Designed proof system architecture where constraint complexity, proving time, and verification requirements directly influenced system design.",
    findings: [
      "Scale: Generated and verified proofs across variable constraint counts (measured locally)",
      "Constraint: Prover time dominated by constraint count, not cryptographic ops",
      "Decision: Reduced constraint system size before parallelizing prover execution",
      "→ Result: Proving time reduced 18%, multi-threaded batching improved throughput 32%"
    ],
    impact: "Enables more practical privacy-preserving authentication systems and off-chain proof computation.",
    tags: ["ZK", "SNARKs", "Rust", "Cryptography"]
  }
];

const flagshipResearch = {
  title: "QuantumLock: Lattice-Based Encryption Engine",
  description: "Cryptographic infrastructure designed for environments where algorithm choice, performance characteristics, and operational constraints directly determine system viability and security posture.",
  findings: [
    "Scale: Benchmarked keygen + decrypt under 1M+ operations on 8-core CPU",
    "Constraint: <50ms latency target under CPU-only, no AVX-512",
    "Decision: Used SIMD vectorization over naive parallelism after contention degraded throughput",
    "→ Result: Key generation latency reduced 27%, stable under multi-threaded load"
  ],
  impact: "Demonstrates practical applicability of post-quantum primitives in resource-constrained environments, informing implementation decisions for secure messaging and distributed systems.",
  tags: ["PQCrypto", "Lattice", "LWE", "SIMD", "Rust"]
};

const ResearchSection = () => {
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
            <HiAcademicCap className="w-5 h-5" />
            <span className="text-sm font-medium">Systems Engineering</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Questions I&apos;m actively exploring
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I&apos;m interested in problems that don&apos;t have clean abstractions yet — where performance, security, and correctness pull in opposite directions.
          </p>
        </motion.div>

        {/* Flagship Research */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <HiLightBulb className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-primary/20 text-primary">
                    Featured Project
                  </Badge>
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-2">
                  {flagshipResearch.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {flagshipResearch.description}
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <HiTrendingUp className="w-4 h-4" />
                  Key Findings
                </h4>
                <ul className="space-y-2">
                  {flagshipResearch.findings.map((finding, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {finding}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-3">Impact</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {flagshipResearch.impact}
                </p>
                <div className="flex flex-wrap gap-2">
                  {flagshipResearch.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Research Papers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchPapers.map((paper, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 hover:border-primary/30 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="text-xs">
                    {paper.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {paper.date}
                  </span>
                </div>
                
                <h3 className={`text-lg font-semibold mb-3 ${
                  index === 0 ? "text-red-400" :
                  index === 1 ? "text-yellow-400" :
                  "text-purple-400"
                }`}>
                  {paper.title}
                </h3>
                
                <div className="space-y-3 mb-4">
                  <div>
                    <h4 className="text-sm font-medium text-white mb-1">Problem</h4>
                    <p className="text-xs text-muted-foreground">
                      {paper.problem}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-white mb-1">Solution</h4>
                    <p className="text-xs text-muted-foreground">
                      {paper.solution}
                    </p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-white mb-2">Key Findings</h4>
                  <ul className="space-y-1">
                    {paper.findings.slice(0, 2).map((finding, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                        {finding}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-1 mt-auto">
                  {paper.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;