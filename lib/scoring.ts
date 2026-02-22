import { QuizResults } from "@/types";
import { QUESTIONS } from "./questions";

export function calculateClusterScore(cluster: 1 | 2 | 3, answers: number[]): number {
  const clusterQuestions = QUESTIONS
    .map((q, idx) => ({ ...q, answerIndex: idx }))
    .filter(q => q.cluster === cluster);

  const correctCount = clusterQuestions.filter(q =>
    answers[q.answerIndex] === q.correctAnswer
  ).length;

  return Math.round((correctCount / clusterQuestions.length) * 100);
}

export function calculateOverallScore(clusterScores: {
  cluster1: number;
  cluster2: number;
  cluster3: number;
}): number {
  return Math.round(
    (clusterScores.cluster1 * 0.30) +
    (clusterScores.cluster2 * 0.50) +
    (clusterScores.cluster3 * 0.20)
  );
}

export function getScoreLevel(score: number): "expert" | "advanced" | "practitioner" | "foundation" {
  if (score >= 86) return "expert";
  if (score >= 66) return "advanced";
  if (score >= 41) return "practitioner";
  return "foundation";
}

export function findStrongestCluster(clusterScores: {
  cluster1: number;
  cluster2: number;
  cluster3: number;
}): 1 | 2 | 3 {
  const scores = [
    { cluster: 1 as const, score: clusterScores.cluster1 },
    { cluster: 2 as const, score: clusterScores.cluster2 },
    { cluster: 3 as const, score: clusterScores.cluster3 }
  ];

  scores.sort((a, b) => b.score - a.score);
  return scores[0].cluster;
}

export function findWeakestCluster(clusterScores: {
  cluster1: number;
  cluster2: number;
  cluster3: number;
}): 1 | 2 | 3 {
  const scores = [
    { cluster: 1 as const, score: clusterScores.cluster1 },
    { cluster: 2 as const, score: clusterScores.cluster2 },
    { cluster: 3 as const, score: clusterScores.cluster3 }
  ];

  scores.sort((a, b) => a.score - b.score);
  return scores[0].cluster;
}

export function findPriorityGap(clusterScores: {
  cluster1: number;
  cluster2: number;
  cluster3: number;
}): 1 | 2 | 3 | null {
  if (clusterScores.cluster1 <= 50) return 1;
  if (clusterScores.cluster2 <= 50) return 2;
  if (clusterScores.cluster3 <= 50) return 3;
  return null;
}

export function calculateResults(
  answers: number[],
  startTime: string
): QuizResults {
  const cluster1Score = calculateClusterScore(1, answers);
  const cluster2Score = calculateClusterScore(2, answers);
  const cluster3Score = calculateClusterScore(3, answers);

  const clusterScores = {
    cluster1: cluster1Score,
    cluster2: cluster2Score,
    cluster3: cluster3Score
  };

  const overallScore = calculateOverallScore(clusterScores);
  const scoreLevel = getScoreLevel(overallScore);
  const strongestCluster = findStrongestCluster(clusterScores);
  const weakestCluster = findWeakestCluster(clusterScores);
  const priorityGap = findPriorityGap(clusterScores);

  const completedAt = new Date().toISOString();
  const timeTaken = Math.round(
    (new Date(completedAt).getTime() - new Date(startTime).getTime()) / 1000
  );

  return {
    completedAt,
    timeTaken,
    answers,
    overallScore,
    clusterScores,
    strongestCluster,
    weakestCluster,
    scoreLevel,
    priorityGap
  };
}

export function getClusterName(cluster: 1 | 2 | 3): string {
  switch (cluster) {
    case 1: return "Listening & Empathy";
    case 2: return "Strategic Influence";
    case 3: return "Execution & Agreement";
  }
}
