export default function getItem(slug: string) {
  const products = require('../db/data/data.json');
  const product = products.filter((product: Product) => product.slug === slug);
  return product;
}
