export default function useFetchItem(slug: string) {
  const products = require('../db/data/data.json');
  const product = products.filter((product: Product) => product.slug === slug);
  return product;
}
