import { Flex, Stack, Button } from '@chakra-ui/react';

import { Input } from '../components/Form/Input';

export default function SignIn() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <Input name="email" id="email" type="email" label="E-mail" />
          <Input
            name="password"
            id="password"
            type="password"
            label="Password"
          />
        </Stack>

        <Button
          size="lg"
          mt="6"
          type="submit"
          colorScheme="pink"
          _focus={{
            outlineColor: 'gray.50',
          }}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
