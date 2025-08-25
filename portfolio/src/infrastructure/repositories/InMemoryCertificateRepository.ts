import { Certificate } from "@/domain/models/Certificate";
import { CertificateRepository } from "@/domain/repositories/CertificateRepository";

const SAMPLE_CERTIFICATES: Certificate[] = [
  {
    id: "udemy-1",
    title: "JavaScript Moderno Guía Definitiva Construye +20 Proyectos",
    platform: "Udemy",
    url: "https://www.udemy.com/certificate/UC-8c763140-30ed-4aac-966f-44a060a5c1e0/",
    issuedAt: "2023",
  },
  {
    id: "udemy-2",
    title: "GIT+GitHub: Todo un sistema de control de versiones de cero",
    platform: "Udemy",
    url: "https://www.udemy.com/certificate/UC-1d0bc863-8da1-4e10-a6cb-1ed71581efb6/",
    issuedAt: "2023",
  },
  {
    id: "udemy-3",
    title: "React: De cero a experto - Edición 2025",
    platform: "Udemy",
    url: "https://www.udemy.com/certificate/UC-d9d3a657-7bd3-4a59-8f6d-59fd9772a48c/",
    issuedAt: "2023",
  },
  {
    id: "udemy-4",
    title: "Next.js 15 & React - The Complete Guide",
    platform: "Udemy",
    url: "https://www.udemy.com/certificate/UC-391f6f12-accc-44d8-b1d5-592551042adf/",
    issuedAt: "2024",
  },
  {
    id: "udemy-5",
    title: "Understanding TypeScript",
    platform: "Udemy",
    url: "https://www.udemy.com/certificate/UC-be25b691-c29f-465b-9372-375539e3082c/",
    issuedAt: "2023",
  },
  {
    id: "udemy-6",
    title: "CSS - The Complete Guide 2025 (incl. Flexbox, Grid & Sass)",
    platform: "Udemy",
    url: "https://www.udemy.com/certificate/UC-2b1ce6ba-a6fa-4258-9408-292b81917656/",
    issuedAt: "2023",
  },
];

export class InMemoryCertificateRepository implements CertificateRepository {
  async listCertificates(): Promise<Certificate[]> {
    return SAMPLE_CERTIFICATES;
  }
}


