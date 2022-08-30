import React, { useContext } from 'react';
import {
  Button, TextInput, Container, Title, Accordion, createStyles, Box,
} from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { UserInfoAction } from './UserInfoCard';
import { AuthContext } from '../Providers/AuthProvider';

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 3,
    paddingBottom: theme.spacing.xl * 3,
    minHeight: 650,
  },

  title: {
    marginBottom: theme.spacing.xl * 1.5,
  },

  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,

    border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`,
  },

  hola: {
    display: 'flex',
    size: 'xs',
    px: 'xs',
  },

  labelName: {
    position: 'relative',
    right: '15px',
  },
}));

export const UserSettings = () => {
  const { user } = useContext(AuthContext);
  const {
    email, userName, name,
  } = user;
  const { classes } = useStyles();
  // imputs accordion
  const imputNombreyApellido = <TextInput className={classes.labelName} sx={{ width: '300px' }} label="" placeholder="Travuco Johnson el amorsito de john" />;
  const bottonEdit = (
    <Button ml={210} className={classes.btnSave}>Editar</Button>
  );
  const fechaActual = <TextInput label="Fecha Actual" placeholder="12/09/2001" />;
  const fechaEdit = <DatePicker placeholder="Pick date" label="Cambiar Fecha de nacimiento" required />;
  const bottonFecha = <Button ml={580}>Editar</Button>;
  const direccionActual = <TextInput label="Direccion Actual" placeholder="Felix de amador 2222" />;
  // imputs accordion
  if (Object.keys(user).length !== 0) {
    return (
      <Container size="sm" className={classes.wrapper}>
        <Title align="center" className={classes.title}>
          <UserInfoAction
            name={name}
            email={email}
            job="Comprador"
            avatar="https://media.diariolasamericas.com/p/baeda5e51fa5504cd91391f81dc171dd/adjuntos/216/imagenes/000/230/0000230283/fotos-cristian-castro-vestido-travesti.jpg"
          />
        </Title>
        <Box
          sx={(theme) => ({
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
            textAlign: 'center',
            padding: theme.spacing.md,
            borderRadius: theme.radius.md,
            cursor: 'pointer',
            marginBottom: '18px',
            display: 'flex',

            '&:hover': {
              backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
            },
          })}
        >
          {userName}
        </Box>
        <Accordion variant="separated">
          <Accordion.Item className={classes.item} value="another-account">
            <Accordion.Control>Nombre y apellido</Accordion.Control>
            <Container className={classes.hola}>
              <Accordion.Panel>{imputNombreyApellido}</Accordion.Panel>
              <Accordion.Panel>{bottonEdit}</Accordion.Panel>
            </Container>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="newsletter">
            <Accordion.Control>Fecha de nacimiento</Accordion.Control>
            <Accordion.Panel>{fechaActual}</Accordion.Panel>
            <Accordion.Panel>{fechaEdit}</Accordion.Panel>
            <Accordion.Panel>{bottonFecha}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="hola">
            <Accordion.Control>Direccion de envio</Accordion.Control>
            <Accordion.Panel>{direccionActual}</Accordion.Panel>
          </Accordion.Item>

        </Accordion>
      </Container>
    );
  }
  return (
    <h1>Deberias estar logueado</h1>
  );
};

export default UserSettings;
