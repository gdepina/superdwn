import React from 'react';
import { Text, Button } from '@mantine/core';
import PropTypes from 'prop-types';
import styles from './CardDetail-jss';

const CardDetail = ({ product }) => {
  const { classes } = styles();
  return (
    <div className={classes.wrapper}>
      <div>
        <Text className={classes.title}>{product.name}</Text>
        <Text className={classes.category}>Categoria: {product.category}</Text>
        <Text className={classes.description}>Detalle: {product.desc}</Text>
        <Text className={classes.stock}>Stock: {product.stock} u.</Text>
        <Text className={classes.price}>Precio: ${product.price}</Text>
      </div>
      <Button className={classes.button}>Agregar al carrito</Button>
    </div>
  );
};
CardDetail.propTypes = {
  product: PropTypes.shape({
    img: PropTypes.string,
    _id: PropTypes.string,
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discount_percentage: PropTypes.number,
    discount_price_fixed: PropTypes.number,
    stock: PropTypes.number.isRequired,
    __v: PropTypes.number,
  }).isRequired,
};
export default CardDetail;
