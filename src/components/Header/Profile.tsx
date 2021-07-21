import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Bruno Guirra</Text>
        <Text color="gray.300" fontSize="small">
          br.guirra@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Bruno Guirra"
        src="https://github.com/brGuirra.png"
      />
    </Flex>
  );
}
