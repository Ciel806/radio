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
    <main className="overflow-hidden bg-gradient-to-b from-zinc-950 via-amber-950 to-zinc-950">
      <Navbar isScrolled={isScrolled} />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center fade-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-amber-50 mb-6 text-pretty">
            About Vinyl Radio
          </h1>
          <p className="text-xl sm:text-2xl text-amber-100/80 mb-8 text-pretty">
            Bringing back the warmth and authenticity of vinyl in the digital age
          </p>
        </div>
      </section>

      {/* Mission Section */}
      {stationData && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
                <h2 className="text-4xl font-bold text-amber-50 mb-6">Our Mission</h2>
                <p className="text-amber-100/70 text-lg leading-relaxed mb-4">{stationData.mission}</p>
                <p className="text-amber-100/70 text-lg leading-relaxed">{stationData.vision}</p>
              </div>
              <div className="fade-in-up" style={{ animationDelay: "0.4s" }}>
                <div className="aspect-square bg-gradient-to-br from-amber-600 to-amber-900 rounded-lg shadow-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-amber-50 mb-2">
                      {stationData.yearsActive}
                    </div>
                    <p className="text-amber-100">Years of Broadcasting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-amber-50 text-center mb-16">Meet Our Team</h2>

          {!loading && team.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, idx) => (
                <div
                  key={idx}
                  className="group fade-in-up"
                  style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
                >
                  <div className="bg-zinc-900/50 border border-amber-900/30 rounded-lg p-8 hover:border-amber-600/50 transition-all duration-300">
                    <div className="w-24 h-24 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <span className="text-4xl font-bold text-amber-50">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-amber-50 text-center mb-2">{member.name}</h3>
                    <p className="text-amber-600 text-center font-semibold mb-3">{member.role}</p>
                    <p className="text-amber-100/70 text-center text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-amber-100/70">Loading team data...</div>
          )}
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-amber-50 text-center mb-16">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Authenticity", text: "We believe in bringing authentic curated music experiences." },
              { title: "Community", text: "Building a community of music lovers who value connection." },
              { title: "Quality", text: "Every track and show is carefully selected." },
              { title: "Nostalgia", text: "Honoring the history of vinyl with modern tech." }
            ].map((v, i) => (
              <div key={i} className="fade-in-up" style={{ animationDelay: `${(i + 1) * 0.1}s` }}>
                <div className="flex items-start gap-4">
                  <div className="text-3xl text-amber-600">♦</div>
                  <div>
                    <h3 className="text-2xl font-bold text-amber-50 mb-2">{v.title}</h3>
                    <p className="text-amber-100/70">{v.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-amber-50 mb-6">Start Listening Today</h2>
          <p className="text-lg text-amber-100/70 mb-8">
            Join thousands tuning into Vinyl Radio for curated music experiences.
          </p>

          <Link
            to="/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-zinc-950 font-bold rounded-lg hover:shadow-lg hover:shadow-amber-600/50 transition-all duration-300 hover:scale-105"
          >
            Go to Home
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
