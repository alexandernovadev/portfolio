"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, ExternalLink } from "lucide-react"
import { projects } from "@/data/projects"
import { Section } from "@/components/layout/section"

export default function ProjectsSection() {
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

  // Categorizar proyectos
  const landingProjects = projects.filter(project => 
    project.title.toLowerCase().includes('landing') || 
    project.title.toLowerCase().includes('website') ||
    project.title.toLowerCase().includes('restaurant') ||
    project.title.toLowerCase().includes('fitness') ||
    project.title.toLowerCase().includes('real estate') ||
    project.title.toLowerCase().includes('agency') ||
    project.title.toLowerCase().includes('e-learning') ||
    project.title.toLowerCase().includes('saas')
  )
  
  const webAppProjects = projects.filter(project => 
    !project.title.toLowerCase().includes('landing') && 
    !project.title.toLowerCase().includes('website') &&
    !project.title.toLowerCase().includes('restaurant') &&
    !project.title.toLowerCase().includes('fitness') &&
    !project.title.toLowerCase().includes('real estate') &&
    !project.title.toLowerCase().includes('agency') &&
    !project.title.toLowerCase().includes('e-learning') &&
    !project.title.toLowerCase().includes('saas')
  )

  return (
    <Section id="projects" title="Featured Projects" titleClassName="neon-text-cyan">
      <Tabs defaultValue="landing" className="w-full flex flex-col items-center">
        <TabsList className="project-tabs-list">
          <TabsTrigger value="landing" className="project-tab-trigger">
            Landing Pages
          </TabsTrigger>
          <TabsTrigger value="webapp" className="project-tab-trigger">
            Web Applications
          </TabsTrigger>
        </TabsList>

        <div className="w-full mt-8">
          <TabsContent value="landing">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {landingProjects.map((project, index) => (
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
          </TabsContent>

          <TabsContent value="webapp">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {webAppProjects.map((project, index) => (
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
          </TabsContent>
        </div>
      </Tabs>
    </Section>
  )
}
