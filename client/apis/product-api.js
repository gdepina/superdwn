const fetchProducts = () =>
  fetch('/api/products', {
    method: 'GET',
  })
    .then((response) => response.json())
    // eslint-disable-next-line no-console
    .catch((err) => console.log(err));

const fetchProductDetail = async (id) => {
  const response = await fetch(`/api/products/${id}`, { method: 'GET' });
  const productDetail = await response.json();
  // eslint-disable-next-line max-len
  productDetail.priceFixed = Math.trunc(productDetail.price - (productDetail.price * productDetail.discount_percentage) / 100);
  return productDetail;
};

export { fetchProducts, fetchProductDetail };
