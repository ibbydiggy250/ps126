import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname])

  const handleNavigation = (path: string) => {
    try {
      // Close mobile menu
      setIsMobileMenuOpen(false)
      
      // Immediate scroll to top
      window.scrollTo({ top: 0, behavior: 'auto' })
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      
      // Navigate with error handling
      navigate(path)
      
      // Multiple scroll attempts after navigation
      const scrollAttempts = [50, 100, 200, 300]
      scrollAttempts.forEach(delay => {
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'auto' })
          document.documentElement.scrollTop = 0
          document.body.scrollTop = 0
        }, delay)
      })
    } catch (error) {
      console.error('Navigation error:', error)
      // Fallback navigation
      window.location.href = path
    }
  }



  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-red-600/95 backdrop-blur-sm border-b border-red-700 shadow-sm' 
          : 'bg-black/20 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <button onClick={() => handleNavigation('/')}>
              <img 
                src="https://ps126.org/wp-content/uploads/2023/09/cropped-0-192x192.png" 
                alt="PS126X Logo"
                className="h-14 w-auto hover:opacity-80 transition-opacity"
              />
            </button>
          </div>

          {/* Navigation items on the right */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavigation('/')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-white hover:text-yellow-200' : 'text-white hover:text-blue-200'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation('/about')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-white hover:text-yellow-200' : 'text-white hover:text-blue-200'
              }`}
            >
              About
            </button>
            <button
              onClick={() => handleNavigation('/programs')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-white hover:text-yellow-200' : 'text-white hover:text-blue-200'
              }`}
            >
              Programs
            </button>
            <button
              onClick={() => handleNavigation('/staff')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-white hover:text-yellow-200' : 'text-white hover:text-blue-200'
              }`}
            >
              Staff Directory
            </button>
            <button
              onClick={() => handleNavigation('/parents')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-white hover:text-yellow-200' : 'text-white hover:text-blue-200'
              }`}
            >
              Parents
            </button>
            <button
              onClick={() => handleNavigation('/news')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-white hover:text-yellow-200' : 'text-white hover:text-blue-200'
              }`}
            >
              News
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${
                isScrolled ? 'text-white' : 'text-white'
              }`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-red-600/95 backdrop-blur-sm border-t border-red-700">
              <button
                onClick={() => handleNavigation('/')}
                className="block w-full text-left px-3 py-2 text-white hover:text-yellow-200 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation('/about')}
                className="block w-full text-left px-3 py-2 text-white hover:text-yellow-200 font-medium"
              >
                About
              </button>
              <button
                onClick={() => handleNavigation('/programs')}
                className="block w-full text-left px-3 py-2 text-white hover:text-yellow-200 font-medium"
              >
                Programs
              </button>
              <button
                onClick={() => handleNavigation('/staff')}
                className="block w-full text-left px-3 py-2 text-white hover:text-yellow-200 font-medium"
              >
                Staff Directory
              </button>
              <button
                onClick={() => handleNavigation('/parents')}
                className="block w-full text-left px-3 py-2 text-white hover:text-yellow-200 font-medium"
              >
                Parents
              </button>
              <button
                onClick={() => handleNavigation('/news')}
                className="block w-full text-left px-3 py-2 text-white hover:text-yellow-200 font-medium"
              >
                News
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 