export const getCategory = (slug: string) => {
  const products = require('../db/data/data.json');
  const category = products.filter((item: Product) => item.slug === slug)[0]
    ?.category;
  return category;
};

export const getCategories = () => {
  const products = require('../db/data/data.json');
  const categories = products.map((item: Product) => item.category);
  const uniqueCategories = categories.filter(
    (item: string, index: number) => categories.indexOf(item) === index,
  );
  return uniqueCategories;
};
