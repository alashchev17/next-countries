import React from 'react'

type CountryPageLayoutProps = {
  children: React.ReactNode
}

export default function CountryPageLayout({ children }: CountryPageLayoutProps) {
  return (
    <section className="flex flex-col gap-6 max-w-[450px] text-center justify-center items-center ml-[auto] mr-[auto] h-[calc(100dvh-72px)]">
      {children}
    </section>
  )
}
