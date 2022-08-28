const fetchProducts = (name) => {
  let url = '/api/products/';
  if (name) {
    url = `/api/products?name=${name}`;
  }
  return fetch(url, {
    method: 'GET',
  })
    .then((response) => response.json())
    .catch((err) => console.log(err))
    .then((data) => {
      const newData = data.map((product) => {
        // eslint-disable-next-line max-len, no-param-reassign
        product.priceFixed = Math.trunc(product.price - (product.price * product.discount_percentage) / 100);
        return product;
      });
      return newData;
    });
};
const fetchProductDetail = (id) =>
  fetch(`/api/products/${id}`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .catch((err) => err)
    .then((data) => {
      // eslint-disable-next-line no-param-reassign
      data.priceFixed = Math.trunc(data.price - (data.price * data.discount_percentage) / 100);
      return data;
    });
// eslint-disable-next-line import/prefer-default-export
export { fetchProducts, fetchProductDetail };
