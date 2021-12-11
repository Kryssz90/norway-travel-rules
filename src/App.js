import { useState } from 'react';
import { Container, Center, Box, Button, Text, Heading, Stack, Grid, Link, HStack, Flex, UnorderedList, ListItem } from '@chakra-ui/react'
import maNoLogo from './images/mano-logo.png'

const ageValues = [
  "0-15",
  "16-17",
  "18 vagy idősebb"
]

const sourceCountryColor = [
  {
    text: "Zöld",
    color: "green"
  },
  {
    text: "Narancssárga",
    color: "orange"
  },
  {
    text: "Vörös",
    color: "red"
  },
  {
    text: "Sötétvörös",
    color: "red"
  },
]

const defaultUserState = {
  age: undefined,
  sourceCountry: undefined,
  approvedVaccinated: undefined,
  wasunderwent: undefined,
  gotVaccine: undefined

}


const Block = ({ children }) => <Box maxW='lg' width="100%" borderWidth='1px' borderRadius='lg' overflow='hidden' padding="5px" marginBottom={4} ><Center>{children}</Center></Box>

function App() {
  const [started, setStarted] = useState(false)
  const [age, setAge] = useState(defaultUserState.age)
  const [sourceCountry, setSourceCountry] = useState(defaultUserState.sourceCountry)
  const [gotVaccine, setGotVaccine] = useState(defaultUserState.gotVaccine)
  const [approvedVaccinated, setApprovedVaccinated] = useState(defaultUserState.approvedVaccinated)
  const [wasunderwent, setWasunderwent] = useState(defaultUserState.wasunderwent)

  const renderComponent = () => {

    if(gotVaccine && approvedVaccinated) return <Vaccinated age={age} />
    if(gotVaccine === false && approvedVaccinated) return <p>Invalid state</p>
    if(wasunderwent === false) return <Quarantine age={age} />
    if(wasunderwent && (sourceCountry === 0 || sourceCountry === 1 )) return <NotVaccinatedGreen age={age} />
    

    if(!started) return <Start setStarted={setStarted} />;
    if(age === undefined) return <Age setAge={setAge} />;
    if(gotVaccine === undefined) return <Vaccine setGotVaccine={setGotVaccine} />
    if(gotVaccine === true && approvedVaccinated === undefined) return <VaccineType setApprovedVaccinated={setApprovedVaccinated} />
    if(wasunderwent === undefined) return <WasUnderwent setWasunderwent={setWasunderwent} />
    if(sourceCountry === undefined) return <CountryColor setSourceCountry={setSourceCountry} />

    return <Quarantine age={age} />
  }

  
  
  return (
    <div className="App" >
      <Container maxW="xl" centerContent>
        <Heading fontSize={36} marginBottom={6} textAlign="center">Beutazási szabályok Norvégiába</Heading>
        {age!==undefined &&<Block>
           <Stack width="xl"  >
            {age !== undefined && <div><b>Kor:</b><br/>{ageValues[age]}</div>}
            {gotVaccine !== undefined && <div><b>Kapott COVID-19 oltást:</b><br /> {gotVaccine ? "Igen" : "Nem"} </div> }
            {approvedVaccinated !== undefined && <div><b>Norvégia által elfogadott oltást kapott:</b> <br /> {approvedVaccinated ? "Igen" : "Nem"} </div> }
            {wasunderwent !== undefined && <div><b>Átesett a COVID-19 betegségben az elmúlt 180 napban:</b><br /> {wasunderwent ? "Igen" : "Nem"} </div> }
            {sourceCountry !== undefined && <div><b>Kiindulási ország:</b><br /> {sourceCountryColor[sourceCountry].text} </div> }
          </Stack>
        </Block>
          }
        {renderComponent()}
        <Button colorScheme="gray" size="sm" marginTop="15px" onClick={() => {
          setStarted(false)
          setAge(defaultUserState.age)
          setSourceCountry(defaultUserState.sourceCountry)
          setGotVaccine(undefined)
          setApprovedVaccinated(defaultUserState.approvedVaccinated)
          setWasunderwent(defaultUserState.wasunderwent)
        }}>Újrakezdés</Button>
        Frissítve: 2021. 12. 09.
        
      </Container>
    </div >
  );
}

const ExternalLink=({href, text}) => {
  return <Link rel="noopener nofollow" target="_blank" color="teal.500" href={href}>{text}</Link>
}


const Start = ({ setStarted }) => {
  return (<Box maxW='lg' borderWidth='1px' borderRadius='lg' overflow='hidden' padding="5px">
    <Text textAlign="justify" marginBottom={3}>Ez a kérdőív azért készült, hogy segítsen eligazodni a norvég utazási szabályokban. Felhívjuk a figyelmet, hogy a hivatalos információk norvég és angol nyelven a kormány, a <ExternalLink href="https://www.helsenorge.no/" text="Helse Norge" /> és az <ExternalLink href="https://www.fhi.no/" text="FHI" /> oldalán olvashatóak. Specifikus kérdés esetén hívják a hivatalos koronavírus információs vonalat: <ExternalLink href="tel:+4781555015" text="+47 815 55 015" /> </Text>
    <Center><img src={maNoLogo} width="50%" /></Center>
    <Center><Text marginBottom={3}><ExternalLink href="https://www.facebook.com/groups/838282506317284" text="Magyar-Norvég Fórum" /></Text></Center>
    
    <Text marginBottom={3}>Összeállította: <ExternalLink href="https://www.linkedin.com/in/krisztian-zsobrak/" text="Zsobrák Krisztián" /></Text>
    
    <Center>
      <Button colorScheme="green" onClick={() => {
        setStarted(true)
      }}>
        Kitöltés
      </Button>
    </Center>
  </Box>)
}

const Age = ({ setAge }) => {
  return (
    <Block>
      <Stack>
        <Heading fontSize={25}>Hány éves Ön?</Heading>
        {
          ageValues.map((v,i) => (<Button colorScheme="green" onClick={() => { setAge(i) }}>{v}</Button>))
        }
        
        
      </Stack>
    </Block>
  )
}

const Vaccine = ({ setGotVaccine }) => {
  return (
    <Block>
      <Stack>
        <Heading fontSize={25}>Kapott-e ön valamilyen COVID-19 elleni vakcinált?</Heading>
        <Button colorScheme="green" onClick={() => { setGotVaccine(true) }}>Igen</Button>
        <Button colorScheme="green" onClick={() => { setGotVaccine(false) }}>Nem</Button>
      </Stack>
    </Block>
  )
}

const WasUnderwent = ({ setWasunderwent }) => {
  const date = new Date();
  date.setDate(date.getDate() - 180);
  return (
    <Block>
      <Stack>
        <Heading fontSize={25}>Az elmúlt 180 napban átesett-e a COVID-19 betegségen dokumentálható (laboratóriumi teszttel igazolva) módon?</Heading>
        <Text>A 180 nappal ezelőtti dátum: {date.toLocaleDateString("hu-hu")}</Text>
        <Button colorScheme="green" onClick={() => { setWasunderwent(true) }}>Igen</Button>
        <Button colorScheme="green" onClick={() => { setWasunderwent(false) }}>Nem</Button>
      </Stack>
    </Block>
  )
}

const CountryColor = ({ setSourceCountry }) => {
  return (
    <Block>
      <Stack>
        <Heading fontSize={25}>Milyen szín-besorolású országból érkezik?</Heading>
        {sourceCountryColor.map((v, i) => (<Button colorScheme={v.color} onClick={() => { setSourceCountry(i) }}>{v.text}</Button>))}
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

const VaccineType = ({ setApprovedVaccinated }) => {

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
      setApprovedVaccinated(true)
    } else {
      setApprovedVaccinated(false)
    }
  }

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
  return <HStack gap={5} border="1px" borderRadius={10} borderColor="teal.100">
    <Box w='100%' h='100%' margin={2} justifyContent="center" alignContent="center">
      <Text>
        <strong>{name}</strong> <br />
        <small>{manufacturer}</small>
      </Text>
    </Box>
    <Flex w='40%' h='100%' margin={2} justifyContent="center" alignContent="center">
      {count > 0 ? (<>{count} dózis</>) : (<>-</>)}
    </Flex>
    <Box w='80%' h='100%' margin={2} justifyContent="center" alignContent="center">
      <Button colorScheme="green" margin={2} onClick={() => {setCount(+1)}}>+</Button>
      <Button colorScheme="orange" margin={2} onClick={() => {setCount(-1)}}>-</Button>
    </Box>
  </HStack>
}

const Quarantine = ({ age }) => {
  return (
    <Block>
      <Stack>
        <Heading color="red">Karantén szükséges</Heading>
        <Text>
        <UnorderedList>
            {age > 0 && <ListItem>Online regisztráció a <ExternalLink href="https://reg.entrynorway.no" text="reg.entrynorway.no" /> oldalon, leghamarabb 72 órával, legkésőbb pedig 2 órával a beutazás előtt.</ListItem>}
            {age > 1 && <ListItem>Beutazás előtt kötelező egy 24 óránál nem régebbi antigén gyorsteszt vagy PCR teszt. A mintavétel ideje számít.</ListItem>}
            <ListItem>Határbelépéskor kötelező antigén gyorstesztet végezni, melynek az eredményét meg kell várni. Ha nincsen tesztállomás, nem üzemel, vagy a hatóságok másként rendelkeznek, akkor 24 órán belül kell antigén vagy PCR tesztet csináltatni. Amennyiben a gyorsteszt eredménye pozitív, úgy 24 órán belül kötelező PCR tesztet csináltatni.</ListItem>
        </UnorderedList>
        </Text>
        <Heading as="h3">Karantén:</Heading>
        <Text>
        <UnorderedList>
            <ListItem>10 nap otthoni karantén.</ListItem>
            <ListItem>A beutazást követő 3. napon lehetőség van egy PCR teszt elvégzésére, melynek negatív eredményével véget érhet a karantén.</ListItem>
            <ListItem>A beutazás napja a 0. nap, az eredmény pedig a teszt elvégzése után 24-72 órán belül van meg.</ListItem>
        </UnorderedList>
        </Text>
      </Stack>
    </Block>
  )
}

const NotVaccinatedGreen = ({ age }) => {
  return (
    <Block>
      <Stack>
        <Heading color="orange">Nincs karantén</Heading>
        <Text>
          <UnorderedList>
            { age > 0 && <ListItem>Online regisztráció a <ExternalLink href="https://reg.entrynorway.no" text="reg.entrynorway.no" /> oldalon, leghamarabb 72 órával, legkésőbb pedig 2 órával a beutazás előtt.</ListItem> }
            { age = 2 && <ListItem>Beutazás előtt kötelező egy 24 óránál nem régebbi antigén gyorsteszt vagy PCR teszt. A mintavétel ideje számít.</ListItem> }
            <ListItem>Határbelépéskor kötelező antigén gyorstesztet végezni, melynek az eredményét meg kell várni. Ha nincsen tesztállomás, nem üzemel, vagy a hatóságok másként rendelkeznek, akkor 24 órán belül kell antigén vagy PCR tesztet csináltatni. Amennyiben a gyorsteszt eredménye pozitív, úgy 24 órán belül kötelező PCR tesztet csináltatni.</ListItem>
          </UnorderedList>
        </Text>
      </Stack>
    </Block>
  )
}

const Vaccinated = ({ age }) => {
  return (
    <Block>
      <Stack>
        <Heading color="green">Nincs karantén</Heading>
        <Text>
          <UnorderedList>
            { age > 0 && <ListItem>Online regisztráció a <ExternalLink href="https://reg.entrynorway.no" text="reg.entrynorway.no" /> oldalon, leghamarabb 72 órával, legkésőbb pedig 2 órával a beutazás előtt.</ListItem> }
            <ListItem>Határbelépéskor kötelező antigén gyorstesztet végezni, melynek az eredményét meg kell várni. Ha nincsen tesztállomás, nem üzemel, vagy a hatóságok másként rendelkeznek, akkor 24 órán belül kell antigén vagy PCR tesztet csináltatni. Amennyiben a gyorsteszt eredménye pozitív, úgy 24 órán belül kötelező PCR tesztet csináltatni.</ListItem>
            <ListItem>Nincs karantén, azonban a 3. napon ajánlott tesztelni.</ListItem>
          </UnorderedList>
        </Text>
      </Stack>
    </Block>
  )
}

export default App;
