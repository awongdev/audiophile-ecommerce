import Product from '@/components/product/Product';

interface Params {
  params: {
    slug: string;
  };
}

const page = ({ params: { slug } }: Params) => {
  return (
    <>
      <Product slug={slug} />
    </>
  );
};

export default page;
