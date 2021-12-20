import React from 'react';
import PropTypes from 'prop-types';
import { Box, Center } from '@chakra-ui/react';

const Block = ({ children }) => (
  <Box
    boxShadow="md"
    maxW="lg"
    width="100%"
    borderWidth="1px"
    borderRadius="lg"
    borderColor="gray.700"
    overflow="hidden"
    padding="5px"
    textAlign="justify"
    background="rgba(255,255,255,0.08)"
    marginBottom={4}>
    <Center>{children}</Center>
  </Box>
);

Block.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Block;
