import Link from 'next/link';
import Image from 'next/image';
import Button from '../ui/Button';
import { getCategory } from '@/utils/getCategory';

interface Other {
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

const Recommend = ({ others }: { others: Other[] }) => {
  return (
    <div className="my-[7.5rem] lg:my-40">
      <h2 className="mb-10 text-center text-2xl font-bold uppercase md:mb-8 md:text-[2rem]">
        You May Also Like
      </h2>
      <div className="flex flex-col gap-14 sm:flex-row sm:gap-3 lg:gap-[1.875rem]">
        {others.map((other: Other) => {
          return (
            <div key={other.slug} className="flex flex-col items-center gap-8">
              <picture>
                <source
                  srcSet={other.image.desktop.substring(1)}
                  media="(min-width: 64rem)"
                />
                <source
                  srcSet={other.image.tablet.substring(1)}
                  media="(min-width: 40rem)"
                />
                <Image
                  priority
                  src={other.image.mobile.substring(1)}
                  alt={other.name}
                  width={600}
                  height={318}
                  className="rounded-lg sm:mb-2"
                />
              </picture>
              <h3 className="text-2xl font-bold tracking-[1.71px]">
                {other.name}
              </h3>
              <Link href={`/${getCategory(other.slug)}/${other.slug}`}>
                <Button colors="orange">See Product</Button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recommend;
