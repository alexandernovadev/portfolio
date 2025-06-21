"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface SectionProps {
  title: string
  titleClassName?: string
  children: ReactNode
  className?: string
}

export function Section({ title, titleClassName, children, className }: SectionProps) {
  return (
    <section className={cn("py-20", className)}>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={cn(
          "font-orbitron text-4xl md:text-5xl font-bold text-center mb-16",
          titleClassName
        )}
      >
        {title}
      </motion.h2>
      <div>{children}</div>
    </section>
  )
} 