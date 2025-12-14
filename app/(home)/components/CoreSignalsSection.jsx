"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { HiCode } from 'react-icons/hi';
import { Card } from '@/components/ui/card';

const CoreSignalsSection = () => {
  const coreSignals = [
    "Built async, multithreaded services handling 10k+ concurrent connections under <50ms latency constraints",
    "Designed systems with structured logging, defensive error handling, and timing-obfuscation for partial failures",
    "Debugged performance bottlenecks caused by thread contention, memory pressure, and cryptographic overhead",
    "Evaluated tradeoffs between throughput, latency, and resource usage across CPU-only and SIMD execution"
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-secondary/10 border border-zinc-800/50 px-4 py-2 rounded-full text-primary backdrop-blur-sm mb-6">
            <HiCode className="w-5 h-5" />
            <span className="text-sm font-medium">Core SWE Signals</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <ul className="space-y-4">
              {coreSignals.map((signal, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    {signal}
                  </span>
                </motion.li>
              ))}
            </ul>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreSignalsSection;