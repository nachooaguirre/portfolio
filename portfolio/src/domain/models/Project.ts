export interface Project {
  id: string;
  name: string;
  description: string;
  image?: string; // cover image (optional, fallback to images[0])
  images?: string[]; // gallery images
  details?: string[]; // long form details rendered on expand/detail
  url?: string;
  repo?: string;
  tags?: string[];
}


