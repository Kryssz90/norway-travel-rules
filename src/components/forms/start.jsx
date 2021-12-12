import {Box, Text, Center, Button} from '@chakra-ui/react'
import ExternalLink from '../utils/externalLink'
import maNoLogo from '../../images/mano-logo.png'

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

export default Start;