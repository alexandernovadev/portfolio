"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-16 neon-text-pink"
      >
        Get In Touch
      </motion.h2>

      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="neon-card h-full">
            <CardContent className="p-8">
              <h3 className="font-orbitron text-2xl font-bold mb-6 text-lime-400">Let's Build Something Amazing</h3>

              <p className="text-gray-300 mb-8 leading-relaxed">
                Ready to bring your ideas to life? I'm always excited to work on innovative projects and collaborate
                with visionary teams. Let's discuss how we can create something extraordinary together.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-cyan-400 mr-4" />
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <a
                      href="mailto:developer.alexnova@gmail.com"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      developer.alexnova@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <Linkedin className="h-6 w-6 text-pink-400 mr-4" />
                  <div>
                    <p className="font-semibold text-white">LinkedIn</p>
                    <a
                      href="https://linkedin.com/in/alexanderdevmern/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-400 hover:text-pink-300 transition-colors"
                    >
                      /in/alexanderdevmern
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
