'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ConversationAnalysis, ConversationMessage } from '@/types/conversation';

export default function ResultsPage() {
  const [analysis, setAnalysis] = useState<ConversationAnalysis | null>(null);
  const [transcript, setTranscript] = useState<ConversationMessage[]>([]);
  const [transcriptExpanded, setTranscriptExpanded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Load analysis and transcript from localStorage
    const analysisData = localStorage.getItem('conversation_analysis');
    const transcriptData = localStorage.getItem('conversation_transcript');

    if (!analysisData) {
      router.push('/coach');
      return;
    }

    setAnalysis(JSON.parse(analysisData));

    if (transcriptData) {
      const conversationData = JSON.parse(transcriptData);
      setTranscript(conversationData.messages || []);
    }
  }, [router]);

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case 'expert': return 'text-green-600';
      case 'advanced': return 'text-blue-600';
      case 'practitioner': return 'text-yellow-600';
      case 'foundation': return 'text-gray-600';
      default: return 'text-gray-600';
    }
  };

  const getRatingStars = (rating: string) => {
    switch (rating) {
      case 'expert': return '⭐⭐⭐⭐';
      case 'advanced': return '⭐⭐⭐';
      case 'practitioner': return '⭐⭐';
      case 'foundation': return '⭐';
      default: return '';
    }
  };

  const handleTryAgain = () => {
    // Clear previous session data
    localStorage.removeItem('conversation_transcript');
    localStorage.removeItem('conversation_analysis');
    router.push('/coach/scenarios/timeline-extension/brief');
  };

  if (!analysis) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading results...</p>
        </div>
      </div>
    );
  }

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
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Session Complete: Timeline Extension Negotiation
          </h1>
          <div className={`text-2xl font-bold ${getRatingColor(analysis.overallRating)} mb-2`}>
            Your Overall Rating: {analysis.overallRating.toUpperCase()} {getRatingStars(analysis.overallRating)}
          </div>
          <p className="text-gray-600">
            Conversation Length: {analysis.conversationLength}
          </p>
        </div>

        {/* Framework Usage Detected */}
        {analysis.frameworksDetected.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="mr-2">📊</span> Framework Usage Detected
            </h2>
            <div className="space-y-4">
              {analysis.frameworksDetected.map((framework, idx) => (
                <div key={idx} className={`border-l-4 pl-4 ${
                  framework.wasEffective ? 'border-green-500' : 'border-yellow-500'
                }`}>
                  <div className="flex items-start">
                    <span className="mr-2">{framework.wasEffective ? '✅' : '⚠️'}</span>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">
                        {framework.framework} ({framework.timestamp})
                      </p>
                      <p className="text-sm text-gray-600 italic mb-2">"{framework.quote}"</p>
                      <p className="text-gray-700">{framework.feedback}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Frameworks Missed */}
        {analysis.frameworksMissed.length > 0 && (
          <div className="bg-red-50 rounded-lg border border-red-200 p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="mr-2">❌</span> Frameworks Not Detected
            </h2>
            <div className="space-y-3">
              {analysis.frameworksMissed.map((framework, idx) => (
                <div key={idx}>
                  <p className="font-semibold text-gray-900">{framework.framework}</p>
                  <p className="text-gray-700">{framework.explanation}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* What Worked Well */}
        {analysis.whatWorkedWell.length > 0 && (
          <div className="bg-green-50 rounded-lg border border-green-200 p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="mr-2">💡</span> What Worked Well
            </h2>
            <ul className="space-y-2">
              {analysis.whatWorkedWell.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Missed Opportunities */}
        {analysis.missedOpportunities.length > 0 && (
          <div className="bg-yellow-50 rounded-lg border border-yellow-200 p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="mr-2">🎯</span> Missed Opportunities
            </h2>
            <div className="space-y-4">
              {analysis.missedOpportunities.map((opportunity, idx) => (
                <div key={idx}>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>At {opportunity.timestamp}:</strong>
                  </p>
                  <p className="text-gray-700 mb-2">{opportunity.whatHappened}</p>
                  <p className="text-gray-800">
                    <strong>Try:</strong> {opportunity.whatYouCouldHaveDone}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Top Improvements */}
        {analysis.topImprovements.length > 0 && (
          <div className="bg-blue-50 rounded-lg border border-blue-200 p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="mr-2">🔧</span> {analysis.topImprovements.length} Specific Improvements for Next Time
            </h2>
            <ol className="space-y-3">
              {analysis.topImprovements.map((improvement, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="font-bold text-blue-600 mr-2">{idx + 1}.</span>
                  <span className="text-gray-700">{improvement}</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Full Transcript (Expandable) */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <button
            onClick={() => setTranscriptExpanded(!transcriptExpanded)}
            className="w-full flex items-center justify-between text-left"
          >
            <h2 className="text-xl font-bold text-gray-900 flex items-center">
              <span className="mr-2">📝</span> Full Transcript
            </h2>
            <span className="text-gray-600">
              {transcriptExpanded ? '▲ Hide' : '▼ View'}
            </span>
          </button>

          {transcriptExpanded && (
            <div className="mt-4 space-y-3 max-h-96 overflow-y-auto">
              {transcript.map((msg, idx) => (
                <div key={idx} className={`p-3 rounded ${
                  msg.speaker === 'ai' ? 'bg-gray-50' : 'bg-blue-50'
                }`}>
                  <p className="text-xs text-gray-500 mb-1">{msg.timestamp}</p>
                  <p className="font-semibold text-sm">
                    {msg.speaker === 'ai' ? 'Alex:' : 'You:'}
                  </p>
                  <p className="text-gray-700">{msg.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleTryAgain}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Try This Scenario Again
          </button>
          <Link
            href="/coach"
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition text-center"
          >
            Try Another Scenario →
          </Link>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
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
