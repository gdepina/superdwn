const fetchProducts = () =>
  fetch('/api/products', {
    method: 'GET',
  })
    .then((response) => response.json())
    .catch((err) => err)
    .then((data) => {
      const newData = data.map((product) => {
        const { price, discount_percentage: discount } = product;
        const priceFixed = Math.trunc(price - (price * discount) / 100);
        return { ...product, priceFixed };
      });
      return newData;
    });

const fetchProductDetail = async (id) => {
  const response = await fetch(`/api/products/${id}`, { method: 'GET' });
  const productDetail = await response.json();
  return productDetail;
};

export { fetchProducts, fetchProductDetail };
