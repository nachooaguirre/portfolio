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
      "Full Stack Web Developer – Plataforma de Logística y Delivery 'Taximoto'",
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
    id: "p4",
    name: "TiendaVeloo – Plataforma multi-tienda",
    description: "Plataforma SaaS de comercio electrónico multi-tienda con catálogo de productos, gestión de órdenes, reservas y panel de administración; NestJS (GraphQL) y Next.js; imágenes en S3 con Cloudflare (CDN/caché) para optimizar peticiones y actualización de assets.",
    image: "/TiendaVeloo/Captura de pantalla 2026-04-20 011450.png",
    images: [
      "/TiendaVeloo/Captura de pantalla 2026-04-20 011450.png",
      "/TiendaVeloo/Captura de pantalla 2026-04-20 011455.png",
      "/TiendaVeloo/Captura de pantalla 2026-04-20 011521.png",
      "/TiendaVeloo/Captura de pantalla 2026-04-20 011532.png",
    ],
    details: [
      "Full Stack Developer – Plataforma multi-tienda 'TiendaVeloo'",
      "Sistema SaaS que permite a múltiples comercios gestionar su catálogo, recibir pedidos y manejar reservas desde un único panel.",
      "Backend: NestJS con GraphQL (Apollo), módulos de auth, catalog, orders, stores, reservations y files.",
      "Frontend: Next.js 15 + React 19, Tailwind CSS, Radix UI y Socket.io-client para actualizaciones en tiempo real.",
      "Generación de códigos QR por tienda para acceso directo al catálogo.",
      "Subida y recorte de imágenes (CropperJS) almacenadas en Amazon S3.",
      "Cloudflare delante del stack: CDN y caché de peticiones de imágenes del catálogo (menos carga al origen, políticas de caché/invalidación para reflejar cambios sin saturar el backend).",
      "Autenticación JWT con roles por tienda; despliegue con Docker Compose.",
    ],
    tags: ["NestJS", "GraphQL", "Next.js", "Cloudflare", "React", "Tailwind", "Socket.io", "Amazon S3", "Docker", "JWT", "Radix UI"],
    url: "https://tiendaveloo.com",
  },
  {
    id: "p6",
    name: "CASBA – Cámara de Supermercados de Buenos Aires",
    description: "Landing page institucional para la Cámara de Autoservicios y Supermercados de la Provincia de Buenos Aires: representación del sector, formulario de afiliación y secciones animadas; sitio servido detrás de Cloudflare (CDN y capa de red).",
    image: "/Casba/Captura de pantalla 2026-04-20 012635.png",
    images: [
      "/Casba/Captura de pantalla 2026-04-20 012635.png",
      "/Casba/Captura de pantalla 2026-04-20 012653.png",
      "/Casba/Captura de pantalla 2026-04-20 012701.png",
    ],
    details: [
      "Frontend Developer – Landing page institucional 'CASBA'",
      "CASBA es la Cámara de Autoservicios y Supermercados de la Provincia de Buenos Aires, organismo que representa y defiende los intereses del sector supermercadista ante referentes gubernamentales, jurídicos, laborales y comerciales.",
      "Desarrollé la landing page completa: hero con foto de supermercado y overlay, carrusel de logos de comercios adheridos, secciones de Misión, Visión, Valores y Agenda de trabajo.",
      "Formulario de afiliación completo con validación: datos del titular, empresa, dirección, provincia, tipo de comercio (autoservicio / supermercado) y mensaje.",
      "Animaciones de entrada al scroll (FadeInSection) con dirección configurable por sección.",
      "Modo oscuro/claro nativo, botón flotante de WhatsApp y sección de noticias del sector.",
      "Frontend: Next.js 15 + React 19, TypeScript, Tailwind CSS, Radix UI (shadcn/ui).",
      "Cloudflare para DNS/CDN y entrega optimizada del sitio en producción.",
      "Despliegue con Docker y soporte para Netlify.",
    ],
    tags: ["Next.js", "React", "Cloudflare", "TypeScript", "Tailwind", "Radix UI", "Docker"],
    url: "https://casba.com.ar/",
  },
  {
    id: "p5",
    name: "ATHENA – Landing consultora de ciberseguridad",
    description: "Landing page para ATHENA, consultora de ciberseguridad con clientes como YPF, Swiss Medical Group, AB-InBev y AUSA; entrega con Cloudflare (CDN, seguridad en el edge). Especialistas con origen en Defensa Nacional e Inteligencia Criminal.",
    image: "/Athena/Captura de pantalla 2026-04-20 011805.png",
    images: [
      "/Athena/Captura de pantalla 2026-04-20 011805.png",
      "/Athena/Captura de pantalla 2026-04-20 011829.png",
      "/Athena/Captura de pantalla 2026-04-20 011836.png",
    ],
    details: [
      "Frontend Developer – Landing page 'ATHENA Consultora de Ciberseguridad'",
      "ATHENA es una consultora de élite con especialistas formados en Defensa Nacional e Inteligencia Criminal, con experiencia protegiendo organizaciones líderes como YPF, Swiss Medical Group (Grupo SMG), AB-InBev / Cervecería Quilmes, Autopistas Urbanas AUSA y Latin Securities.",
      "Desarrollé la landing page completa para comunicar su propuesta de valor: defensa de infraestructuras críticas, auditorías ISO/PCI-DSS, vCISO/vCTO, ciberinteligencia, DevSecOps y más de 12 servicios.",
      "Hero con video de fondo en loop para desktop e imagen optimizada para mobile.",
      "Sección de servicios con cards animadas (Framer Motion) y paneles expandibles con detalle de cada servicio.",
      "Contadores animados al scroll: +500.000 líneas de código analizadas, +20 años de experiencia, +15 auditorías ISO/PCI-DSS, +152.000 usuarios protegidos.",
      "Formulario de captación de leads con Google reCAPTCHA v2 y Basin como endpoint.",
      "Carrusel de logos de clientes, botón flotante de WhatsApp y animaciones reveal al scroll.",
      "Frontend: Next.js 16 + React 19, Tailwind CSS v4, Framer Motion, TypeScript. Despliegue con Docker.",
      "Cloudflare delante del despliegue para CDN y capa de red (mejor tiempo de respuesta global y protección en el edge).",
    ],
    tags: ["Next.js", "React", "Cloudflare", "Tailwind", "Framer Motion", "TypeScript", "Docker", "reCAPTCHA"],
    url: "https://www.athena-tech.ar/",
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
