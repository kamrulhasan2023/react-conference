import { ISanitySections } from 'src/builder/sections/query/interface';
import { ISanityOptionalLink } from 'src/backend/queries/link/interface';
import { ISanitySlug } from 'src/backend/types/slug';
import { ISanityBlog } from 'src/backend/types/entities/blog';
import { ISanityCommonPageFields } from 'src/backend/types/page-fields';

export interface ISanityHomePage extends ISanityCommonPageFields {
  slug: ISanitySlug;
  optionalLink: ISanityOptionalLink;
  // Note: If an optional array is not initialized the field is set to null
  sections: ISanitySections | null;
  blogs: Omit<ISanityBlog, 'blogContent'>[];
}
