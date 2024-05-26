import Link from 'next/link'
export const Header = () => {
  return (
    <header className="flex justify-between px-8 py-6 text-white bg-red-600 font-semibold">
      <Link href="/">Home</Link>
      <span>Next-Countries Homework</span>
    </header>
  )
}
