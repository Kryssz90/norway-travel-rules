import React from 'react';
import PropTypes from 'prop-types';
import {
  Stack,
  Heading,
  Text,
  UnorderedList,
  ListItem
} from '@chakra-ui/react';
import Block from '../utils/block';
import ExternalLink from '../utils/externalLink';

const Vaccinated = ({ age }) => (
  <Block>
    <Stack>
      <Heading color="green">Nincs karantén</Heading>
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
          <ListItem>
            Határbelépéskor kötelező antigén gyorstesztet végezni, melynek az
            eredményét meg kell várni. Ha nincsen tesztállomás, nem üzemel, vagy
            a hatóságok másként rendelkeznek, akkor 24 órán belül kell antigén
            vagy PCR tesztet csináltatni. Amennyiben a gyorsteszt eredménye
            pozitív, úgy 24 órán belül kötelező PCR tesztet csináltatni.
          </ListItem>
          <ListItem>
            Nincs karantén, azonban a 3. napon ajánlott tesztelni.
          </ListItem>
        </UnorderedList>
      </Text>
    </Stack>
  </Block>
);

Vaccinated.propTypes = {
  age: PropTypes.number.isRequired
};

export default Vaccinated;
