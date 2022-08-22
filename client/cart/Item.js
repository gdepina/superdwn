import React, { useContext } from 'react';
import { ActionIcon, Avatar, Grid, Text } from '@mantine/core';
import { IconMinus, IconPaperBag, IconPlus } from '@tabler/icons';
import PropTypes from 'prop-types';
import cartJss from './cart-jss';
import { CartContext } from '../components/Providers/CartProvider';

const Item = ({ items, buttonsQuantity }) => {
  const { classes } = cartJss();
  const { addItem, deleteItem } = useContext(CartContext);

  return (
    <Grid>
      <Grid.Col span={2}>
        <Avatar width={43} height={43} radius="md" src={items[0].img}>
          {!items[0].img && <IconPaperBag />}
        </Avatar>
      </Grid.Col>
      <Grid.Col span={10}>
        <Text size="xs" ml={10}>
          {items[0].name}x{items.length}
        </Text>
        <div className={buttonsQuantity ? classes.buttonVisible : classes.buttonHidden}>
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
  );
};

Item.propTypes = {
  items: PropTypes.arrayOf.isRequired,
  buttonsQuantity: PropTypes.bool.isRequired,
};

export default Item;
