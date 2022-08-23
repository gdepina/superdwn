import React, { useContext } from 'react';
import { ActionIcon, Avatar, Badge, Grid, Text } from '@mantine/core';
import { IconMinus, IconPaperBag, IconPlus } from '@tabler/icons';
import PropTypes from 'prop-types';
import cartJss from './cart-jss';
import { CartContext } from '../components/Providers/CartProvider';

const Item = ({ item, itemQty }) => {
  const { classes } = cartJss();
  const { addItem, deleteItem } = useContext(CartContext);

  return (
    <Grid className={classes.itemContainer}>
      <Grid.Col span={2}>
        <Avatar className={classes.itemImg} width={43} height={43} radius="md" src={item.img}>
          {!item.img && <IconPaperBag />}
        </Avatar>
      </Grid.Col>
      <Grid.Col span={10}>
        <Text className={classes.itemTitle} size="sm" ml={10}>
          {item.name}
          <Badge size="sm" ml={5}>
            <span style={{ fontSize: 8 }}>x</span>
            <span style={{ fontSize: 11 }}>{itemQty}</span>
          </Badge>
        </Text>
        <div className={classes.buttonsQtyGroup}>
          <ActionIcon
            variant="light"
            size={18}
            color="green"
            className={classes.buttonQuantityPlus}
            onClick={() => addItem(item)}
          >
            <IconPlus />
          </ActionIcon>
          <ActionIcon
            variant="light"
            size={18}
            color="red"
            className={classes.buttonQuantityMinus}
            onClick={() => deleteItem(item)}
          >
            <IconMinus />
          </ActionIcon>
        </div>
      </Grid.Col>
    </Grid>
  );
};

Item.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
  itemQty: PropTypes.number.isRequired,
};

export default Item;
