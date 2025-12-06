import { useState, useRef } from "react";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(70);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
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

  const handleSpeedChange = () => {
    const speeds = [0.5, 0.75, 1, 1.25, 1.5, 2];
    const currentIndex = speeds.indexOf(playbackSpeed);
    const nextSpeed = speeds[(currentIndex + 1) % speeds.length];
    setPlaybackSpeed(nextSpeed);
    if (audioRef.current) {
      audioRef.current.playbackRate = nextSpeed;
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
    <section className="py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-2xl p-8 shadow-2xl border border-amber-600/20">

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

          <div className="mb-6">
            <h3 className="text-amber-50 font-bold text-lg mb-2">Now Playing</h3>
            <p className="text-amber-100/70">Smooth Jazz Sessions</p>
            <p className="text-sm text-amber-100/50">Vinyl Radio Live</p>
          </div>

          {/* Progress bar */}
          <div className="mb-4">
            <div
              className="w-full h-2 bg-zinc-700 rounded-full overflow-hidden cursor-pointer hover:h-3 transition-all"
              onClick={handleSeek}
            >
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-amber-600 transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-amber-100/60 mt-2">
              <span>{formatTime((progress / 100) * duration)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Main controls */}
          <div className="flex items-center justify-center gap-6 mb-6">
            <button
              onClick={skipBackward}
              className="text-amber-100/60 hover:text-amber-50 transition-colors"
              title="Rewind 15s"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M7.707 10.707a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L5.414 13H13a3 3 0 000-6H7.5a1 1 0 000-2H13a5 5 0 010 10H5.414l2.293 2.293a1 1 0 01-1.414 1.414l-3-3z" />
              </svg>
            </button>

            <button
              onClick={togglePlay}
              className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center hover:shadow-lg hover:shadow-amber-600/50 transform hover:scale-110 transition-all"
            >
              {isPlaying ? (
                <svg className="w-8 h-8 text-zinc-950" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.75 1.5A.75.75 0 005 2.25v15.5a.75.75 0 001.5 0V2.25A.75.75 0 005.75 1.5zm8.5 0a.75.75 0 00-.75.75v15.5a.75.75 0 001.5 0V2.25a.75.75 0 00-.75-.75z" />
                </svg>
              ) : (
                <svg className="w-8 h-8 text-zinc-950 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4.555 7.168A1 1 0 003 8v4a1 1 0 001.555.832l5.97-2.416a1 1 0 000-1.664L4.555 7.168z" />
                </svg>
              )}
            </button>

            <button
              onClick={skipForward}
              className="text-amber-100/60 hover:text-amber-50 transition-colors"
              title="Forward 15s"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M12.293 9.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9.586 11H7a5 5 0 010-10h5.5a1 1 0 010 2H7a3 3 0 000 6h6.586l-2.293-2.293a1 1 0 010-1.414z" />
              </svg>
            </button>
          </div>

          {/* Volume + speed */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-amber-100/60 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 11-2 0V4a1 1 0 01.617-.924l8-3.5a1 1 0 01.883 1.85L9.383 3.075z" />
              </svg>

              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={handleVolumeChange}
                className="flex-1 h-2 bg-zinc-700 rounded-full appearance-none cursor-pointer accent-amber-600"
              />

              <span className="text-xs text-amber-100/60 w-8">{Math.round(volume)}%</span>
            </div>

            <div className="flex items-center justify-end">
              <button
                onClick={handleSpeedChange}
                className="px-3 py-1 rounded-full bg-zinc-700 hover:bg-zinc-600 text-amber-100 text-sm font-medium transition-colors"
              >
                {playbackSpeed}x
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
