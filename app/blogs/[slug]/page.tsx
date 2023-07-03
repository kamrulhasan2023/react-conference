import Container from '@components/container';
import CustomPortableText from '@components/custom-portable-text';
import Hero from '@sections/hero';
import { Metadata } from 'next';
import { cache } from 'react';
import { client } from 'src/backend/client';
import { IPageParams } from 'src/types/backend';
import {
  allBlogsQuery,
  blogPageQuery,
} from '../../../src/builder/page/blog/query';
import { SanityBlogPage } from '../../../src/builder/page/blog/query/interface';

const getPageData = cache(async (params: string) => {
  const data = await client.fetch<SanityBlogPage>(blogPageQuery, {
    slug: params,
  });

  return data;
});

export async function generateStaticParams() {
  const posts = await client.fetch<string[]>(allBlogsQuery);

  return posts.map((slug: string) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: IPageParams): Promise<Metadata> {
  const data = await getPageData(params.slug);

  return { title: data.title, description: data.description };
}

export default async function Blog({ params }: IPageParams) {
  const data = await getPageData(params.slug);
  return (
    <>
      <Hero
        title={data.title}
        description={data.description}
        buttons={{
          buttonLeft: { label: 'Go To Home Page', href: '/' },
          buttonRight: { label: 'Client Side Example', href: '/client-side' },
        }}
      />
      <div className="section-padding-primary">
        <Container>
          <div className="my-4">
            <CustomPortableText content={data.blogContent} />
          </div>
        </Container>
      </div>
    </>
  );
}
