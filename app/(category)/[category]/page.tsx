import Header from '@/components/ui/Header';
import Category from '@/components/Category';

interface Params {
  params: {
    category: string;
  };
}

const page = ({ params: { category } }: Params) => {
  return (
    <>
      <Header category={category} />
      <Category category={category} />
    </>
  );
};

export default page;
