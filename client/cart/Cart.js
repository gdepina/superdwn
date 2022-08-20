import React, { useContext, useState } from 'react';
import { ActionIcon, Avatar, Button, Drawer, Grid, NavLink, ScrollArea, Text } from '@mantine/core';
import { IconMinus, IconPaperBag, IconPlus, IconShoppingCart } from '@tabler/icons';
import { map } from 'lodash';
import cartJss from './cart-jss';
import { CartContext } from '../components/Providers/CartProvider';

const Cart = () => {
  const { classes } = cartJss();
  const { cart, parsedCart, addItem, deleteItem } = useContext(CartContext);
  const [opened, setOpened] = useState(false);
  const [id, setId] = useState(null);

  const cartItems = map(parsedCart(), (items) => (
    <div
      className={classes.cartItem}
      key={items[0]._id}
      onMouseEnter={() => setId(items[0]._id)}
      onMouseLeave={() => setId(null)}
    >
      <Grid>
        <Grid.Col span={2}>
          <Avatar width={43} height={43} radius="md" src={items[0].img}>
            {!items[0].img && <IconPaperBag />}
          </Avatar>
        </Grid.Col>
        <Grid.Col span={10}>
          <Text size="xs" ml={10}>
            {items[0].name} x{items.length}
          </Text>
          <div className={id !== items[0]._id ? classes.buttonHidden : classes.buttonVisible}>
            <ActionIcon
              variant="filled"
              size={14}
              color="green"
              className={classes.buttonQuantityPlus}
              onClick={() => addItem(items[0])}
            >
              <IconPlus size={12} />
            </ActionIcon>
            <ActionIcon
              variant="filled"
              size={14}
              color="red"
              className={classes.buttonQuantityMinus}
              onClick={() => deleteItem(items[0])}
            >
              <IconMinus size={12} />
            </ActionIcon>
          </div>
        </Grid.Col>
      </Grid>
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
