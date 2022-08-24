import React, { useContext, useState } from 'react';
import { Badge, Button, Divider, Drawer, NavLink, ScrollArea, Text } from '@mantine/core';
import { IconShoppingCart } from '@tabler/icons';
import cartJss from './cart-jss';
import { CartContext } from '../components/Providers/CartProvider';
import Item from './Item';

const Cart = () => {
  const { parsedCart, totalCart } = useContext(CartContext);
  const { classes } = cartJss();
  const [opened, setOpened] = useState(false);

  const cartItems = parsedCart.map((cartItem) => (
    <div className={classes.cartItem} key={cartItem.item._id}>
      <Item item={cartItem.item} itemQty={cartItem.count} subTotal={cartItem.subTotal} />
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
        <ScrollArea style={{ height: '86%' }}>
          {cartItems.length < 1 ? <Text size="xs">Nada por aqui...</Text> : cartItems}
        </ScrollArea>

        <Divider my="sm" variant="dashed" />

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Badge size="lg" variant="light" color="gray">
            {` ${totalCart.count} Productos`}
          </Badge>
          <Badge size="lg" variant="light" color="gray">
            ${totalCart.price}
          </Badge>
        </div>

        <Button className={classes.confirmPurchaseButton} color="green" size="xs" uppercase fullWidth>
          Realizar Pedido
        </Button>
      </Drawer>

      <NavLink
        label="Carrito"
        className={classes.navLink}
        onClick={() => setOpened(true)}
        icon={
          totalCart.count ? (
            <div className={classes.iconBadgeContainer}>
              <IconShoppingCart className={classes.iconBadgeIcon} />
              <div className={classes.iconBadge}>{totalCart.count}</div>
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
