const fetchProducts = () =>
  fetch('/api/products', {
    method: 'GET',
  })
    .then((response) => response.json())
    // eslint-disable-next-line no-console
    .catch((err) => console.log(err));

const fetchProductDetail = async (id) => {
  // ya se que falta manejar los errores pero estaria bueno q lo haga otro
  // habria que mejorar la api para que devuelva CODE en las diferentes respuestas
  // idea: podriamos armar un hook useFetch?
  const response = await fetch(`/api/products/${id}`, { method: 'GET' });
  const productDetail = await response.json();
  return productDetail;
};

export { fetchProducts, fetchProductDetail };
