import { useState } from 'react';
import { Container, Center, Box, Button, Text, Heading, Stack, Grid, HStack, Flex, UnorderedList, ListItem } from '@chakra-ui/react'

import { useMachine } from '@xstate/react'


import ruleMachine from './machine';


const Block = ({ children }) => <Box maxW='lg' borderWidth='1px' borderRadius='lg' overflow='hidden' padding="5px" ><Center>{children}</Center></Box>

function App() {
  const [current, send] = useMachine(ruleMachine);


  console.log(current)
  return (
    <div className="App" >
      <Container maxW="xl" centerContent>
        {current.matches('start') && <Start send={send} />}
        {current.matches('vaccine') && <Vaccine send={send} />}
        {current.matches('wasunderwent') && <WasUnderwent send={send} />}
        {current.matches('quarantine') && <Quarantine send={send} />}
        {current.matches('countrycolor') && <CountryColor send={send} />}
        {current.matches('novaccinatedgreen') && <NotVaccinatedGreen send={send} />}
        {current.matches('vaccinated') && <Vaccinated send={send} />}
        {current.matches('vaccinetype') && <VaccineType send={send} />}
        <Button colorScheme="gray" size="sm" marginTop="15px" onClick={() => {
          send('RESET')
        }}>Újrakezdés</Button>
        Frissítve: 2021. 12. 09.
      </Container>
    </div >
  );
}

const Start = ({ send }) => {
  return (<Box maxW='lg' borderWidth='1px' borderRadius='lg' overflow='hidden' padding="5px">
    <Center>
      <Heading>Norvégiába beutazás kérdőív</Heading>
    </Center>
    <Center>
      <Button colorScheme="green" onClick={() => {
        send('START')
      }}>
        Kitöltés
      </Button>
    </Center>
  </Box>)
}

const Vaccine = ({ send }) => {
  return (
    <Block>
      <Stack>
        <Heading>Kapott-e ön valamilyen COVID-19 elleni vakcinált?</Heading>
        <Button colorScheme="green" onClick={() => { send("YES") }}>Igen</Button>
        <Button colorScheme="green" onClick={() => { send("NO") }}>Nem</Button>
      </Stack>
    </Block>
  )
}

const WasUnderwent = ({ send }) => {
  return (
    <Block>
      <Stack>
        <Heading>Átesett-e ön dokumentált módon a COVID-19 betegségen az elmúlt 6 hónapon belül?</Heading>
        <Button colorScheme="green" onClick={() => { send("YES") }}>Igen</Button>
        <Button colorScheme="green" onClick={() => { send("NO") }}>Nem</Button>
      </Stack>
    </Block>
  )
}

const CountryColor = ({ send }) => {
  return (
    <Block>
      <Stack>
        <Heading>Milyen színű országból érkezik?</Heading>
        <Button colorScheme="green" onClick={() => { send("GREEN") }}>Zöld</Button>
        <Button colorScheme="orange" onClick={() => { send("ORANGE") }}>Narancs</Button>
        <Button colorScheme="red" onClick={() => { send("RED") }}>Piros</Button>
        <Button colorScheme="red" onClick={() => { send("DARKRED") }}>Sötétvörös</Button>
      </Stack>
    </Block>
  )
}

const initialVaccineState = [
  {
    id: 'pfizer',
    manufacturer: "Pfizer-BioNTech",
    name: "Pfizer Comirnaty",
    score: 1
  },
  {
    id: 'moderna',
    manufacturer: "ModernaTX, Inc",
    name: "Moderna",
    score: 1
  },
  {
    id: 'astra',
    manufacturer: "Astra Zeneca",
    name: "Vaxzevria",
    score: 1
  },
  {
    id: 'janssen',
    manufacturer: "Janssen Pharmaceuticals",
    name: "Johnson & Johnson",
    score: 2
  },
  {
    id: 'sputnik',
    manufacturer: "Gamaleja Kutatóközpont",
    name: "Szputnyik V",
    score: 0
  },
  {
    id: 'sinopharm',
    manufacturer: "Sinopharm",
    name: "Sinopharm",
    score: 0
  }
]

const rangeValue = (value, max, min) => {
  if(value < min) return min;
  if(value > max) return max;
  return value
}

const VaccineType = ({ send }) => {

  const [vaccines, setVaccines] = useState(initialVaccineState.map((v) => ({...v, count: 0})));

  const updateVaccines = (id, change) => {
    setVaccines(
      vaccines.map(
        (v) => (v.id == id ? ({...v, count: rangeValue(v.count+change, 5, 0) }) : v))
      )
  }

  const vaccineScore = () => {
    return vaccines.reduce(
      (s,v) => s+(v.score*v.count),
      0
    )
  }

  const vaccineAmount = () => {
    return vaccines.reduce(
      (s,v) => s+(v.count),
      0
    )
  }

  const validateVaccines = () => {
    const score = vaccineScore();
    if(score >= 2) {
      send('SUFFICENT')
    } else {
      send('NOTSUFFICENT')
    }
  }

  return (
    <Block>
      <Stack>
        <Heading>Milyen típusú vakcinát kapott?</Heading>,
        {vaccines.map((v) => (
        <VaccineRow
          manufacturer={v.manufacturer}
          name={v.name} 
          count={v.count}
          key={v.id}
          setCount={(change) => {updateVaccines(v.id, change)}}
          /> ))}
          { vaccineAmount() > 0 && <Button colorScheme="green" size="xl" onClick={() => {
            validateVaccines()
          }}><Stack> <div>Folytatás:</div>{
            vaccines.map((v) => v.count > 0 ? <div key={v.id}>{v.count} dózis {v.name}</div> : null)
          }</Stack></Button> }
          
      </Stack>
    </Block>
  )
}

const VaccineRow = ({ name, manufacturer, count, setCount }) => {
  return <HStack gap={5}>
    <Box w='100%' h='100%' margin={2} justifyContent="center" alignContent="center">
      <Text>
        <strong>{name}</strong> <br />
        <small>{manufacturer}</small>
      </Text>
    </Box>
    <Flex w='30%' h='100%' margin={2} justifyContent="center" alignContent="center">
      {count > 0 ? (<>{count} dózis</>) : (<>-</>)}
    </Flex>
    <Box w='100%' h='100%' margin={2} justifyContent="center" alignContent="center">
      <Button colorScheme="green" margin={2} onClick={() => {setCount(+1)}}>+</Button>
      <Button colorScheme="orange" margin={2} onClick={() => {setCount(-1)}}>-</Button>
    </Box>
  </HStack>
}

const Quarantine = ({ send }) => {
  return (
    <Block>
      <Stack>
        <Heading color="red">Karantén szükséges</Heading>
        <Text>
        <UnorderedList>
            <ListItem>16 év felett előzetes online regisztráció a <a href='https://reg.entrynorway.no'>reg.entrynorway.no</a> oldalon, max. 72 órával a beutazás előtt.</ListItem>
            <ListItem>18 év felett a beutazás előtt kötelező egy 24 óránál nem régebbi PCR vagy antigén gyorsteszt.</ListItem>
            <ListItem>Határbelépéskor vagy 24 órán belül antigén gyorsteszt vagy PCR teszt</ListItem>
        </UnorderedList>
        </Text>
        <Heading as="h3">Karantén:</Heading>
        <Text>
        <UnorderedList>
            <ListItem>10 nap otthoni karantén 18 év felett</ListItem>
            <ListItem>A belépést követő 3. napon elvégzett teszt negatív eredményével véget érhet karantén (opcionális).</ListItem>
            <ListItem>18 év alatt csak ajánlott a teszt elvégzése</ListItem>
        </UnorderedList>
        </Text>
      </Stack>
    </Block>
  )
}

const NotVaccinatedGreen = ({ send }) => {
  return (
    <Block>
      <Stack>
        <Heading color="orange">Nincs karantén</Heading>
        <Text>
          <UnorderedList>
            <ListItem>16 év felett előzetes online regisztráció a <a href='https://reg.entrynorway.no'>reg.entrynorway.no</a> oldalon, max. 72 órával a beutazás előtt.</ListItem>
            <ListItem>18 év felett a beutazás előtt kötelező egy 24 óránál nem régebbi PCR vagy antigén gyorsteszt.</ListItem>
            <ListItem>Határbelépéskor vagy 24 órán belül antigén gyorsteszt vagy PCR teszt</ListItem>
          </UnorderedList>
        </Text>
      </Stack>
    </Block>
  )
}

const Vaccinated = ({ send }) => {
  return (
    <Block>
      <Stack>
        <Heading color="green">Nincs karantén</Heading>
        <Text>
          <UnorderedList>
            <ListItem>16 év felett előzetes online regisztráció a <a href='https://reg.entrynorway.no'>reg.entrynorway.no</a> oldalon, max. 72 órával a beutazás előtt.</ListItem>
            <ListItem>Határbelépéskor vagy 24 órán belül antigén gyorsteszt vagy PCR teszt</ListItem>
          </UnorderedList>
        </Text>
      </Stack>
    </Block>
  )
}

export default App;
