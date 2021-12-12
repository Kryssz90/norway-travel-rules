import React from 'react';
import PropTypes from 'prop-types';
import { Box, Center } from '@chakra-ui/react';

const Block = ({ children }) => (
  <Box
    maxW="lg"
    width="100%"
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    padding="5px"
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
