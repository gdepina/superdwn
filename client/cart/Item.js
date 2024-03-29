import React, { useContext } from 'react';
import { ActionIcon, Avatar, Badge, Grid, Text } from '@mantine/core';
import { IconMinus, IconPaperBag, IconPlus } from '@tabler/icons';
import PropTypes from 'prop-types';
import cartJss from './cart-jss';
import { CartContext } from '../components/Providers/CartProvider';

const Item = ({ item, itemQty, subTotal }) => {
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
        <Text lineClamp={1} size="md" ml={10}>
          {item.name}
        </Text>
        <div className={classes.buttonsQtyGroup}>
          <Badge size="sm" variant="light" color="gray" ml={10}>
            <span style={{ fontSize: 10 }}>x</span>
            <span style={{ fontSize: 12 }}>{itemQty}</span>
          </Badge>
          <ActionIcon
            variant="light"
            size={18}
            color="green"
            className={classes.buttonQuantity}
            onClick={() => addItem(item)}
          >
            <IconPlus />
          </ActionIcon>
          <ActionIcon
            variant="light"
            size={18}
            color="red"
            className={classes.buttonQuantity}
            onClick={() => deleteItem(item)}
          >
            <IconMinus />
          </ActionIcon>
          <Badge size="sm" variant="light" color="gray" ml={5}>
            <span style={{ fontSize: 12 }}>{`$${subTotal}`}</span>
          </Badge>
        </div>
      </Grid.Col>
    </Grid>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    img: PropTypes.string,
    discount_percentage: PropTypes.number,
    discount_price_fixed: PropTypes.number,
    priceFixed: PropTypes.number,
    __v: PropTypes.number,
  }).isRequired,
  itemQty: PropTypes.number.isRequired,
  subTotal: PropTypes.number.isRequired,
};

export default Item;
