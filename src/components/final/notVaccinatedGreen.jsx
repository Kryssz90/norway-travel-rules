import Block from '../utils/block';
import ExternalLink from '../utils/externalLink';
import { Stack, Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react';

const NotVaccinatedGreen = ({ age }) => {
  return (
    <Block>
      <Stack>
        <Heading color="orange">Nincs karantén</Heading>
        <Text>
          <UnorderedList>
            {age > 0 && (
              <ListItem>
                Online regisztráció a{' '}
                <ExternalLink href="https://reg.entrynorway.no" text="reg.entrynorway.no" />{' '}
                oldalon, leghamarabb 72 órával, legkésőbb pedig 2 órával a beutazás előtt.
              </ListItem>
            )}
            {
              (age = 2 && (
                <ListItem>
                  Beutazás előtt kötelező egy 24 óránál nem régebbi antigén gyorsteszt vagy PCR
                  teszt. A mintavétel ideje számít.
                </ListItem>
              ))
            }
            <ListItem>
              Határbelépéskor kötelező antigén gyorstesztet végezni, melynek az eredményét meg kell
              várni. Ha nincsen tesztállomás, nem üzemel, vagy a hatóságok másként rendelkeznek,
              akkor 24 órán belül kell antigén vagy PCR tesztet csináltatni. Amennyiben a gyorsteszt
              eredménye pozitív, úgy 24 órán belül kötelező PCR tesztet csináltatni.
            </ListItem>
          </UnorderedList>
        </Text>
      </Stack>
    </Block>
  );
};

export default NotVaccinatedGreen;
