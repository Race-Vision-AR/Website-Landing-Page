import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Fan Stride",
  description: "Privacy Policy for Fan Stride mobile application and website.",
  openGraph: {
    title: "Privacy Policy - Fan Stride",
    description: "Privacy Policy for Fan Stride mobile application and website.",
    url: "https://fanstride.com/privacy",
    type: "website",
  },
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-12">
        <div className="max-w-4xl mx-auto px-5">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Privacy Policy</h1>
          <p className="text-white/90 text-lg">Last Updated: June 25, 2026</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-5 py-12">
        <div className="prose prose-lg max-w-none">
          
          {/* 1. Introduction */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Fan Stride LLC ("Fan Stride," "we," "us," or "our") operates the Fan Stride mobile application and website.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This Privacy Policy explains how we collect, use, disclose, and protect information collected through our services.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">A. Account Information</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Name or nickname</li>
              <li>Email address</li>
              <li>Login provider (Apple, Google, Email)</li>
              <li>Optional social media handles</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3">B. Camera and Media Permissions</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Camera access is required for AR bib scanning functionality.</li>
              <li>Photos and videos may be saved directly to the user's device.</li>
              <li>Fan Stride does not access a user's photo library unless permission is granted.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3">C. User Generated Content</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Nickname</li>
              <li>Social media handles</li>
              <li>Charity information</li>
              <li>Profile photo</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3">D. Device and Analytics Information</h3>
            <p className="text-gray-700 mb-3">Through Firebase Analytics and related services:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Device type</li>
              <li>Crash reports</li>
              <li>App usage information</li>
              <li>Approximate location (if collected)</li>
            </ul>
          </section>

          {/* 3. Use of Information */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">3. Use of Information</h2>
            <p className="text-gray-700 mb-3">Information may be used to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Provide AR overlays</li>
              <li>Match bib numbers to athlete profiles</li>
              <li>Display athlete information to spectators</li>
              <li>Improve app accuracy and performance</li>
              <li>Communicate updates and support information</li>
              <li>Prevent abuse and fraud</li>
            </ul>
          </section>

          {/* 4. Bib Scanning */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Bib Scanning</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Fan Stride uses computer vision technology to detect and process race bib numbers in real time.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Bib numbers are used solely to identify registered athletes and display relevant profile information.
            </p>
          </section>

          {/* 5. Charity Donations */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Charity Donations</h2>
            <p className="text-gray-700 mb-3">When donation opportunities are provided:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Donations occur directly through the charity's website.</li>
              <li>Fan Stride does not process payments.</li>
              <li>Fan Stride does not store payment information.</li>
            </ul>
          </section>

          {/* 6. Information Sharing */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Information Sharing</h2>
            <p className="text-gray-700 mb-3">Information may be shared with:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Google Firebase</li>
              <li>Google Cloud</li>
              <li>Analytics providers</li>
              <li>Race organizers</li>
              <li>Government agencies when required by law</li>
            </ul>
            <p className="text-gray-700 font-semibold">
              Fan Stride does not sell personal information.
            </p>
          </section>

          {/* 7. Public Visibility */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Public Visibility</h2>
            <p className="text-gray-700 mb-3">
              Athletes control the information displayed beyond race registration information.
            </p>
            <p className="text-gray-700 mb-3">Publicly visible information may include:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Athlete name</li>
              <li>Nickname</li>
              <li>Social media handles</li>
              <li>Charity information</li>
            </ul>
          </section>

          {/* 8. Data Retention */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              Information is retained only as long as necessary to operate the service or until deletion is requested.
            </p>
          </section>

          {/* 9. User Rights */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">9. User Rights</h2>
            <p className="text-gray-700 mb-3">Users may:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Update profile information</li>
              <li>Request account deletion</li>
              <li>Request data access</li>
              <li>Opt out of public display where applicable</li>
            </ul>
          </section>

          {/* 10. Security */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">10. Security</h2>
            <p className="text-gray-700 leading-relaxed">
              Fan Stride uses reasonable measures to protect information but cannot guarantee absolute security.
            </p>
          </section>

          {/* 11. Children's Privacy */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">11. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Fan Stride is not intended for individuals under 18 years of age.
            </p>
          </section>

          {/* 12. International Users */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">12. International Users</h2>
            <p className="text-gray-700 leading-relaxed">
              Information may be processed and stored in the United States.
            </p>
          </section>

          {/* 13. Policy Updates */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">13. Policy Updates</h2>
            <p className="text-gray-700 leading-relaxed">
              Fan Stride may update this Privacy Policy from time to time.
            </p>
          </section>

          {/* 14. Contact Information */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">14. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>Fan Stride LLC</strong>
            </p>
            <p className="text-gray-700 leading-relaxed">
              Email: <a href="mailto:DanielPhillips@FanStride.com" className="text-purple-600 hover:text-purple-700 underline">DanielPhillips@FanStride.com</a>
            </p>
            <p className="text-gray-700 leading-relaxed">
              Website: <a href="https://fanstride.com" className="text-purple-600 hover:text-purple-700 underline">FanStride.com</a>
            </p>
          </section>

          {/* Beta/Pilot Disclaimer */}
          <section className="mb-10 mt-12 p-6 bg-blue-50 border-l-4 border-blue-500 rounded">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Beta/Pilot Program Notice</h2>
            <p className="text-gray-700 leading-relaxed">
              Fan Stride is currently operating as a beta/pilot program. Features, functionality, and this Privacy Policy may change as we continue to develop and improve our services. We will notify users of any material changes to how we handle personal information.
            </p>
          </section>

        </div>

        {/* Back to Home Link */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
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
