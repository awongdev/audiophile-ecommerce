import Header from '@/components/ui/Header';
import Category from '@/components/Category';
import { Metadata } from 'next';

interface Params {
  params: {
    category: string;
  };
}

export function generateMetadata({ params }: Params): Metadata {
  return {
    title: params.category.charAt(0).toUpperCase() + params.category.slice(1),
  };
}

const CategoryPage = ({ params: { category } }: Params) => {
  return (
    <>
      <Header category={category} />
      <Category category={category} />
    </>
  );
};

export default CategoryPage;
