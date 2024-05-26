import React from 'react'

type CountryPageLayoutProps = {
  children: React.ReactNode
}

export default function IPCheckPageLayout({ children }: CountryPageLayoutProps) {
  return (
    <>
      <section className="flex flex-col gap-6 max-w-[450px] text-center justify-center items-center ml-[auto] mr-[auto] min-h-[calc(100dvh-72px)]">
        {children}
      </section>
      <footer className="text-center text-sm text-zinc-400">Powered by <a href="https://ipstack.com" target="_blank">ipstack.com</a></footer>
    </>
  )
}
