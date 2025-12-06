import { useState, useEffect } from "react";
import Navbar from "./pages/components/navbar.jsx";
import HeroSection from "./pages/components/hero-section.jsx";
import AudioPlayer from "./pages/components/audio-player.jsx";
import FeaturedShows from "./pages/components/featured-shows.jsx";
import Footer from "./pages/components/footer.jsx";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="overflow-hidden bg-gradient-to-b from-zinc-950 via-amber-950 to-zinc-950">
      <Navbar isScrolled={isScrolled} />
      <HeroSection />
      <AudioPlayer />
      <FeaturedShows />
      <Footer />
    </main>
  );
}
