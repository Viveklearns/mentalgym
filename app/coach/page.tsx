'use client';

import Link from 'next/link';

export default function CoachPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Disclaimer */}
      <div className="bg-yellow-50 border-b border-yellow-200 py-2 px-4">
        <p className="text-center text-sm text-gray-700">
          <strong>Independent Study Tool</strong><br />
          Not affiliated with, endorsed by, or sponsored by Chris Voss, The Black Swan Group, or HarperCollins Publishers.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Practice Negotiation. Get Expert Feedback.
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Real voice conversations. Real-time pressure.
          </p>
          <p className="text-xl text-gray-600 mb-8">
            Safe environment to fail and improve.
          </p>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            You know the frameworks from Never Split the Difference.
            But can you use them when an engineering manager pushes back on your timeline?
            When an executive questions your roadmap? When a stakeholder goes silent?
          </p>
          <p className="text-lg text-gray-700 mb-8 font-semibold">
            Practice makes permanent. Get feedback that helps you improve.
          </p>
          <Link
            href="/coach/scenarios/timeline-extension/brief"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
          >
            Start Your First Session →
          </Link>
          <p className="text-sm text-gray-500 mt-4">
            3-4 minutes • Voice only • Private & confidential
          </p>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">1️⃣</div>
              <h3 className="text-xl font-semibold mb-2">Choose Your Scenario</h3>
              <p className="text-gray-600">
                Pick a realistic PM negotiation situation
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">2️⃣</div>
              <h3 className="text-xl font-semibold mb-2">Talk It Out</h3>
              <p className="text-gray-600">
                Have a real voice conversation with AI playing the stakeholder role
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">3️⃣</div>
              <h3 className="text-xl font-semibold mb-2">Get Feedback</h3>
              <p className="text-gray-600">
                See which NSTD frameworks you used (and which you missed)
              </p>
            </div>
          </div>
        </div>

        {/* Current Scenarios */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Available Scenarios
          </h2>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 transition">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  🗓️ Timeline Extension Negotiation
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Stakeholder:</strong> Engineering Manager (Alex)
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Difficulty:</strong> ⭐⭐ Intermediate
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Frameworks tested:</strong> Tactical Empathy, Mirroring, Labeling, Calibrated Questions
                </p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              You need 2 more weeks for Feature X. Alex says the team is burnt out and has competing priorities.
            </p>
            <Link
              href="/coach/scenarios/timeline-extension/brief"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Start This Scenario →
            </Link>
          </div>

          <p className="text-center text-gray-500 mt-6 italic">
            More scenarios coming soon...
          </p>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to Mental Gym
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-300 py-8 px-4 mt-16">
        <div className="max-w-4xl mx-auto text-sm text-gray-600 text-center">
          <p className="mb-4">
            Mental Gym is an independent educational tool. "Never Split the Difference" is a book by Chris Voss published by HarperCollins.
            This tool is not affiliated with, endorsed by, or sponsored by Chris Voss, The Black Swan Group, or HarperCollins Publishers.
          </p>
          <p>© 2025 Mental Gym. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
