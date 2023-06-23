import Product from '@/components/product/Product';
import CategoriesMenu from '@/components/CategoriesMenu';
import About from '@/components/About';
import getItem from '@/utils/getItem';
import { Metadata } from 'next';
import { getSlugs } from '@/utils/getProducts';
import { notFound } from 'next/navigation';

interface Params {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params }: Params): Metadata {
  const [item] = getItem(params.slug);
  const title = item?.name;
  const description = item?.description;

  return {
    title: `${title} | Audiophile`,
    description: description,
  };
}

const ProductPage = ({ params: { slug } }: Params) => {
  const slugList = getSlugs();
  if (!slugList.includes(slug)) {
    return notFound();
  } else {
    return (
      <main>
        <Product slug={slug} />
        <section className="px-6 pt-14 md:px-10">
          <CategoriesMenu />
        </section>
        <About />
      </main>
    );
  }
};

export default ProductPage;
