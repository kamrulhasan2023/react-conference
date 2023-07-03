import { ISanityCustomPortableText } from 'src/backend/queries/portable-text/interface';
import { ISanityBlog } from 'src/backend/types/entities/blog';

export interface ISanityBlogsCarousel {
  _type: 'blogsCarousel';
  title: string;
  subtitle: string;
  description?: ISanityCustomPortableText;
  blogs: Omit<ISanityBlog, 'blogContent'>[];
}
