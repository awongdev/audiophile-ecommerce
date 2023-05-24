import Product from '@/components/product/Product';
import { Metadata } from 'next';
import getItem from '@/utils/getItem';

interface Params {
  params: {
    slug: string;
  };
}

interface MetadataProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const [item] = await getItem(params.slug);
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
