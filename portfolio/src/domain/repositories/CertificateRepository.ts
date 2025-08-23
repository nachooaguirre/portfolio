import { Certificate } from "@/domain/models/Certificate";

export interface CertificateRepository {
  listCertificates(): Promise<Certificate[]>;
}


