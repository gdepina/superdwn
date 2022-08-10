import React, { useState } from 'react';
import {
  Navbar,
  Container,
  ScrollArea,
  NavLink,
  Button,
  Group,
  Avatar,
  Text,
  UnstyledButton,
  Modal,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconHome, IconShoppingCart } from '@tabler/icons';
import { Link, useLocation } from 'react-router-dom';
import menuJss from './menu-jss';
import { signIn } from './login-api';

const submitSignIn = (opts) => {
  signIn(opts.user).then((result) => {
    opts.setProfile({ user: result.user });
  });
};

const menuOptions = [
  { label: 'Productos', icon: <IconHome />, to: '/' },
  { label: 'Carrito', icon: <IconShoppingCart />, to: '/cart' },
];

const logIn = (opts) => {
  const { setProfile, profile } = opts;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });
  return (
    <Container p="xl" align="center" pb="xs">
      <Modal centered opened={profile.opened} onClose={() => setProfile({ opened: false })} title="Inicia Sesion">
        <form onSubmit={form.onSubmit((values) => submitSignIn({ user: values, setProfile }))}>
          <TextInput required label="Email" placeholder="your@email.com" {...form.getInputProps('email')} />
          <TextInput required label="Contraseña" placeholder="Contraseña" {...form.getInputProps('password')} />

          <Group position="right" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Modal>
      <Button size="xs" mr="xl" onClick={() => setProfile({ opened: true, user: {} })}>
        Iniciar Sesion
      </Button>
      <Button size="xs">Registrarse</Button>
    </Container>
  );
};

const loggedIn = (opts) => {
  const { setProfile } = opts;
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
      <Button size="xs" mr="xl" onClick={() => setProfile({ user: {} })}>
        Salir
      </Button>
    </Container>
  );
};

const Menu = () => {
  const { classes } = menuJss();
  const location = useLocation();
  const [profile, setProfile] = useState({
    user: {},
    opened: false,
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

  const opts = {
    classes,
    setProfile,
    navLinks,
    location,
    profile,
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
        {Object.keys(profile.user).length === 0 ? logIn(opts) : loggedIn(opts)}
      </Navbar.Section>
    </Navbar>
  );
};

export default Menu;
