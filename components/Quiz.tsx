"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import QuizQuestion from "./QuizQuestion";
import { QUESTIONS } from "@/lib/questions";
import { saveQuizState, loadQuizState, clearQuizState } from "@/lib/storage";
import { calculateResults } from "@/lib/scoring";
import { saveQuizResults } from "@/lib/storage";

export default function Quiz() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [allAnswers, setAllAnswers] = useState<(number | null)[]>(
    Array(QUESTIONS.length).fill(null)
  );
  const [startTime, setStartTime] = useState<string>("");

  // Load saved state on mount
  useEffect(() => {
    const savedState = loadQuizState();
    if (savedState && savedState.quizStarted) {
      setCurrentQuestion(savedState.currentQuestionIndex);
      setAllAnswers(savedState.answers);
      setStartTime(savedState.startTime);
      setSelectedAnswer(savedState.answers[savedState.currentQuestionIndex]);
    } else {
      // New quiz
      const now = new Date().toISOString();
      setStartTime(now);
      const initialState = {
        quizStarted: true,
        currentQuestionIndex: 0,
        answers: Array(QUESTIONS.length).fill(null),
        startTime: now,
        lastUpdated: now
      };
      saveQuizState(initialState);
    }
  }, []);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);

    // Update answers array
    const newAnswers = [...allAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setAllAnswers(newAnswers);

    // Save state
    saveQuizState({
      quizStarted: true,
      currentQuestionIndex: currentQuestion,
      answers: newAnswers,
      startTime,
      lastUpdated: new Date().toISOString()
    });
  };

  const handleNext = () => {
    if (currentQuestion < QUESTIONS.length - 1) {
      // Move to next question
      const nextIndex = currentQuestion + 1;
      setCurrentQuestion(nextIndex);
      setSelectedAnswer(allAnswers[nextIndex]);

      // Save state
      saveQuizState({
        quizStarted: true,
        currentQuestionIndex: nextIndex,
        answers: allAnswers,
        startTime,
        lastUpdated: new Date().toISOString()
      });
    } else {
      // Quiz complete - calculate results
      const results = calculateResults(allAnswers as number[], startTime);
      saveQuizResults(results);
      clearQuizState();
      router.push("/results");
    }
  };

  if (!startTime) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <QuizQuestion
      question={QUESTIONS[currentQuestion]}
      questionNumber={currentQuestion + 1}
      totalQuestions={QUESTIONS.length}
      selectedAnswer={selectedAnswer}
      onAnswerSelect={handleAnswerSelect}
      onNext={handleNext}
    />
  );
}
