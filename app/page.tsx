import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Disclaimer Banner */}
      <div className="bg-gray-100 border-b border-gray-200 py-3">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-700">
            <strong>Independent Study Tool</strong> — Not affiliated with, endorsed by, or sponsored by Chris Voss, The Black Swan Group, or HarperCollins Publishers.
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Practice What You Read.<br />Remember What Matters.
        </h1>

        <p className="text-xl text-gray-600 mb-6">
          You've read the books. You've learned the frameworks.<br />
          Now it's time to actually use them.
        </p>

        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Mental Gym helps you turn book knowledge into cognitive skills through realistic practice.
          Test your understanding of frameworks from <em className="font-semibold">Never Split the Difference</em>—see which concepts stuck, which didn't, and how to apply them in your actual work.
        </p>

        <Link
          href="/quiz"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors mb-4"
        >
          Take Your Free Diagnostic →
        </Link>

        <p className="text-sm text-gray-500">
          12 questions • 10 minutes • Designed for Product Managers
        </p>
      </section>

      {/* Independent Tool Notice */}
      <section className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
          <p className="text-sm text-gray-700">
            Mental Gym is an independent study companion for readers of "Never Split the Difference" by Chris Voss.
            We are not affiliated with the author, The Black Swan Group, or HarperCollins Publishers.
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Sound Familiar?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">You Read It</h3>
              <p className="text-gray-700">
                You finished Never Split the Difference. Highlighted passages. Took notes.
                Felt ready to negotiate like an FBI hostage negotiator.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-4xl mb-4">🤔</div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">You Forgot It</h3>
              <p className="text-gray-700">
                Two weeks later, you're in a tense roadmap meeting and... you default to the same old approach.
                The frameworks vanished when you needed them most.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-4xl mb-4">😤</div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">You're Frustrated</h3>
              <p className="text-gray-700">
                You invested hours reading. But without practice, it's just trivia.
                Reading ≠ Remembering ≠ Applying.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
            The Missing Piece: Practice
          </h2>

          <p className="text-lg text-gray-700 text-center mb-12 max-w-2xl mx-auto">
            Professional athletes don't just read playbooks—they drill. Surgeons don't just study anatomy—they practice on simulators.
            But where do you practice negotiation frameworks, mental models, and decision-making skills?
            <br /><br />
            <strong>That's where Mental Gym comes in.</strong>
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Diagnose</h3>
              <p className="text-gray-700">
                Take a 10-minute quiz to assess which frameworks from Never Split the Difference you actually retained—and which slipped away.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">See Your Gaps</h3>
              <p className="text-gray-700">
                Get a personalized breakdown: which negotiation skills are sharp, which need work.
                Built specifically for Product Managers facing real stakeholder conversations.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">💪</div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Practice & Master</h3>
              <p className="text-gray-700">
                Sharpen your skills with scenario-based voice roleplay. Turn knowledge into instinct.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Book Focus */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
            For Readers of Never Split the Difference
          </h2>

          <p className="text-lg text-gray-700 text-center mb-8">
            The book teaches 20+ negotiation frameworks—but most people only remember 3-4.
            Our diagnostic tests your understanding of the concepts Product Managers use most:
          </p>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 max-w-2xl mx-auto mb-8">
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span className="text-gray-700">Tactical Empathy</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span className="text-gray-700">Accusation Audits</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span className="text-gray-700">Mirroring</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span className="text-gray-700">"That's Right" vs "You're Right"</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span className="text-gray-700">Labeling Emotions</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span className="text-gray-700">Calibrated Questions</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span className="text-gray-700">Loss Aversion Framing</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span className="text-gray-700">Black Swan Discovery</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span className="text-gray-700">The Three Negotiator Types</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span className="text-gray-700">Implementation Questions</span>
            </div>
          </div>

          <p className="text-center text-gray-600 italic">
            Plus 2 more frameworks crucial for PM stakeholder negotiations.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Find Out What Actually Stuck?
          </h2>

          <p className="text-lg text-gray-700 mb-8">
            Take the free diagnostic. See where you stand. Get a clear roadmap for which frameworks to sharpen.
          </p>

          <Link
            href="/quiz"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors mb-4"
          >
            Start Your Diagnostic Now →
          </Link>

          <p className="text-sm text-gray-500">
            No signup required • Results in 10 minutes • Built for PMs
          </p>
        </div>
      </section>

      {/* Voice Coach CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-4xl mb-4">🎙️</div>
          <h2 className="text-2xl font-bold mb-3">
            NEW: Practice With a Voice Coach (Beta)
          </h2>
          <p className="text-lg mb-2 text-blue-100">
            Reading about negotiation frameworks is step 1.
          </p>
          <p className="text-lg mb-2 text-blue-100">
            Our diagnostic quiz is step 2.
          </p>
          <p className="text-lg mb-6 text-blue-100">
            Step 3? Practice under pressure with an AI coach.
          </p>
          <Link
            href="/coach"
            className="inline-block bg-white text-blue-600 font-bold py-3 px-6 rounded-lg text-lg hover:bg-blue-50 transition-colors"
          >
            Try Voice Coaching - Beta →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="border-t border-gray-700 pt-8">
            <p className="text-sm leading-relaxed mb-4">
              Mental Gym is an independent educational tool. "Never Split the Difference" is a book by Chris Voss published by HarperCollins.
              This quiz is not affiliated with, endorsed by, or sponsored by Chris Voss, The Black Swan Group, or HarperCollins Publishers.
              All quiz scenarios and content are original works created for educational commentary and practice purposes.
            </p>

            <p className="text-sm mb-4">
              Quiz content © 2025 Mental Gym. Framework concepts referenced from "Never Split the Difference" by Chris Voss (HarperCollins, 2016).
            </p>

            <p className="text-sm">
              © 2025 Mental Gym. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
