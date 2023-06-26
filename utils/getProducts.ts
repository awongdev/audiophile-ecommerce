export function getCategoryProducts(category: string) {
  const products = require('../db/data/data.json');
  const filteredProducts = products.filter(
    (product: Product) => product.category === category,
  );
  return filteredProducts;
}

export const getSlugList = () => {
  const products = require('../db/data/data.json');
  const slugsArr = products.map((item: Product) => item.slug);
  return slugsArr;
};

export function getItem(slug: string) {
  const products = require('../db/data/data.json');
  const product = products.filter((product: Product) => product.slug === slug);
  return product;
}
