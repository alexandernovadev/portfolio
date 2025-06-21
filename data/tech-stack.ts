import { Code, Server, Cloud, TestTube } from "lucide-react"

export const techStacks = {
  frontend: {
    icon: Code,
    color: "lime",
    techs: ["React", "React Native", "Redux", "GraphQL", "MUI", "Tailwind", "CSS Native", "Figma"],
  },
  backend: {
    icon: Server,
    color: "cyan",
    techs: ["Node.js", "REST API", "MongoDB", "PostgreSQL", "Redis", "ElectronJS"],
  },
  devops: {
    icon: Cloud,
    color: "pink",
    techs: ["AWS", "Azure", "CI/CD", "Vite", "Docker"],
  },
  testing: {
    icon: TestTube,
    color: "lime",
    techs: ["Jest", "React Test", "Unit Test"],
  },
} 