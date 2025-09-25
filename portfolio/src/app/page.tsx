import Hero from "@/components/Hero";
import Certificates from "@/components/Certificates";
import Projects from "@/components/Projects";
import { container } from "@/application/container";

export default async function Home() {
  const [certs, projects] = await Promise.all([
    container.listCertificates.execute(),
    container.listProjects.execute(),
  ]);
  return (
    <div className="font-sans min-h-screen p-6 sm:p-10 max-w-[1600px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <aside className="lg:col-span-1">
          <Hero
            name="Ignacio Aguirre"
            pitch="Desarrollador Full Stack con experiencia en la creación de aplicaciones web y servicios backend utilizando JavaScript, TypeScript, Express.js y NestJS. He trabajado con MongoDB y PostgreSQL, además de desarrollar interfaces modernas con React y Next.js. Tengo experiencia usando Docker y despliegue en VPS. Participé en un proyecto en Santa Fe, Esperanza, donde diseñe y desarrolle un sistema para conectar a más de 50 comercios locales con más de 40 repartidores, lo que permitió a los negocios ampliar su alcance y a los repartidores generar nuevos ingresos. Me destaco por la adaptabilidad, la comunicación eficaz y el trabajo en equipo.
"
            avatarSrc="/ignaciofoto.jpg"
            technologyGroups={{
              Frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "TailwindCSS"],
              "Backend & DB": ["Node.js", "Express.js", "NestJS", "MongoDB", "PostgreSQL", "Nginx"],
              Tools: ["Docker", "GitHub", "VSCode", "Deploy en VPS"],
              Learnings: ["C#"],
            }}
          />
        </aside>

        <main className="lg:col-span-2 flex flex-col gap-12">
          <Projects items={projects} />
          <Certificates items={certs} />
        </main>
      </div>
    </div>
  );
}
