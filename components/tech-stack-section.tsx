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
      <Tabs defaultValue="frontend" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8 bg-transparent border border-gray-700">
          <TabsTrigger value="frontend" className="neon-button-lime data-[state=active]:neon-button-lime">
            Frontend
          </TabsTrigger>
          <TabsTrigger value="backend" className="neon-button-cyan data-[state=active]:neon-button-cyan">
            Backend
          </TabsTrigger>
          <TabsTrigger value="devops" className="neon-button-pink data-[state=active]:neon-button-pink">
            DevOps
          </TabsTrigger>
          <TabsTrigger value="testing" className="neon-button-lime data-[state=active]:neon-button-lime">
            Testing
          </TabsTrigger>
        </TabsList>

        {Object.entries(techStacks).map(([key, stack]) => (
          <TabsContent key={key} value={key}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {stack.techs.map((tech, index) => (
                <motion.div key={tech} variants={itemVariants}>
                  <Card className={`neon-card-${stack.color} tech-card cursor-pointer`}>
                    <CardContent className="p-4 text-center">
                      <div className="mb-2">
                        <stack.icon className={`h-8 w-8 mx-auto text-${stack.color}-400`} />
                      </div>
                      <p className="font-semibold">{tech}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </Section>
  )
}
