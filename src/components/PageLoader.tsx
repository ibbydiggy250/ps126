import { useEffect, useState } from 'react'

interface PageLoaderProps {
  children: React.ReactNode
}

export function PageLoader({ children }: PageLoaderProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Ensure page is ready
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 10)

    // Also listen for page visibility
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        setIsLoaded(true)
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      clearTimeout(timer)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return <>{children}</>
} 