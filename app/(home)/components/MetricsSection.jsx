"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { HiTrendingUp, HiClock, HiShieldCheck, HiLightningBolt } from 'react-icons/hi';
import { Card } from '@/components/ui/card';

const metrics = [
  {
    value: "15+",
    label: "Systems Projects",
    description: "Cryptographic & security systems built",
    icon: <HiShieldCheck className="w-6 h-6" />,
    color: "text-blue-500"
  },
  {
    value: "<50ms",
    label: "Attack Detection",
    description: "EchoTrap honeypot response time",
    icon: <HiLightningBolt className="w-6 h-6" />,
    color: "text-green-500"
  },
  {
    value: "10k+",
    label: "Concurrent Connections",
    description: "Handled by security systems",
    icon: <HiTrendingUp className="w-6 h-6" />,
    color: "text-yellow-500"
  },
  {
    value: "96%",
    label: "AI Accuracy",
    description: "Word-level lip reading precision",
    icon: <HiClock className="w-6 h-6" />,
    color: "text-purple-500"
  },
  {
    value: "60%",
    label: "Compression Ratio",
    description: "HuffSpace file compression efficiency",
    icon: <HiTrendingUp className="w-6 h-6" />,
    color: "text-red-500"
  },
  {
    value: "2M+",
    label: "Events Logged",
    description: "Adversarial patterns captured",
    icon: <HiShieldCheck className="w-6 h-6" />,
    color: "text-indigo-500"
  }
];

const MetricsSection = () => {
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
            <HiTrendingUp className="w-5 h-5" />
            <span className="text-sm font-medium">Performance Metrics</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Measurable Impact
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Quantifiable results from cryptographic research and security system implementations, 
            demonstrating real-world performance and effectiveness.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-4 md:p-6 text-center bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                <div className={`inline-flex p-3 rounded-lg bg-secondary/10 mb-4 ${metric.color}`}>
                  {metric.icon}
                </div>
                <div className="space-y-2">
                  <div className={`text-2xl md:text-3xl font-bold ${metric.color}`}>
                    {metric.value}
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {metric.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {metric.description}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">38%</div>
                <div className="text-sm text-white font-medium mb-1">Timing Attack Reduction</div>
                <div className="text-xs text-muted-foreground">EchoTrap classifier accuracy decrease</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">27%</div>
                <div className="text-sm text-white font-medium mb-1">Key Generation Speedup</div>
                <div className="text-xs text-muted-foreground">QuantumLock SIMD optimization</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">32%</div>
                <div className="text-sm text-white font-medium mb-1">Prover Performance Boost</div>
                <div className="text-xs text-muted-foreground">zk-SNARK multi-threaded batching</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default MetricsSection;