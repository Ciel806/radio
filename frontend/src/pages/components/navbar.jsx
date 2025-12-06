
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Navbar({ isScrolled }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-zinc-900/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <div className="w-2 h-2 bg-zinc-900 rounded-full" />
            </div>
            <span className="text-xl font-bold text-amber-50">Vinyl Radio</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <Link to="/shows" className="text-amber-100/70 hover:text-amber-50 transition-colors">
              Shows
            </Link>
            <Link to="/about" className="text-amber-100/70 hover:text-amber-50 transition-colors">
              About
            </Link>
            <Link to="/schedule" className="text-amber-100/70 hover:text-amber-50 transition-colors">
              Schedule
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-amber-50">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
            <Link to="/shows" className="block text-amber-100/70 hover:text-amber-50 py-2 transition-colors">
              Shows
            </Link>
            <Link to="/about" className="block text-amber-100/70 hover:text-amber-50 py-2 transition-colors">
              About
            </Link>
            <Link to="/schedule" className="block text-amber-100/70 hover:text-amber-50 py-2 transition-colors">
              Schedule
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
