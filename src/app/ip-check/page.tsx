import { headers } from 'next/headers'
import { IPData } from '@/types'
import { Heading } from '@/components/Heading'
import Image from 'next/image'
 
export default async function IPCheckPage() {
  const FALLBACK_IP_ADDRESS = '0.0.0.0'
  const IPAddress = headers().get('x-forwarded-for') ?? headers().get('x-real-ip') ?? FALLBACK_IP_ADDRESS

  const response = await fetch(`http://api.ipstack.com/${IPAddress}?access_key=${process.env.IP_SECRET_KEY}`, {cache: 'no-cache'})
  const data: IPData = await response.json()

  return (
    <>
      <Heading>IP Check Data</Heading>
      <Image src={data.location.country_flag} alt={data.country_name} width={360} height={240} />
      <div className="flex flex-col gap-2 items-start">
        <span>IP Address: <span className="font-bold">{data.ip}</span></span>
        <span>IP Type: <span className="font-bold">{data.type}</span></span>
        <span>Country: <span className="font-bold">{data.country_name}</span></span>
        <span>Country code: <span className="font-bold">{data.country_code}</span></span>
        <span>Continent: <span className="font-bold">{data.continent_name}</span></span>
        <span>Continent code: <span className="font-bold">{data.continent_code}</span></span>
        <span>Region name: <span className="font-bold">{data.region_name}</span></span>
        <span>Region code: <span className="font-bold">{data.region_code}</span></span>
        <span>City: <span className="font-bold">{data.city}</span></span>
        <span>Postal code: <span className="font-bold">{data.zip}</span></span>
      </div>
    </>
  )
}