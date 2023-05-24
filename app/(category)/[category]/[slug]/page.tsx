import Product from '@/components/product/Product';
import getItem from '@/utils/getItem';
import { Metadata } from 'next';

interface Params {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params }: Params): Metadata {
  const [item] = getItem(params.slug);
  const title = item.name;
  const description = item.description;

  return {
    title: title,
    description: description,
  };
}

const ProductPage = ({ params: { slug } }: Params) => {
  return (
    <>
      <Product slug={slug} />
    </>
  );
};

export default ProductPage;
