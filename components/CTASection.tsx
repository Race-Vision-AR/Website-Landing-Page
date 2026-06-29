"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section id="download" className="relative py-24 overflow-hidden">
      {/* Gradient background matching design: purple → blue */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-800 via-purple-600 to-blue-500" />

      {/* Subtle radial light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Get Started
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            We are currently seeking a limited number of race directors interested in pilot race opportunities and introductory pricing. Contact Fan Stride to learn more about bringing augmented reality spectator engagement to your upcoming event.
          </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-semibold text-base hover:bg-white hover:text-purple-700 transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download for iOS
            </a>

            <div className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/40 text-white/50 font-semibold text-base cursor-not-allowed select-none">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.39.21.84.22 1.24.03l11.65-6.73-2.6-2.6-10.29 9.3zm14.9-8.62l2.5-1.44c.69-.4.69-1.4 0-1.8L18.08 10.5l-2.89 2.89 2.89 2.75zm-15.77-12.6l10.29 9.3 2.6-2.61L3.42.52C3.02.33 2.57.34 2.18.55c-.61.35-.62 1.14-.07 1.49l.2.1zm6.49 5.46L12 12l-3.2 3.2L5.16 12l3.64-3.64-.5-.06z" />
              </svg>
              Coming Soon on Android
            </div>
          </div>
          <div className="flex justify-center">
            <a
              href="mailto:DanielPhillips@FanStride.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-purple-700 font-semibold text-base hover:bg-white/90 transition-all shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us
            </a>
          </div>


        </motion.div>
      </div>
    </section>
  );
}
