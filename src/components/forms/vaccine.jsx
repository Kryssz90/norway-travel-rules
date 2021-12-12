import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Stack, Button } from '@chakra-ui/react';
import Block from '../utils/block';

const Vaccine = ({ setGotVaccine }) => (
  <Block>
    <Stack>
      <Heading fontSize={25}>
        Kapott-e ön valamilyen COVID-19 elleni vakcinát?
      </Heading>
      <Button
        colorScheme="green"
        onClick={() => {
          setGotVaccine(true);
        }}>
        Igen
      </Button>
      <Button
        colorScheme="green"
        onClick={() => {
          setGotVaccine(false);
        }}>
        Nem
      </Button>
    </Stack>
  </Block>
);

Vaccine.propTypes = {
  setGotVaccine: PropTypes.func.isRequired
};

export default Vaccine;
