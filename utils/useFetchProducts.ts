export default function getProducts(category: string) {
  const products = require('../public/data/data.json');
  const filteredProducts = products.filter(
    (product: { category: string }) => product.category === category,
  );
  console.log(filteredProducts);
  return filteredProducts;
}
