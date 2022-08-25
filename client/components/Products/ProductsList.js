import React, { useEffect, useState } from 'react';
import { SimpleGrid } from '@mantine/core';
import Card from './ProductCard';
import { fetchProducts } from '../../apis/product-api';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts()
      .then((result) => {
        setProducts(result);
      })
      /* eslint-disable no-console */
      .catch((err) => console.log(err));
  }, []);

  const productList = products.map((product) => <Card key={product._id} product={product} />);
  return (
    <SimpleGrid
      cols={3}
      breakpoints={[
        { minWidth: 'sm', cols: 1 },
        { minWidth: 'md', cols: 3 },
        { minWidth: 1200, cols: 4 },
      ]}
    >
      {productList}
    </SimpleGrid>
  );
};

export default ProductList;
