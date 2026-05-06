import { createClient } from 'contentful';

const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

// Check if credentials are properly configured
const isConfigured = spaceId && accessToken && !spaceId.includes('YOUR_') && !accessToken.includes('YOUR_');

let client: any = null;
try {
  if (isConfigured) {
    client = createClient({
      space: spaceId,
      accessToken: accessToken,
    });
  }
} catch (error) {
  console.error('Failed to initialize Contentful client:', error);
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  author: string;
  publishedDate: string;
  featuredImage?: {
    url: string;
    title: string;
  };
  featured: boolean;
}

export const getFeaturedBlogs = async (): Promise<BlogPost[]> => {
  if (!client || !isConfigured) {
    console.warn('Contentful credentials not configured. Skipping blog fetch.');
    return [];
  }

  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      'fields.featured': true,
      order: '-fields.publishedDate',
      limit: 3, // Get top 3 featured blogs
    });

    return response.items.map((item: any) => ({
      id: item.sys.id,
      title: item.fields.title,
      slug: item.fields.slug,
      description: item.fields.description || '',
      content: item.fields.content || '',
      author: item.fields.author || 'Admin',
      publishedDate: item.fields.publishedDate,
      featuredImage: item.fields.featuredImage
        ? {
            url: `https:${item.fields.featuredImage.fields.file.url}`,
            title: item.fields.featuredImage.fields.title,
          }
        : undefined,
      featured: item.fields.featured,
    }));
  } catch (error) {
    console.error('Error fetching blogs from Contentful:', error);
    return [];
  }
};

export const getAllBlogs = async (): Promise<BlogPost[]> => {
  if (!client || !isConfigured) {
    console.warn('Contentful credentials not configured. Skipping blog fetch.');
    return [];
  }

  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      order: '-fields.publishedDate',
    });

    return response.items.map((item: any) => ({
      id: item.sys.id,
      title: item.fields.title,
      slug: item.fields.slug,
      description: item.fields.description || '',
      content: item.fields.content || '',
      author: item.fields.author || 'Admin',
      publishedDate: item.fields.publishedDate,
      featuredImage: item.fields.featuredImage
        ? {
            url: `https:${item.fields.featuredImage.fields.file.url}`,
            title: item.fields.featuredImage.fields.title,
          }
        : undefined,
      featured: item.fields.featured || false,
    }));
  } catch (error) {
    console.error('Error fetching all blogs from Contentful:', error);
    return [];
  }
};

export const getBlogBySlug = async (slug: string): Promise<BlogPost | null> => {
  if (!client || !isConfigured) {
    console.warn('Contentful credentials not configured. Skipping blog fetch.');
    return null;
  }

  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
    });

    if (response.items.length === 0) return null;

    const item = response.items[0] as any;
    return {
      id: item.sys.id,
      title: item.fields.title,
      slug: item.fields.slug,
      description: item.fields.description || '',
      content: item.fields.content || '',
      author: item.fields.author || 'Admin',
      publishedDate: item.fields.publishedDate,
      featuredImage: item.fields.featuredImage
        ? {
            url: `https:${item.fields.featuredImage.fields.file.url}`,
            title: item.fields.featuredImage.fields.title,
          }
        : undefined,
      featured: item.fields.featured || false,
    };
  } catch (error) {
    console.error('Error fetching blog by slug from Contentful:', error);
    return null;
  }
};
