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
    <div className="flex flex-col gap-6 max-w-[450px] text-center justify-center ml-[auto] mr-[auto] h-[calc(100dvh-72px)]">
      <Heading>Countries Database</Heading>
      <SelectForm countries={countries} />
    </div>
  )
}
