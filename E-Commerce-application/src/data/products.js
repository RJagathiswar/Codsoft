
const products = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Eco Product ${i + 1}`,
  price: 300 + i * 50,
  image: `/images/product${i + 1}.jpg`
}));
export default products;
