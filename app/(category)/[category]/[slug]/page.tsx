import Product from '@/components/product/Product';
import React from 'react';

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
