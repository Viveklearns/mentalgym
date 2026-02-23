"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { loadQuizResults, clearQuizResults, clearQuizState } from "@/lib/storage";
import { getClusterName } from "@/lib/scoring";
import { QuizResults } from "@/types";

export default function ResultsPage() {
  const router = useRouter();
  const [results, setResults] = useState<QuizResults | null>(null);

  useEffect(() => {
    const savedResults = loadQuizResults();
    if (!savedResults) {
      router.push("/");
    } else {
      setResults(savedResults);
    }
  }, [router]);

  const handleRetake = () => {
    clearQuizResults();
    clearQuizState();
    router.push("/quiz");
  };

  if (!results) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  const getScoreLevelCopy = () => {
    switch (results.scoreLevel) {
      case "expert":
        return {
          title: "Expert Level",
          interpretation: "Exceptional understanding of Voss's framework. You've internalized both the concepts and their application in PM contexts. You're ready for high-stakes negotiations and complex stakeholder situations.",
          nextSteps: [
            "Complex multi-stakeholder scenarios",
            "High-pressure negotiations with executives",
            "Simulation mode (coming soon)"
          ],
          emailCTA: "Want advanced simulation scenarios when we launch?"
        };
      case "advanced":
        return {
          title: "Advanced Level",
          interpretation: "Strong grasp of Voss's techniques. You understand the frameworks conceptually and can apply them in common PM scenarios. The gap between you and mastery is practice under pressure.",
          nextSteps: [
            "Drill Cluster 3 scenarios (execution & commitment)",
            "Practice spotting hidden constraints in stakeholder conversations",
            "Sharpen your \"That's Right\" vs \"You're Right\" detection"
          ],
          emailCTA: "Want personalized practice for your gap areas when we launch?"
        };
      case "practitioner":
        return {
          title: "Practitioner Level",
          interpretation: "You've absorbed some of Voss's frameworks, but there are gaps in application. You likely remember concepts like mirroring and labeling, but may struggle to choose the right technique under pressure or sequence them correctly.",
          nextSteps: [
            "Re-read Chapters 2-3 of Never Split the Difference (Mirroring & Labeling)",
            "Practice mirroring in low-stakes conversations this week",
            "Focus on naming emotions before problem-solving"
          ],
          emailCTA: "Want guided practice exercises when Phase 2 launches?"
        };
      default:
        return {
          title: "Foundation Builder",
          interpretation: "The frameworks haven't fully stuck yet—which is completely normal. Most people forget 80% of what they read within weeks. The good news: you now have a clear map of what to practice.",
          nextSteps: [
            "Start with Chapter 2 of Never Split the Difference (just Mirroring)",
            "Try mirroring 3 times this week in real conversations",
            "Notice what people reveal when you repeat their last 3 words"
          ],
          emailCTA: "Want a step-by-step practice plan when we launch?"
        };
    }
  };

  const levelCopy = getScoreLevelCopy();
  const strongestCluster = getClusterName(results.strongestCluster);
  const weakestCluster = getClusterName(results.weakestCluster);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Disclaimer Banner */}
      <div className="bg-gray-100 border-b border-gray-200 py-3">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-700">
            <strong>Independent Study Tool</strong> — Not affiliated with Chris Voss or The Black Swan Group
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Score Display */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-6">
          <div className="text-center mb-6">
            <div className="text-6xl font-bold text-blue-600 mb-2">
              {results.overallScore}%
            </div>
            <div className="text-2xl font-semibold text-gray-900">
              {levelCopy.title}
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            {levelCopy.interpretation}
          </p>

          {/* Priority Gap Alert */}
          {results.priorityGap && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <div className="flex items-start">
                <span className="text-yellow-600 mr-2">⚠️</span>
                <div>
                  <p className="font-semibold text-yellow-900 mb-1">Priority Gap Detected</p>
                  <p className="text-sm text-yellow-800">
                    Your {getClusterName(results.priorityGap)} score is below 50%, indicating a specific skill gap.
                    Even strong overall performers benefit from targeted practice in weak clusters.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Cluster Breakdown */}
          <div className="space-y-4 mb-6">
            <h3 className="font-semibold text-gray-900">Your Breakdown:</h3>
            {[
              { name: "Listening & Empathy", score: results.clusterScores.cluster1 },
              { name: "Strategic Influence", score: results.clusterScores.cluster2 },
              { name: "Execution & Agreement", score: results.clusterScores.cluster3 }
            ].map((cluster) => (
              <div key={cluster.name}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-700">{cluster.name}</span>
                  <span className="text-sm font-semibold text-gray-900">{cluster.score}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      cluster.score >= 75 ? "bg-green-600" :
                      cluster.score >= 50 ? "bg-blue-600" : "bg-yellow-600"
                    }`}
                    style={{ width: `${cluster.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Strongest/Weakest */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-1">Your Strongest Area:</h4>
              <p className="text-gray-900">{strongestCluster}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-1">Your Growth Area:</h4>
              <p className="text-gray-900">{weakestCluster}</p>
            </div>
          </div>

          {/* Next Steps */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Recommended Next Steps:</h3>
            <ul className="space-y-2">
              {levelCopy.nextSteps.map((step, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Email Capture */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h3 className="font-semibold text-gray-900 mb-3">{levelCopy.emailCTA}</h3>
          <p className="text-sm text-gray-600 mb-4">
            We'll email you once when practice mode launches. No spam, ever.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
              Get Early Access
            </button>
          </div>
        </div>

        {/* Retake Button */}
        <button
          onClick={handleRetake}
          className="w-full px-6 py-3 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold rounded-lg transition-colors"
        >
          Retake Quiz
        </button>
      </div>
    </div>
  );
}
