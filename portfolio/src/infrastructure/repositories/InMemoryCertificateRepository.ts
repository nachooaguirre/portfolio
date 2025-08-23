import { Certificate } from "@/domain/models/Certificate";
import { CertificateRepository } from "@/domain/repositories/CertificateRepository";

const SAMPLE_CERTIFICATES: Certificate[] = [
  {
    id: "udemy-1",
    title: "React y TypeScript: De 0 a Profesional",
    platform: "Udemy",
    url: "https://www.udemy.com/certificate/UC-XXXXXX/",
    issuedAt: "2024",
  },
  {
    id: "udemy-2",
    title: "Node.js + Prisma + PostgreSQL",
    platform: "Udemy",
    url: "https://www.udemy.com/certificate/UC-YYYYYY/",
    issuedAt: "2023",
  },
];

export class InMemoryCertificateRepository implements CertificateRepository {
  async listCertificates(): Promise<Certificate[]> {
    return SAMPLE_CERTIFICATES;
  }
}


