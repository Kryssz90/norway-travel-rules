import Block from '../utils/block';
import { Heading, Stack, Button } from '@chakra-ui/react';

const Vaccine = ({ setGotVaccine }) => {
  return (
    <Block>
      <Stack>
        <Heading fontSize={25}>Kapott-e ön valamilyen COVID-19 elleni vakcinált?</Heading>
        <Button
          colorScheme="green"
          onClick={() => {
            setGotVaccine(true);
          }}
        >
          Igen
        </Button>
        <Button
          colorScheme="green"
          onClick={() => {
            setGotVaccine(false);
          }}
        >
          Nem
        </Button>
      </Stack>
    </Block>
  );
};

export default Vaccine;
