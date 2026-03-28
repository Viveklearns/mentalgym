'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ProcessingPage() {
  const router = useRouter();

  useEffect(() => {
    // Get transcript from localStorage
    const transcriptData = localStorage.getItem('conversation_transcript');

    if (!transcriptData) {
      // No transcript found, redirect back
      router.push('/coach');
      return;
    }

    const conversation = JSON.parse(transcriptData);

    // Call analysis API
    const analyzeConversation = async () => {
      try {
        const response = await fetch('/api/analyze-conversation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            transcript: conversation.messages,
            scenario: conversation.scenario
          })
        });

        if (!response.ok) {
          throw new Error('Analysis failed');
        }

        const analysis = await response.json();

        // Save analysis to localStorage
        const analysisData = {
          ...analysis,
          scenario: conversation.scenario,
          conversationId: Date.now().toString(),
          conversationLength: formatDuration(conversation.duration),
          analyzedAt: new Date().toISOString()
        };

        localStorage.setItem('conversation_analysis', JSON.stringify(analysisData));
        localStorage.setItem('conversation_transcript', transcriptData); // Keep transcript

        // Redirect to results
        setTimeout(() => {
          router.push('/coach/scenarios/timeline-extension/results');
        }, 1000);

      } catch (error) {
        console.error('Error analyzing conversation:', error);
        alert('Failed to analyze conversation. Please try again.');
        router.push('/coach');
      }
    };

    analyzeConversation();
  }, [router]);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center max-w-md px-4">
        {/* Spinner */}
        <div className="mb-6">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto"></div>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Analyzing your conversation...
        </h1>

        <p className="text-gray-600">
          Detecting framework usage, missed opportunities, and areas for improvement.
        </p>

        <p className="text-sm text-gray-500 mt-6">
          This may take 5-10 seconds
        </p>
      </div>
    </div>
  );
}
