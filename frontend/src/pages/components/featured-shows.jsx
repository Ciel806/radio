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
      image: "bg-gradient-to-br from-amber-600 to-amber-800",
    },
    {
      id: 2,
      title: "Vinyl Classics",
      host: "Alex Rivera",
      time: "4 PM - 8 PM",
      genre: "Vintage Hits",
      image: "bg-gradient-to-br from-amber-700 to-zinc-900",
    },
    {
      id: 3,
      title: "Underground Beats",
      host: "DJ Echo",
      time: "12 AM - 4 AM",
      genre: "Electronic",
      image: "bg-gradient-to-br from-zinc-800 to-amber-900",
    },
  ]

  return (
    <section id="shows-section" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-amber-50 mb-12 text-center">
          Featured Shows
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
                className={`${show.image} rounded-xl p-8 h-64 flex flex-col justify-between text-amber-50 shadow-lg group-hover:shadow-2xl group-hover:shadow-amber-600/30 transform group-hover:-translate-y-2 transition-all duration-300`}
              >
                <div>
                  <p className="text-sm text-amber-100/70">{show.genre}</p>
                  <h3 className="text-2xl font-bold mt-2">{show.title}</h3>
                </div>
                <div>
                  <p className="text-amber-100/80">{show.host}</p>
                  <p className="text-sm text-amber-100/60">{show.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
