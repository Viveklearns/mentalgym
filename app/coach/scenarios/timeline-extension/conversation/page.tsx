'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ConversationMessage } from '@/types/conversation';

export default function ConversationPage() {
  const router = useRouter();
  const [transcript, setTranscript] = useState<ConversationMessage[]>([]);
  const [status, setStatus] = useState<'waiting' | 'listening' | 'speaking'>('waiting');
  const [elapsedTime, setElapsedTime] = useState(0);
  const [conversationStarted, setConversationStarted] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const transcriptEndRef = useRef<HTMLDivElement>(null);

  const MAX_DURATION = 240; // 4 minutes in seconds

  useEffect(() => {
    // Auto-scroll transcript to bottom
    transcriptEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [transcript]);

  useEffect(() => {
    // Timer
    if (conversationStarted) {
      timerRef.current = setInterval(() => {
        setElapsedTime((prev) => {
          const newTime = prev + 1;
          if (newTime >= MAX_DURATION) {
            endConversation();
          }
          return newTime;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [conversationStarted]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const addMessage = (speaker: 'user' | 'ai', text: string) => {
    const message: ConversationMessage = {
      speaker,
      text,
      timestamp: formatTime(elapsedTime)
    };
    setTranscript((prev) => [...prev, message]);
  };

  const startConversation = () => {
    setConversationStarted(true);
    // Simulate AI first message
    setTimeout(() => {
      addMessage('ai', "Two more weeks? I don't know... the team is already stretched thin. We've got the Q2 platform work coming up and people are burnt out.");
      setStatus('waiting');
    }, 1000);
  };

  const handlePushToTalk = (action: 'press' | 'release') => {
    if (action === 'press') {
      setStatus('listening');
    } else if (action === 'release') {
      // Simulate user message (in production, this would be STT)
      const mockUserResponse = "I understand the team is stretched thin...";
      addMessage('user', mockUserResponse);
      setStatus('speaking');

      // Simulate AI response
      setTimeout(() => {
        addMessage('ai', "Yeah, exactly. And we've got that Q2 platform work starting in two weeks.");
        setStatus('waiting');
      }, 2000);
    }
  };

  const endConversation = () => {
    if (timerRef.current) clearInterval(timerRef.current);

    // Save transcript to localStorage
    const conversationData = {
      scenario: 'timeline-extension',
      startTime: localStorage.getItem('conversation_start_time') || new Date().toISOString(),
      endTime: new Date().toISOString(),
      duration: elapsedTime,
      messages: transcript
    };
    localStorage.setItem('conversation_transcript', JSON.stringify(conversationData));

    // Redirect to processing
    router.push('/coach/scenarios/timeline-extension/processing');
  };

  const handleEndEarly = () => {
    if (confirm('End session early? You can always try again.')) {
      endConversation();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex justify-between items-center">
        <h1 className="text-lg font-semibold text-gray-900">
          Timeline Extension Negotiation
        </h1>
        <div className="text-lg font-mono text-gray-700">
          {formatTime(elapsedTime)}
        </div>
      </div>

      {/* Main Conversation Area */}
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        {!conversationStarted ? (
          <div className="text-center">
            <div className="mb-6">
              <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <p className="text-xl text-gray-700 mb-2">Ready to start?</p>
              <p className="text-gray-600">Alex will begin the conversation</p>
            </div>
            <button
              onClick={startConversation}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
            >
              Start Conversation
            </button>
          </div>
        ) : (
          <>
            {/* Status Indicator */}
            <div className="mb-6">
              <div className={`w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-4 ${
                status === 'listening' ? 'bg-red-100 animate-pulse' :
                status === 'speaking' ? 'bg-blue-100' :
                'bg-gray-100'
              }`}>
                <svg className={`w-16 h-16 ${
                  status === 'listening' ? 'text-red-600' :
                  status === 'speaking' ? 'text-blue-600' :
                  'text-gray-400'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <p className="text-center text-lg text-gray-700">
                {status === 'listening' && 'Recording...'}
                {status === 'speaking' && 'Alex is speaking...'}
                {status === 'waiting' && 'Your turn...'}
              </p>
            </div>

            {/* Push to Talk Button */}
            <button
              onMouseDown={() => handlePushToTalk('press')}
              onMouseUp={() => handlePushToTalk('release')}
              onTouchStart={() => handlePushToTalk('press')}
              onTouchEnd={() => handlePushToTalk('release')}
              disabled={status === 'speaking'}
              className={`px-8 py-4 rounded-lg font-semibold text-lg transition ${
                status === 'listening'
                  ? 'bg-red-600 text-white'
                  : status === 'speaking'
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {status === 'listening' ? 'Recording...' : 'Push to Talk'}
            </button>

            {/* End Session Button */}
            <button
              onClick={handleEndEarly}
              className="mt-4 text-gray-600 hover:text-gray-800 underline"
            >
              End Session
            </button>
          </>
        )}
      </div>

      {/* Transcript */}
      {transcript.length > 0 && (
        <div className="bg-white border-t border-gray-200 p-4 max-h-64 overflow-y-auto">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">Transcript</h3>
          <div className="space-y-2">
            {transcript.map((msg, idx) => (
              <div key={idx} className="text-sm">
                <span className="font-semibold">
                  {msg.speaker === 'ai' ? 'Alex' : 'You'}:
                </span>{' '}
                <span className="text-gray-700">{msg.text}</span>{' '}
                <span className="text-gray-400 text-xs">[{msg.timestamp}]</span>
              </div>
            ))}
            <div ref={transcriptEndRef} />
          </div>
        </div>
      )}

      {/* Note about placeholder */}
      <div className="bg-yellow-50 border-t border-yellow-200 p-3 text-center text-sm text-gray-700">
        <strong>Note:</strong> This is a placeholder interface. Once you configure your ElevenLabs agent and provide the Agent ID,
        this will connect to real voice conversation with Claude-powered AI.
      </div>
    </div>
  );
}
