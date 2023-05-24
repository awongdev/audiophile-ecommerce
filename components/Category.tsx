import Image from 'next/image';
import Link from 'next/link';
import getProducts from '@/utils/getProducts';
import Button from './ui/Button';

const Category = ({ category }: { category: string }) => {
  const products = getProducts(category);

  return (
    <>
      <section className="mb-[7.5rem] mt-16 flex justify-center px-6 sm:my-[7.5rem] sm:px-10 lg:my-40">
        <div className="flex w-full max-w-1110 flex-col-reverse items-center gap-[7.5rem] lg:gap-40">
          {products.map((product: Product) => {
            return (
              <div
                key={product.id}
                className="flex w-full flex-col items-center lg:flex-row lg:justify-between lg:gap-10 lg:even:flex-row-reverse"
              >
                <picture>
                  <source
                    media="(min-width: 64rem)"
                    srcSet={product.categoryImage.desktop.substring(1)}
                  />
                  <source
                    media="(min-width: 40rem)"
                    srcSet={product.categoryImage.tablet.substring(1)}
                  />
                  <Image
                    src={product.categoryImage.mobile.substring(1)}
                    alt={product.name}
                    width={540}
                    height={580}
                    className="mb-8 w-full rounded-lg object-cover sm:mb-14 lg:mb-0 lg:min-h-[36.25rem] lg:max-w-[33.75rem]"
                  />
                </picture>
                <div className="flex flex-col items-center gap-6 text-center sm:max-w-xl sm:gap-0 lg:max-w-md lg:items-start lg:text-left">
                  {product.new ? (
                    <p className="text-sm uppercase tracking-[10px] text-clr-orange-900 sm:mb-4">
                      New Product
                    </p>
                  ) : null}
                  <h2 className="max-w-sm text-[1.75rem] font-bold uppercase leading-[38.25px] tracking-[1px] sm:mb-8 sm:text-[2.5rem]">
                    {product.name}
                  </h2>
                  <p className="text-15px font-medium leading-[25px] opacity-50 sm:mb-6 lg:mb-10">
                    {product.description}
                  </p>
                  <Link href={`/${product.category}/${product.slug}`}>
                    <Button colors="orange">SEE PRODUCT</Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Category;
