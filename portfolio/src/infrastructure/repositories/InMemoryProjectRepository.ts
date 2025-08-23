import { Project } from "@/domain/models/Project";
import { ProjectRepository } from "@/domain/repositories/ProjectRepository";

const SAMPLE_PROJECTS: Project[] = [
  {
    id: "p1",
    name: "MercadoVidente",
    description: "App de predicciones en tiempo real con Next.js y websockets.",
    image: "/window.svg",
    url: "https://example.com/demo",
    repo: "https://github.com/usuario/mercadovidente",
    tags: ["Next.js", "Socket.io", "Tailwind"],
  },
  {
    id: "p2",
    name: "Delivery App",
    description: "Plataforma fullstack con panel de administración y API REST.",
    image: "/globe.svg",
    repo: "https://github.com/usuario/delivery-app",
    tags: ["Express", "MongoDB", "React"],
  },
  {
    id: "p3",
    name: "Delivery App",
    description: "Plataforma fullstack con panel de administración y API REST.",
    image: "/globe.svg",
    repo: "https://github.com/usuario/delivery-app",
    tags: ["Express", "MongoDB", "React"],
  },
  {
    id: "p4",
    name: "Delivery App",
    description: "Plataforma fullstack con panel de administración y API REST.",
    image: "/globe.svg",
    repo: "https://github.com/usuario/delivery-app",
    tags: ["Express", "MongoDB", "React"],
  },
];

export class InMemoryProjectRepository implements ProjectRepository {
  async listProjects(): Promise<Project[]> {
    return SAMPLE_PROJECTS;
  }
}


