import Hero from "@/components/Hero";
import Certificates from "@/components/Certificates";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { container } from "@/application/container";

export default async function Home() {
  const [certs, projects] = await Promise.all([
    container.listCertificates.execute(),
    container.listProjects.execute(),
  ]);
  return (
    <>
      <div className="font-sans min-h-screen pt-10 px-6 sm:px-10 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <aside className="lg:col-span-1 lg:sticky lg:top-10">
            <Hero
              name="Ignacio Aguirre"
              pitch="Desarrollador Full Stack con más de 2 años construyendo productos reales en producción. He desarrollado desde plataformas SaaS multi-tienda con GraphQL y Amazon S3 (con Cloudflare delante para CDN y caché de imágenes), hasta sistemas de delivery con mapas en tiempo real, APIs REST documentadas con Swagger y landings institucionales para clientes como CASBA y ATHENA, también detrás de Cloudflare. Trabajo con React, Next.js y Tailwind en el front; Node.js, Express.js y NestJS en el back; MongoDB y PostgreSQL como bases de datos; y Docker para el despliegue. Tercer puesto en hackathon de 72hs integrando OpenAI. Me destaco por entregar soluciones completas, adaptarme rápido y comunicarme con claridad.
"
              avatarSrc="/ignaciofoto.jpg"
              technologyGroups={{
                Frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "TailwindCSS"],
              "Backend & DB": ["Node.js", "Express.js", "NestJS", "GraphQL", "Socket.io", "MongoDB", "PostgreSQL", "Supabase", "Nginx", "C#", "Java"],
              Tools: ["Docker", "GitHub", "VSCode", "Deploy en VPS", "Amazon S3", "Cloudflare"],
              }}
            />
          </aside>

          <main className="lg:col-span-2 flex flex-col gap-12 pb-10">
            <Projects items={projects} />
            <Certificates items={certs} />
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
