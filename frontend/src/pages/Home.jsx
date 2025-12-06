
import { useState, useEffect } from "react"
import Navbar from "./components/navbar.jsx"
import HeroSection from "./components/hero-section.jsx"
import AudioPlayer from "./components/audio-player.jsx"
import FeaturedShows from "./components/featured-shows.jsx"
import Footer from "./components/footer.jsx"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
  <main className="overflow-hidden bg-gradient-to-b from-zinc-950 via-amber-950 to-zinc-950">
    <Navbar isScrolled={isScrolled} />

    <div id="schedule">
      <HeroSection />
    </div>

    <AudioPlayer />

    <div id="shows">
      <FeaturedShows />
    </div>

    <Footer />
  </main>
)

}
