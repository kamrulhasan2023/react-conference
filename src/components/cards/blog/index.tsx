import CardWrapper from '../wrapper';
import { BLOG_IMAGE_DIMENSION, IBlogCard } from './interface';
import Tag from '@components/tag';
import { tagColors } from '@components/tag/interface';
import { CustomImage } from '@components/custom-image';
import CustomLink from '@components/custom-link';

export default function BlogCard({
  href,
  image,
  title,
  description,
  isFeatured,
  tags,
}: IBlogCard) {
  return (
    <CardWrapper cardBorderRadius="radius-one" cardShadow="shadow-one">
      <CustomLink href={href} className="block h-full" isOpenNewTab={false}>
        <div className="group/card relative h-full bg-success/[.2]">
          <div className="relative">
            {isFeatured && (
              <div className="absolute bottom-0 left-6 z-1 translate-y-1/2">
                <Tag label="Featured" color="bg-danger" />
              </div>
            )}
            <div className="overflow-hidden">
              <CustomImage
                className={
                  'transition-transform ease-in-out group-hover/card:scale-110'
                }
                src={image.src}
                alt={image.alt}
                lqip={image.lqip}
                width={BLOG_IMAGE_DIMENSION.width}
                height={BLOG_IMAGE_DIMENSION.height}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-3 p-5 pt-8">
            <h3 className="line-clamp-2 flex-1 text-lg font-bold">{title}</h3>
            <p className="line-clamp-3">{description}</p>
            <div>
              <div className="mt-4 flex items-center gap-2">
                {tags.map((tag, index) => (
                  <Tag
                    label={tag.title}
                    key={index}
                    color={tagColors[index % tagColors.length]}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </CustomLink>
    </CardWrapper>
  );
}
