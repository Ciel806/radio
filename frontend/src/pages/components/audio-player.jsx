import { useState, useRef } from "react";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(70);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const skipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(audioRef.current.currentTime + 15, duration);
    }
  };

  const skipBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(audioRef.current.currentTime - 15, 0);
    }
  };

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const newTime = percent * duration;
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  };
  

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const formatTime = (seconds) => {
    if (!seconds) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <section className="py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-black rounded-3xl p-8 border-2 border-[#ce443d] shadow-lg">
          
          {/* Audio element */}
          <audio
            ref={audioRef}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
          >
            <source
              src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
              type="audio/mpeg"
            />
          </audio>

          {/* Now Playing Info */}
          <div className="mb-6">
            <h3 className="text-[#ce443d] font-bold text-lg mb-2 tracking-wider">NOW PLAYING</h3>
            <p className="text-[#deddd8] text-xl font-bold">Smooth Jazz Sessions</p>
            <p className="text-sm text-[#deddd8]/70">Vinyl Radio Live • 88.4 FM</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div
              className="w-full h-1.5 bg-[#deddd8]/20 rounded-full overflow-hidden cursor-pointer hover:h-2 transition-all duration-200"
              onClick={handleSeek}
            >
              <div
                className="h-full bg-[#ce443d] transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-[#deddd8]/60 mt-2">
              <span>{formatTime((progress / 100) * duration)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Main Controls */}
          <div className="flex items-center justify-center gap-8 mb-8">
            {/* Skip Backward */}
            <button
              onClick={skipBackward}
              className="text-[#deddd8]/60 hover:text-[#ce443d] transition-colors p-2"
              title="Rewind 15s"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.99 5V1l-5 5 5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6h-2c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" />
                <path d="M10.89 16h-.85v-3.26l-1.01.31v-.69l1.77-.63h.09V16zM15.17 14.24c0 .32-.03.6-.1.82s-.17.42-.29.57-.28.26-.45.33-.37.1-.59.1-.41-.03-.59-.1-.33-.18-.46-.33-.23-.34-.3-.57-.11-.5-.11-.82v-.74c0-.32.03-.6.1-.82s.17-.42.29-.57.28-.26.45-.33.37-.1.59-.1.41.03.59.1.33.18.46.33.23.34.3.57.11.5.11.82v.74zm-.85-.86c0-.19-.01-.35-.04-.48s-.07-.23-.12-.31-.11-.14-.19-.17-.16-.05-.25-.05-.18.02-.25.05-.14.09-.19.17-.09.18-.12.31-.04.29-.04.48v.97c0 .19.01.35.04.48s.07.24.12.32.11.14.19.17.16.05.25.05.18-.02.25-.05.14-.09.19-.17.09-.19.11-.32.04-.29.04-.48v-.97z" />
              </svg>
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="w-20 h-20 rounded-full border-4 border-[#ce443d] bg-black flex items-center justify-center hover:bg-[#ce443d] transform hover:scale-105 transition-all duration-300 group"
            >
              {isPlaying ? (
                <svg className="w-10 h-10 text-[#deddd8] group-hover:text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg className="w-10 h-10 text-[#deddd8] group-hover:text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            {/* Skip Forward */}
            <button
              onClick={skipForward}
              className="text-[#deddd8]/60 hover:text-[#ce443d] transition-colors p-2"
              title="Forward 15s"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5 4v16l11-8L5 4zm12 0v16h2V4h-2zm4 0v16h2V4h-2z" />
              </svg>
            </button>
          </div>

          {/* Volume and Speed Controls */}
            {/* Volume Control */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border border-[#ce443d]/30 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#ce443d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex justify-between text-xs text-[#deddd8]/60 mb-1">
                  <span>Volume</span>
                  <span>{Math.round(volume)}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-full h-1.5 bg-[#deddd8]/20 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#ce443d]"
                />
              </div>

            {/* (Playback speed control removed) */}
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-6 border-t border-[#deddd8]/10 text-sm text-[#deddd8]/60">
            <div className="flex justify-between">
              <div>
                <span className="text-[#ce443d] font-bold">Bitrate:</span> 320kbps
              </div>
              <div>
                <span className="text-[#ce443d] font-bold">Format:</span> MP3
              </div>
              <div>
                <span className="text-[#ce443d] font-bold">Listeners:</span> 1,247
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}