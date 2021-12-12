import Block from '../utils/block';
import { Stack, Heading, Button } from '@chakra-ui/react';
import { ageValues } from '../../constants';

const Age = ({ setAge }) => {
  return (
    <Block>
      <Stack>
        <Heading fontSize={25}>Hány éves Ön?</Heading>
        {ageValues.map((v, i) => (
          <Button
            colorScheme="green"
            onClick={() => {
              setAge(i);
            }}
          >
            {v}
          </Button>
        ))}
      </Stack>
    </Block>
  );
};

export default Age;
