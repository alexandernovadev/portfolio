"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="py-8 text-center border-t border-gray-800/50"
    >
      <div className="max-w-screen-lg mx-auto px-4">
        <p className="text-gray-400 font-mono text-sm">
          <span className="text-violet-400">v</span>2025.jun
        </p>
      </div>
    </motion.footer>
  )
} 