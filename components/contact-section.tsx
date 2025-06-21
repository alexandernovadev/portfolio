"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, BookOpen } from "lucide-react"
import { Section } from "@/components/layout/section"

export default function ContactSection() {
  return (
    <Section id="contact" title="Get In Touch" titleClassName="neon-text-pink">
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

                <div className="flex items-center">
                  <BookOpen className="h-6 w-6 text-violet-400 mr-4" />
                  <div>
                    <p className="font-semibold text-white">Blog</p>
                    <a
                      href="https://blog.alexandernova.pro"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-violet-400 hover:text-violet-300 transition-colors"
                    >
                      Read my thoughts on tech
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Section>
  )
}
