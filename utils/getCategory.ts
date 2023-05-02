export const getCategory = (name: string) => {
  const products = require('../db/data/data.json');
  const category = products.filter((item: Product) => item.name === name)[0]
    ?.category;
  return category;
};
