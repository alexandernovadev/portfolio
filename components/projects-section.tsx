"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include real-time inventory, payment processing, and admin dashboard.",
      techs: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "#",
      demo: "#",
    },
    {
      title: "Real-Time Chat App",
      description:
        "Scalable chat application built with React Native and Socket.io. Supports group chats, file sharing, and push notifications.",
      techs: ["React Native", "Socket.io", "MongoDB", "AWS"],
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management System",
      description:
        "Collaborative project management tool with drag-and-drop interface, team collaboration features, and advanced analytics.",
      techs: ["Next.js", "GraphQL", "Prisma", "Tailwind"],
      github: "#",
      demo: "#",
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description:
        "Business intelligence dashboard with machine learning insights, real-time data visualization, and predictive analytics.",
      techs: ["React", "Python", "TensorFlow", "D3.js"],
      github: "#",
      demo: "#",
    },
    {
      title: "Cryptocurrency Tracker",
      description:
        "Real-time crypto portfolio tracker with price alerts, market analysis, and trading recommendations.",
      techs: ["Vue.js", "Node.js", "Redis", "WebSocket"],
      github: "#",
      demo: "#",
    },
    {
      title: "Learning Management System",
      description:
        "Educational platform with video streaming, interactive quizzes, progress tracking, and certification system.",
      techs: ["React", "Express", "MongoDB", "AWS S3"],
      github: "#",
      demo: "#",
    },
  ]

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
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-16 neon-text-cyan"
      >
        Featured Projects
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div key={project.title} variants={itemVariants}>
            <Card className="neon-card project-card h-full cursor-pointer group">
              <CardContent className="p-6 h-full flex flex-col">
                <h3 className="font-orbitron text-xl font-bold mb-3 text-violet-400 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techs.map((tech) => (
                    <Badge key={tech} className="bg-pink-400/20 text-pink-400 border-pink-400 rounded-lg">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 neon-button-lime py-2 px-4"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 flex items-center justify-center gap-2 neon-button-cyan py-2 px-4"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
