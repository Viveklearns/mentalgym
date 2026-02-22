"use client";

import { useState } from "react";
import Quiz from "@/components/Quiz";

export default function QuizPage() {
  const [quizStarted, setQuizStarted] = useState(false);

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Disclaimer Banner */}
        <div className="bg-gray-100 border-b border-gray-200 py-3">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-sm text-gray-700">
              <strong>Independent Study Tool</strong> — Not affiliated with, endorsed by, or sponsored by Chris Voss, The Black Swan Group, or HarperCollins Publishers.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 py-16">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Framework Diagnostic: Never Split the Difference
            </h1>

            <div className="flex items-center gap-4 text-gray-600 mb-8">
              <span>12 questions</span>
              <span>•</span>
              <span>8-10 minutes</span>
              <span>•</span>
              <span>Designed for Product Managers</span>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <p className="text-sm text-gray-700">
                This diagnostic tests your knowledge of concepts from the book
                <em className="font-semibold"> "Never Split the Difference"</em> by Chris Voss.
                Mental Gym is an independent educational tool not affiliated with the author or publisher.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="font-semibold text-gray-900 mb-3">Instructions:</h2>
              <p className="text-gray-700 leading-relaxed">
                Read each scenario carefully. Choose the response that best applies the frameworks from the book.
                No peeking back at previous questions—trust your instincts!
              </p>
            </div>

            <button
              onClick={() => setQuizStarted(true)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors"
            >
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Disclaimer Banner */}
      <div className="bg-gray-100 border-b border-gray-200 py-2">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs text-gray-600">
            Independent Study Tool — Not affiliated with Chris Voss or The Black Swan Group
          </p>
        </div>
      </div>

      <Quiz />
    </div>
  );
}
