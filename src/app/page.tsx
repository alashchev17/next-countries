import { Heading } from '@/components/Heading'
import { SelectForm } from '@/components/SelectForm'
import type { CountriesResponse, Country } from '@/types'

export default async function Home() {
  const response: CountriesResponse = await (
    await fetch('https://restfulcountries.com/api/v1/countries', {
      headers: {
        Authorization: `Bearer ${process.env.API_SECRET_KEY}`,
      },
    })
  ).json()

  const countries: Country[] = Array.isArray(response.data) ? response.data : []
  return (
    <>
      <Heading>Countries Database</Heading>
      <SelectForm countries={countries} />
    </>
  )
}
