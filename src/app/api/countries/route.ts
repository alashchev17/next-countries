import { Country } from '@/types'

export async function GET(request: Request) {
  const response = await fetch('https://restfulcountries.com/api/v1/countries', {
    headers: {
      Authorization: `Bearer ${process.env.API_SECRET_KEY}`,
    },
  })

  // Check if the response was successful
  if (!response.ok) {
    throw new Error('Failed to fetch countries')
  }

  // Parse the JSON response
  const data = await response.json()

  // Return the response
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  })
}
