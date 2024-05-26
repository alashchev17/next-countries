import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Countries Database',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-50`}>
        <Header />
        <div className="px-8 py-2 flex flex-col gap-6 max-w-[450px] text-center justify-center ml-[auto] mr-[auto] min-h-[calc(100dvh-72px)]">{children}</div>
      </body>
    </html>
  )
}
