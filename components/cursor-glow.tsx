"use client"

import { useEffect, useState } from "react"

export default function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  return (
    <div
      className="fixed pointer-events-none z-50 w-8 h-8 rounded-full bg-violet-400/25 blur-sm transition-all duration-100 ease-out"
      style={{
        left: mousePosition.x - 16,
        top: mousePosition.y - 16,
        boxShadow: "0 0 15px #7C3AED",
      }}
    />
  )
}
