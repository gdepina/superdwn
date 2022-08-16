import {
  Avatar, Button, Container, Group, Text, UnstyledButton,
} from '@mantine/core';
import React from 'react';

const Profile = (opts) => {
  const { onExit, user } = opts;
  const {
    email, userName, name, surname,
  } = user;
  return (
    <Container p="xl" align="center" pb="xs">
      <UnstyledButton py="xl">
        <Group>
          <Avatar size={40} color="blue">
            {name.charAt(0).toUpperCase()}
            {surname.charAt(0).toUpperCase()}
          </Avatar>
          <div>
            <Text>{userName}</Text>
            <Text size="xs" mr="xl" color="dimmed">
              {email}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
      <Button size="xs" mr="xl" onClick={() => onExit()}>
        Salir
      </Button>
    </Container>
  );
};

export default Profile;
