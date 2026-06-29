"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const screenshots = [
  {
    src: "/screenshots/role-picker.png",
    alt: "Choose your role - Fan, Runner, or Race Director",
    caption: "Choose Your Role",
  },
  {
    src: "/screenshots/ar-overlay.png",
    alt: "AR camera view with athlete information overlay",
    caption: "AR Overlay in Action",
  },
  {
    src: "/screenshots/athlete-profile.png",
    alt: "Detailed athlete profile with charity and social links",
    caption: "Athlete Profiles",
  },
  {
    src: "/screenshots/live-tracking.png",
    alt: "Live race tracking and runner statistics",
    caption: "Live Race Tracking",
  },
];

export default function ScreenshotsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
              See It In Action
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the power of augmented reality on race day. Point your camera at any runner to instantly see their story.
            </p>
          </motion.div>
        </div>

        {/* Screenshots grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={screenshot.caption}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[9/19.5] rounded-2xl overflow-hidden shadow-xl bg-gray-900 border border-gray-200">
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Placeholder overlay - will be replaced when actual screenshots are added */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center">
                  <div className="text-white/80 text-center px-4">
                    <p className="text-lg font-large">{"Fan Stride"}</p>
                    {/* <p className="text-xs mt-1 opacity-70">Screenshot Coming Soon</p> */}
                  </div>
                </div>
              </div>
              <p className="mt-3 text-center text-sm font-medium text-gray-700">
                {screenshot.caption}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
