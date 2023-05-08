export const getCategory = (slug: string) => {
  const products = require('../db/data/data.json');
  const category = products.filter((item: Product) => item.slug === slug)[0]
    ?.category;
  return category;
};
