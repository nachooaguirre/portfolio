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
    <div className="font-sans min-h-screen p-6 sm:p-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <aside className="lg:col-span-1">
          <Hero
            name="Ignacio Aguirre"
            pitch="Desarrollador full stack apasionado por crear productos sólidos y experiencias simples."
            technologies={[
              "TypeScript",
              "Next.js",
              "Node.js",
              "React",
              "TailwindCSS",
              "PostgreSQL",
            ]}
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
