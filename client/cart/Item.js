import React, { useContext } from 'react';
import { ActionIcon, Avatar, Badge, Grid, Text } from '@mantine/core';
import { IconMinus, IconPaperBag, IconPlus } from '@tabler/icons';
import PropTypes from 'prop-types';
import cartJss from './cart-jss';
import { CartContext } from '../components/Providers/CartProvider';

const Item = ({ item, itemQty, buttonsQty }) => {
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
        <Text size="sm" ml={10}>
          {item.name}
          <Badge size="sm" ml={5} px={5}>
            {itemQty}
          </Badge>
        </Text>
        <div className={buttonsQty ? classes.buttonVisible : classes.buttonHidden}>
          <ActionIcon
            variant="filled"
            size={14}
            color="green"
            className={classes.buttonQuantityPlus}
            onClick={() => addItem(item)}
          >
            <IconPlus size={12} />
          </ActionIcon>
          <ActionIcon
            variant="filled"
            size={14}
            color="red"
            className={classes.buttonQuantityMinus}
            onClick={() => deleteItem(item)}
          >
            <IconMinus size={12} />
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
  buttonsQty: PropTypes.bool.isRequired,
};

export default Item;
