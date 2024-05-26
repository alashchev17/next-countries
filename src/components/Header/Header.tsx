'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
export const Header = () => {
  const [isSpanActive, setIsSpanActive] = useState(true)
  useEffect(() => {
    const handleHeaderResize = () => {
      if (window.innerWidth <= 380) {
        setIsSpanActive(false)
        return
      }
      setIsSpanActive(true)
    }
    window.addEventListener('resize', handleHeaderResize)
    handleHeaderResize()
    return () => {
      window.removeEventListener('resize', handleHeaderResize)
    }

  }, [])
  return (
    <header className="flex justify-between px-8 py-6 text-white bg-red-600 font-semibold text-sm md:text-md">
      <div className="flex gap-3">
        <Link href="/">Home</Link>
        <Link href="/ip-check">IP Check</Link>
      </div>
      {isSpanActive && <span>Next-Countries Homework</span>}
    </header>
  )
}
