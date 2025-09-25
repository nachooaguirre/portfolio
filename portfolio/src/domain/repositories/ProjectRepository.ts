import { Project } from "@/domain/models/Project";

export interface ProjectRepository {
  listProjects(): Promise<Project[]>;
  getProjectById(id: string): Promise<Project | null>;
}


