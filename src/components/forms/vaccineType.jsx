import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Stack,
  Heading,
  Box,
  Button,
  HStack,
  Text,
  Flex
} from '@chakra-ui/react';
import Block from '../utils/block';
import { initialVaccineState } from '../../constants';

const rangeValue = (value, max, min) => {
  if (value < min) return min;
  if (value > max) return max;
  return value;
};

const VaccineType = ({ setApprovedVaccinated }) => {
  const [vaccines, setVaccines] = useState(
    initialVaccineState.map((v) => ({ ...v, count: 0 }))
  );

  const updateVaccines = (id, change) => {
    setVaccines(
      vaccines.map((v) =>
        v.id === id ? { ...v, count: rangeValue(v.count + change, 5, 0) } : v
      )
    );
  };

  const vaccineScore = () =>
    vaccines.reduce((s, v) => s + v.score * v.count, 0);

  const vaccineAmount = () => vaccines.reduce((s, v) => s + v.count, 0);

  const validateVaccines = () => {
    const score = vaccineScore();
    if (score >= 2) {
      setApprovedVaccinated(true);
    } else {
      setApprovedVaccinated(false);
    }
  };

  return (
    <Block>
      <Stack>
        <Heading fontSize={25}>Milyen típusú vakcinát kapott?</Heading>,
        {vaccines.map((v) => (
          <VaccineRow
            manufacturer={v.manufacturer}
            name={v.name}
            count={v.count}
            key={v.id}
            setCount={(change) => {
              updateVaccines(v.id, change);
            }}
          />
        ))}
        {vaccineAmount() > 0 && (
          <Button
            colorScheme="green"
            size="xl"
            onClick={() => {
              validateVaccines();
            }}>
            <Stack>
              {' '}
              <div>Folytatás:</div>
              {vaccines.map((v) =>
                v.count > 0 ? (
                  <div key={v.id}>
                    {v.count} dózis {v.name}
                  </div>
                ) : null
              )}
            </Stack>
          </Button>
        )}
      </Stack>
    </Block>
  );
};

VaccineType.propTypes = {
  setApprovedVaccinated: PropTypes.func.isRequired
};

const VaccineRow = ({ name, manufacturer, count, setCount }) => (
  <HStack gap={5} border="1px" borderRadius={10} borderColor="teal.100">
    <Box
      w="100%"
      h="100%"
      margin={2}
      justifyContent="center"
      alignContent="center">
      <Text>
        <strong>{name}</strong> <br />
        <small>{manufacturer}</small>
      </Text>
    </Box>
    <Flex
      w="40%"
      h="100%"
      margin={2}
      justifyContent="center"
      alignContent="center">
      {count > 0 ? <>{count} dózis</> : <>-</>}
    </Flex>
    <Box
      w="80%"
      h="100%"
      margin={2}
      justifyContent="center"
      alignContent="center">
      <Button
        colorScheme="green"
        margin={2}
        onClick={() => {
          setCount(+1);
        }}>
        +
      </Button>
      <Button
        colorScheme="orange"
        margin={2}
        onClick={() => {
          setCount(-1);
        }}>
        -
      </Button>
    </Box>
  </HStack>
);

VaccineRow.propTypes = {
  name: PropTypes.string.isRequired,
  manufacturer: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired
};

export default VaccineType;
