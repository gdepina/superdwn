import React, { useState } from 'react';
import {
  Navbar, Container, ScrollArea, NavLink, Button, Group, Avatar, Text, UnstyledButton,
} from '@mantine/core';
import { IconHome, IconShoppingCart } from '@tabler/icons';
import menuJss from './menu-jss';

const menuOptions = [
  { label: 'Productos', icon: <IconHome /> },
  { label: 'Carrito', icon: <IconShoppingCart /> },
];

const logIn = (opts) => {
  const { classes, setisLogged, navLinks } = opts;
  const {
    links, linksInner, footer, navbar,
  } = classes;
  return (
    <Navbar width={{ sm: 300 }} p="md" className={navbar}>
      <Navbar.Section grow className={links} component={ScrollArea}>
        <div className={linksInner}>{navLinks}</div>
      </Navbar.Section>

      <Navbar.Section className={footer}>
        <Container p="xl" align="center" pb="xs">
          <Button size="xs" mr="xl" onClick={() => setisLogged(0)}>
            Iniciar Sesion
          </Button>
          <Button size="xs">Registrarse</Button>
        </Container>
      </Navbar.Section>
    </Navbar>
  );
};

const loggedIn = (opts) => {
  const { classes, setisLogged, navLinks } = opts;
  const {
    links, linksInner, footer, navbar,
  } = classes;
  return (
    <Navbar width={{ sm: 300 }} p="md" className={navbar}>
      <Navbar.Section grow className={links} component={ScrollArea}>
        <div className={linksInner}>{navLinks}</div>
      </Navbar.Section>

      <Navbar.Section className={footer}>
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
      </Navbar.Section>
    </Navbar>
  );
};

export default function NavbarNested() {
  const { classes } = menuJss();
  const [isLogged, setisLogged] = useState(1);
  // eslint-disable-next-line react/jsx-props-no-spreading,max-len
  const navLinks = menuOptions.map((item) => <NavLink {...item} key={item.label} className={classes.navlink} />);
  const opts = { classes, setisLogged, navLinks };

  return isLogged ? logIn(opts) : loggedIn(opts);
}
