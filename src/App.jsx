import React, { useState } from 'react';
import { Container, Button, Heading, Stack } from '@chakra-ui/react';
import Block from './components/utils/block';
import Start from './components/forms/start';
import Age from './components/forms/age';
import Vaccine from './components/forms/vaccine';
import WasUnderwent from './components/forms/wasUnderwent';
import CountryColor from './components/forms/countryColor';
import VaccineType from './components/forms/vaccineType';
import { defaultUserState, ageValues, sourceCountryColor } from './constants';
import Result from './components/final/result';

const App = () => {
  const [started, setStarted] = useState(false);
  const [age, setAge] = useState(defaultUserState.age);
  const [sourceCountry, setSourceCountry] = useState(
    defaultUserState.sourceCountry
  );
  const [gotVaccine, setGotVaccine] = useState(defaultUserState.gotVaccine);
  const [approvedVaccinated, setApprovedVaccinated] = useState(
    defaultUserState.approvedVaccinated
  );
  const [wasunderwent, setWasunderwent] = useState(
    defaultUserState.wasunderwent
  );

  const getMeasures = () => {
    const vaccinated = gotVaccine && approvedVaccinated;

    switch (age) {
      case 0: // under 16
        return {
          preRegistration: false,
          testOnArrival: false,
          testBeforeArrival: false,
          quarantine: false,
          testOnDay3: 'no'
        };
      case 1: // 16-18
        return {
          preRegistration: true,
          testOnArrival: false,
          testBeforeArrival: false,
          quarantine: false,
          testOnDay3: 'no'
        };

      case 2: // 18+
        switch (vaccinated) {
          case true: // Approved vaccine
            return {
              preRegistration: true,
              testOnArrival: false,
              testBeforeArrival: false,
              quarantine: false,
              testOnDay3: 'no'
            };
          case false: // Not approved vaccine, no vaccine
            switch (wasunderwent) {
              case true: // Underwent
                return {
                  preRegistration: true,
                  testOnArrival: false,
                  testBeforeArrival: false,
                  quarantine: false,
                  testOnDay3: 'no'
                };
              case false: // Not underwent
                return {
                  preRegistration: true,
                  testOnArrival: false,
                  testBeforeArrival: true,
                  quarantine: false,
                  testOnDay3: 'no'
                };
              default:
                return undefined;
            }
          default:
            return undefined;
        }
      default:
        return undefined;
    }
  };

  const renderComponent = () => {
    const measures = getMeasures();
    if (measures) {
      return <Result measures={measures} />;
    }

    if (!started) return <Start setStarted={setStarted} />;
    if (age === undefined) return <Age setAge={setAge} />;
    if (gotVaccine === undefined)
      return <Vaccine setGotVaccine={setGotVaccine} />;
    if (gotVaccine === true && approvedVaccinated === undefined)
      return <VaccineType setApprovedVaccinated={setApprovedVaccinated} />;
    if (wasunderwent === undefined)
      return <WasUnderwent setWasunderwent={setWasunderwent} />;
    if (sourceCountry === undefined)
      return <CountryColor setSourceCountry={setSourceCountry} />;

    return <>Invalid state</>;
  };

  return (
    <div className="App">
      <Container maxW="xl" centerContent>
        <Heading fontSize={36} marginBottom={6} textAlign="center">
          Beutaz??si szab??lyok Norv??gi??ba
        </Heading>
        {age !== undefined && (
          <Block>
            <Stack width="xl">
              {age !== undefined && (
                <div>
                  <b>Kor:</b>
                  <br />
                  {ageValues[age]}
                </div>
              )}
              {gotVaccine !== undefined && (
                <div>
                  <b>Kapott COVID-19 olt??st:</b>
                  <br /> {gotVaccine ? 'Igen' : 'Nem'}{' '}
                </div>
              )}
              {approvedVaccinated !== undefined && (
                <div>
                  <b>Norv??gia ??ltal elfogadott olt??st kapott:</b> <br />{' '}
                  {approvedVaccinated ? 'Igen' : 'Nem'}{' '}
                </div>
              )}
              {wasunderwent !== undefined && (
                <div>
                  <b>??tesett a COVID-19 betegs??gben az elm??lt 180 napban:</b>
                  <br /> {wasunderwent ? 'Igen' : 'Nem'}{' '}
                </div>
              )}
              {sourceCountry !== undefined && (
                <div>
                  <b>Kiindul??si orsz??g:</b>
                  <br /> {sourceCountryColor[sourceCountry].text}{' '}
                </div>
              )}
            </Stack>
          </Block>
        )}
        {renderComponent()}
        <Button
          colorScheme="gray"
          size="sm"
          marginTop="15px"
          textColor="black"
          onClick={() => {
            setStarted(false);
            setAge(defaultUserState.age);
            setSourceCountry(defaultUserState.sourceCountry);
            setGotVaccine(undefined);
            setApprovedVaccinated(defaultUserState.approvedVaccinated);
            setWasunderwent(defaultUserState.wasunderwent);
          }}>
          ??jrakezd??s
        </Button>
        Friss??tve: 2022. 02. 02.
      </Container>
    </div>
  );
};

export default App;
