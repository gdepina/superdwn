import React, { useState } from 'react';
import {
  Navbar, Container, ScrollArea, NavLink, Button, Group, Avatar, Text, UnstyledButton,
} from '@mantine/core';
import { IconHome, IconShoppingCart } from '@tabler/icons';
import { Link, useLocation } from 'react-router-dom';
import menuJss from './menu-jss';

const menuOptions = [
  { label: 'Productos', icon: <IconHome />, to: '/' },
  { label: 'Carrito', icon: <IconShoppingCart />, to: '/cart' },
];

const logIn = (opts) => {
  const { setisLogged } = opts;
  return (
    <Container p="xl" align="center" pb="xs">
      <Button size="xs" mr="xl" onClick={() => setisLogged(0)}>
        Iniciar Sesion
      </Button>
      <Button size="xs">Registrarse</Button>
    </Container>
  );
};

const loggedIn = (opts) => {
  const { setisLogged } = opts;
  return (
    <Container p="xl" align="center" pb="xs">
      <UnstyledButton py="xl">
        <Group>
          <Avatar size={40} color="blue">
            JG
          </Avatar>
          <div>
            <Text>Gordo TFT</Text>
            <Text size="xs" mr="xl" color="dimmed">
              jonhgraves@gilmail.com
            </Text>
          </div>
        </Group>
      </UnstyledButton>
      <Button size="xs" mr="xl" onClick={() => setisLogged(1)}>
        Salir
      </Button>
    </Container>
  );
};

const Menu = () => {
  const { classes } = menuJss();
  const location = useLocation();
  const [isLogged, setisLogged] = useState(1);
  const navLinks = menuOptions.map((item) => (
    <NavLink
      {...item}
      key={item.label}
      className={classes.navlink}
      component={Link}
      active={location.pathname === item.to}
    />
  ));

  const opts = {
    classes, setisLogged, navLinks, location,
  };

  const {
    links, linksInner, footer, navbar,
  } = classes;

  return (
    <Navbar width={{ sm: 300 }} p="md" className={navbar}>
      <Navbar.Section grow className={links} component={ScrollArea}>
        <div className={linksInner}>{navLinks}</div>
      </Navbar.Section>
      <Navbar.Section className={footer}>
        {isLogged ? logIn(opts) : loggedIn(opts)}
      </Navbar.Section>
    </Navbar>
  );
};

export default Menu;
