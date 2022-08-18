import React from 'react';
import { Grid, Image } from '@mantine/core';
import PRODUCTS from '../ProductData';
import CardDetail from './CardDetail';

const product = PRODUCTS[2];
const ProductDetail = () => (
  <Grid gutter="md" py="10vh">
    <Grid.Col span={8}>
      <div style={{ height: '70vh' }}>
        <Image radius="md" src={product.img} alt={product.name} />
      </div>
    </Grid.Col>
    <Grid.Col span={4}>
      <CardDetail product={product} />
    </Grid.Col>
  </Grid>
);

export default ProductDetail;
