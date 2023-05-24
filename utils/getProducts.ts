export default function getProducts(category: string) {
  const products = require('../db/data/data.json');
  const filteredProducts = products.filter(
    (product: Product) => product.category === category,
  );
  return filteredProducts;
}
