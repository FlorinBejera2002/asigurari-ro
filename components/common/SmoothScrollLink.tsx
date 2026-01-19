'use client'

import Link from 'next/link'
import { MouseEvent, ReactNode } from 'react'

interface SmoothScrollLinkProps {
  href: string
  className?: string
  children: ReactNode
}

export default function SmoothScrollLink({
  href,
  className,
  children
}: SmoothScrollLinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  )
}
