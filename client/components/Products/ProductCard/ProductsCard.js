import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Badge, Button, Card, Group, Image, Text } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { IconCheck } from '@tabler/icons';
import useStyles from './ProductsCard-jss';
import { CartContext } from '../../Providers/CartProvider';

const ProductCard = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const { classes } = useStyles();

  const addItemButtonHandler = (e, prod) => {
    e.preventDefault();
    addItem(prod);
    showNotification({
      title: `${prod.name} se agrego con exito al carrito!`,
      icon: <IconCheck />,
      autoClose: 3000,
    });
  };

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

          <Button className={classes.button} radius="xl" onClick={(e) => addItemButtonHandler(e, product)}>
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
