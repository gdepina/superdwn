import React, { useState } from 'react';
import dayjs from 'dayjs';
import { z } from 'zod';
import { Button, Card, Group, PasswordInput, Text, TextInput } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { DatePicker } from '@mantine/dates';
import { IconAt, IconCalendar } from '@tabler/icons';
import { register } from '../../apis/users-api';

const Register = () => {
  const [message, setMessage] = useState(null);
  const schema = z
    .object({
      name: z.string().min(2, { message: 'El nombre debe tener al menos 2 letras.' }),
      surname: z.string().min(2, { message: 'El apellido debe tener al menos 2 letras.' }),
      password: z.string().min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
      password2: z.string().min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
      email: z.string().email({ message: 'Email invalido' }),
    })
    .refine((data) => data.password === data.password2, {
      message: "Passwords don't match",
      path: ['password2'], // path of error
    });

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

    validate: zodResolver(schema),
  });

  const handlerSubmit = (values) => {
    register(values)
      .then((result) => {
        result.code !== 'CREATED'
          ? setMessage('Informacion incorrecta, puede que el usuario ya exista o el email ya este en uso.')
          : setMessage('Usuario creado con éxito!');
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        setMessage('Error conectandose al servidor');
      });
  };

  return (
    <Card sx={{ width: '400px' }} shadow="sm" p="lg" radius="md" withBorder mt="10px" ml="10px">
      {/* <Card.Section> */}
      <h3>
        <Text align="center" weight={500} underline size="lg">
          REGISTRO DE USUARIO
        </Text>
      </h3>
      <Text size="md">{message}</Text>
      <form onSubmit={form.onSubmit((values) => handlerSubmit(values))}>
        <TextInput mb="md" required label="Nombres" placeholder="Nombres" {...form.getInputProps('name')} />
        <TextInput mb="md" required label="Apellido" placeholder="Apellido" {...form.getInputProps('surname')} />
        <TextInput
          mb="md"
          label="Email"
          placeholder="Escriba aquí su Email"
          icon={<IconAt size={15} />}
          {...form.getInputProps('email')}
        />
        <PasswordInput mb="md" label="Contraseña" placeholder="Contraseña" {...form.getInputProps('password')} />
        <PasswordInput
          mb="md"
          label="Confirmar contraseña"
          placeholder="Repetir contraseña"
          {...form.getInputProps('password2')}
        />
        <TextInput
          mb="md"
          label="Nombre de usuario"
          placeholder="Nombre de usuario"
          {...form.getInputProps('userName')}
        />
        <DatePicker
          mb="md"
          placeholder="Escoja una fecha"
          label="Fecha de nacimiento"
          icon={<IconCalendar size={15} />}
          maxDate={dayjs(new Date()).toDate()}
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
