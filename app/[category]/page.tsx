import Header from '@/components/ui/Header';
import Category from '@/components/Category';
import { Metadata } from 'next';
import CategoriesMenu from '@/components/CategoriesMenu';
import About from '@/components/About';
import { notFound } from 'next/navigation';
import { getCategoryList } from '@/utils/getCategory';

interface Params {
  params: {
    category: string;
  };
}

export function generateMetadata({ params }: Params): Metadata {
  return {
    title: `${
      params.category.charAt(0).toUpperCase() + params.category.slice(1)
    } | Audiophile`,

    description:
      'Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories.',
  };
}

const CategoryPage = ({ params: { category } }: Params) => {
  const categoryArray = getCategoryList();
  if (!categoryArray.includes(category)) {
    return notFound();
  } else {
    return (
      <main>
        <Header category={category} />
        <Category category={category} />
        <section className="px-6 pt-14 md:px-10">
          <CategoriesMenu />
        </section>
        <About />
      </main>
    );
  }
};

export default CategoryPage;
