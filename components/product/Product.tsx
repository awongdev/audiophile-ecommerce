import useFetchItem from '@/utils/useFetchItem';
import Features from './Features';
import Includes from './Includes';
import Gallery from './Gallery';
import Recommend from './Recommend';
import Description from './Description';

const Product = ({ slug }: { slug: string }) => {
  const [item] = useFetchItem(slug);

  return (
    <section>
      <div className="flex justify-center">
        <div className="mx-6 max-w-1110 md:mx-10">
          <button className="mb-6 mt-4 text-15px font-medium opacity-50 md:mt-8 lg:mb-14 lg:mt-20">
            Go Back
          </button>
          <div className="mb-[5.5rem] flex flex-col gap-[5.5rem] md:mb-[7.5rem] md:gap-[7.5rem] lg:mb-40 lg:gap-40">
            <Description item={item} />
            <div className="flex flex-col gap-[5.5rem] md:gap-[7.5rem] lg:flex-row lg:gap-32">
              <Features features={item.features} />
              <Includes includes={item.includes} />
            </div>
          </div>
          <Gallery gallery={item.gallery} name={item.name} />
          <Recommend others={item.others} />
        </div>
      </div>
    </section>
  );
};

export default Product;
