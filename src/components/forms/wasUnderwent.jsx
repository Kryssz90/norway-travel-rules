import React from 'react';
import PropTypes from 'prop-types';
import { Stack, Heading, Text, Button } from '@chakra-ui/react';
import Block from '../utils/block';

const WasUnderwent = ({ setWasunderwent }) => {
  const date = new Date();
  date.setDate(date.getDate() - 180);
  return (
    <Block>
      <Stack>
        <Heading fontSize={25}>
          Az elmúlt 180 napban átesett-e a COVID-19 betegségen dokumentálható
          (laboratóriumi teszttel igazolva) módon?
        </Heading>
        <Text>
          A 180 nappal ezelőtti dátum: {date.toLocaleDateString('hu-hu')}
        </Text>
        <Button
          colorScheme="green"
          onClick={() => {
            setWasunderwent(true);
          }}>
          Igen
        </Button>
        <Button
          colorScheme="green"
          onClick={() => {
            setWasunderwent(false);
          }}>
          Nem
        </Button>
      </Stack>
    </Block>
  );
};

WasUnderwent.propTypes = {
  setWasunderwent: PropTypes.func.isRequired
};

export default WasUnderwent;
