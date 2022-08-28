import React, { useEffect, useState } from 'react';
import { SimpleGrid } from '@mantine/core';
import { useSearchParams } from 'react-router-dom';
import Card from './ProductCard';
import { fetchProducts } from '../../apis/product-api';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    fetchProducts(searchParams.get('name'))
      .then((result) => {
        setProducts(result);
      })
      .catch((err) => err);
  }, [searchParams]);

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
