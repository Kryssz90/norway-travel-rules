import { Box, Center } from '@chakra-ui/react';

const Block = ({ children }) => (
  <Box
    maxW="lg"
    width="100%"
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    padding="5px"
    marginBottom={4}
  >
    <Center>{children}</Center>
  </Box>
);

export default Block;
