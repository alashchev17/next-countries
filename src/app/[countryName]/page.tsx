import { BackButton } from '@/components/BackButton'
import { CountryInformation } from '@/components/CountryInformation'
import { Heading } from '@/components/Heading'
import { CountriesResponse, Country } from '@/types'
import type { Metadata } from 'next'
import Image from 'next/image'

type CountryPageProps = {
  params: {
    countryName: string
  }
}

export function generateMetadata({ params }: CountryPageProps): Metadata {
  return { title: decodeURIComponent(params.countryName) }
}

export default async function CountryPage({ params }: CountryPageProps) {
  const response: CountriesResponse = await fetch(`https://restfulcountries.com/api/v1/countries/${params.countryName}`, {
    headers: {
      Authorization: `Bearer ${process.env.API_SECRET_KEY}`,
    },
  }).then(async (response) => response.json())
  // I created this union type (CountriesResponse) to make sure that this code will work further even if the structure of API response
  // will change (right now we are receiving simple data object on API request for a certain country and an array
  // of countries on all countries API request)
  const country: Country = Array.isArray(response.data) ? response.data[0] : response.data

  return (
    <>
      <div className="w-full text-center flex flex-col items-center">
        <BackButton />
        <Heading maxWidth={280}>{country.full_name ? country.full_name : country.name}</Heading>
      </div>
      <Image className="rounded-xl" src={country.href.flag} alt={country.name} width={204} height={120} />
      <CountryInformation country={country} />
    </>
  )
}
