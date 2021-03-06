export const ageValues = ['16 alatt', '16-18 között', '18 vagy idősebb'];

export const sourceCountryColor = [
  {
    text: 'Zöld',
    color: 'green'
  },
  {
    text: 'Narancssárga',
    color: 'orange'
  },
  {
    text: 'Vörös',
    color: 'red'
  },
  {
    text: 'Sötétvörös',
    color: 'red'
  }
];

export const defaultUserState = {
  age: undefined,
  sourceCountry: undefined,
  approvedVaccinated: undefined,
  wasunderwent: undefined,
  gotVaccine: undefined
};

export const initialVaccineState = [
  {
    id: 'pfizer',
    manufacturer: 'Pfizer-BioNTech',
    name: 'Pfizer Comirnaty',
    score: 1
  },
  {
    id: 'moderna',
    manufacturer: 'ModernaTX, Inc',
    name: 'Moderna',
    score: 1
  },
  {
    id: 'astra',
    manufacturer: 'Astra Zeneca',
    name: 'Vaxzevria',
    score: 1
  },
  {
    id: 'janssen',
    manufacturer: 'Janssen Pharmaceuticals',
    name: 'Johnson & Johnson',
    score: 2
  },
  {
    id: 'sinopharm',
    manufacturer: 'Sinopharm',
    name: 'Sinopharm',
    score: 1
  },
  {
    id: 'sputnik',
    manufacturer: 'Gamaleja Kutatóközpont',
    name: 'Szputnyik V',
    score: 0
  }
];
