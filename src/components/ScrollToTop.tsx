import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Multiple attempts to ensure scroll happens
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'
      })
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }

    // Immediate scroll
    scrollToTop()
    
    // Additional attempts with small delays to ensure it works
    const timeout1 = setTimeout(scrollToTop, 10)
    const timeout2 = setTimeout(scrollToTop, 50)
    const timeout3 = setTimeout(scrollToTop, 100)

    return () => {
      clearTimeout(timeout1)
      clearTimeout(timeout2)
      clearTimeout(timeout3)
    }
  }, [pathname])

  return null
} 