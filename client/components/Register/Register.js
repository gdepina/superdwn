import React, { useState } from 'react';
import {
  Card, TextInput, PasswordInput, Button, Group, Text,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { DatePicker } from '@mantine/dates';
import { register } from '../../apis/users-api';

const Register = () => {
  const [message, setMessage] = useState(null);
  const form = useForm({
    initialValues: {
      name: '',
      surname: '',
      password: '',
      email: '',
      password2: '',
      userName: '',
      birthDate: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Email Inválido'),
      password2: (value, values) => (value !== values.password ? 'Las contraseñas no coinciden' : null),
    },
  });

  const handlerSubmit = (values) => {
    register(values)
      .then((result) => {
        result.code !== 'CREATED'
          ? setMessage('Informacion incorrecta o puede que usuario ya exista o el email ya este en uso')
          : setMessage('Usuario creado con exito');
      })
    // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        setMessage('Error conectandose al servidor');
      });
  };

  return (
    <Card sx={{ maxWidth: '35%' }} shadow="sm" p="lg" radius="md" withBorder mx="auto" my="10%">
      {/* <Card.Section> */}
      <h3>REGISTRO DE USUARIO</h3>
      <Text size="md">{message}</Text>
      <form onSubmit={form.onSubmit((values) => handlerSubmit(values))}>
        <TextInput mb="md" required label="Nombres" placeholder="Nombres" size="md" {...form.getInputProps('name')} />
        <TextInput
          mb="md"
          required
          label="Apellido"
          placeholder="Apellido"
          size="md"
          {...form.getInputProps('surname')}
        />
        <TextInput
          mb="md"
          required
          label="Email"
          placeholder="Escriba aquí su Email"
          size="md"
          {...form.getInputProps('email')}
        />
        <PasswordInput
          mb="md"
          required
          label="Contraseña"
          placeholder="Contraseña"
          size="md"
          {...form.getInputProps('password')}
        />
        <PasswordInput
          mb="md"
          required
          label="Confirmar contraseña"
          placeholder="Repetir contraseña"
          size="md"
          {...form.getInputProps('password2')}
        />
        <TextInput
          mb="md"
          required
          label="Nombre de Usuario"
          placeholder="Nombre de Usuario"
          size="md"
          {...form.getInputProps('userName')}
        />
        <DatePicker
          mb="md"
          placeholder="Escoja una fecha"
          label="Fecha de nacimiento"
          size="lg"
          {...form.getInputProps('birthDate')}
        />
        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Card>
  );
};
export default Register;
