export interface AllCountriesResponse {
  data: Country[]
  links: Links
  meta: Meta
}

export interface SingleCountryResponse {
  data: Country
  links: Links
  meta: Meta
}

export interface Country {
  name: string
  full_name?: string
  capital: string
  iso2: string
  iso3: string
  covid19: Covid19
  current_president?: CurrentPresident
  currency: string
  phone_code: string
  continent?: string
  description?: string
  size: string
  independence_date?: string
  population: string
  href: Href2
}

export interface Covid19 {
  total_case: string
  total_deaths: string
  last_updated: string
}

export interface CurrentPresident {
  name: string
  gender: string
  appointment_start_date: string
  appointment_end_date: any
  href: Href
}

export interface Href {
  self: string
  country: string
  picture: string
}

export interface Href2 {
  self: string
  states: string
  presidents: string
  flag: string
}

export interface Links {
  first: string
  last: string
  prev: any
  next: any
}

export interface Meta {
  current_page: number
  from: number
  last_page: number
  path: string
  per_page: number
  to: number
  total: number
}

export type CountriesResponse = AllCountriesResponse | SingleCountryResponse
