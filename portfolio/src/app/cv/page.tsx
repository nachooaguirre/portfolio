import type { Metadata } from "next";
import CVToolbar from "./CVToolbar";

export const metadata: Metadata = {
  title: { absolute: "Ignacio Aguirre" },
  description: "Currículum Vitae de Ignacio Aguirre, Full Stack Developer.",
};

export default function CVPage() {
  return (
    <div className="min-h-screen bg-white text-[#111] font-sans">
      <CVToolbar />

      {/* Hoja A4 */}
      <div className="mx-auto max-w-[210mm] px-12 py-10 print:px-10 print:py-8">

        {/* Encabezado */}
        <header className="mb-6 border-b border-gray-300 pb-5">
          <h1 className="text-3xl font-bold tracking-tight">Ignacio Aguirre</h1>
          <p className="text-base text-gray-500 font-medium mt-0.5">Full Stack Developer</p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
            <span>Santa Fe, Argentina</span>
            <a href="mailto:ignacioaguirre.site@gmail.com" className="hover:text-gray-800">ignacioaguirre.site@gmail.com</a>
            <a href="https://github.com/nachooaguirre" className="hover:text-gray-800">github.com/nachooaguirre</a>
            <a href="https://www.linkedin.com/in/ignacioaguirresite/" className="hover:text-gray-800">linkedin.com/in/ignacioaguirresite</a>
            <a href="https://ignacioaguirre.site" className="hover:text-gray-800">ignacioaguirre.site</a>
          </div>
        </header>

        {/* Perfil */}
        <Section title="Perfil">
          <p className="text-sm leading-relaxed text-gray-700">
            Desarrollador Full Stack con más de 2 años construyendo productos reales en producción. He desarrollado desde plataformas SaaS multi-tienda con GraphQL y Amazon S3 (con Cloudflare delante para CDN y caché, en especial de imágenes de catálogo), hasta sistemas de delivery con mapas en tiempo real, APIs REST con Swagger y landings para clientes como CASBA y ATHENA, también publicados detrás de Cloudflare. Trabajo con React, Next.js y Tailwind en el front; Node.js, Express.js y NestJS en el back; MongoDB y PostgreSQL; y Docker. Tercer puesto en hackathon de 72hs con OpenAI. Me destaco por entregar soluciones completas, adaptarme rápido y comunicar con claridad.
          </p>
        </Section>

        {/* Skills */}
        <Section title="Skills">
          <div className="grid grid-cols-1 gap-1.5 text-sm text-gray-700">
            <SkillRow label="Lenguajes" value="JavaScript, TypeScript, HTML, CSS, C#, Java" />
            <SkillRow label="Frontend" value="React.js, Next.js, Tailwind CSS, Framer Motion, Radix UI" />
            <SkillRow label="Backend" value="Node.js, Express.js, NestJS, GraphQL (Apollo), REST, Socket.io" />
            <SkillRow label="Bases de datos" value="MongoDB (Mongoose), PostgreSQL (TypeORM), Supabase" />
            <SkillRow label="DevOps & Cloud" value="Docker, Nginx, Amazon S3, Cloudflare (CDN, caché, WAF en edge), Cloudinary, Deploy en VPS" />
            <SkillRow label="Herramientas" value="Git, GitHub, VSCode, Swagger, Scrum" />
          </div>
        </Section>

        {/* Proyectos */}
        <Section title="Proyectos">
          <div className="space-y-5">

            <Project
              title="Full Stack Developer – TiendaVeloo (Plataforma multi-tienda SaaS)"
              url="https://tiendaveloo.com"
              bullets={[
                "Plataforma SaaS que permite a múltiples comercios gestionar su catálogo, recibir pedidos y manejar reservas desde un único panel.",
                "Backend: NestJS con GraphQL (Apollo), módulos de auth, catalog, orders, stores, reservations y files.",
                "Frontend: Next.js 15 + React 19, Tailwind CSS, Radix UI y Socket.io-client para actualizaciones en tiempo real.",
                "Generación de códigos QR por tienda, subida y recorte de imágenes (CropperJS) almacenadas en Amazon S3.",
                "Cloudflare delante del stack: CDN y caché de peticiones de imágenes del catálogo, con control de invalidación para ahorrar carga al origen y servir versiones actualizadas sin saturar el backend.",
                "Autenticación JWT con roles por tienda; despliegue con Docker Compose.",
              ]}
              tags="NestJS · GraphQL · Next.js · React · Socket.io · Amazon S3 · Cloudflare · Docker · JWT · Radix UI"
            />

            <Project
              title="Frontend Developer – CASBA (Cámara de Autoservicios y Supermercados de Buenos Aires)"
              url="https://casba.com.ar"
              bullets={[
                "Landing page institucional para la entidad gremial que representa autoservicios y supermercados de la Provincia de Buenos Aires.",
                "Hero con foto de supermercado y overlay, carrusel de logos de comercios adheridos, secciones de Misión, Visión, Valores y Agenda.",
                "Formulario de afiliación completo con validación: titular, empresa, dirección, provincia y tipo de comercio.",
                "Animaciones de entrada al scroll, modo oscuro/claro nativo, botón flotante de WhatsApp y sección de noticias.",
                "Frontend: Next.js 15 + React 19, TypeScript, Tailwind CSS, Radix UI (shadcn/ui). Cloudflare para DNS/CDN en producción.",
                "Despliegue con Docker + Netlify.",
              ]}
              tags="Next.js · React · TypeScript · Tailwind · Radix UI · Cloudflare · Docker"
            />

            <Project
              title="Frontend Developer – ATHENA (Consultora de Ciberseguridad)"
              url="https://www.athena-tech.ar"
              bullets={[
                "Landing page para consultora de élite con clientes como YPF, Swiss Medical Group, AB-InBev, Autopistas Urbanas AUSA y Latin Securities.",
                "Hero con video de fondo en loop (desktop) e imagen optimizada (mobile), servicios con cards animadas y paneles expandibles (Framer Motion).",
                "Contadores animados al scroll: +500.000 líneas de código, +20 años de experiencia, +15 auditorías ISO/PCI-DSS, +152.000 usuarios protegidos.",
                "Formulario de leads con Google reCAPTCHA v2, carrusel de logos y botón flotante de WhatsApp.",
                "Frontend: Next.js 16 + React 19, Tailwind CSS v4, Framer Motion, TypeScript. Cloudflare como CDN/capa de red ante el despliegue.",
                "Despliegue con Docker.",
              ]}
              tags="Next.js · React · Tailwind · Framer Motion · TypeScript · Cloudflare · Docker · reCAPTCHA"
            />

            <Project
              title="Full Stack Developer – TaxiMoto (Plataforma de Logística y Delivery)"
              bullets={[
                "Aplicación para que negocios creen órdenes, repartidores las tomen y entreguen, con panel de administrador completo.",
                "Implementé autenticación JWT con control de roles: Customer, Delivery, Store, Admin.",
                "Integré mapas en tiempo real, geocoding y pricing dinámico por km con Google Maps API.",
                "Front: React + TypeScript, Tailwind, Context API, Google Maps. Back: Node.js, Express, Socket.io, Mongoose. DB: MongoDB.",
              ]}
              tags="React · Socket.io · Tailwind · Express.js · MongoDB · Google Maps API · Docker · JWT"
            />

            <Project
              title="Hackatón – MoviesExpress (Recomendador de Películas con IA)"
              url="https://moviesexpress.netlify.app"
              bullets={[
                "Integra OpenAI (ChatGPT) para generar recomendaciones personalizadas de películas con filtros por plataforma y género.",
                "Backend con NestJS y validaciones DTO. UI responsive con Next.js y filtros avanzados.",
                "Resultado: tercer puesto del concurso de 72hs.",
              ]}
              tags="Next.js · NestJS · Tailwind · Docker · OpenAI"
            />

            <Project
              title="Full Stack Developer – E-commerce Backend"
              bullets={[
                "API REST para gestión de usuarios, productos, órdenes y categorías con autenticación y autorización por roles.",
                "Subida de imágenes con Multer + Cloudinary, documentación con Swagger, migraciones TypeORM y tests automatizados.",
                "Back: NestJS (TypeScript), TypeORM. Base de datos: PostgreSQL. Despliegue con Docker.",
              ]}
              tags="NestJS · PostgreSQL · TypeORM · Swagger · Docker · Cloudinary"
            />

          </div>
        </Section>

        {/* Educación */}
        <Section title="Educación">
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex justify-between gap-4">
              <span><span className="font-medium">Full Stack Developer</span> – Soy Henry</span>
              <span className="text-gray-400 shrink-0">Dic. 2024 – Oct. 2025</span>
            </div>
            <div className="flex justify-between gap-4">
              <span><span className="font-medium">Full Stack Developer</span> – Codecademy</span>
              <span className="text-gray-400 shrink-0">Feb. 2023 – Nov. 2023</span>
            </div>

            <p className="pt-1 text-xs font-bold uppercase tracking-wide text-gray-400">Certificados Udemy</p>
            <ul className="space-y-1.5 text-sm list-none pl-0">
              <li className="flex justify-between gap-4">
                <a
                  href="https://www.udemy.com/certificate/UC-8c763140-30ed-4aac-966f-44a060a5c1e0/"
                  className="text-gray-800 hover:underline print:text-gray-800"
                >
                  JavaScript Moderno Guía Definitiva Construye +20 Proyectos
                </a>
                <span className="text-gray-400 shrink-0">2023</span>
              </li>
              <li className="flex justify-between gap-4">
                <a
                  href="https://www.udemy.com/certificate/UC-1d0bc863-8da1-4e10-a6cb-1ed71581efb6/"
                  className="text-gray-800 hover:underline print:text-gray-800"
                >
                  GIT+GitHub: Todo un sistema de control de versiones de cero
                </a>
                <span className="text-gray-400 shrink-0">2023</span>
              </li>
              <li className="flex justify-between gap-4">
                <a
                  href="https://www.udemy.com/certificate/UC-d9d3a657-7bd3-4a59-8f6d-59fd9772a48c/"
                  className="text-gray-800 hover:underline print:text-gray-800"
                >
                  React: De cero a experto – Edición 2025
                </a>
                <span className="text-gray-400 shrink-0">2023</span>
              </li>
              <li className="flex justify-between gap-4">
                <a
                  href="https://www.udemy.com/certificate/UC-391f6f12-accc-44d8-b1d5-592551042adf/"
                  className="text-gray-800 hover:underline print:text-gray-800"
                >
                  Next.js 15 & React – The Complete Guide
                </a>
                <span className="text-gray-400 shrink-0">2024</span>
              </li>
              <li className="flex justify-between gap-4">
                <a
                  href="https://www.udemy.com/certificate/UC-be25b691-c29f-465b-9372-375539e3082c/"
                  className="text-gray-800 hover:underline print:text-gray-800"
                >
                  Understanding TypeScript
                </a>
                <span className="text-gray-400 shrink-0">2023</span>
              </li>
              <li className="flex justify-between gap-4">
                <a
                  href="https://www.udemy.com/certificate/UC-2b1ce6ba-a6fa-4258-9408-292b81917656/"
                  className="text-gray-800 hover:underline print:text-gray-800"
                >
                  CSS – The Complete Guide 2025 (incl. Flexbox, Grid & Sass)
                </a>
                <span className="text-gray-400 shrink-0">2023</span>
              </li>
            </ul>
          </div>
        </Section>

        {/* Idiomas */}
        <Section title="Idiomas">
          <p className="text-sm text-gray-700">Inglés – Intermedio (B2)</p>
        </Section>

      </div>

      {/* Estilos de impresión */}
      <style>{`
        @media print {
          @page { size: A4; margin: 12mm 14mm; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
      `}</style>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-5">
      <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 border-b border-gray-200 pb-1">
        {title}
      </h2>
      {children}
    </section>
  );
}

function SkillRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-2">
      <span className="font-semibold text-gray-800 w-36 shrink-0">{label}:</span>
      <span>{value}</span>
    </div>
  );
}

function Project({ title, url, bullets, tags }: { title: string; url?: string; bullets: string[]; tags: string }) {
  return (
    <div>
      <div className="flex items-baseline gap-2 flex-wrap">
        <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
        {url && (
          <a href={url} className="text-xs text-blue-600 hover:underline print:text-gray-500">{url}</a>
        )}
      </div>
      <ul className="mt-1 space-y-0.5 list-disc list-inside text-sm text-gray-700 leading-relaxed">
        {bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
      <p className="mt-1 text-xs text-gray-400">{tags}</p>
    </div>
  );
}
