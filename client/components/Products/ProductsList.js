import React from 'react';
import { SimpleGrid } from '@mantine/core';
import Card from './ProductCard';
import PRODUCTS from './ProductData';

const ProductList = () => {
  const productList = PRODUCTS.map((product) => <Card product={product} />);
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
