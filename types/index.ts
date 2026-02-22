// TypeScript interfaces for Mental Gym Quiz App

export interface Question {
  id: string;
  cluster: 1 | 2 | 3;
  framework: string;
  questionText: string;
  options: [string, string, string, string];
  correctAnswer: 0 | 1 | 2 | 3;
  explanationCorrect: string;
  explanationWrong: {
    [key: number]: string;
  };
}

export interface QuizState {
  quizStarted: boolean;
  currentQuestionIndex: number;
  answers: (number | null)[];
  startTime: string;
  lastUpdated: string;
}

export interface QuizResults {
  completedAt: string;
  timeTaken: number;
  answers: number[];
  overallScore: number;
  clusterScores: {
    cluster1: number;
    cluster2: number;
    cluster3: number;
  };
  strongestCluster: 1 | 2 | 3;
  weakestCluster: 1 | 2 | 3;
  scoreLevel: "expert" | "advanced" | "practitioner" | "foundation";
  priorityGap: 1 | 2 | 3 | null;
}

export interface EmailSubmission {
  email: string;
  scoreLevel: string;
  overallScore: number;
  cluster1Score: number;
  cluster2Score: number;
  cluster3Score: number;
  submittedAt: string;
}
