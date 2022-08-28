import React, { useState, useEffect } from 'react';
import { Grid, Image } from '@mantine/core';
import { useParams } from 'react-router-dom';
import CardDetail from './CardDetail';
import { fetchProductDetail } from '../../../apis/product-api';

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  useEffect(() => {
    fetchProductDetail(params.id).then((response) => setProduct(response));
  }, [params.id]);
  return (
    <Grid gutter="md" py="10vh">
      <Grid.Col span={8}>
        <Image withPlaceholder width={1040} height={450} radius="md" src={product.img} alt={product.name} />
      </Grid.Col>
      <Grid.Col span={4}>
        <CardDetail product={product} />
      </Grid.Col>
    </Grid>
  );
};

export default ProductDetail;
