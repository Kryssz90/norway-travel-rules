import Block from "../utils/block"
import { Stack, Heading, Button } from "@chakra-ui/react"
import { sourceCountryColor } from "../../constants"

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

export default CountryColor