"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

const shortVideos = [
  {
    src: "/website 6.mov",
    title: "Quick Scan Demo",
    description: "See how fast you can identify runners",
  },
  {
    src: "/website 7!.mov",
    title: "Athlete Profile View",
    description: "Detailed information at your fingertips",
  },
  {
    src: "/website 8!.mov",
    title: "Charity Support",
    description: "Support causes that matter",
  },
  {
    src: "/website 9!.mov",
    title: "Live Tracking",
    description: "Follow runners in real-time",
  },
];

function VideoCard({ src, title, description, index }: { src: string; title: string; description: string; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl bg-black">
        <video
          ref={videoRef}
          src={src}
          className="w-full h-full object-cover"
          loop
          playsInline
          muted
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
        
        {/* Play/Pause overlay */}
        <button
          onClick={handlePlayPause}
          className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          {!isPlaying ? (
            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
              <svg className="w-8 h-8 text-purple-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          ) : (
            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
              <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            </div>
          )}
        </button>
      </div>
      
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
    </motion.div>
  );
}

export default function RaceDayVideosSection() {
  const fullDemoRef = useRef<HTMLVideoElement>(null);
  const [isFullDemoPlaying, setIsFullDemoPlaying] = useState(false);

  const handleFullDemoPlayPause = () => {
    if (fullDemoRef.current) {
      if (isFullDemoPlaying) {
        fullDemoRef.current.pause();
      } else {
        fullDemoRef.current.play();
      }
      setIsFullDemoPlaying(!isFullDemoPlaying);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-5">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Race Day Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Watch how Fan Stride transforms the race day experience for fans, runners, and race directors.
            </p>
          </motion.div>
        </div>

        {/* Short videos grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {shortVideos.map((video, index) => (
            <VideoCard key={video.src} {...video} index={index} />
          ))}
        </div>

        {/* Full demo section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Watch the Full Demo
            </h3>
            <p className="text-gray-600">
              See Fan Stride in action during a complete 5-mile race experience
            </p>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black group">
            <video
              ref={fullDemoRef}
              src="/media 5 mile FanStride.mov"
              className="w-full h-full object-cover"
              controls
              playsInline
              onPlay={() => setIsFullDemoPlaying(true)}
              onPause={() => setIsFullDemoPlaying(false)}
            />
            
            {/* Custom play button overlay (only shows when not playing) */}
            {!isFullDemoPlaying && (
              <button
                onClick={handleFullDemoPlayPause}
                className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black/40 to-black/60 group-hover:from-black/50 group-hover:to-black/70 transition-all duration-300"
              >
                <div className="w-20 h-20 rounded-full bg-white/95 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                  <svg className="w-10 h-10 text-purple-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
