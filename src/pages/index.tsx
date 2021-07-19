import {
  Flex,
  Stack,
  FormControl,
  Input,
  Button,
  FormLabel,
} from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column">
        <Stack spacing="4">
          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              size="lg"
              variant="filled"
              bg="gray.900"
              focusBorderColor="pink.500"
              id="email"
              type="email"
              _hover={{
                backgroundColor: 'gray.900',
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <Input
              size="lg"
              variant="filled"
              bg="gray.900"
              focusBorderColor="pink.500"
              id="password"
              type="password"
              _hover={{
                bgColor: 'gray.900',
              }}
            />
          </FormControl>
        </Stack>

        <Button
          size="lg"
          mt="6"
          type="submit"
          colorScheme="pink"
          _focus={{
            outlineColor: 'gray.50',
          }}>
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
