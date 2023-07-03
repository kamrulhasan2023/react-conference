import { ISanityBlog } from 'src/backend/types/entities/blog';

export type SanityBlogPage = Pick<
  ISanityBlog,
  'title' | 'blogContent' | 'description'
>;
