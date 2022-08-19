import React from 'react';
import {
  Card, TextInput, PasswordInput, Button, Group,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { DatePicker } from '@mantine/dates';

const Register = () => {
  const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Email Invalido'),
    },
  });
  return (
    <Card sx={{ maxWidth: '35%' }} shadow="sm" p="lg" radius="md" withBorder mx="auto" my="10%">
      {/* <Card.Section> */}
      <h3>REGISTRO DE USUARIO</h3>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput mb="md" required label="Nombres" placeholder="Nombres" size="lg" {...form.getInputProps('name')} />
        <TextInput
          mb="md"
          required
          label="Apellido"
          placeholder="Apellido"
          size="lg"
          {...form.getInputProps('surname')}
        />
        <PasswordInput
          mb="md"
          required
          label="Contraseña"
          placeholder="Contraseña"
          size="lg"
          {...form.getInputProps('password')}
        />
        <TextInput
          mb="md"
          required
          label="Nombre de Usuario"
          placeholder="Nombre de Usuario"
          size="lg"
          {...form.getInputProps('username')}
        />
        <DatePicker mb="md" dropdownType="modal" placeholder="Escoja una fecha" label="Fecha de nacimiento" size="lg" />
        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Card>
  );
};
export default Register;
