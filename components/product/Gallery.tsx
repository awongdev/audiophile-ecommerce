import Image from 'next/image';

interface GalleryT {
  gallery: {
    [key: string]: {
      desktop: string;
      tablet: string;
      mobile: string;
    };
  };
  name: string;
}

const Gallery = ({ gallery, name }: GalleryT) => {
  return (
    <div className="grid gap-5 sm:grid-cols-[minmax(40%,27.813rem)_minmax(55%,39.688rem)] lg:gap-x-[1.875rem] lg:gap-y-8 sm:[&>*:nth-child(2)]:order-3">
      {Object.keys(gallery).map((key) => {
        return (
          <picture key={key} className="last:row-span-2">
            <source
              srcSet={gallery[key].desktop.substring(1)}
              media="(min-width: 64rem)"
            />
            <source
              srcSet={gallery[key].tablet.substring(1)}
              media="(min-width: 40rem)"
            />
            <Image
              priority
              src={gallery[key].mobile.substring(1)}
              width={635}
              height={592}
              alt={name}
              className="h-full w-full rounded-lg"
            />
          </picture>
        );
      })}
    </div>
  );
};

export default Gallery;
