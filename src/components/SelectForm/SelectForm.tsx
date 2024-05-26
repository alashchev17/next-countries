'use client'

import { Country } from '@/types'
import { useState } from 'react'
import { Button } from '../Button'
import { useRouter } from 'next/navigation'

interface SelectFormProps {
  countries: Country[]
}

export const SelectForm = ({ countries }: SelectFormProps) => {
  const router = useRouter()
  const [currentSelectedCountry, setCurrentSelectedCountry] = useState<string>('Select a country')
  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentSelectedCountry(event.target.value)
  }
  return (
    <>
      <select
        className="block w-full px-3 py-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        value={currentSelectedCountry ? currentSelectedCountry : ''}
        onChange={handleCountryChange}
      >
        <option disabled>Select a country</option>
        {countries.map((country) => (
          <option key={country.name} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
      <Button
        text="Show more"
        onClick={() => router.push(`/${currentSelectedCountry}`)}
        disabled={currentSelectedCountry === 'Select a country'}
      />
    </>
  )
}
