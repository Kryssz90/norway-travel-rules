import React from 'react';
import PropTypes from 'prop-types';
import { Stack, Heading, Button } from '@chakra-ui/react';
import Block from '../utils/block';
import { ageValues } from '../../constants';

const Age = ({ setAge }) => (
  <Block>
    <Stack>
      <Heading fontSize={25}>Hány éves Ön?</Heading>
      {ageValues.map((v, i) => (
        <Button
          colorScheme="green"
          onClick={() => {
            setAge(i);
          }}>
          {v}
        </Button>
      ))}
    </Stack>
  </Block>
);

Age.propTypes = {
  setAge: PropTypes.func.isRequired
};

export default Age;
