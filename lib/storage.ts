import { QuizState, QuizResults } from "@/types";

const QUIZ_STATE_KEY = "mentalgym_quiz_state";
const QUIZ_RESULTS_KEY = "mentalgym_quiz_results";
const EMAIL_SUBMITTED_KEY = "mentalgym_email_submitted";

export function isLocalStorageAvailable(): boolean {
  try {
    const test = "__localStorage_test__";
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch {
    return false;
  }
}

export function saveQuizState(state: QuizState): void {
  if (!isLocalStorageAvailable()) return;
  try {
    localStorage.setItem(QUIZ_STATE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error("Failed to save quiz state:", error);
  }
}

export function loadQuizState(): QuizState | null {
  if (!isLocalStorageAvailable()) return null;
  try {
    const saved = localStorage.getItem(QUIZ_STATE_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch (error) {
    console.error("Failed to load quiz state:", error);
    return null;
  }
}

export function clearQuizState(): void {
  if (!isLocalStorageAvailable()) return;
  try {
    localStorage.removeItem(QUIZ_STATE_KEY);
  } catch (error) {
    console.error("Failed to clear quiz state:", error);
  }
}

export function saveQuizResults(results: QuizResults): void {
  if (!isLocalStorageAvailable()) return;
  try {
    localStorage.setItem(QUIZ_RESULTS_KEY, JSON.stringify(results));
  } catch (error) {
    console.error("Failed to save quiz results:", error);
  }
}

export function loadQuizResults(): QuizResults | null {
  if (!isLocalStorageAvailable()) return null;
  try {
    const saved = localStorage.getItem(QUIZ_RESULTS_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch (error) {
    console.error("Failed to load quiz results:", error);
    return null;
  }
}

export function clearQuizResults(): void {
  if (!isLocalStorageAvailable()) return;
  try {
    localStorage.removeItem(QUIZ_RESULTS_KEY);
  } catch (error) {
    console.error("Failed to clear quiz results:", error);
  }
}

export function markEmailSubmitted(): void {
  if (!isLocalStorageAvailable()) return;
  try {
    localStorage.setItem(EMAIL_SUBMITTED_KEY, "true");
  } catch (error) {
    console.error("Failed to mark email submitted:", error);
  }
}

export function hasSubmittedEmail(): boolean {
  if (!isLocalStorageAvailable()) return false;
  try {
    return localStorage.getItem(EMAIL_SUBMITTED_KEY) === "true";
  } catch (error) {
    return false;
  }
}
