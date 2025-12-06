import { useEffect, useState } from "react"

export default function FeaturedShows() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById("shows-section")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const shows = [
    {
      id: 1,
      title: "Late Night Sessions",
      host: "DJ Marcus",
      time: "8 PM - 12 AM",
      genre: "Jazz & Soul",
      gradient: "bg-gradient-to-br from-gray-900 via-[#ce443d]/20 to-black",
    },
    {
      id: 2,
      title: "Vinyl Classics",
      host: "Alex Rivera",
      time: "4 PM - 8 PM",
      genre: "Vintage Hits",
      gradient: "bg-gradient-to-br from-black via-gray-900 to-[#ce443d]/20",
    },
    {
      id: 3,
      title: "Underground Beats",
      host: "DJ Echo",
      time: "12 AM - 4 AM",
      genre: "Electronic",
      gradient: "bg-gradient-to-br from-[#ce443d]/30 via-black to-gray-900",
    },
  ]

  return (
    <section id="shows-section" className="py-16 px-4 bg-black mt-20 mb-20 border-t-2 border-b-2 border-[#ce443d]/50">
      <div className="max-w-6xl pr-10 pl-10 items-center mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#deddd8] mb-12 text-center border-b-2 border-[#ce443d] pb-4">
          FEATURED SHOWS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {shows.map((show, index) => (
            <div
              key={show.id}
              className={`group cursor-pointer transform transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`${show.gradient} rounded-2xl p-8 h-64 flex flex-col justify-between text-[#deddd8] shadow-lg border border-[#ce443d]/20 group-hover:shadow-2xl group-hover:shadow-[#ce443d]/20 transform group-hover:-translate-y-2 transition-all duration-300`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-[#ce443d]"></div>
                    <span className="text-sm text-[#ce443d] font-semibold uppercase tracking-wider">
                      {show.genre}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mt-2 group-hover:text-[#ce443d] transition-colors">
                    {show.title}
                  </h3>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full border border-[#ce443d] flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#ce443d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#deddd8] font-medium">{show.host}</p>
                      <p className="text-sm text-[#deddd8]/70">{show.time}</p>
                    </div>
                  </div>
                  <button className="w-full py-2 mt-4 bg-black/50 border border-[#ce443d]/30 text-[#deddd8] rounded-lg hover:bg-[#ce443d] hover:text-black transition-colors text-sm font-medium">
                    Listen Live
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}