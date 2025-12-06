import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Navbar from "./components/navbar"
import Footer from "./components/footer"

export default function About() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [stationData, setStationData] = useState(null)
  const [team, setTeam] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const stationRes = await fetch("http://localhost:5000/stations")
        const teamRes = await fetch("http://localhost:5000/team")

        const stationJson = await stationRes.json()
        const teamJson = await teamRes.json()

        setStationData(stationJson)
        setTeam(teamJson)
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
   <main
  className="min-h-screen w-full relative overflow-hidden text-white 
  bg-[radial-gradient(circle_at_top,rgba(206,68,61,0.35),rgba(0,0,0,1)_70%)]"
>
  {/* Soft dark overlay to blend sections smoothly */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40 pointer-events-none" />

  <div className="relative z-10 bg-black">
    <Navbar isScrolled={isScrolled} />

    {/* Hero Section */}
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center bg-black">
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6
          text-[#ce443d] animate-fade-in"
        >
          About Vinyl Radio
        </h1>

        <p
          className="text-lg sm:text-xl text-[#deddd8]/70 mb-8 text-pretty 
          max-w-2xl mx-auto animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Bringing back the warmth and authenticity of vinyl in the digital age
        </p>
      </div>
    </section>

    {/* MISSION SECTION */}
    {stationData && (
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
        <div className="relative max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#deddd8]">Our Mission</h2>
            <p className="text-[#deddd8]/70 text-lg leading-relaxed">
              {stationData.mission}
            </p>
            <p className="text-[#deddd8]/60 text-base leading-relaxed">
              {stationData.vision}
            </p>
          </div>

          <div className="aspect-square rounded-2xl overflow-hidden group fade-in-up"
            style={{ animationDelay: "0.2s" }}>
            <div
              className="w-full h-full bg-gradient-to-br from-[#ce443d] to-[#ce443d]/60 
              flex items-center justify-center shadow-2xl relative
              transition-transform duration-700 group-hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="text-center relative z-10">
                <div className="text-7xl font-bold text-[#deddd8] mb-3">
                  {stationData.yearsActive}
                </div>
                <p className="text-[#deddd8] text-lg font-medium">Years of Broadcasting</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )}

 {/* TEAM SECTION */}
<section className="py-24 px-4 sm:px-6 lg:px-8 relative">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-5xl font-bold text-[#deddd8] text-center mb-20">
      Meet Our Team
    </h2>

    {!loading && team.length > 0 ? (
      <div className="grid md:grid-cols-2 gap-8">
        {team.map((member, idx) => (
          <div
            key={idx}
            className="group fade-in-up flex flex-col items-center"
            style={{ animationDelay: `${0.1 * idx}s` }}
          >
            <div
              className="h-full bg-black/60 backdrop-blur-md border 
              border-[#ce443d]/30 rounded-xl p-8 
              hover:border-[#ce443d]/60 hover:bg-black/80 
              transition-all duration-500 transform hover:-translate-y-2
              shadow-lg hover:shadow-2xl hover:shadow-[#ce443d]/20
              w-full max-w-xs mx-auto"
            >
              <div
                className="w-28 h-28 bg-gradient-to-br from-[#ce443d] to-[#ce443d]/80 
                rounded-full mx-auto mb-8 flex items-center justify-center 
                shadow-xl group-hover:shadow-[#ce443d]/40 transition-all "
              >
                <span className="text-5xl font-bold text-[#deddd8]">
                  {member.name.charAt(0)}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#deddd8] text-center mb-2">
                {member.name}
              </h3>

              <p className="text-[#ce443d] text-center font-semibold mb-4 text-sm uppercase tracking-wide">
                {member.role}
              </p>

              {member.bio && (
                <p className="text-[#deddd8]/70 text-center leading-relaxed px-2">
                  {member.bio}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    ) : (
      <div className="text-center text-[#deddd8]/50">Loading team data...</div>
    )}
  </div>
</section>


    {/* VALUES SECTION */}
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-transparent pointer-events-none" />
      <div className="relative max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-[#deddd8] text-center mb-20">Our Values</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {[
            { title: "Authenticity", text: "We believe in bringing authentic curated music experiences." },
            { title: "Community", text: "Building a community of music lovers who value connection." },
            { title: "Quality", text: "Every track and show is carefully selected." },
            { title: "Nostalgia", text: "Honoring the history of vinyl with modern tech." },
          ].map((v, i) => (
            <div
              key={i}
              className="fade-in-up"
              style={{ animationDelay: `${(i + 1) * 0.1}s` }}
            >
              <div
                className="flex items-start gap-5 p-6 rounded-lg 
                bg-black/40 hover:bg-black/60 
                border border-[#ce443d]/20 hover:border-[#ce443d]/40
                transition-all duration-500"
              >
                <div className="text-3xl text-[#ce443d] mt-1">◆</div>
                <div>
                  <h3 className="text-2xl font-bold text-[#deddd8] mb-2">{v.title}</h3>
                  <p className="text-[#deddd8]/70 leading-relaxed">{v.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#deddd8] mb-6">
          Start Listening Today
        </h2>
        <p className="text-lg text-[#deddd8]/70 mb-10 max-w-xl mx-auto">
          Join thousands tuning into Vinyl Radio for curated music experiences.
        </p>

        <Link
          href="/"
          className="inline-block px-10 py-4 
          bg-gradient-to-r from-[#ce443d] to-[#ce443d]/90 
          text-black font-bold rounded-lg 
          hover:shadow-xl hover:shadow-[#ce443d]/30 
          transition-all duration-300 transform hover:scale-105"
        >
          Go to Home
        </Link>
      </div>
    </section>

    <Footer />
  </div>

  <style jsx global>{`
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .fade-in-up {
      animation: fadeInUp 0.8s ease-out forwards;
    }
    @keyframes fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `}</style>
</main>

  )
}
