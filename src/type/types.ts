export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  category: string;
  authorId: number;
  clientRepoUrl: string;
  serverRepoUrl: string;
  liveUrl: string;
  techStack: string[];
  images: string[];
  featured: boolean;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}
