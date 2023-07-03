/*
  In order to portable text we call PortableText component and pass our api array as value
  and our component rendering instructions as components prop.

  <PortableText
    value={PortableTextSample}
    components={myPortableTextComponents}
  />

    Relevant links:
    https://portabletext.github.io/types/ (types)
    https://www.npmjs.com/package/@portabletext/react (components)
    https://www.npmjs.com/package/@portabletext/react

*/
import React from 'react';
import clsx from 'clsx';
import CustomPortableText from '.';
import { PortableTextComponents } from '@portabletext/react';
import { extractSanityLinkGlobal } from 'src/utils/extract-sanity-link';
import { CustomImage } from '@components/custom-image';
import { generateImageUrl } from 'src/backend/generate-image';
import { ISanityRequiredLink } from 'src/backend/queries/link/interface';
import {
  ISanityCustomImage,
  ISanityCustomVideo,
} from 'src/backend/queries/media/interface';
import { ISanityBlockquote } from 'src/backend/queries/portable-text/interface/blockquote';
import { ISanityCode } from 'src/backend/queries/portable-text/interface/code';
import Styles from './custom-portable-text.module.scss';
import Link from 'next/link';
import { generatePortableTextAnchor } from 'src/utils/generate-portabletext-anchor';
import dynamic from 'next/dynamic';
import LoaderSection from '@sections/loader';
const CodeElement = dynamic(() => import('./sub-components/code'), {
  loading: () => <LoaderSection level={'section'} />,
});
/**
 * Tailwind Classes
 */

const headingLevel1 = clsx(
  'font-medium leading-[1.1] md:leading-[1.2]',
  Styles['heading-one']
);
const headingLevel2 = clsx(
  'font-medium leading-[1.1] md:leading-[1.2]',
  Styles['heading-two']
);
const headingLevel3 = clsx(
  'font-normal leading-[1.3] md:leading-[1.2]',
  Styles['heading-three']
);

const blockquoteClasses = clsx(
  'overflow-hidden p-6 md:p-8 lg:p-10 xl:p-12',
  Styles['blockquote']
);

/**
 * This function will return true if a block contains one child
 * with an empty string.
 *
 * This function is used to render <br/> tags.
 * @method isEmptyBlock
 * @param {React.ReactNode} children
 * @returns boolean
 */
const isEmptyBlock = (children: React.ReactNode) => {
  return React.Children.count(children) == 1 && children?.toString() == '';
};

export const CustomComponents: PortableTextComponents = {
  /**
   * Blocks are top level objects in a portable text array. We look at the
   * style attribute.
   */
  block: {
    headingOne: ({ children, value }) => {
      if (isEmptyBlock(children)) {
        return <br />;
      } else {
        /**
         * headingId is used as anchor target in Table of Contents of Rich Text Section
         * Previously used value._key as a slug was not SEO friendly
         */
        const headingOneId = generatePortableTextAnchor(
          value.children[0].text.toString()
        );
        return (
          <h2 className={headingLevel1} id={headingOneId}>
            {children}
          </h2>
        );
      }
    },
    headingTwo: ({ children, value: { _key } }) => {
      if (isEmptyBlock(children)) {
        return <br />;
      }
      return (
        <h2 className={headingLevel2} id={_key}>
          {children}
        </h2>
      );
    },
    headingThree: ({ children, value: { _key } }) => {
      if (isEmptyBlock(children)) {
        return <br />;
      }
      return (
        <h3 className={headingLevel3} id={_key}>
          {children}
        </h3>
      );
    },
    normal: ({ children, value }) => {
      if (isEmptyBlock(children)) {
        return <br />;
      } else {
        return (
          <p className={Styles['normal']} id={value._key}>
            {children}
          </p>
        );
      }
    },
  },
  /**
   * Marks are inline stylings (bold, emphasis, italic) for text and links.
   */
  marks: {
    /**
     * GraphQL codegen does not generate types for PortableText. So this has to
     * be handled and maintain by someone who is familiar with the sanity codebase.
     */
    link: ({ children, value }) => {
      const sanityLink: ISanityRequiredLink = value;
      const link = extractSanityLinkGlobal(sanityLink);

      const linkClasses = clsx('underline text-secondary');

      return (
        <Link
          className={linkClasses}
          href={link}
          target={'_blank'}
          rel={link.startsWith('/') ? 'noreferrer noopener' : undefined}
        >
          {children}
        </Link>
      );
    },
    textColorOne: ({ children }) => {
      return <span className={Styles['text-color-one']}>{children}</span>;
    },
    textColorTwo: ({ children }) => {
      return <span className={Styles['text-color-two']}>{children}</span>;
    },
    textColorThree: ({ children }) => {
      return <span className={Styles['text-color-three']}>{children}</span>;
    },
    highlighColorOne: ({ children }) => {
      return <span className="bg-success">{children}</span>;
    },
  },
  list: {
    bullet: ({ children, value: { level } }) => {
      const listStyleClasses = ['list-[square]', 'list-disc', 'list-[circle]'];

      const bulletListClasses = clsx(
        'ml-6 md:ml-7 xl:ml-8 list-outside',
        Styles['list'],
        [listStyleClasses[level % listStyleClasses.length]]
      );

      return <ul className={bulletListClasses}>{children}</ul>;
    },
    number: ({ children, value: { level } }) => {
      const listStyleClasses = [
        'list-[lower-roman]',
        'list-decimal',
        'list-[lower-alpha]',
      ];

      const numberListClasses = clsx(
        'ml-6 md:ml-7 xl:ml-8 list-outside',
        Styles['list'],
        [listStyleClasses[level % listStyleClasses.length]]
      );

      return <ol className={numberListClasses}>{children}</ol>;
    },
  },
  listItem: {
    bullet: ({ children }) => (
      <li className={Styles['list-item']}>{children}</li>
    ),
    number: ({ children }) => (
      <li className={Styles['list-item']}>{children}</li>
    ),
  },
  /**
   * Custom blocks in rich text.
   */
  types: {
    customImageSchema: ({ value }) => {
      const blockImage: ISanityCustomImage = value;

      const image = generateImageUrl(blockImage);

      return (
        <figure>
          <CustomImage
            height={image.height}
            width={image.width}
            src={image.src}
            alt={image.alt}
            lqip={image.lqip}
          />
        </figure>
      );
    },
    customVideoSchema: ({ value }) => {
      const blockVideo: ISanityCustomVideo = value;

      return (
        <iframe
          className="aspect-video w-full max-w-full"
          src={blockVideo.videoUrl}
          allow={
            'accelerometer; encrypted-media; gyroscope; picture-in-picture;'
          }
        />
      );
    },
    blockquote: ({ value }) => {
      const blockquote: ISanityBlockquote = value;

      return (
        <div className={blockquoteClasses}>
          <CustomPortableText content={blockquote.content} />
        </div>
      );
    },
    code: ({ value }) => {
      const code: ISanityCode = value;
      return <CodeElement code={code} />;
    },
  },
};
