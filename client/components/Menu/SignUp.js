import {
  Button, Container, Group, Modal, TextInput,
} from '@mantine/core';
import React from 'react';

const SignUp = (opts) => {
  const {
    setOpened, opened, onSubmit, form,
  } = opts;
  return (
    <Container p="xl" align="center" pb="xs">
      <Modal
        centered
        opened={opened}
        onClose={() => setOpened(false)}
        title="Inicia Sesion"
      >
        <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
          <TextInput required label="Email" placeholder="your@email.com" {...form.getInputProps('email')} />
          <TextInput
            required
            label="Contraseña"
            placeholder="Contraseña"
            {...form.getInputProps('password')}
          />

          <Group position="right" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Modal>
      <Button size="xs" mr="xl" onClick={() => setOpened(true)}>
        Iniciar Sesion
      </Button>
      <Button size="xs">Registrarse</Button>
    </Container>
  );
};

export default SignUp;
