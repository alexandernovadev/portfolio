"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { experiences } from "@/data/experiences"
import { Section } from "@/components/layout/section"

export default function ExperienceSection() {
  return (
    <Section id="experience" title="Experience Timeline" titleClassName="neon-text-lime">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-lime-400 via-cyan-400 to-pink-400 rounded-full"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-lime-400 rounded-full border-4 border-[#0D0D0D] neon-glow-lime z-10"></div>

              <div className={`w-full md:w-[45%] ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-4" : "md:pl-4"}`}>
                <Card className="neon-card">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-orbitron text-xl font-bold text-lime-400">{exp.company}</h3>
                      <Badge variant="outline" className="text-cyan-400 border-cyan-400">
                        {exp.period}
                      </Badge>
                    </div>

                    <h4 className="text-lg font-semibold text-white mb-2">{exp.role}</h4>
                    <p className="text-gray-300 mb-4">{exp.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.techs.map((tech) => (
                        <Badge key={tech} className="bg-pink-400/20 text-pink-400 border-pink-400">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-gray-400 flex items-center">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
