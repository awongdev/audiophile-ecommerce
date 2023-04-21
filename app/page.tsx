import Hero from './Hero';
import Categories from '@/components/Categories';
import ProductsDisplay from '@/components/ProductsDisplay';

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="mx-6 mb-[7.5rem] mt-24 md:mx-10 md:mb-24 md:mt-36 lg:mb-40 lg:mt-32">
        <Categories />
      </section>
      <ProductsDisplay />
    </main>
  );
}
