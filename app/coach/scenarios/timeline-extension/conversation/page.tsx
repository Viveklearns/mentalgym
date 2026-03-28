'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useConversation } from '@elevenlabs/react';
import { ConversationMessage } from '@/types/conversation';

export default function ConversationPage() {
  const router = useRouter();
  const [transcript, setTranscript] = useState<ConversationMessage[]>([]);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [conversationStarted, setConversationStarted] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const transcriptEndRef = useRef<HTMLDivElement>(null);
  const startTimeRef = useRef<number>(0);

  const MAX_DURATION = 240; // 4 minutes in seconds

  const conversation = useConversation({
    agentId: process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID || '',
    onConnect: () => {
      console.log('Connected to ElevenLabs');
      setConversationStarted(true);
      startTimeRef.current = Date.now();
    },
    onDisconnect: () => {
      console.log('Disconnected from ElevenLabs');
      endConversation();
    },
    onMessage: (message: any) => {
      console.log('Message received:', message);

      // Add message to transcript
      const speaker = message.source === 'ai' ? 'ai' : 'user';
      const text = message.message || '';

      if (text) {
        const currentTime = Math.floor((Date.now() - startTimeRef.current) / 1000);
        const msg: ConversationMessage = {
          speaker,
          text,
          timestamp: formatTime(currentTime)
        };
        setTranscript((prev) => [...prev, msg]);
      }
    },
    onError: (error: any) => {
      console.error('ElevenLabs error:', error);
      alert('Voice connection error. Please try again.');
    }
  });

  useEffect(() => {
    // Auto-scroll transcript to bottom
    transcriptEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [transcript]);

  useEffect(() => {
    // Timer
    if (conversationStarted && conversation.status === 'connected') {
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
  }, [conversationStarted, conversation.status]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const startConversation = async () => {
    try {
      await conversation.startSession();
    } catch (error) {
      console.error('Failed to start conversation:', error);
      alert('Failed to start conversation. Please check your microphone permissions.');
    }
  };

  const endConversation = async () => {
    if (timerRef.current) clearInterval(timerRef.current);

    // Stop the conversation
    try {
      await conversation.endSession();
    } catch (error) {
      console.error('Error ending conversation:', error);
    }

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

  const getStatusText = () => {
    if (conversation.status === 'connecting') return 'Connecting...';
    if (conversation.status === 'connected' && conversation.isSpeaking) return 'Alex is speaking...';
    if (conversation.status === 'connected') return 'Your turn...';
    return 'Ready to start';
  };

  const getStatusColor = () => {
    if (conversation.status === 'connecting') return 'bg-yellow-100';
    if (conversation.status === 'connected' && conversation.isSpeaking) return 'bg-blue-100';
    if (conversation.status === 'connected') return 'bg-green-100';
    return 'bg-gray-100';
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
        {conversation.status === 'disconnected' ? (
          <div className="text-center">
            <div className="mb-6">
              <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <p className="text-xl text-gray-700 mb-2">Ready to start?</p>
              <p className="text-gray-600 mb-4">
                Make sure your microphone is connected and working.
              </p>
              <p className="text-sm text-gray-500">
                Alex will begin the conversation when you start.
              </p>
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
              <div className={`w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-4 ${getStatusColor()} ${
                conversation.isSpeaking ? 'animate-pulse' : ''
              }`}>
                <svg className={`w-16 h-16 ${
                  conversation.status === 'connecting' ? 'text-yellow-600' :
                  conversation.isSpeaking ? 'text-blue-600' :
                  conversation.status === 'connected' ? 'text-green-600' :
                  'text-gray-400'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <p className="text-center text-lg text-gray-700">
                {getStatusText()}
              </p>
            </div>

            {/* Conversation Controls */}
            {conversation.status === 'connected' && (
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-4">
                  Just speak naturally - the AI will hear you
                </p>
                <button
                  onClick={handleEndEarly}
                  className="text-gray-600 hover:text-gray-800 underline"
                >
                  End Session
                </button>
              </div>
            )}
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

      {/* Connection Status Footer */}
      <div className={`border-t p-3 text-center text-sm ${
        conversation.status === 'connected' ? 'bg-green-50 text-green-700 border-green-200' :
        conversation.status === 'connecting' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
        'bg-gray-50 text-gray-600 border-gray-200'
      }`}>
        {conversation.status === 'connected' && '🟢 Connected - Speak naturally'}
        {conversation.status === 'connecting' && '🟡 Connecting to voice AI...'}
        {conversation.status === 'disconnected' && 'Not connected'}
      </div>
    </div>
  );
}
