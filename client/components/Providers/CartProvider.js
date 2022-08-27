import React, { createContext, useCallback, useMemo } from 'react';
import { useLocalStorage } from '@mantine/hooks';
import PropTypes from 'prop-types';
import { groupBy, map, orderBy } from 'lodash';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage({
    key: 'cart',
    defaultValue: { count: 0, items: [] },
  });

  const parseCart = (cartState) => {
    const ordered = orderBy(cartState.items, ['name']);
    const group = groupBy(ordered, '_id');

    return map(group, (items) => {
      const price = items.reduce(
        (sum, item) => sum + (item.discount_price_fixed ? item.discount_price_fixed : item.price),
        0
      );

      const priceFixed = Number(price.toFixed(2));

      return {
        item: items[0],
        count: items.length,
        group: items,
        subTotal: priceFixed,
      };
    });
  };

  const getTotal = (shoppingCart) => {
    const totalPrice = shoppingCart.reduce((sum, item) => sum + item.subTotal, 0);
    const cartTotalPrice = Number(totalPrice.toFixed(2));
    const cartTotalItems = shoppingCart.reduce((sum, item) => sum + item.count, 0);

    return {
      cartTotalPrice,
      cartTotalItems,
    };
  };

  const addItem = useCallback(
    (product) => {
      setCart({
        count: cart.count + 1,
        items: [...cart.items, product],
      });
    },
    [cart, setCart]
  );

  const deleteItem = useCallback(
    (product) => {
      const temp = cart.items;
      const index = temp.indexOf(product);
      temp.splice(index, 1);
      setCart({
        count: cart.count - 1,
        items: temp,
      });
    },
    [cart, setCart]
  );

  const parsedCart = parseCart(cart);
  const { cartTotalPrice, cartTotalItems } = getTotal(parsedCart);

  const cartProviderValue = useMemo(
    () => ({
      cart,
      setCart,
      parsedCart,
      cartTotalPrice,
      cartTotalItems,
      addItem,
      deleteItem,
    }),
    [cart, setCart, parsedCart, cartTotalPrice, cartTotalItems, addItem, deleteItem]
  );

  return <CartContext.Provider value={cartProviderValue}>{children}</CartContext.Provider>;
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CartContext, CartProvider };
