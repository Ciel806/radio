import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar({ isScrolled }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (id) => {
    if (location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    } else {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }, 150);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-sm shadow-lg border-b border-[#ce443d]/30"
          : "bg-transparent"
      }`}
      style={{
        background: !isScrolled
          ? "linear-gradient(to bottom, rgba(206, 68, 61, 0.3), rgba(206, 68, 61, 0))"
          : undefined
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">

          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            onClick={() => setIsOpen(false)}
          >
            <div className="w-10 h-10 rounded-full border-2 border-[#ce443d] relative group-hover:scale-110 transition-transform">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-black to-gray-900 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-[#deddd8]" />
              </div>
            </div>
            <span className="text-xl font-bold tracking-widest text-[#deddd8]">
              VINYL<span className="text-[#ce443d]">RADIO</span>
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-8">
            <button
              onClick={() => handleScroll("shows")}
              className="text-[#deddd8]/70 hover:text-[#ce443d] transition-colors font-medium tracking-wide text-sm"
            >
              SHOWS
            </button>

              <button
                onClick={() => handleScroll("schedule")}
                className="text-[#deddd8]/70 hover:text-[#ce443d] transition-colors font-medium tracking-wide text-sm"
              >
                SCHEDULE
              </button>


            <Link
              to="/programs"
              className="text-[#deddd8]/70 hover:text-[#ce443d] transition-colors font-medium tracking-wide text-sm"
              onClick={() => setIsOpen(false)}
            >
              PROGRAMS
            </Link>

            <Link
              to="/about"
              className="text-[#deddd8]/70 hover:text-[#ce443d] transition-colors font-medium tracking-wide text-sm"
              onClick={() => setIsOpen(false)}
            >
              ABOUT
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#deddd8] hover:text-[#ce443d] transition-colors"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-4 space-y-2 backdrop-blur-sm">

            <button
              onClick={() => handleScroll("shows")}
              className="block w-full text-left text-[#deddd8]/70 hover:text-[#ce443d] py-3 px-4 hover:bg-black/50 rounded-lg"
            >
              SHOWS
            </button>

            <button
              onClick={() => handleScroll("schedule")}
              className="block w-full text-left text-[#deddd8]/70 hover:text-[#ce443d] py-3 px-4 hover:bg-black/50 rounded-lg"
            >
              SCHEDULE
            </button>

            <Link
              to="/programs"
              onClick={() => setIsOpen(false)}
              className="block text-[#deddd8]/70 hover:text-[#ce443d] py-3 px-4 hover:bg-black/50 rounded-lg"
            >
              PROGRAMS
            </Link>

            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="block text-[#deddd8]/70 hover:text-[#ce443d] py-3 px-4 hover:bg-black/50 rounded-lg"
            >
              ABOUT
            </Link>
          </div>
        )}
        
      </div>
    </nav>
  );
}
