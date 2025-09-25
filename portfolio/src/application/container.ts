import { InMemoryCertificateRepository } from "@/infrastructure/repositories/InMemoryCertificateRepository";
import { InMemoryProjectRepository } from "@/infrastructure/repositories/InMemoryProjectRepository";
import { ListCertificatesUseCase } from "@/application/usecases/ListCertificates";
import { ListProjectsUseCase } from "@/application/usecases/ListProjects";
import { GetProjectByIdUseCase } from "@/application/usecases/GetProjectById";

// Simple container for wiring dependencies
export class Container {
  readonly listCertificates: ListCertificatesUseCase;
  readonly listProjects: ListProjectsUseCase;
  readonly getProjectById: GetProjectByIdUseCase;

  constructor() {
    const certificateRepo = new InMemoryCertificateRepository();
    const projectRepo = new InMemoryProjectRepository();

    this.listCertificates = new ListCertificatesUseCase(certificateRepo);
    this.listProjects = new ListProjectsUseCase(projectRepo);
    this.getProjectById = new GetProjectByIdUseCase(projectRepo);
  }
}

export const container = new Container();


