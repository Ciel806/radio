export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-zinc-950 to-transparent py-16 px-4 border-t border-amber-600/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-amber-50 font-bold mb-4">Vinyl Radio</h3>
            <p className="text-amber-100/60 text-sm">Experience music the way it was meant to be heard.</p>
          </div>
          <div>
            <h4 className="text-amber-50 font-semibold mb-4">Shows</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-amber-100/60 hover:text-amber-50 transition-colors">
                  All Shows
                </a>
              </li>
              <li>
                <a href="#" className="text-amber-100/60 hover:text-amber-50 transition-colors">
                  Schedule
                </a>
              </li>
              <li>
                <a href="#" className="text-amber-100/60 hover:text-amber-50 transition-colors">
                  Archive
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-amber-50 font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-amber-100/60 hover:text-amber-50 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-amber-100/60 hover:text-amber-50 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-amber-100/60 hover:text-amber-50 transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-amber-50 font-semibold mb-4">Follow Us</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-amber-100/60 hover:text-amber-50 transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-amber-100/60 hover:text-amber-50 transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-amber-100/60 hover:text-amber-50 transition-colors">
                  Spotify
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-600/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-amber-100/50">
          <p>&copy; 2025 Vinyl Radio. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-amber-50 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-amber-50 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-amber-50 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
