"use client";

import { Question } from "@/types";

interface QuizQuestionProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer: number | null;
  onAnswerSelect: (answerIndex: number) => void;
  onNext: () => void;
}

export default function QuizQuestion({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onAnswerSelect,
  onNext
}: QuizQuestionProps) {
  const isLastQuestion = questionNumber === totalQuestions;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">
            Question {questionNumber} of {totalQuestions}
          </span>
          <span className="text-sm text-gray-600">
            {Math.round((questionNumber / totalQuestions) * 100)}% Complete
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Framework Tag */}
      <div className="mb-4">
        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
          {question.framework}
        </span>
      </div>

      {/* Question */}
      <h2 className="text-2xl font-bold text-gray-900 mb-8 leading-relaxed">
        {question.questionText}
      </h2>

      {/* Options */}
      <div className="space-y-4 mb-8">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswerSelect(index)}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
              selectedAnswer === index
                ? "border-blue-600 bg-blue-50"
                : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
            }`}
          >
            <div className="flex items-start">
              <span className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center mr-3 ${
                selectedAnswer === index
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-gray-300 text-gray-500"
              }`}>
                {String.fromCharCode(65 + index)}
              </span>
              <span className="flex-1 text-gray-900">{option}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={selectedAnswer === null}
        className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all ${
          selectedAnswer === null
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {isLastQuestion ? "See Results" : "Next Question"}
      </button>
    </div>
  );
}
