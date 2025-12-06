import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/navbar.jsx"
import programs from "../data/programs.json"

const Programs = () => {
  const [activeProgram, setActiveProgram] = useState(1);


  const featuredProgram = programs.find(p => p.id === activeProgram);

  return (
    <main className="overflow-hidden bg-gradient-to-b from-zinc-950 via-amber-950 to-zinc-950">
      <Navbar />
      <div className="min-h-screen pt-30 pb-16 px-4 bg-gradient-to-b from-black via-black to-[#ce443d]/5">
        
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-[#deddd8] mb-6">
              RADIO <span className="text-[#ce443d]">PROGRAMS</span>
            </h1>
            <p className="text-xl text-[#deddd8]/70 max-w-3xl mx-auto leading-relaxed">
              Immerse yourself in our diverse collection of radio shows, each crafted with the authentic 
              warmth of vinyl sound and hosted by passionate music experts.
            </p>
          </div>

          {/* Featured Program */}
          {featuredProgram && (
            <div className="bg-gradient-to-r from-black via-gray-900 to-black rounded-3xl p-8 mb-16 border border-[#ce443d]/30 shadow-2xl">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Program Image */}
                <div className="lg:w-2/5">
                  <div className="relative h-64 lg:h-full rounded-2xl overflow-hidden">
                    <img 
                      src={featuredProgram.image} 
                      alt={featuredProgram.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    {featuredProgram.isLive && (
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#ce443d] animate-pulse"></div>
                        <span className="text-sm font-bold text-[#ce443d] bg-black/90 px-3 py-1 rounded-full">LIVE NOW</span>
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4">
                      <span className="text-4xl">{featuredProgram.icon}</span>
                    </div>
                  </div>
                </div>

                {/* Program Details */}
                <div className="lg:w-3/5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-[#ce443d]"></div>
                      <span className="text-sm text-[#ce443d] font-bold uppercase tracking-wider">
                        {featuredProgram.genre}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[#deddd8]/60">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="text-lg font-medium text-[#ce443d]">{featuredProgram.listeners}</span>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-[#deddd8] mb-4">{featuredProgram.title}</h2>
                  <p className="text-lg text-[#deddd8]/70 mb-6 leading-relaxed">{featuredProgram.description}</p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full border border-[#ce443d] flex items-center justify-center bg-black/50">
                          <svg className="w-5 h-5 text-[#ce443d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-[#deddd8]/60">Host</p>
                          <p className="text-lg font-medium text-[#deddd8]">{featuredProgram.host}</p>
                        </div>
                      </div>
                      <div className="h-10 w-px bg-[#ce443d]/30"></div>
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-[#ce443d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                          <p className="text-sm text-[#deddd8]/60">Time</p>
                          <p className="text-lg font-medium text-[#deddd8]">{featuredProgram.time}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#ce443d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-lg font-medium text-[#deddd8]">{featuredProgram.day}</span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button className="px-8 py-3 bg-[#ce443d] text-black font-bold rounded-lg hover:bg-[#b53a34] transition-colors flex items-center gap-2">
                      {featuredProgram.isLive ? (
                        <>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Listen Live
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Set Reminder
                        </>
                      )}
                    </button>
                    
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* All Programs Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#deddd8] mb-8 text-center border-b border-[#ce443d]/30 pb-4">
              ALL PROGRAMS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {programs.map((program) => (
                <div
                  key={program.id}
                  onClick={() => setActiveProgram(program.id)}
                  className={`bg-gradient-to-br from-black to-gray-900 rounded-2xl p-6 border cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1 group ${
                    activeProgram === program.id 
                      ? "border-[#ce443d] shadow-lg shadow-[#ce443d]/20" 
                      : "border-[#ce443d]/20 hover:border-[#ce443d]/50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {program.isLive && (
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-[#ce443d] animate-pulse"></div>
                          <span className="text-xs text-[#ce443d] font-bold">LIVE</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <svg className="w-4 h-4 text-[#deddd8]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="text-[#ce443d] font-medium">{program.listeners}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#deddd8] mb-2 group-hover:text-[#ce443d] transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-sm text-[#deddd8]/60 mb-4">{program.genre}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <svg className="w-4 h-4 text-[#ce443d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-[#deddd8]/80">{program.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <svg className="w-4 h-4 text-[#ce443d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-[#deddd8]/80">{program.day}</span>
                    </div>
                  </div>

                  <div className="text-sm text-[#deddd8]/70 line-clamp-2 mb-4">
                    {program.description}
                  </div>

                  <button className="w-full py-2 text-sm bg-black/50 border border-[#ce443d]/30 text-[#deddd8] rounded-lg hover:bg-[#ce443d] hover:text-black transition-colors">
                    Select Program
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Schedule */}
          <div className="bg-gradient-to-r from-black via-gray-900 to-black rounded-3xl p-8 border border-[#ce443d]/30">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-[#deddd8] flex items-center gap-3">
                <svg className="w-6 h-6 text-[#ce443d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                BROADCAST SCHEDULE
              </h2>
              <span className="text-sm text-[#deddd8]/60">All times in local timezone</span>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#ce443d]/30">
                    <th className="py-4 px-4 text-left text-[#deddd8] font-medium">Time</th>
                    <th className="py-4 px-4 text-left text-[#deddd8] font-medium">Program</th>
                    <th className="py-4 px-4 text-left text-[#deddd8] font-medium">Host</th>
                    <th className="py-4 px-4 text-left text-[#deddd8] font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {programs.slice(0, 6).map((program) => (
                    <tr key={program.id} className="border-b border-[#deddd8]/10 hover:bg-black/30 transition-colors">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-[#ce443d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-[#deddd8] font-medium">{program.time}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{program.icon}</span>
                          <div>
                            <p className="text-[#deddd8] font-medium">{program.title}</p>
                            <p className="text-xs text-[#deddd8]/60">{program.genre}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-[#deddd8]">{program.host}</td>
                      <td className="py-3 px-4">
                        {program.isLive ? (
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#ce443d]/10 text-[#ce443d] rounded-full text-sm">
                            <div className="w-2 h-2 rounded-full bg-[#ce443d] animate-pulse"></div>
                            Live Now
                          </span>
                        ) : (
                          <span className="px-3 py-1 bg-[#deddd8]/10 text-[#deddd8] rounded-full text-sm">
                            Upcoming
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Programs;
