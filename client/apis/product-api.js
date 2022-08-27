const fetchProducts = () =>
  fetch('/api/products', {
    method: 'GET',
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

const fetchProductDetail = async (id) => {
  const response = await fetch(`/api/products/${id}`, { method: 'GET' });
  const productDetail = await response.json();
  return productDetail;
};

export { fetchProducts, fetchProductDetail };
