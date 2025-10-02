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

export interface Blog {
  id: number;
  authorId: number;
  title: string;
  slug: string;
  content: string;
  image: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

