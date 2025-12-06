export default function Footer() {
  return (
    <footer className="bg-black py-16 px-4 border-t-2 border-[#ce443d]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-[#ce443d] relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-black to-gray-900 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#deddd8]"></div>
                </div>
              </div>
              <h3 className="text-xl font-bold tracking-widest text-[#deddd8]">
                VINYL<span className="text-[#ce443d]">RADIO</span>
              </h3>
            </div>
            <p className="text-[#deddd8]/60 text-sm">
              Analog sound in a digital world. Experience music the way it was meant to be heard.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#deddd8] font-bold mb-4 text-lg">QUICK LINKS</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-[#deddd8]/60 hover:text-[#ce443d] transition-colors">
                  All Shows
                </a>
              </li>
              <li>
                <a href="#" className="text-[#deddd8]/60 hover:text-[#ce443d] transition-colors">
                  Schedule
                </a>
              </li>
              <li>
                <a href="#" className="text-[#deddd8]/60 hover:text-[#ce443d] transition-colors">
                  Archive
                </a>
              </li>
              <li>
                <a href="#" className="text-[#deddd8]/60 hover:text-[#ce443d] transition-colors">
                  Stations
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-[#deddd8] font-bold mb-4 text-lg">COMMUNITY</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-[#deddd8]/60 hover:text-[#ce443d] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-[#deddd8]/60 hover:text-[#ce443d] transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-[#deddd8]/60 hover:text-[#ce443d] transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-[#deddd8]/60 hover:text-[#ce443d] transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-[#deddd8] font-bold mb-4 text-lg">FOLLOW US</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#ce443d]"></div>
                <a href="#" className="text-[#deddd8]/60 hover:text-[#ce443d] transition-colors">
                  Instagram
                </a>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#ce443d]"></div>
                <a href="#" className="text-[#deddd8]/60 hover:text-[#ce443d] transition-colors">
                  Twitter/X
                </a>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#ce443d]"></div>
                <a href="#" className="text-[#deddd8]/60 hover:text-[#ce443d] transition-colors">
                  Facebook
                </a>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#ce443d]"></div>
                <a href="#" className="text-[#deddd8]/60 hover:text-[#ce443d] transition-colors">
                  Spotify
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-[#ce443d]/30 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-[#deddd8]/60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#ce443d]/30 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#ce443d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-[#deddd8]">Call Us</p>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#ce443d]/30 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#ce443d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-[#deddd8]">Email Us</p>
                <p>info@vinylradio.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#ce443d]/30 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#ce443d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-[#deddd8]">Visit Us</p>
                <p>123 Vinyl Street, Music City</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="border-t border-[#ce443d]/30 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-[#deddd8]/60">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="font-medium text-[#deddd8] mb-2">© 2024 VINYL RADIO</p>
            <p>All rights reserved • Analog sound in a digital world</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#ce443d] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#ce443d] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#ce443d] transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}