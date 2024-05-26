import { Country } from '@/types'

export const getCountryInformation = (country: Country) => {
  const countryInformation = [
    {
      title: 'Population',
      value: country.population,
    },
    {
      title: 'Region',
      value: country.continent,
    },
    {
      title: 'Capital',
      value: country.capital,
    },
    {
      title: 'Area',
      value: country.size,
      isDivided: true,
    },
    {
      title: 'Currency',
      value: country.currency,
    },
    {
      title: 'Phone code',
      value: country.phone_code.includes('+') ? country.phone_code : `+${country.phone_code}`,
    },
    {
      title: 'Country code (ISO2)',
      value: country.iso2,
      isDivided: true,
    },
    {
      title: 'More information',
      value: `https://en.wikipedia.org/wiki/${country.name}`,
      website: 'Wikipedia',
      isLink: true,
    },
  ]
  return countryInformation
}
