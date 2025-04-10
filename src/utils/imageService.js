// Image service for electronics products
const electronicsImageMap = {
  laptops: id => `https://picsum.photos/seed/laptop-${id}/300/200`,
  mobiles: id => `https://picsum.photos/seed/smartphone-${id}/300/200`,
  'gaming-pads': id => `https://picsum.photos/seed/gaming-${id}/300/200`,
  headphones: id => `https://picsum.photos/seed/headphones-${id}/300/200`,
  electronics: id => `https://picsum.photos/seed/device-${id}/300/200`
};

export const getProductImage = (product = {}) => {
  const category = (product.category || 'electronics').toLowerCase();
  const imageGenerator = electronicsImageMap[category] || electronicsImageMap.electronics;
  return imageGenerator(product.id || Math.random());
};

export const enhanceProductData = (products = []) => {
  return products.map(product => ({
    category: 'electronics',
    title: 'New Product',
    price: 0.00,
    ...product,
    image: getProductImage(product)
  }));
};
