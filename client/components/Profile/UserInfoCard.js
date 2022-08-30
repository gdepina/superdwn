import React, { useState } from 'react';
import {
  Avatar, Text, Button, Paper, UnstyledButton, Modal, Input, Container,
} from '@mantine/core';
import { IconAt } from '@tabler/icons';

export const UserInfoAction = ({
  // eslint-disable-next-line react/prop-types
  avatar, name, email, job,
}) => {
  const [opened, setOpened] = useState(false);
  return (
    <Paper
      radius="md"
      withBorder
      p="lg"
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      })}
    >
      <Modal
        centered
        opened={opened}
        onClose={() => setOpened(false)}
        title="Foto de perfil"
      >
        <Container>
          <Input
            icon={<IconAt />}
            placeholder="Url imagen"
          />
          <Button mt={15} ml={279}>
            Cambiar
          </Button>
        </Container>
      </Modal>
      <UnstyledButton onClick={() => setOpened(true)}>
        <Avatar src={avatar} size={120} radius={120} mx="auto" />
      </UnstyledButton>
      <Text align="center" size="lg" weight={500} mt="md">
        {name}
      </Text>
      <Text align="center" color="dimmed" size="sm">
        {email}
        {' '}
        •
        {job}
      </Text>

    </Paper>
  );
};

export default UserInfoAction;
