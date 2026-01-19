'use client'

import { faArrowUp } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@/components/ui/button'

export default function ScrollToTop() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Button
      className="scroll-to-top fixed bottom-5 right-5 md:bottom-4 md:right-4 lg:bottom-4 lg:right-4 bg-green-500 text-white border-none rounded-lg w-9 h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center text-lg md:text-xl lg:text-2xl cursor-pointer shadow-md md:hover:bg-green-600 md:hover:-translate-y-0.5 transition-all duration-300 z-[999]"
      onClick={handleClick}
      aria-label="Scroll to top"
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </Button>
  )
}
