"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { techStacks } from "@/data/tech-stack"
import { Section } from "@/components/layout/section"

export default function TechStackSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <Section title="Tech Stack" titleClassName="neon-text-pink">
      <Tabs defaultValue="frontend" className="w-full flex flex-col items-center">
        <TabsList className="tech-tabs-list">
          <TabsTrigger value="frontend" className="tech-tab-trigger">
            Frontend
          </TabsTrigger>
          <TabsTrigger value="backend" className="tech-tab-trigger">
            Backend
          </TabsTrigger>
          <TabsTrigger value="devops" className="tech-tab-trigger">
            DevOps
          </TabsTrigger>
          <TabsTrigger value="testing" className="tech-tab-trigger">
            Testing
          </TabsTrigger>
        </TabsList>

        <div className="w-full mt-8">
          {Object.entries(techStacks).map(([key, stack]) => (
            <TabsContent key={key} value={key}>
              <motion.div
                key={key}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4"
              >
                {stack.techs.map((tech) => (
                  <motion.div key={tech.name} variants={itemVariants}>
                    <Card className={`neon-card-${stack.color} tech-card cursor-pointer`}>
                      <CardContent className="p-4 text-center">
                        <div className="mb-2 flex h-10 items-center justify-center">
                          {"iconClass" in tech && tech.iconClass ? (
                            <i className={`${tech.iconClass} text-4xl text-${stack.color}-400`}></i>
                          ) : (
                            <span className={`font-orbitron text-2xl font-bold text-${stack.color}-400`}>API</span>
                          )}
                        </div>
                        <p className="font-semibold">{tech.name}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </Section>
  )
}
