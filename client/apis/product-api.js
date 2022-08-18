const fetchProducts = () =>
  fetch('/api/products', {
    method: 'GET',
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

/* const fetchProductDetail = (id) => fetch(`/api/products/${id}`, {
  method: 'GET',
})
  .then((response) => response.json())
  .catch((err) => console.log(err)); */
// eslint-disable-next-line import/prefer-default-export
export { fetchProducts };
