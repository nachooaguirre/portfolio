import { Certificate } from "@/domain/models/Certificate";
import { CertificateRepository } from "@/domain/repositories/CertificateRepository";

export class ListCertificatesUseCase {
  constructor(private readonly certificateRepository: CertificateRepository) {}

  async execute(): Promise<Certificate[]> {
    return this.certificateRepository.listCertificates();
  }
}


