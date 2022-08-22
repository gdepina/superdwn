import React, { useContext, useState } from 'react';
import { Button, Drawer, NavLink, ScrollArea, Text } from '@mantine/core';
import { IconShoppingCart } from '@tabler/icons';
import { map } from 'lodash';
import cartJss from './cart-jss';
import { CartContext } from '../components/Providers/CartProvider';
import Item from './Item';

const Cart = () => {
  const { cart, parsedCart } = useContext(CartContext);
  const { classes } = cartJss();
  const [opened, setOpened] = useState(false);
  const [id, setId] = useState(null);

  const cartItems = map(parsedCart(), (items) => (
    <div
      className={classes.cartItem}
      key={items[0]._id}
      onMouseEnter={() => setId(items[0]._id)}
      onMouseLeave={() => setId(null)}
    >
      <Item buttonsQuantity={id === items[0]._id} items={items} />
    </div>
  ));

  return (
    <div>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Carrito de compras"
        position="right"
        padding="xl"
        size="md"
      >
        <ScrollArea style={{ height: '88%' }}>
          {cartItems.length < 1 ? <Text size="xs">Nada por aqui...</Text> : cartItems}
        </ScrollArea>

        <Button color="green" size="xs" uppercase fullWidth>
          Realizar Pedido
        </Button>
      </Drawer>

      <NavLink
        label="Carrito"
        className={classes.navLink}
        onClick={() => setOpened(true)}
        icon={
          cart.count ? (
            <div className={classes.iconBadgeContainer}>
              <IconShoppingCart className={classes.iconBadgeIcon} />
              <div className={classes.iconBadge}>{cart.count}</div>
            </div>
          ) : (
            <IconShoppingCart />
          )
        }
      />
    </div>
  );
};

export default Cart;
