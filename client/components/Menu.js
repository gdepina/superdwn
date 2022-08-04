import React from "react";
import {
  Navbar,
  Container,
  ScrollArea,
  createStyles,
  NavLink,
  Button,
  Group,
  Avatar,
  Text,
  Space,
} from "@mantine/core";
import { IconHome, IconShoppingCart } from "@tabler/icons";

const mockdata = [
  { label: "Productos", icon: <IconHome /> },
  { label: "Carrito", icon: <IconShoppingCart /> },
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

const onClickLogIn = () => {
  
  return 
};




export function NavbarNested(props) {
  const { classes } = useStyles();
  const links = mockdata.map((item) => <NavLink {...item} key={item.label} />);
    const isLogged = props.isLogged;
  
    if (isLogged) {
      return (
        <Navbar width={{ sm: 300 }} p="md" className={classes.navbar}>
      {/* <Navbar.Section className={classes.header}>
        <Group position="apart">
          <Code sx={{ fontWeight: 700 }}>v3.1.2</Code>
        </Group>
      </Navbar.Section> */}

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <Container p="xl" align="center" pb="xs">
          <Button size="xs" mr="xl" onClick={onClickLogIn}>
            Iniciar Sesion
          </Button>
          <Button size="xs">
            Registrarse
          </Button>
        </Container>

      </Navbar.Section>
    </Navbar>

      );
    }
    return <Navbar width={{ sm: 300 }} p="md" className={classes.navbar}>
    {/* <Navbar.Section className={classes.header}>
      <Group position="apart">
        <Code sx={{ fontWeight: 700 }}>v3.1.2</Code>
      </Group>
    </Navbar.Section> */}

    <Navbar.Section grow className={classes.links} component={ScrollArea}>
      <div className={classes.linksInner}>{links}</div>
    </Navbar.Section>

    <Navbar.Section className={classes.footer}>
      <Container p="xl" align="center" pb="xs">
        Que pasa teo no te salio pa?
      </Container>

    </Navbar.Section>
  </Navbar>
  
}


