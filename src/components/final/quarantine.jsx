import React from 'react';
import {
  Stack,
  Heading,
  Text,
  UnorderedList,
  ListItem
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import Block from '../utils/block';
import ExternalLink from '../utils/externalLink';

const Quarantine = ({ age }) => (
  <Block>
    <Stack>
      <Heading color="red">Karantén szükséges</Heading>
      <Text>
        <UnorderedList>
          {
            /* Show only to age 16+ */
            age > 0 && (
              <ListItem>
                Online regisztráció a{' '}
                <ExternalLink
                  href="https://reg.entrynorway.no"
                  text="reg.entrynorway.no"
                />{' '}
                oldalon, leghamarabb 72 órával, legkésőbb pedig 2 órával a
                beutazás előtt.
              </ListItem>
            )
          }

          {
            /* Show only to age 18+ */
            age > 1 && (
              <ListItem>
                Beutazás előtt kötelező egy 24 óránál nem régebbi antigén
                gyorsteszt vagy PCR teszt. A mintavétel ideje számít.
              </ListItem>
            )
          }
          <ListItem>
            Határbelépéskor kötelező antigén gyorstesztet végezni, melynek az
            eredményét meg kell várni. Ha nincsen tesztállomás, nem üzemel, vagy
            a hatóságok másként rendelkeznek, akkor 24 órán belül kell antigén
            vagy PCR tesztet csináltatni. Amennyiben a gyorsteszt eredménye
            pozitív, úgy 24 órán belül kötelező PCR tesztet csináltatni.
          </ListItem>
        </UnorderedList>
      </Text>
      <Heading as="h3">Karantén:</Heading>
      <Text>
        <UnorderedList>
          <ListItem>10 nap otthoni karantén.</ListItem>
          <ListItem>
            A beutazást követő 3. napon lehetőség van egy PCR teszt elvégzésére,
            melynek negatív eredményével véget érhet a karantén.
          </ListItem>
          <ListItem>
            A beutazás napja a 0. nap, az eredmény pedig a teszt elvégzése után
            24-72 órán belül van meg.
          </ListItem>
        </UnorderedList>
      </Text>
    </Stack>
  </Block>
);

Quarantine.propTypes = {
  age: PropTypes.number.isRequired
};

export default Quarantine;
