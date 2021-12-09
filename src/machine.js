import { createMachine } from "xstate";

const ruleMachine = createMachine({
  id: "fetch",
  initial: "start",
  states: {
    start: {
      on: {
        START: 'vaccine',
        RESET: 'start'
      }
    },
    vaccine: {
      on: {
        YES: "vaccinetype",
        NO: "wasunderwent",
        RESET: 'start'
      },
    },
    vaccinetype: {
      on: {
        SUFFICENT: "vaccinated",
        NOTSUFFICENT: "wasunderwent",
        RESET: 'start'
      }
    },
    wasunderwent: {
      on: {
        YES: "countrycolor",
        NO: "quarantine",
        RESET: 'start'
      },
    },
    countrycolor: {
      on: {
        GREEN: "novaccinatedgreen",
        ORANGE: "novaccinatedgreen",
        RED: "quarantine",
        DARKRED: "quarantine",
        RESET: 'start'
      },
    },
    quarantine: {
      on: {
        RESET: 'start'
      }
      
    },
    novaccinatedgreen: {
      on: {
        RESET: 'start'
      }
    },
    vaccinated: {
      on: {
        RESET: 'start'
      }
    },
  },
});



export default ruleMachine