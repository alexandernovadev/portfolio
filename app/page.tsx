"use client"

import { motion } from "framer-motion"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import TechStackSection from "@/components/tech-stack-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import AnimatedBackground from "@/components/animated-background"
import CursorGlow from "@/components/cursor-glow"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white relative overflow-x-hidden">
      <AnimatedBackground />
      <CursorGlow />
      <Navigation />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 pt-16"
      >
        <HeroSection />
        <div className="perro max-w-screen-lg mx-auto px-4">
          <AboutSection />
          <TechStackSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </div>
        <Footer />
      </motion.div>
    </div>
  )
}
