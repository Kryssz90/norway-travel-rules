import React from 'react';
import PropTypes from 'prop-types';
import { Stack, Heading, Button } from '@chakra-ui/react';
import Block from '../utils/block';
import { sourceCountryColor } from '../../constants';

const CountryColor = ({ setSourceCountry }) => (
  <Block>
    <Stack>
      <Heading fontSize={25}>Milyen szín-besorolású országból érkezik?</Heading>
      {sourceCountryColor.map((v, i) => (
        <Button
          colorScheme={v.color}
          onClick={() => {
            setSourceCountry(i);
          }}>
          {v.text}
        </Button>
      ))}
    </Stack>
  </Block>
);

CountryColor.propTypes = {
  setSourceCountry: PropTypes.func.isRequired
};

export default CountryColor;
