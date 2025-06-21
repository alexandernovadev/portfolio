import { Code, Server, Cloud, TestTube } from "lucide-react"

export const techStacks = {
  frontend: {
    color: "lime",
    techs: [
      { name: "React", iconClass: "devicon-react-original" },
      { name: "React Native", iconClass: "devicon-react-original" },
      { name: "Redux", iconClass: "devicon-redux-original" },
      { name: "GraphQL", iconClass: "devicon-graphql-plain" },
      { name: "MUI", iconClass: "devicon-materialui-plain" },
      { name: "Tailwind", iconClass: "devicon-tailwindcss-plain" },
      { name: "CSS", iconClass: "devicon-css3-plain" },
      { name: "Figma", iconClass: "devicon-figma-plain" },
      { name: "Next.js", iconClass: "devicon-nextjs-line" },
      { name: "TypeScript", iconClass: "devicon-typescript-plain" },
    ],
  },
  backend: {
    color: "cyan",
    techs: [
      { name: "Node.js", iconClass: "devicon-nodejs-plain" },
      { name: "REST API" },
      { name: "MongoDB", iconClass: "devicon-mongodb-plain" },
      { name: "PostgreSQL", iconClass: "devicon-postgresql-plain" },
      { name: "Redis", iconClass: "devicon-redis-plain" },
      { name: "Electron", iconClass: "devicon-electron-original" },
    ],
  },
  devops: {
    color: "pink",
    techs: [
      { name: "AWS", iconClass: "devicon-amazonwebservices-plain" },
      { name: "Azure", iconClass: "devicon-azure-plain" },
      { name: "CI/CD", iconClass: "devicon-git-plain" },
      { name: "Vite", iconClass: "devicon-vitejs-plain" },
      { name: "Docker", iconClass: "devicon-docker-plain" },
    ],
  },
  testing: {
    color: "lime",
    techs: [
      { name: "Jest", iconClass: "devicon-jest-plain" },
      { name: "React Test", iconClass: "devicon-react-original" },
      { name: "Unit Test", iconClass: "devicon-github-original" },
    ],
  },
} 