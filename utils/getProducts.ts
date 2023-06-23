export default function getProducts(category: string) {
  const products = require('../db/data/data.json');
  const filteredProducts = products.filter(
    (product: Product) => product.category === category,
  );
  return filteredProducts;
}

export const getSlugs = () => {
  const products = require('../db/data/data.json');
  const slugsList = products.map((item: Product) => item.slug);
  return slugsList;
};
