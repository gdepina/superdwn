import React, { createContext, useMemo } from 'react';
import { useLocalStorage } from '@mantine/hooks';
import PropTypes from 'prop-types';
import { groupBy, map, orderBy } from 'lodash';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage({
    key: 'cart',
    defaultValue: { count: 0, items: [] },
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const parsedCart = () => {
    const ordered = orderBy(cart.items, ['name']);
    const group = groupBy(ordered, '_id');
    const cartItems = map(group, (items) => ({
      item: items[0],
      count: items.length,
      group: items,
    }));
    return cartItems;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const addItem = (product) => {
    setCart({
      count: cart.count + 1,
      items: [...cart.items, product],
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const deleteItem = (product) => {
    const temp = cart.items;
    const index = temp.indexOf(product);
    temp.splice(index, 1);
    setCart({
      count: cart.count - 1,
      items: temp,
    });
  };

  const cartProviderValue = useMemo(
    () => ({
      cart,
      setCart,
      parsedCart,
      addItem,
      deleteItem,
    }),
    [cart, setCart, parsedCart, addItem, deleteItem]
  );

  return <CartContext.Provider value={cartProviderValue}>{children}</CartContext.Provider>;
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CartContext, CartProvider };
