"use client";

import { useState } from "react";
import { QUESTIONS } from "@/lib/questions";
import { getClusterName } from "@/lib/scoring";

interface QuestionReviewProps {
  answers: number[];
}

export default function QuestionReview({ answers }: QuestionReviewProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between text-left"
      >
        <h3 className="text-lg font-semibold text-gray-900">
          {isExpanded ? "▲" : "▼"} View Detailed Breakdown - See Your Answers & Explanations
        </h3>
      </button>

      {isExpanded && (
        <div className="mt-6 space-y-6">
          {QUESTIONS.map((question, index) => {
            const userAnswer = answers[index];
            const isCorrect = userAnswer === question.correctAnswer;

            return (
              <div
                key={question.id}
                className="border border-gray-200 rounded-lg p-6"
              >
                {/* Question Header */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">
                      Question {index + 1} of {QUESTIONS.length}
                    </span>
                    <span className="text-xs text-gray-500">
                      {question.framework} • {getClusterName(question.cluster)}
                    </span>
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 leading-relaxed">
                    {question.questionText}
                  </h4>
                </div>

                {/* Answer Options */}
                <div className="space-y-3 mb-6">
                  <p className="text-sm font-semibold text-gray-700 mb-2">All Answer Options:</p>
                  {question.options.map((option, optionIndex) => {
                    const isUserAnswer = userAnswer === optionIndex;
                    const isCorrectAnswer = question.correctAnswer === optionIndex;

                    let bgColor = "bg-white";
                    let borderColor = "border-gray-200";
                    let label = "";

                    if (isCorrectAnswer && isUserAnswer) {
                      bgColor = "bg-green-50";
                      borderColor = "border-green-500";
                      label = "✓ YOUR ANSWER (CORRECT)";
                    } else if (isCorrectAnswer) {
                      bgColor = "bg-green-50";
                      borderColor = "border-green-500";
                      label = "✓ CORRECT ANSWER";
                    } else if (isUserAnswer) {
                      bgColor = "bg-red-50";
                      borderColor = "border-red-500";
                      label = "✗ YOUR ANSWER";
                    }

                    return (
                      <div
                        key={optionIndex}
                        className={`p-3 border-2 rounded-lg ${bgColor} ${borderColor}`}
                      >
                        <div className="flex items-start">
                          <span className="font-semibold text-gray-700 mr-2">
                            {String.fromCharCode(65 + optionIndex)}.
                          </span>
                          <div className="flex-1">
                            <p className="text-gray-900">{option}</p>
                            {label && (
                              <p className={`text-xs font-semibold mt-1 ${
                                isCorrectAnswer ? "text-green-700" : "text-red-700"
                              }`}>
                                {label}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Explanation */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">EXPLANATION:</p>

                  {isCorrect ? (
                    <div>
                      <p className="text-sm font-semibold text-green-700 mb-2">
                        ✓ You got this right!
                      </p>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {question.explanationCorrect}
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-semibold text-red-700 mb-2">
                          ✗ Why this didn't work:
                        </p>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {question.explanationWrong[userAnswer]}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-green-700 mb-2">
                          ✓ Why the correct answer works:
                        </p>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {question.explanationCorrect}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
