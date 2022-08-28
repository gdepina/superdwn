import React from 'react';
import { Input } from '@mantine/core';

import { useNavigate } from 'react-router-dom';
import useStyles from './searchProducts-jss';

const ProdSearch = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      return navigate(`/products?name=${event.target.value}`);
    }
  };

  return <Input className={classes.inputSearch} type="text" placeholder="Buscar Productos" onKeyDown={handleKeyDown} />;
};
export default ProdSearch;
