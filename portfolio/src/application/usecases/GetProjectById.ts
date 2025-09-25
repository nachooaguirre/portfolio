import { Project } from "@/domain/models/Project";
import { ProjectRepository } from "@/domain/repositories/ProjectRepository";

export class GetProjectByIdUseCase {
  constructor(private readonly projectRepository: ProjectRepository) {}

  async execute(id: string): Promise<Project | null> {
    return this.projectRepository.getProjectById(id);
  }
}


