import About from '@/components/About';
import Header from '@/components/ui/Header';
import Category from '@/components/Category';
import CategoriesMenu from '@/components/CategoriesMenu';

interface Params {
  params: {
    category: string;
  };
}

const page = ({ params: { category } }: Params) => {
  return (
    <>
      <Header category={category} />
      <main>
        <Category category={category} />
        <section className="px-6 pt-10 md:px-10">
          <CategoriesMenu />
        </section>
        <About />
      </main>
    </>
  );
};

export default page;
