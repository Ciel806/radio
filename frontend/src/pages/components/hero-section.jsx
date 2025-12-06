import { useEffect, useRef } from "react"

export default function HeroSection() {
  const vinylRef = useRef(null)

  // Vinyl rotation animation
  useEffect(() => {
    const vinyl = vinylRef.current
    if (!vinyl) return

    let rotation = 0
    const animate = () => {
      rotation += 0.5
      vinyl.style.transform = `rotate(${rotation}deg)`
      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  // Fade-in on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0")
          entry.target.classList.remove("opacity-0", "translate-y-10")
        }
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll(".fade-in-up")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="min-h-screen pt-24 pb-12 px-4 flex items-center justify-center overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Vinyl Record */}
          <div className="flex justify-center items-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">

              {/* Outer glow */}
              <div className="absolute inset-0 bg-gradient-radial from-amber-600/20 to-transparent rounded-full blur-3xl" />

              {/* Vinyl Record */}
              <div
                ref={vinylRef}
                className="absolute inset-0 rounded-full shadow-2xl"
                style={{
                  backgroundImage:
                    "conic-gradient(from 0deg, #18181b 0%, #000000 25%, #27272a 50%, #000000 75%, #18181b 100%)",
                }}
              >
                {/* Grooves */}
                <div className="absolute inset-0 rounded-full opacity-50">
                  <svg className="w-full h-full" viewBox="0 0 200 200">
                    <circle cx="100" cy="100" r="95" fill="none" stroke="url(#groove)" strokeWidth="2" opacity="0.3" />
                    <circle cx="100" cy="100" r="85" fill="none" stroke="url(#groove)" strokeWidth="2" opacity="0.3" />
                    <circle cx="100" cy="100" r="75" fill="none" stroke="url(#groove)" strokeWidth="2" opacity="0.3" />

                    <defs>
                      <linearGradient id="groove" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(217, 119, 6, 0.3)" />
                        <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Center Label */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full shadow-lg flex items-center justify-center border-2 border-amber-500">
                    <div className="w-6 h-6 bg-black rounded-full" />
                  </div>
                </div>
              </div>

              {/* Needle */}
              <div className="absolute -top-8 right-8 w-1 h-32 bg-gradient-to-b from-amber-600 to-amber-800 rounded-full transform origin-top -rotate-12 shadow-lg" />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <div className="fade-in-up opacity-0 translate-y-10 transition-all duration-700">
              <h1 className="text-5xl md:text-6xl font-bold text-amber-50 mb-4 leading-tight">
                Experience the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                  Vinyl
                </span>{" "}
                Sound
              </h1>

              <p className="text-xl text-amber-100/70 mb-6">
                Stream your favorite tracks with the warm, authentic sound of vinyl. No algorithms, just pure music.
              </p>
            </div>

            {/* Features */}
            <div className="fade-in-up opacity-0 translate-y-10 transition-all duration-700 delay-100 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-600/20 border border-amber-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 11-2 0V4a1 1 0 01.617-.924l8-3.5a1 1 0 01.883 1.85L9.383 3.075z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-amber-50">High Quality Streaming</p>
                  <p className="text-sm text-amber-100/60">CD-quality audio, 24/7</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-600/20 border border-amber-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a6 6 0 00-9-5.618A6 6 0 004 18v1h12z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-amber-50">Curated Playlists</p>
                  <p className="text-sm text-amber-100/60">Hand-picked by music experts</p>
                </div>
              </div>
            </div>

            {/* Button */}
            <button className="fade-in-up opacity-0 translate-y-10 transition-all duration-700 delay-200 mt-8 px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-zinc-950 font-bold rounded-lg hover:shadow-xl hover:shadow-amber-600/50 transform hover:scale-105 transition-all duration-200">
              Start Listening Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
