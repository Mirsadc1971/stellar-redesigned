import { condoPropertyManagementChicago } from './condo-property-management-chicago';

export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  excerpt: string;
  featuredImage?: string;
  content: string;
}

export const blogPosts: BlogPost[] = [condoPropertyManagementChicago];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
