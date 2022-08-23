import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, Image, Text, Group, Badge, Button } from '@mantine/core';
import useStyles from './ProductsCard-jss';

const ProductCard = ({ product }) => {
  const { classes } = useStyles();
  return (
    <Card component={Link} to={`/products/${product._id}`} withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image
          width={378}
          height={171}
          className={classes.imageConfig}
          withPlaceholder
          src={product.img}
          alt="product image"
        />
      </Card.Section>

      <Group position="apart">
        <div className={classes.titleContainer}>
          <Text size="lg" weight={500}>
            {product.name}
          </Text>
          <Text className={classes.productDesc} lineClamp={1} color="dimmed">
            {product.desc}
          </Text>
        </div>
      </Group>
      <Card.Section className={classes.section}>
        <Group spacing={30}>
          <div className={classes.priceContainer}>
            {product.discount_percentage ? (
              <div>
                <Text style={{ display: 'inline' }} size="xl" weight={700} sx={{ lineHeight: 1 }}>
                  ${product.priceFixed}
                </Text>
                <Text className={classes.strikeStrought}>${product.price}</Text>
              </div>
            ) : (
              <Text size="xl" weight={700} sx={{ lineHeight: 1 }}>
                ${product.price}
              </Text>
            )}
            {product.discount_percentage ? <Badge variant="outline">{product.discount_percentage}% off</Badge> : null}
          </div>

          <Button className={classes.button} radius="xl">
            Agregar al carrito
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
};
ProductCard.propTypes = {
  product: PropTypes.shape({
    img: PropTypes.string,
    _id: PropTypes.string,
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    priceFixed: PropTypes.number.isRequired,
    discount_percentage: PropTypes.number,
    discount_price_fixed: PropTypes.number,
    stock: PropTypes.number.isRequired,
    __v: PropTypes.number,
  }).isRequired,
};

export default ProductCard;
