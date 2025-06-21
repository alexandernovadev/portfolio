"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Mail, ArrowDown } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-4">
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="font-orbitron text-6xl md:text-8xl font-bold mb-6 neon-text-lime">Alexander Nova</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h2 className="font-orbitron text-xl md:text-2xl mb-4 text-cyan-400">
            React Engineer | Node.js Developer | Software Architect
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            I build modern apps with TypeScript, cloud, and bold vision
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button variant="ghost" className="neon-button-lime px-8 py-3 text-lg font-semibold">View Projects</Button>
          <Button variant="ghost" className="neon-button-cyan px-8 py-3 text-lg font-semibold">
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </Button>
          <Button variant="ghost" className="neon-button-pink px-8 py-3 text-lg font-semibold">
            <Mail className="mr-2 h-5 w-5" />
            Contact Me
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
          <ArrowDown className="h-8 w-8 text-lime-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
