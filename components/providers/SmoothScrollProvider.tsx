'use client'

import { useEffect } from 'react'

export default function SmoothScrollProvider({
  children
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a')

      if (anchor && anchor.hash) {
        const href = anchor.getAttribute('href')
        if (href?.startsWith('#')) {
          e.preventDefault()
          const element = document.querySelector(href)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            // Update URL without jumping
            window.history.pushState(null, '', href)
          }
        }
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return <>{children}</>
}
