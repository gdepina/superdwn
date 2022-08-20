import React, { useContext, useState } from 'react';
import { Navbar, NavLink, ScrollArea } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconHome, IconPaperBag } from '@tabler/icons';
import { Link, useLocation } from 'react-router-dom';
import menuJss from './menu-jss';
import Profile from './Profile';
import SignUp from './SignUp';
import { AuthContext } from '../Providers/AuthProvider';

import Cart from '../../cart';

const menuOptions = [
  { label: 'Home', icon: <IconHome />, to: '/' },
  { label: 'Productos', icon: <IconPaperBag />, to: '/products' },
];

const Menu = () => {
  const { classes } = menuJss();
  const location = useLocation();
  const [opened, setOpened] = useState(false);
  const { logIn, user, logOut } = useContext(AuthContext);

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const navLinks = menuOptions.map((item) => (
    <NavLink
      {...item}
      key={item.label}
      className={classes.navlink}
      component={Link}
      active={location.pathname === item.to}
    />
  ));

  const onSubmitHandler = (data) => {
    logIn(data, () => setOpened(false));
  };

  const opts = {
    classes,
    opened,
    navLinks,
    location,
    setOpened,
    onSubmit: onSubmitHandler,
    onExit: logOut,
    form,
    user,
  };

  const { links, linksInner, footer, navbar } = classes;

  return (
    <Navbar width={{ sm: 300 }} p="md" className={navbar}>
      <Navbar.Section grow className={links} component={ScrollArea}>
        <div className={linksInner}>
          {navLinks}
          <Cart />
        </div>
      </Navbar.Section>
      <Navbar.Section className={footer}>
        {Object.keys(user).length === 0 ? SignUp(opts) : Profile(opts)}
      </Navbar.Section>
    </Navbar>
  );
};

export default Menu;
