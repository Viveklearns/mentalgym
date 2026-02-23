"use client";

import { useState } from "react";
import { Question } from "@/types";
import { ALL_BANKS, BankNumber, AVAILABLE_BANKS, isBankAvailable } from "@/lib/questionBanks";
import { getClusterName } from "@/lib/scoring";

export default function AdminQuestionsPage() {
  const [selectedBank, setSelectedBank] = useState<BankNumber>(1);
  const questions = ALL_BANKS[selectedBank];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gray-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Admin: Question Bank Viewer</h1>
          <p className="text-gray-300">Internal testing tool - View all questions and answers</p>
        </div>
      </div>

      {/* Bank Selector */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-4">
            <label className="font-semibold text-gray-700">Select Question Bank:</label>
            <select
              value={selectedBank}
              onChange={(e) => setSelectedBank(Number(e.target.value) as BankNumber)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {([1, 2, 3, 4, 5, 6, 7, 8, 9] as BankNumber[]).map((num) => (
                <option key={num} value={num} disabled={!isBankAvailable(num)}>
                  Bank {num} {isBankAvailable(num) ? `(${ALL_BANKS[num].length} questions)` : "(Not available)"}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Questions Display */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {questions.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
            <p className="text-xl text-gray-600">Bank {selectedBank} is not yet available.</p>
            <p className="text-sm text-gray-500 mt-2">This bank needs to be added to lib/questionBanks.ts</p>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Summary */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-semibold text-blue-900">Bank {selectedBank}</span>
                  <span className="text-blue-700 mx-2">•</span>
                  <span className="text-blue-700">{questions.length} questions</span>
                </div>
                <div className="text-sm text-blue-700">
                  Cluster 1: {questions.filter(q => q.cluster === 1).length} |
                  Cluster 2: {questions.filter(q => q.cluster === 2).length} |
                  Cluster 3: {questions.filter(q => q.cluster === 3).length}
                </div>
              </div>
            </div>

            {/* Questions */}
            {questions.map((question, index) => (
              <QuestionDisplay
                key={question.id}
                question={question}
                questionNumber={index + 1}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

interface QuestionDisplayProps {
  question: Question;
  questionNumber: number;
}

function QuestionDisplay({ question, questionNumber }: QuestionDisplayProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      {/* Question Header */}
      <div className="mb-4 pb-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <span className="text-lg font-bold text-gray-900">Question {questionNumber}</span>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
              {question.framework}
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
              {getClusterName(question.cluster)}
            </span>
          </div>
        </div>
        <p className="text-sm text-gray-500">ID: {question.id}</p>
      </div>

      {/* Question Text */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-900 leading-relaxed">
          {question.questionText}
        </h3>
      </div>

      {/* Answer Options */}
      <div className="space-y-3 mb-6">
        <p className="text-sm font-semibold text-gray-700 mb-3">Answer Options:</p>
        {question.options.map((option, optionIndex) => {
          const isCorrect = question.correctAnswer === optionIndex;

          return (
            <div
              key={optionIndex}
              className={`p-4 border-2 rounded-lg ${
                isCorrect
                  ? "bg-green-50 border-green-500"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="flex items-start">
                <span className="font-semibold text-gray-700 mr-3 flex-shrink-0">
                  {String.fromCharCode(65 + optionIndex)}.
                </span>
                <div className="flex-1">
                  <p className="text-gray-900">{option}</p>
                  {isCorrect && (
                    <p className="text-sm font-semibold text-green-700 mt-2">
                      ✓ CORRECT ANSWER
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Explanations */}
      <div className="bg-gray-50 rounded-lg p-6 space-y-6">
        <div>
          <p className="text-sm font-semibold text-green-700 mb-2">
            ✓ Why the correct answer works:
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            {question.explanationCorrect}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-red-700 mb-3">
            ✗ Why the wrong answers don't work:
          </p>
          <div className="space-y-3">
            {Object.entries(question.explanationWrong).map(([index, explanation]) => {
              const optionIndex = Number(index);
              return (
                <div key={index} className="pl-4 border-l-2 border-red-300">
                  <p className="text-xs font-semibold text-red-600 mb-1">
                    Option {String.fromCharCode(65 + optionIndex)}:
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {explanation}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
