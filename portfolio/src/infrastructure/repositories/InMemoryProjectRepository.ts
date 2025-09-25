import { Project } from "@/domain/models/Project";
import { ProjectRepository } from "@/domain/repositories/ProjectRepository";

const SAMPLE_PROJECTS: Project[] = [
  {
    id: "p1",
    name: "TaxiMoto - plataforma de delivery",
    description: "Plataforma de logística y delivery para un cliente de Esperanza (Santa Fe): gestión de pedidos end‑to‑end con roles y mapas en tiempo real (Google Maps).",
    image: "/taximoto/re32323232/Captura de pantalla 2025-09-23 171617.png",
    images: [
      "/taximoto/re32323232/Captura de pantalla 2025-09-23 171617.png",
      "/taximoto/re32323232/Captura de pantalla 2025-09-23 171629.png",
      "/taximoto/re32323232/Captura de pantalla 2025-09-23 171638.png",
      "/taximoto/re32323232/Captura de pantalla 2025-09-23 171657.png",
      "/taximoto/re32323232/Captura de pantalla 2025-09-23 171752.png",
      "/taximoto/re32323232/Captura de pantalla 2025-09-23 171802.png",
      "/taximoto/re32323232/Captura de pantalla 2025-09-23 171834.png",
      "/taximoto/re32323232/Captura de pantalla 2025-09-23 171846.png",
      "/taximoto/re32323232/Captura de pantalla 2025-09-23 172019.png",
      "/taximoto/re32323232/Captura de pantalla 2025-09-23 172058.png",
      "/taximoto/re32323232/Captura de pantalla 2025-09-23 172141.png",
      "/taximoto/re32323232/Captura de pantalla 2025-09-23 172151.png",
    ],
    details: [
      "Full Stack Web Developer – Plataforma de Logística y Delivery ‘Taximoto’",
      "Creé una aplicación para que negocios puedan crear órdenes de pedidos, repartidores puedan tomarlas y entregarlas. Usuarios pueden crear mandados particulares y panel de administrador para gestionar todo.",
      "Full Stack Developer: diseñé y desarrollé la arquitectura completa de la aplicación.",
      "Implementé autenticación JWT con control de roles (Customer, Delivery, Store, Admin).",
      "Integré mapas en tiempo real, geocoding y pricing dinámico por km.",
      "Front: React + TypeScript, Tailwind, Context API, Google Maps",
      "Back: Node.js, Express, Socket.io, TypeScript, Mongoose",
      "Base de datos: MongoDB",
    ],
    tags: ["React.js", "Socket.io", "Tailwind", "Express.js", "MongoDB", "Google Maps API", "Docker", "JWT"],
  },
  {
    id: "p2",
    name: "Hackaton",
    description: "Recomendador de películas con OpenAI (ChatGPT), con filtros por plataforma y género; Next.js + NestJS (3er puesto, 72 hs).",
    image: "/hackaton/Captura de pantalla 2025-09-23 192448.png",
    images: [
      "/hackaton/Captura de pantalla 2025-09-23 192448.png",
      "/hackaton/Captura de pantalla 2025-09-23 192654.png",
    ],
    details: [
      "Hackatón – Recomendador de Películas (MoviesExpres)",
      "Aplicación que integra OpenAI (ChatGPT) para entender preferencias del usuario y generar recomendaciones de películas. Permite filtrar por plataforma (Netflix, Prime Video, Disney+, HBO Max, Paramount+, Apple TV+), género y otros criterios.",
      "Implementé backend con NestJS y validaciones DTO para las APIs.",
      "Desarrollé una UI responsive con Next.js y filtros avanzados.",
      "Resultado: tercer puesto del concurso de 72hs.",
    ],
    repo: "https://github.com/nachooaguirre/ProyectoHackaton",
    tags: ["Next.js", "Tailwind", "NestJS", "Docker"],
    url: "https://moviesexpress.netlify.app/",
  },
  {
    id: "p3",
    name: "E-commerce backend",
    description: "API REST de e‑commerce con auth por roles, CRUD de usuarios/productos/órdenes, imágenes en Cloudinary y Swagger sobre PostgreSQL.",
    image: "/pm4/re32323232/Captura de pantalla 2025-09-23 183245.png",
    images: [
      "/pm4/re32323232/Captura de pantalla 2025-09-23 183245.png",
      "/pm4/re32323232/Captura de pantalla 2025-09-23 183257.png",
      "/pm4/re32323232/Captura de pantalla 2025-09-23 183307.png",
      "/pm4/re32323232/Captura de pantalla 2025-09-23 183323.png",
      "/pm4/re32323232/Captura de pantalla 2025-09-23 183345.png",
      "/pm4/re32323232/Captura de pantalla 2025-09-23 183412.png",
      "/pm4/re32323232/Captura de pantalla 2025-09-23 183432.png",
    ],
    details: [
      "Full Stack Web Developer – E-commerce Backend",
      "API REST para gestión de usuarios, productos, órdenes y categorías.",
      "Implementé autenticación y autorización por roles (admin).",
      "Desarrollé CRUD de productos y usuarios, además de creación/consulta de órdenes.",
      "Configuré subida de imágenes con Multer + Cloudinary y validación.",
      "Documenté la API con Swagger, implementé migraciones con TypeORM, tests automatizados y despliegue en Docker.",
      "Back: NestJS (TypeScript), TypeORM",
      "Base de datos: PostgreSQL",
    ],
    tags: ["Swagger", "NestJS", "Postgres", "Docker", "Cloudinary"],
  },
];

export class InMemoryProjectRepository implements ProjectRepository {
  async listProjects(): Promise<Project[]> {
    return SAMPLE_PROJECTS;
  }

  async getProjectById(id: string): Promise<Project | null> {
    const project = SAMPLE_PROJECTS.find((p) => p.id === id);
    return project ?? null;
  }
}


