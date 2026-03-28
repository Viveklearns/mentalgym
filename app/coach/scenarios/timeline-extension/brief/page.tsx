'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function BriefPage() {
  const router = useRouter();

  const handleStartConversation = () => {
    // Save start time to localStorage
    const startTime = new Date().toISOString();
    localStorage.setItem('conversation_start_time', startTime);
    localStorage.setItem('conversation_scenario', 'timeline-extension');

    router.push('/coach/scenarios/timeline-extension/conversation');
  };

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
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Timeline Extension Negotiation
        </h1>

        {/* Scenario Context */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-sm text-gray-600 font-semibold mb-1">YOUR ROLE</p>
              <p className="text-lg">Product Manager</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 font-semibold mb-1">STAKEHOLDER</p>
              <p className="text-lg">Alex (Engineering Manager)</p>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-sm text-gray-600 font-semibold mb-2">SITUATION</p>
            <p className="text-gray-700 leading-relaxed">
              You're building Feature X (new dashboard analytics). It's taking longer than expected due to data quality issues you discovered last week.
              You need 2 more weeks, but Alex's team is stretched thin and has Q2 platform work starting soon.
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-600 font-semibold mb-2">YOUR GOAL</p>
            <p className="text-gray-700 leading-relaxed">
              Get Alex to agree to the 2-week extension without damaging your relationship or team morale.
            </p>
          </div>
        </div>

        {/* Frameworks to Practice */}
        <div className="bg-blue-50 rounded-lg border border-blue-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            FRAMEWORKS TO PRACTICE
          </h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <div>
                <strong>Tactical Empathy</strong> - Acknowledge Alex's concerns before making your case
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <div>
                <strong>Labeling</strong> - Name the emotions/concerns you're sensing
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <div>
                <strong>Mirroring</strong> - Repeat key words to encourage Alex to elaborate
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <div>
                <strong>Calibrated Questions</strong> - Use "How" and "What" questions
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <div>
                <strong>Accusation Audit</strong> - Preempt Alex's objections
              </div>
            </li>
          </ul>
        </div>

        {/* Conversation Tips */}
        <div className="bg-gray-100 rounded-lg border border-gray-300 p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            CONVERSATION TIPS
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>• Listen more than you talk in the first 60 seconds</li>
            <li>• Don't jump straight to your ask - make Alex feel heard first</li>
            <li>• <strong>Push-to-talk:</strong> Hold the button while speaking, release when done</li>
            <li>• The conversation will auto-end after 4 minutes</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={handleStartConversation}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
          >
            I'm Ready - Start Conversation
          </button>
          <p className="text-sm text-gray-500 mt-4">
            The conversation will begin as soon as you click
          </p>
        </div>

        {/* Back Link */}
        <div className="text-center mt-8">
          <Link href="/coach" className="text-blue-600 hover:underline">
            ← Back to Scenarios
          </Link>
        </div>
      </div>
    </div>
  );
}
