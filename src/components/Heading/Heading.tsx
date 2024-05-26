'use client'

interface HeadingProps {
  children: string
  maxWidth?: number
}

export const Heading = ({ children, maxWidth }: HeadingProps) => {
  return (
    <h1
      style={{
        maxWidth: maxWidth ? `${maxWidth}px` : 'none',
      }}
      className="inline-block text-lg font-bold md:text-3xl"
    >
      {children}
    </h1>
  )
}
