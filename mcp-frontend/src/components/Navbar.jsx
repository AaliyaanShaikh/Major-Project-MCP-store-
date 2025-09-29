import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  // Page transition animation
  useEffect(() => {
    setIsAnimating(true)
    const timer = setTimeout(() => setIsAnimating(false), 300)
    return () => clearTimeout(timer)
  }, [location.pathname])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Info', path: '/info' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <nav className={`transition-all duration-500 ${
      location.pathname === '/info' || location.pathname === '/contact'
        ? 'bg-white shadow-lg border-b border-gray-200' 
        : 'bg-black shadow-2xl'
    } ${isAnimating ? 'scale-105 opacity-90' : 'scale-100 opacity-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className={`text-2xl font-bold ${location.pathname === '/info' || location.pathname === '/contact' ? 'text-gray-900' : 'text-white'}`}>MCP Store</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                      isActive(item.path)
                        ? location.pathname === '/info' || location.pathname === '/contact'
                          ? 'text-gray-900 bg-gray-100 shadow-lg'
                          : 'text-white bg-gray-800 shadow-lg'
                        : location.pathname === '/info' || location.pathname === '/contact'
                          ? 'text-gray-600'
                          : 'text-gray-300'
                    }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
                <Link
                  to="/login"
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    location.pathname === '/info' || location.pathname === '/contact'
                      ? 'text-gray-600'
                      : 'text-gray-300'
                  }`}
                >
                  Login
                </Link>
                <Link
                  to="/sign"
                  className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg ${
                    location.pathname === '/info' || location.pathname === '/contact'
                      ? 'bg-gray-800 text-white'
                      : location.pathname === '/login' || location.pathname === '/sign'
                        ? 'bg-white text-gray-900 border border-gray-300'
                        : 'bg-blue-600 text-white'
                  }`}
                >
                  Sign Up
                </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`inline-flex items-center justify-center p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-inset transition-all duration-300 ${
                    location.pathname === '/info' || location.pathname === '/contact'
                      ? 'text-gray-600 focus:ring-gray-300'
                      : 'text-gray-300 focus:ring-gray-600'
                  }`}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
            <div className="md:hidden">
              <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t transition-all duration-500 ${
                location.pathname === '/info' || location.pathname === '/contact'
                  ? 'bg-white border-gray-200' 
                  : 'bg-black border-gray-800'
              }`}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300 ${
                  isActive(item.path)
                    ? location.pathname === '/info' || location.pathname === '/contact'
                      ? 'text-gray-900 bg-gray-100 shadow-lg'
                      : 'text-white bg-gray-800 shadow-lg'
                    : location.pathname === '/info' || location.pathname === '/contact'
                      ? 'text-gray-600'
                      : 'text-gray-300'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
                <div className={`pt-4 pb-3 border-t ${
                  location.pathname === '/info' || location.pathname === '/contact' ? 'border-gray-200' : 'border-gray-800'
                }`}>
                  <div className="flex items-center px-3 space-x-3">
                    <Link
                      to="/login"
                      className={`px-4 py-2 rounded-lg text-base font-semibold transition-all duration-300 ${
                        location.pathname === '/info' || location.pathname === '/contact'
                          ? 'text-gray-600'
                          : 'text-gray-300'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      to="/sign"
                      className={`px-6 py-2 rounded-lg text-base font-semibold transition-all duration-300 shadow-lg ${
                        location.pathname === '/info' || location.pathname === '/contact'
                          ? 'bg-gray-800 text-white'
                          : location.pathname === '/login' || location.pathname === '/sign'
                            ? 'bg-white text-gray-900 border border-gray-300'
                            : 'bg-blue-600 text-white'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
