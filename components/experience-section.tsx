"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ExperienceSection() {
  const experiences = [
    {
      company: "FPT",
      role: "Senior React Developer",
      period: "2023 - Present",
      description: "Leading development of enterprise applications using React, Electron, and Azure integration.",
      techs: ["React", "Electron", "Twilio", "Azure"],
      achievements: [
        "Built scalable desktop applications",
        "Integrated real-time communication features",
        "Optimized performance by 40%",
      ],
    },
    {
      company: "Indra",
      role: "React Native Developer",
      period: "2022 - 2023",
      description: "Developed mobile applications with real-time chat functionality and Microsoft AD integration.",
      techs: ["React Native", "Real-time Chat", "Microsoft AD"],
      achievements: [
        "Delivered cross-platform mobile apps",
        "Implemented secure authentication",
        "Enhanced user engagement by 60%",
      ],
    },
    {
      company: "TINET",
      role: "Frontend Developer",
      period: "2021 - 2022",
      description: "Created modern web applications using Next.js, Tailwind CSS, and Storybook.",
      techs: ["Next.js", "Tailwind", "Storybook"],
      achievements: ["Built component library", "Improved development workflow", "Reduced build time by 50%"],
    },
    {
      company: "Neoris",
      role: "Frontend Developer",
      period: "2020 - 2021",
      description: "Developed BBVA UI components with GraphQL integration and Jenkins CI/CD.",
      techs: ["React", "GraphQL", "Jenkins"],
      achievements: [
        "Created reusable UI components",
        "Implemented automated testing",
        "Streamlined deployment process",
      ],
    },
    {
      company: "LookApp",
      role: "Fullstack Developer",
      period: "2019 - 2020",
      description: "Built full-stack applications with AWS cloud services and REST API development.",
      techs: ["React", "Node.js", "AWS", "REST API"],
      achievements: ["Architected scalable backend", "Deployed cloud infrastructure", "Improved system reliability"],
    },
    {
      company: "eLearning Solutions",
      role: "Full Stack Developer",
      period: "2017 - 2019",
      description: "Developed educational platforms using Vue.js, Node.js, and optimized SQL databases.",
      techs: ["Vue.js", "Node.js", "SQL"],
      achievements: ["Built learning management system", "Optimized database queries", "Enhanced user experience"],
    },
  ]

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-16 neon-text-lime"
      >
        Experience Timeline
      </motion.h2>

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
    </section>
  )
}
