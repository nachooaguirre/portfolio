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
    <div className="font-sans min-h-screen p-6 sm:p-10 max-w-5xl mx-auto flex flex-col gap-12">
      <Hero
        name="Ignacio Aguirre"
        pitch="Desarrollador full stack apasionado por crear productos sólidos y experiencias simples."
      />
      <Projects items={projects} />
      <Certificates items={certs} />
    </div>
  );
}
