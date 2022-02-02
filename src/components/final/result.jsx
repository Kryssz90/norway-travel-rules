import React, { useRef, useEffect } from 'react';
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

const Result = ({ measures }) => {
  const {
    preRegistration,
    testOnArrival,
    testBeforeArrival,
    quarantine,
    testOnDay3
  } = measures;

  const noMeasure =
    !preRegistration &&
    !testOnArrival &&
    !testBeforeArrival &&
    !quarantine &&
    testOnDay3 !== 'recommended';

  const ref = useRef(null);
  useEffect(() => {
    ref.current.scrollIntoView();
  });

  return (
    <Block>
      <Stack ref={ref}>
        {quarantine ? (
          <Heading color="red">Karantén szükséges</Heading>
        ) : (
          <Heading color="green">Nincs karantén</Heading>
        )}
        <Text>
          <UnorderedList>
            {preRegistration && (
              <ListItem>
                Online regisztráció a{' '}
                <ExternalLink
                  href="https://reg.entrynorway.no"
                  text="reg.entrynorway.no"
                />{' '}
                oldalon, leghamarabb 72 órával, legkésőbb pedig 2 órával a
                beutazás előtt.
              </ListItem>
            )}

            {testBeforeArrival && (
              <ListItem>
                Beutazás előtt kötelező egy 24 óránál nem régebbi antigén
                gyorsteszt vagy PCR teszt. A mintavétel ideje számít.
              </ListItem>
            )}
            {testOnArrival && (
              <ListItem>
                Határbelépéskor kötelező antigén gyorstesztet végezni, melynek
                az eredményét meg kell várni. Ha nincsen tesztállomás, nem
                üzemel, vagy a hatóságok másként rendelkeznek, akkor 24 órán
                belül kell antigén vagy PCR tesztet csináltatni. Amennyiben a
                gyorsteszt eredménye pozitív, úgy 24 órán belül kötelező PCR
                tesztet csináltatni.
              </ListItem>
            )}
            {testOnDay3 === 'recommended' && (
              <ListItem>
                Nincs karantén, azonban a 3. napon ajánlott tesztelni.
              </ListItem>
            )}
          </UnorderedList>
        </Text>
        {noMeasure && (
          <Text>Nincs érvényben korlátozás, ajánlás az Ön részére</Text>
        )}
        {quarantine && (
          <>
            <Heading as="h3">Karantén:</Heading>
            <Text>
              <UnorderedList>
                <ListItem>10 nap otthoni karantén.</ListItem>
                <ListItem>
                  A beutazást követő 3. napon lehetőség van egy PCR teszt
                  elvégzésére, melynek negatív eredményével véget érhet a
                  karantén.
                </ListItem>
                <ListItem>
                  A beutazás napja a 0. nap, az eredmény pedig a teszt elvégzése
                  után 24-72 órán belül van meg.
                </ListItem>
              </UnorderedList>
            </Text>
          </>
        )}
      </Stack>
    </Block>
  );
};
Result.propTypes = {
  measures: PropTypes.shape({
    preRegistration: PropTypes.bool.isRequired,
    testOnArrival: PropTypes.bool.isRequired,
    testBeforeArrival: PropTypes.bool.isRequired,
    quarantine: PropTypes.bool.isRequired,
    testOnDay3: PropTypes.string.isRequired
  }).isRequired
};

export default Result;
