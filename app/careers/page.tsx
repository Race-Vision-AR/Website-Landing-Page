import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers — Fan Stride",
  description: "Career opportunities at Fan Stride. Join our team bringing augmented reality to race day.",
  openGraph: {
    title: "Careers — Fan Stride",
    description: "Career opportunities at Fan Stride. Join our team bringing augmented reality to race day.",
    url: "https://fanstride.com/careers",
    type: "website",
  },
  alternates: {
    canonical: "/careers",
  },
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Careers at Fan Stride</h1>
          <p className="text-white/90 text-lg md:text-xl">
            Building the future of race day experiences
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-5 py-16 md:py-24">
        <div className="text-center">
          {/* Icon */}
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center mb-8">
            <svg className="w-10 h-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>

          {/* Main Message */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            No Current Openings
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
            We are not currently hiring. However, we welcome inquiries from individuals interested in future opportunities with Fan Stride.
          </p>

          {/* CTA */}
          <a
            href="mailto:DanielPhillips@FanStride.com?subject=Career%20Inquiry"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold text-base hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Us About Future Opportunities
          </a>
        </div>

        {/* About Section */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">About Fan Stride</h3>
          <p className="text-gray-600 leading-relaxed text-center mb-8">
            Fan Stride is transforming race day into an interactive augmented reality experience. 
            We bring together spectators, athletes, and race directors through innovative technology 
            that makes every race more engaging and connected.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-3">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Innovation</h4>
              <p className="text-sm text-gray-600">Cutting-edge AR technology</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Community</h4>
              <p className="text-sm text-gray-600">Connecting fans and athletes</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto rounded-lg bg-pink-100 text-pink-600 flex items-center justify-center mb-3">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Impact</h4>
              <p className="text-sm text-gray-600">Making races unforgettable</p>
            </div>
          </div>
        </div>

        {/* Back to Home Link */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </a>
        </div>
      </main>
    </div>
  );
}
