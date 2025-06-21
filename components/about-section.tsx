"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Globe, Brain, Target } from "lucide-react"

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.h2
          variants={itemVariants}
          className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-16 neon-text-cyan"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div variants={itemVariants}>
            <Card className="neon-card h-full">
              <CardContent className="p-6">
                <h3 className="font-orbitron text-2xl font-bold mb-4 text-lime-400">Who I Am</h3>
                <p className="text-gray-300 leading-relaxed">
                  Colombian engineer passionate about modern JavaScript, clean architecture, scalable code, and
                  performance. With 8+ years of professional experience, I've worked with global tech companies to build
                  innovative solutions that make a difference.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="neon-card h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-6 w-6 text-cyan-400 mr-2" />
                  <h3 className="font-orbitron text-2xl font-bold text-cyan-400">Education</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-white">System Engineer</p>
                    <p className="text-gray-400">Universidad Católica (2019–2023)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Software Technology</p>
                    <p className="text-gray-400">Uniminuto (2013–2016)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants}>
            <Card className="neon-card h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Brain className="h-6 w-6 text-pink-400 mr-2" />
                  <h3 className="font-orbitron text-2xl font-bold text-pink-400">Soft Skills</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <Target className="h-4 w-4 text-lime-400 mr-2" />
                    <span>Autodidact</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="h-4 w-4 text-cyan-400 mr-2" />
                    <span>Leadership</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="h-4 w-4 text-pink-400 mr-2" />
                    <span>Dedication</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="h-4 w-4 text-lime-400 mr-2" />
                    <span>Visionary</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="neon-card h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Globe className="h-6 w-6 text-lime-400 mr-2" />
                  <h3 className="font-orbitron text-2xl font-bold text-lime-400">Languages</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Spanish</span>
                    <span className="text-lime-400 font-semibold">Native</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>English</span>
                    <span className="text-cyan-400 font-semibold">B2+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Portuguese</span>
                    <span className="text-pink-400 font-semibold">B1</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
