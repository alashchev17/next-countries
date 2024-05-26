import { Country } from '@/types'
import { getCountryInformation } from '@/utils/getCountryInformation'

interface CountryInformationProps {
  country: Country
}

export const CountryInformation = ({ country }: CountryInformationProps) => {
  const countryInformation = getCountryInformation(country)
  return (
    <div className="w-full flex flex-col gap-3 items-start mt-4">
      {countryInformation.map((item) => {
        if (item.isLink) {
          return (
            <span key={item.title}>
              {item.title}:{' '}
              <a
                className="font-bold text-red-400 hover:text-red-600 transition-colors"
                href={item.value}
                target="_blank"
                referrerPolicy="no-referrer"
              >
                {item.website}
              </a>
            </span>
          )
        }
        return (
          <div key={item.title} className="flex flex-col w-full gap-3 items-start">
            <span>
              {item.title}: <span className="font-bold">{item.value}</span>
            </span>
            {item.isDivided && <div className="w-full rounded-full h-[1px] bg-zinc-200 self-stretch" />}
          </div>
        )
      })}
    </div>
  )
}
