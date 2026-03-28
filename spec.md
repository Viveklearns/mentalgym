# Mental Gym - Complete Product Specification
## FINAL - Ready to Build

---

## Product Vision

A cognitive skills practice platform for readers of non-fiction books. Users who have read books about mental models, negotiation, decision-making, and other thinking frameworks can practice applying those concepts through scenario-based exercises. Starting with *Never Split the Difference* by Chris Voss, focused on Product Managers.

## Core Problem

People read non-fiction books to improve how they think, learn valuable frameworks and mental models, but forget most of it within weeks. There's no structured way to practice applying what they've learned in realistic scenarios.

## Solution

A "mental gym" that provides:
1. Scenario-based diagnostic quizzes to assess framework understanding
2. Personalized feedback showing strengths and gaps
3. Practice exercises tailored to professional context (starting with PMs)

---

## Legal & Compliance - CRITICAL ⚖️

### Intellectual Property Position

**Copyright:** Quiz scenarios and explanations are original works created for educational commentary. Framework concepts (tactical empathy, mirroring, calibrated questions, etc.) are ideas and methods, which are not protected by copyright. We reference the book but do not reproduce its text.

**Trademark:** "Never Split the Difference" is used nominatively to identify the specific book being studied. This is fair use under trademark law. No affiliation, endorsement, sponsorship, or official relationship is claimed or implied.

**Fair Use Claim:**
- Educational purpose (teaching/practicing negotiation concepts)
- Transformative use (original scenarios in PM context, not book reproduction)
- Does not substitute for the book (requires user to have read it)
- Encourages book purchase and engagement

**Right of Publicity:** Chris Voss's name is used descriptively to identify the author of the referenced book, not for endorsement or commercial appropriation.

### Risk Assessment

**MVP (Free, <100 users):** LOW RISK
- Educational use, transformative, non-commercial, small scale
- Action: Disclaimers required

**Paid ($9, 100-500 users):** MEDIUM RISK
- Commercial use increases scrutiny
- Action: Disclaimers + Terms of Service + Privacy Policy + consider proactive outreach

**Scale (1000+ users, $10K+ revenue):** MEDIUM-HIGH RISK
- Likely to attract attention from author/publisher
- Action: IP lawyer consultation + consider licensing discussions

### Required Disclaimers - MUST IMPLEMENT

**Every Page - Header Banner (Visible Above Fold):**
```
─────────────────────────────────────────────────────────────
Independent Study Tool
Not affiliated with, endorsed by, or sponsored by Chris Voss,
The Black Swan Group, or HarperCollins Publishers.
─────────────────────────────────────────────────────────────
```

**Landing Page - Top Section (After Hero, Before Content):**
```
Mental Gym is an independent study companion for readers of "Never Split
the Difference" by Chris Voss. We are not affiliated with the author,
The Black Swan Group, or HarperCollins Publishers.
```

**Quiz Page - Pre-Quiz Screen:**
```
This diagnostic tests your knowledge of concepts from the book "Never Split
the Difference" by Chris Voss. Mental Gym is an independent educational tool
not affiliated with the author or publisher.
```

**Footer - Expanded (All Pages):**
```
Mental Gym is an independent educational tool. "Never Split the Difference"
is a book by Chris Voss published by HarperCollins. This quiz is not affiliated
with, endorsed by, or sponsored by Chris Voss, The Black Swan Group, or
HarperCollins Publishers. All quiz scenarios and content are original works
created for educational commentary and practice purposes.

Quiz content © 2025 Mental Gym. Framework concepts referenced from
"Never Split the Difference" by Chris Voss (HarperCollins, 2016).

© 2025 Mental Gym. All rights reserved.
```

### Language Changes - Avoid Implied Endorsement

**AVOID (Implies Official/Authorized):**
- ❌ "We're launching with Chris Voss's *Never Split the Difference*"
- ❌ "Chris Voss teaches 20+ frameworks"
- ❌ "Master the Voss method"
- ❌ "Official NSTD practice tool"

**USE (Clearly Independent):**
- ✅ "Test your knowledge of frameworks from the book *Never Split the Difference*"
- ✅ "Practice concepts you learned from reading *Never Split the Difference*"
- ✅ "The book teaches 20+ frameworks"
- ✅ "Independent study companion for readers"

### Pre-Launch Checklist

**Before MVP Launch:**
- [ ] Add disclaimer banner to all pages (header)
- [ ] Add disclaimer to footer (all pages)
- [ ] Add disclaimer to pre-quiz screen
- [ ] Add disclaimer after hero section on landing page
- [ ] Review all copy for implied endorsement language
- [ ] Replace "we teach" with "practice what you learned"
- [ ] Add copyright notice to quiz content
- [ ] Test disclaimers are visible on mobile

**Before Monetization:**
- [ ] Add Terms of Service page
- [ ] Add Privacy Policy page (required for email collection)
- [ ] Link to Terms & Privacy in footer
- [ ] Consider proactive email to The Black Swan Group
- [ ] Ensure Stripe/payment mentions "independent study tool"

**Before Scale (>500 users):**
- [ ] IP lawyer consultation ($500-1000)
- [ ] Get legal opinion letter on fair use
- [ ] Consider licensing discussions with Black Swan Group
- [ ] Document all disclaimer implementations for defense

### Potential Legal Scenarios

**Cease & Desist Letter (30-50% likelihood if you scale):**
- Don't panic - C&D is exploratory, not a lawsuit
- Response: "We believe we're in fair use, but happy to clarify disclaimers"
- Worst case: Remove book name, pivot to "negotiation frameworks quiz"
- Best case: They say "just make disclaimer bigger"

**Trademark Opposition (5% likelihood):**
- Only if you tried to trademark something with their name
- Mitigation: Don't trademark anything with "Never Split the Difference"

**Actual Lawsuit (<5% likelihood):**
- Expensive for them, you're not direct competitor
- Defense: Fair use, educational, transformative, nominative trademark use
- Precedent in your favor (SparkNotes, Quizlet, study guides)

### Positive Outcome Scenarios

**Best Case: Partnership**
- They like what you built
- Official licensing deal
- Revenue share or endorsement

**Realistic Case: Tacit Approval**
- They see it, don't object
- You continue with disclaimers

**Neutral Case: Asked to Clarify**
- They ask for bigger disclaimers
- You comply, continue operating

---

## Technical Decisions - LOCKED ✓

### Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React hooks (useState, useEffect)
- **Storage**: localStorage (no backend for MVP)
- **Hosting**: Vercel (mentalgym.vercel.app)
- **Email Service**: Web3Forms (free, no backend needed)
- **Analytics**: Vercel Analytics (built-in)

### Information Architecture
- **Routes**:
  - `/` - Landing page
  - `/quiz` - Quiz experience
  - `/results` - Results page
- **Navigation**: Linear flow (Landing → Quiz → Results), no back navigation during quiz

### Question Count
- **Exactly 12 questions** distributed as:
  - Cluster 1 (Listening & Empathy): 4 questions
  - Cluster 2 (Strategic Influence): 5 questions
  - Cluster 3 (Execution & Agreement): 3 questions

### Feedback Approach
- **No immediate feedback during quiz**
- Results page shows overall score and cluster breakdown immediately
- Detailed question-by-question review available in expandable section on Results page
  - Shows all 12 questions with user's answer vs correct answer
  - Includes full explanations for both correct and incorrect answers
  - Users can review at their own pace after seeing overall results
- Keeps quiz flow fast (target 8-10 minutes)

---

## 1. Landing Page - Complete Copy

### Hero Section
```
Headline: Practice What You Read. Remember What Matters.

Subheadline: You've read the books. You've learned the frameworks.
Now it's time to actually use them.

Body: Mental Gym helps you turn book knowledge into cognitive skills through
realistic practice. Test your understanding of frameworks from Never Split
the Difference—see which concepts stuck, which didn't, and how to apply
them in your actual work.

CTA Button: Take Your Free Diagnostic →

Below CTA: 12 questions • 10 minutes • Designed for Product Managers
```

### Disclaimer Banner (Top of Page - Visible)
```
─────────────────────────────────────────────────────────────
Independent Study Tool
Not affiliated with, endorsed by, or sponsored by Chris Voss,
The Black Swan Group, or HarperCollins Publishers.
─────────────────────────────────────────────────────────────
```

### Independent Tool Notice (After Hero Section)
```
Mental Gym is an independent study companion for readers of "Never Split
the Difference" by Chris Voss. We are not affiliated with the author,
The Black Swan Group, or HarperCollins Publishers.
```

### Problem Section
**Heading:** Sound Familiar?

**Card 1:**
```
📚 You Read It
You finished Never Split the Difference. Highlighted passages.
Took notes. Felt ready to negotiate like an FBI hostage negotiator.
```

**Card 2:**
```
🤔 You Forgot It
Two weeks later, you're in a tense roadmap meeting and... you
default to the same old approach. The frameworks vanished when
you needed them most.
```

**Card 3:**
```
😤 You're Frustrated
You invested hours reading. But without practice, it's just
trivia. Reading ≠ Remembering ≠ Applying.
```

### Solution Section
**Heading:** The Missing Piece: Practice

**Body:**
```
Professional athletes don't just read playbooks—they drill.
Surgeons don't just study anatomy—they practice on simulators.
But where do you practice negotiation frameworks, mental models,
and decision-making skills?

That's where Mental Gym comes in.
```

**How It Works (3 steps):**

**Step 1:**
```
📊 Diagnose
Take a 10-minute quiz to assess which frameworks from Never Split
the Difference you actually retained—and which slipped away.
```

**Step 2:**
```
🎯 See Your Gaps
Get a personalized breakdown: which negotiation skills are sharp,
which need work. Built specifically for Product Managers facing
real stakeholder conversations.
```

**Step 3:**
```
💪 Practice & Master (Coming Soon)
Sharpen your skills with scenario-based practice matched to your
role. Turn knowledge into instinct.
```

### Book Focus Section
**Heading:** For Readers of Never Split the Difference

**Body:**
```
The book teaches 20+ negotiation frameworks—but most people only
remember 3-4. Our diagnostic tests your understanding of the concepts
Product Managers use most:
```

**Framework List (2 columns):**
```
✓ Tactical Empathy               ✓ Accusation Audits
✓ Mirroring                      ✓ "That's Right" vs "You're Right"
✓ Labeling Emotions              ✓ Calibrated Questions
✓ Loss Aversion Framing          ✓ Black Swan Discovery
✓ The Three Negotiator Types     ✓ Implementation Questions

Plus 2 more frameworks crucial for PM stakeholder negotiations.
```

### Final CTA Section
**Heading:** Ready to Find Out What Actually Stuck?

**Body:**
```
Take the free diagnostic. See where you stand. Get a clear roadmap
for which frameworks to sharpen.
```

**CTA Button:** Start Your Diagnostic Now →

**Below button:** No signup required • Results in 10 minutes • Built for PMs

### Footer
```
About  •  Contact: [your-email]  •  Terms of Service  •  Privacy Policy

─────────────────────────────────────────────────────────────

Mental Gym is an independent educational tool. "Never Split the Difference"
is a book by Chris Voss published by HarperCollins. This quiz is not affiliated
with, endorsed by, or sponsored by Chris Voss, The Black Swan Group, or
HarperCollins Publishers. All quiz scenarios and content are original works
created for educational commentary and practice purposes.

Quiz content © 2025 Mental Gym. Framework concepts referenced from
"Never Split the Difference" by Chris Voss (HarperCollins, 2016).

© 2025 Mental Gym. All rights reserved.
```

---

## 2. Quiz - Complete Specification

### Selected Questions (from Bank 1)

**Cluster 1 - Listening & Empathy (4 questions):**
- Q1: Tactical Empathy (engineering lead quiet in roadmap meeting)
- Q2: Mirroring (timeline is unrealistic/burn team out)
- Q3: Labeling ("I'm fine with whatever you decide")
- Q4: Mirroring (roadmap doesn't reflect retention priority)

**Cluster 2 - Strategic Influence (5 questions):**
- Q5: Accusation Audit (cutting CPO's championed feature)
- Q6: Calibrated Questions (architecture needs "more time")
- Q7: No-Oriented Questions (proposal sent 3x, no response)
- Q9: Summary/Paraphrasing (feature deprioritization discussion)
- Q10: "That's Right" vs "You're Right" ("I get it, you're right")

**Cluster 3 - Execution & Agreement (3 questions):**
- Q11: Loss Aversion (analytics investment VP buy-in)
- Q12: Black Swans (stakeholder agrees but nothing moves)
- Q13: Implementation Questions (VP approves roadmap)

### Pre-Quiz Screen
```
Framework Diagnostic: Never Split the Difference

12 questions • 8-10 minutes
Designed for Product Managers

─────────────────────────────────────────────────────────────
This diagnostic tests your knowledge of concepts from the book
"Never Split the Difference" by Chris Voss. Mental Gym is an
independent educational tool not affiliated with the author or publisher.
─────────────────────────────────────────────────────────────

Instructions: Read each scenario carefully. Choose the response that
best applies the frameworks from the book.

[Start Quiz] button
```

### During Quiz
- Progress indicator: "Question 3 of 12"
- One question per screen
- Four answer options (A, B, C, D) as radio buttons or clickable cards
- "Next" button (disabled until answer selected, shows "See Results" on Q12)
- No back button
- Clean, distraction-free interface

### Data Structures

**Question Object:**
```typescript
interface Question {
  id: string;                    // e.g., "bank1_q1"
  cluster: 1 | 2 | 3;
  framework: string;              // e.g., "Tactical Empathy"
  questionText: string;
  options: [string, string, string, string];
  correctAnswer: 0 | 1 | 2 | 3;
  explanationCorrect: string;
  explanationWrong: {
    [key: number]: string;
  };
}
```

**LocalStorage - Quiz State:**
```typescript
interface QuizState {
  quizStarted: boolean;
  currentQuestionIndex: number;     // 0-11
  answers: (number | null)[];       // Array of 12 elements
  startTime: string;                // ISO timestamp
  lastUpdated: string;
}
```

**LocalStorage - Results:**
```typescript
interface QuizResults {
  completedAt: string;
  timeTaken: number;                // seconds
  answers: number[];                // Array of 12 answer indices
  overallScore: number;             // 0-100
  clusterScores: {
    cluster1: number;
    cluster2: number;
    cluster3: number;
  };
  strongestCluster: 1 | 2 | 3;
  weakestCluster: 1 | 2 | 3;
  scoreLevel: "expert" | "advanced" | "practitioner" | "foundation";
  priorityGap: 1 | 2 | 3 | null;    // Cluster ≤50%, null if none
}
```

### Scoring Logic

**Per-Cluster:**
```
Cluster Score = (Correct answers in cluster / Total cluster questions) × 100
```

**Overall (Weighted):**
```
Overall = (Cluster 1 × 0.30) + (Cluster 2 × 0.50) + (Cluster 3 × 0.20)
```

**Score Level:**
- 86-100: Expert
- 66-85: Advanced
- 41-65: Practitioner
- 0-40: Foundation Builder

**Priority Gap:** Any cluster ≤50% regardless of overall score

---

## 3. Results Page - Complete Templates

### Score Display (All Levels)
```
Your Score: [X]%
[Level Name]
```

### Expert (86-100)

**Interpretation:**
```
Exceptional understanding of Voss's framework. You've internalized
both the concepts and their application in PM contexts. You're ready
for high-stakes negotiations and complex stakeholder situations.
```

**Cluster Breakdown:**
```
Listening & Empathy: [X]%  ●●●●● Strong
Strategic Influence: [X]%   ●●●●○ Proficient
Execution & Agreement: [X]% ●●●●● Strong
```

**Strongest Area:**
```
Listening & Empathy — You excel at reading rooms, naming emotions,
and making stakeholders feel understood before influencing them.
```

**Growth Opportunity:**
```
Strategic Influence — While proficient, continue practicing accusation
audits and calibrated questions in high-pressure situations.
```

**Next Steps:**
```
You're ready for advanced practice:
• Complex multi-stakeholder scenarios
• High-pressure negotiations with executives
• Simulation mode (coming soon)

Want personalized scenario practice when we launch?
[Email input]
[Notify Me]
```

### Advanced (66-85)

**Interpretation:**
```
Strong grasp of Voss's techniques. You understand the frameworks
conceptually and can apply them in common PM scenarios. The gap
between you and mastery is practice under pressure.
```

**Cluster Breakdown:**
```
Listening & Empathy: [X]%    ●●●●○ Proficient
Strategic Influence: [X]%    ●●●●○ Proficient
Execution & Agreement: [X]%  ●●●○○ Developing
```

**Strongest Area:**
```
Strategic Influence — You're skilled at accusation audits and
calibrated questions. You know how to influence without authority.
```

**Growth Opportunity:**
```
Execution & Agreement — You sometimes miss the hidden blockers
(Black Swans) or skip implementation questions that secure real
commitment vs. surface agreement.
```

**Next Steps:**
```
Recommended focus:
• Drill Cluster 3 scenarios (execution & commitment)
• Practice spotting hidden constraints in stakeholder conversations
• Sharpen your "That's Right" vs "You're Right" detection

Get scenario practice when we launch Phase 2:
[Email input]
[Sign Me Up]
```

### Practitioner (41-65)

**Interpretation:**
```
You've absorbed some of Voss's frameworks, but there are gaps in
application. You likely remember concepts like mirroring and labeling,
but may struggle to choose the right technique under pressure or
sequence them correctly.
```

**Cluster Breakdown:**
```
Listening & Empathy: [X]%    ●●●○○ Developing
Strategic Influence: [X]%    ●●●○○ Developing
Execution & Agreement: [X]%  ●●●○○ Developing
```

**Strongest Area:**
```
Execution & Agreement — You understand loss framing and can spot
implementation risks better than most PMs.
```

**Growth Opportunity:**
```
Listening & Empathy — You may be jumping to solutions before making
stakeholders feel heard. Master tactical empathy, mirroring, and
labeling before moving to influence techniques.
```

**Next Steps:**
```
Recommended path:
• Re-read Chapters 2-3 of Never Split the Difference (Mirroring & Labeling)
• Practice mirroring in low-stakes conversations this week
• Focus on naming emotions before problem-solving

Want structured practice exercises?
[Email input]
[Get Practice Scenarios]
```

### Foundation Builder (0-40)

**Interpretation:**
```
The frameworks haven't fully stuck yet—which is completely normal.
Most people forget 80% of what they read within weeks. The good news:
you now have a clear map of what to practice.
```

**Cluster Breakdown:**
```
Listening & Empathy: [X]%    ●●○○○ Building
Strategic Influence: [X]%    ●●○○○ Building
Execution & Agreement: [X]%  ●●○○○ Building
```

**Strongest Area:**
```
Strategic Influence — You have some intuition for calibrated questions
and influence without authority. Build on that foundation.
```

**Growth Opportunity:**
```
Listening & Empathy — Start here. Tactical empathy, mirroring, and
labeling are the foundation of everything else in Voss's system.
Without these, the other techniques don't work.
```

**Next Steps:**
```
Action plan:
• Start with Chapter 2 of Never Split the Difference (just Mirroring)
• Try mirroring 3 times this week in real conversations
• Notice what people reveal when you repeat their last 3 words

Want a guided practice path?
[Email input]
[Send Me the Plan]
```

### Priority Gap Alert (if any cluster ≤50%)
```
⚠️ Priority Gap Detected

Your [Cluster Name] score is below 50%, indicating a specific
skill gap. Even strong overall performers benefit from targeted
practice in weak clusters. We recommend focusing here first.
```

### Detailed Question Review (Expandable/Collapsible Section)

**Placement:** After priority gap alert (if shown), before retake button

**Initial State:** Collapsed

**Toggle Button:**
```
[▼ View Detailed Breakdown - See Your Answers & Explanations]

When expanded:
[▲ Hide Detailed Breakdown]
```

**Content Structure:** All 12 questions displayed in original quiz order (Q1-Q12)

**Per Question Display:**
```
┌─────────────────────────────────────────────────────────────┐
│ Question [N] of 12                                          │
│ Framework: [Framework Name] • Cluster: [Cluster Name]      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ [Full question text from scenario]                         │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ All Answer Options:                                        │
│                                                             │
│ A. [Option text]                                           │
│    [No indicator if not selected and not correct]          │
│                                                             │
│ B. [Option text]  ✓ CORRECT ANSWER                        │
│    [Green highlight if this is correct answer]             │
│                                                             │
│ C. [Option text]  ✗ YOUR ANSWER                           │
│    [Red highlight if this was user's choice and wrong]     │
│                                                             │
│ D. [Option text]                                           │
│    [No indicator if not selected and not correct]          │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ EXPLANATION:                                                │
│                                                             │
│ [If user answered correctly:]                              │
│ ✓ You got this right!                                      │
│ [explanationCorrect text from question object]             │
│                                                             │
│ [If user answered incorrectly:]                            │
│ ✗ Why this didn't work:                                    │
│ [explanationWrong[userAnswerIndex] text]                   │
│                                                             │
│ ✓ Why the correct answer works:                            │
│ [explanationCorrect text from question object]             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Visual Indicators:**
- **Correct answer (user got it right):** Green border or background tint
- **User's wrong answer:** Red/orange border or background tint
- **Correct answer (when user was wrong):** Green border with checkmark
- **Other options:** Neutral gray

**Special Cases:**
1. **User answered correctly:** Show green success indicator, show only correct explanation
2. **User answered incorrectly:** Show both wrong explanation AND correct explanation
3. **All 12 questions visible** when expanded (no pagination)

**Implementation Notes:**
- Use accordion/details element for expand/collapse
- Smooth animation on toggle
- Should work on mobile (touch-friendly)
- Preserve expanded/collapsed state in component state (not localStorage)

### Retake Quiz Button (bottom of results)
```
[Retake Quiz]
```

---

## 4. Email Capture - Complete Specification

### Service: Web3Forms
- Free tier: 250 submissions/month
- No backend needed
- Sign up at web3forms.com
- Get access key, add to environment variables

### Form Placement
- Results page only
- After score display and cluster breakdown
- Before detailed framework breakdown

### Form Design
```
┌─────────────────────────────────────────────┐
│  [Dynamic copy based on score level]        │
│                                              │
│  ┌────────────────────────────────────┐    │
│  │  your@email.com                    │    │
│  └────────────────────────────────────┘    │
│                                              │
│        [  Get Early Access  ]               │
│                                              │
│  We'll email you once (no spam).            │
└─────────────────────────────────────────────┘
```

### Dynamic Copy by Score Level
- **Expert:** "Want advanced simulation scenarios when we launch?"
- **Advanced:** "Want personalized practice for your gap areas when we launch?"
- **Practitioner:** "Want guided practice exercises when Phase 2 launches?"
- **Foundation:** "Want a step-by-step practice plan when we launch?"

### Validation
- Email format: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- Required field
- Max length: 255 characters
- Client-side errors:
  - Empty: "Please enter your email address"
  - Invalid: "Please enter a valid email address"

### Form States
1. **Initial:** Input enabled, button shows "Get Early Access"
2. **Submitting:** Input disabled, button shows "Sending..." with spinner
3. **Success:** "✓ Thanks! We'll email you when practice mode launches."
4. **Error:** "⚠ Something went wrong. Please try again or email us at [your-email]"

### Submission Data
```typescript
{
  access_key: WEB3FORMS_KEY,
  subject: `Mental Gym Signup - ${scoreLevel} (${overallScore}%)`,
  from_name: "Mental Gym Quiz",
  email: userEmail,
  message: `
    Score Level: ${scoreLevel}
    Overall: ${overallScore}%
    Cluster 1: ${cluster1Score}%
    Cluster 2: ${cluster2Score}%
    Cluster 3: ${cluster3Score}%
    Submitted: ${timestamp}
  `
}
```

---

## 5. Edge Cases & Error Handling

### User Closes Browser Mid-Quiz
- Quiz state saved to localStorage after each answer
- On return, show resume modal: "You have an in-progress quiz. Resume where you left off?"
- Options: [Resume Quiz] [Start Over]

### User Refreshes During Quiz
- Auto-restore from localStorage
- Continue where they left off

### User Tries to Skip Questions
- "Next" button disabled until answer selected
- Button styling: `opacity-50 cursor-not-allowed` when disabled

### User Takes Quiz Multiple Times
- Allow retakes
- Only save most recent result
- "Retake Quiz" button on results page

### LocalStorage Not Available
- Check availability: `isLocalStorageAvailable()`
- If not available: show warning "Your browser's storage is disabled. Progress won't be saved if you close the page."
- Continue with in-memory state only

### Direct Navigation to /results Without Quiz
- Check for results in localStorage
- If none found: redirect to `/`

### Email Submission Failure
- Show error message
- Allow retry with "Try Again" button
- Provide fallback: "or email us at [your-email]"

### State Corruption
- Try/catch around localStorage reads
- If corrupted: clear state and start fresh

---

## 6. Analytics

### Tool: Vercel Analytics
- Enable in Vercel dashboard (built-in, zero config)
- Tracks page views automatically

### Custom Events
```typescript
// Quiz Started
window.va('track', 'quiz_started');

// Quiz Completed
window.va('track', 'quiz_completed', {
  score: overallScore,
  level: scoreLevel
});

// Email Submitted
window.va('track', 'email_submitted', {
  score_level: scoreLevel
});
```

### Metrics to Monitor
- **Completion Rate**: `quiz_completed / quiz_started` (target >70%)
- **Average Score**: Track distribution
- **Email Capture Rate**: `email_submitted / quiz_completed` (target >30%)
- **Time to Complete**: Target 8-12 minutes average

---

## 7. Build Timeline - 2 Days

### Day 1: Core Quiz Experience

**Morning (4 hours):**
- Hour 1: Project setup (Next.js, TypeScript, Tailwind, folder structure)
- Hour 2: Type definitions & enter all 12 questions
- Hour 3: Storage & scoring logic
- Hour 4: Quiz component structure

**Afternoon (4 hours):**
- Hour 5: Quiz flow & state management
- Hour 6: Quiz page & navigation
- Hour 7: Results calculation
- Hour 8: Basic results page

**End of Day 1:** Core quiz flow complete and functional

### Day 2: Polish, Landing Page & Deploy

**Morning (4 hours):**
- Hour 9: Results page templates (all 4 score levels)
- Hour 10: Detailed question review component (expandable/collapsible)
- Hour 11: Email capture
- Hour 12: Landing page structure

**Afternoon (4 hours):**
- Hour 13: Landing page polish & edge cases
- Hour 14: Error handling & analytics
- Hour 15: Deploy to Vercel & final testing (4:00-5:00pm)
- Hour 16: Final polish & prep for launch (5:00-6:00pm)

**End of Day 2:** MVP deployed at mentalgym.vercel.app

### Priority Levels (if behind)

**Must Have:**
- Quiz flow working
- Scoring correct
- Basic results page

**Should Have:**
- Landing page
- Email capture
- Resume functionality
- Detailed question review (expandable section)

**Nice to Have:**
- Polished copy/design
- Full error handling
- Analytics events
- Smooth animations on expand/collapse

---

## 8. Deployment

### Vercel Setup
1. Push code to GitHub
2. Import project in Vercel dashboard
3. Configure environment variables:
   ```
   NEXT_PUBLIC_WEB3FORMS_KEY=your_key_here
   ```
4. Deploy (auto-detects Next.js settings)
5. Test live site

### Domain
- Default: mentalgym.vercel.app
- Custom domain (optional): Add in Vercel settings

---

## 9. Success Metrics (2 Weeks)

- 50+ quiz completions
- >70% completion rate
- 10+ email signups
- Average time: 8-12 minutes
- Positive qualitative feedback

---

## 10. Out of Scope for MVP

- User accounts / login
- Payment integration
- Practice/flashcard mode (Phase 2)
- Multiple book support
- Results history
- Social sharing
- Other user segments (Founders, Sales, etc.)
- Simulation mode

---

## 11. Design Principles

1. **Professional, Not Playful**: Serious tool for professionals, not BuzzFeed quiz
2. **Fast and Focused**: No unnecessary animations or complexity
3. **Mobile-First**: Responsive, touch-friendly, readable on all devices
4. **Credible**: Reference actual book, frameworks, research
5. **Honest Assessment**: Don't inflate scores - gaps are valuable

---

## 12. Development Commands

```bash
# Create project
npx create-next-app@latest mentalgym-app --typescript --tailwind --app

# Development
npm run dev              # localhost:3000

# Build & Test
npm run build            # Production build
npm run start            # Test production locally

# Deploy (automatic via Vercel)
git add .
git commit -m "Your message"
git push origin main     # Auto-deploys to Vercel
```

---

## 13. Launch Plan (Week 1)

### Day 3-7 Post-Launch
- Share on Reddit (r/ProductManagement, r/productivity, r/negotiation)
- Share on LinkedIn
- Direct message to 20-30 PM friends/colleagues
- Monitor Vercel Analytics
- Watch for bugs/feedback
- Quick fixes as needed

### Success Criteria
- 50+ completions
- >70% completion rate
- 10+ emails
- <3 bug reports
- Positive feedback

---

## Ready to Build ✓

This spec contains:
- ✓ All technical decisions locked
- ✓ Complete landing page copy
- ✓ Exact 12 questions selected
- ✓ All data structures defined
- ✓ Scoring logic specified
- ✓ 4 results page templates
- ✓ Email capture flow
- ✓ Edge cases handled
- ✓ Analytics defined
- ✓ Hour-by-hour timeline
- ✓ Deployment plan

A developer can now build this in 2 days with zero ambiguity.

---

# PHASE 2: Voice Negotiation Coach

## Product Vision

An AI-powered voice roleplay coach that helps Product Managers practice negotiation frameworks from "Never Split the Difference" in realistic scenarios. Users engage in live voice conversations with an AI playing stakeholder roles (engineering managers, executives, etc.), then receive detailed feedback on their negotiation technique.

## Core Value Proposition

**Problem:** Reading about negotiation frameworks ≠ Using them under pressure. PMs know the concepts but freeze in real high-stakes conversations.

**Solution:** Safe, private roleplay practice with immediate expert feedback. Build muscle memory for tactical empathy, calibrated questions, and other NSTD techniques.

---

## MVP Scope: Single-Scenario Voice Coach

### What We're Building

**Single Roleplay Scenario**
- **Scenario**: "Negotiating timeline extension with engineering manager who is pushing back"
- **User role**: Product Manager requesting 2 more weeks for feature X
- **AI role**: Engineering Manager (skeptical, citing team burnout and other priorities)
- **Duration**: 2-4 minute conversation
- **Output**: Post-conversation analysis with framework detection and improvement suggestions

### User Flow

```
Landing Page
    ↓
Scenario Selection (only 1 scenario for MVP)
    ↓
Pre-Conversation Brief
  - Your role: PM
  - AI role: Engineering Manager
  - Context: Feature X timeline negotiation
  - Goal: Get 2 more weeks without damaging relationship
  - Reminder: Use NSTD frameworks
  - [Start Conversation] button
    ↓
Voice Conversation Interface
  - Push-to-talk button (hold to speak)
  - Visual indicator when AI is speaking
  - Conversation timer (counts up)
  - [End Session Early] button
  - Auto-ends after 4 minutes OR user ends it
    ↓
Processing Screen
  - "Analyzing your conversation..."
  - Claude analyzes full transcript for framework usage
  - ~5-10 seconds
    ↓
Feedback & Results Page
  - Full transcript (user + AI, timestamped)
  - Framework Usage Detected
  - Missed Opportunities
  - What Worked Well
  - 2-3 Specific Improvement Tips
  - Overall Rating (Foundation/Practitioner/Advanced/Expert)
  - [Try Again] [Try Another Scenario - Coming Soon]
```

---

## Technical Architecture: Path A (ElevenLabs Conversational AI)

### Why Path A for MVP
- **Speed to market**: Can be built in 1 day vs 2-3 days for custom pipeline
- **Native Claude support**: Claude Sonnet 4.5 available via dropdown, no proxy needed
- **Handles complexity**: Turn-taking, interruptions, natural conversation flow built-in
- **Cost-effective**: ~$0.10/min, free tier includes ~15 minutes for testing
- **Production-ready**: WebRTC, analytics, tool calling all included

### Tech Stack

| Component | Choice | Justification |
|-----------|---------|---------------|
| **Framework** | Next.js 14 (App Router) | Already using for quiz app, full-stack in one project |
| **Voice Platform** | ElevenLabs Conversational AI (ElevenAgents) | Native Claude support, managed STT/TTS/turn-taking |
| **LLM** | Claude Sonnet 4.5 | Best balance of quality and speed for coaching feedback (~1.5s TTFT) |
| **TTS Voice** | ElevenLabs voice library | 5,000+ options, choose professional/empathetic male voice for eng manager |
| **Frontend Integration** | ElevenLabs React SDK (`@elevenlabs/react`) | `useConversation()` hook handles mic, audio, WebSocket/WebRTC |
| **Storage** | localStorage | Save conversation transcripts for "Try Again" comparison (Phase 2) |
| **Hosting** | Vercel | Same as quiz app, zero config deployment |

### Environment Variables Needed
```
NEXT_PUBLIC_ELEVENLABS_AGENT_ID=<your_agent_id>
ANTHROPIC_API_KEY=<your_key>  # For post-conversation analysis only
```

### Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    Next.js Frontend                         │
│  ┌────────────────────────────────────────────────────┐    │
│  │  Voice Conversation Page                           │    │
│  │  - useConversation() from @elevenlabs/react        │    │
│  │  - Push-to-talk button                              │    │
│  │  - Audio playback (AI responses)                    │    │
│  │  - Transcript capture in real-time                  │    │
│  └──────────────────┬─────────────────────────────────┘    │
│                     │                                        │
│                     │ WebSocket/WebRTC                       │
│                     ↓                                        │
│         ┌───────────────────────────────┐                   │
│         │  ElevenLabs Conversational AI  │                  │
│         │  (Managed Platform)            │                  │
│         │  ┌─────────────────────────┐  │                  │
│         │  │ STT (Scribe v2)         │  │                  │
│         │  └──────────┬──────────────┘  │                  │
│         │             ↓                  │                  │
│         │  ┌─────────────────────────┐  │                  │
│         │  │ Claude Sonnet 4.5        │  │                  │
│         │  │ (Engineering Manager AI) │  │                  │
│         │  └──────────┬──────────────┘  │                  │
│         │             ↓                  │                  │
│         │  ┌─────────────────────────┐  │                  │
│         │  │ TTS (Flash v2.5)        │  │                  │
│         │  └─────────────────────────┘  │                  │
│         └───────────────────────────────┘                   │
│                                                              │
│  After conversation ends:                                   │
│  ┌────────────────────────────────────────────────────┐    │
│  │  Backend API Route: /api/analyze-conversation      │    │
│  │  - Receives full transcript                         │    │
│  │  - Sends to Claude API (streaming)                  │    │
│  │  - Analyzes framework usage, missed opportunities   │    │
│  │  - Returns structured feedback                      │    │
│  └────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

---

## ElevenLabs Agent Configuration

### Agent Setup (via ElevenLabs Dashboard)

**Agent Name:** Engineering Manager - Timeline Negotiation

**System Prompt:**
```
You are a software engineering manager at a mid-sized tech company. Your name is Alex.
You are speaking with a Product Manager who wants to extend the timeline for Feature X
by 2 more weeks.

YOUR CONTEXT:
- Your team has been working hard and is showing signs of burnout
- You have other priorities competing for engineering time
- You're skeptical but not closed off - you can be persuaded if the PM uses good negotiation techniques
- You value being heard and understood before discussing solutions

YOUR PERSONALITY:
- Direct but fair
- Slightly skeptical at first
- Appreciates tactical empathy and calibrated questions
- Gets defensive if the PM dismisses your concerns
- Softens when the PM uses labeling, mirroring, or shows genuine understanding

YOUR CONVERSATIONAL STYLE:
- Speak naturally, like a real person (use "um", "you know", casual language)
- Keep responses concise (1-3 sentences at a time)
- Show emotion: frustration, concern, thoughtfulness
- If the PM uses good negotiation techniques (mirroring, labeling, calibrated questions),
  respond more openly
- If the PM argues or pushes without empathy, push back harder

YOUR CONSTRAINTS:
- You can be convinced, but only if the PM makes you feel heard first
- You have a hard stop at 4 minutes (conversation will end automatically)
- If the PM uses accusation audits well, you'll reveal hidden concerns (e.g., exec pressure)

START THE CONVERSATION:
Begin by expressing your initial pushback when the PM requests the timeline extension.
Keep it brief (2 sentences max). Wait for their response.
```

**LLM Selection:** Claude Sonnet 4.5

**Voice Selection:**
- Search ElevenLabs voice library for professional, warm male voice
- Suggestions: "Adam" (confident, clear) or "Charlie" (calm, thoughtful)
- Test 2-3 options and pick one that sounds like a real engineering manager

**First Message:** (Agent initiates conversation)
```
"Two more weeks? I don't know... the team is already stretched thin. We've got
the Q2 platform work coming up and people are burnt out."
```

**Knowledge Base:** (Optional, not needed for MVP)

**Conversation Config:**
- **Max Duration:** 4 minutes
- **Language:** English
- **Turn-Taking Model:** Auto (managed by ElevenLabs)
- **Interruption Handling:** Enabled

---

## Page-by-Page Specification

### 1. Landing Page Addition

**New Section (After Quiz CTA):**

```
─────────────────────────────────────────────────────────────
🎙️ NEW: Practice With a Voice Coach (Beta)

Reading about negotiation frameworks is step 1.
Our diagnostic quiz is step 2.
Step 3? Practice under pressure with an AI coach.

[Try Voice Coaching - Beta →]
─────────────────────────────────────────────────────────────
```

### 2. Voice Coach Landing Page (`/coach`)

**URL:** `/coach`

**Hero Section:**
```
Headline: Practice Negotiation. Get Expert Feedback.

Subheadline: Real voice conversations. Real-time pressure.
Safe environment to fail and improve.

Body: You know the frameworks from Never Split the Difference.
But can you use them when an engineering manager pushes back on your timeline?
When an executive questions your roadmap? When a stakeholder goes silent?

Practice makes permanent. Get feedback that helps you improve.

CTA: [Start Your First Session →]
Below CTA: 3-4 minutes • Voice only • Private & confidential
```

**How It Works:**
```
1. Choose Your Scenario
   Pick a realistic PM negotiation situation

2. Talk It Out
   Have a real voice conversation with AI playing the stakeholder role

3. Get Feedback
   See which NSTD frameworks you used (and which you missed)
```

**Current Scenarios (MVP):**
```
┌─────────────────────────────────────────────────────────┐
│ 🗓️ Timeline Extension Negotiation                      │
│                                                          │
│ Stakeholder: Engineering Manager (Alex)                 │
│ Difficulty: ⭐⭐ Intermediate                           │
│ Frameworks tested: Tactical Empathy, Mirroring,        │
│ Labeling, Calibrated Questions                          │
│                                                          │
│ You need 2 more weeks for Feature X. Alex says the     │
│ team is burnt out and has competing priorities.         │
│                                                          │
│ [Start This Scenario →]                                 │
└─────────────────────────────────────────────────────────┘

More scenarios coming soon...
```

### 3. Pre-Conversation Brief Page (`/coach/scenarios/timeline-extension/brief`)

**Scenario Context:**
```
Timeline Extension Negotiation

YOUR ROLE: Product Manager
STAKEHOLDER: Alex (Engineering Manager)

SITUATION:
You're building Feature X (new dashboard analytics). It's taking longer than
expected due to data quality issues you discovered last week. You need 2 more
weeks, but Alex's team is stretched thin and has Q2 platform work starting soon.

YOUR GOAL:
Get Alex to agree to the 2-week extension without damaging your relationship
or team morale.

FRAMEWORKS TO PRACTICE:
✓ Tactical Empathy - Acknowledge Alex's concerns before making your case
✓ Labeling - Name the emotions/concerns you're sensing
✓ Mirroring - Repeat key words to encourage Alex to elaborate
✓ Calibrated Questions - Use "How" and "What" questions
✓ Accusation Audit - Preempt Alex's objections

CONVERSATION TIPS:
- Listen more than you talk in the first 60 seconds
- Don't jump straight to your ask - make Alex feel heard first
- Push-to-talk: Hold the button while speaking, release when done
- The conversation will auto-end after 4 minutes

[I'm Ready - Start Conversation]
```

### 4. Voice Conversation Page (`/coach/scenarios/timeline-extension/conversation`)

**UI Layout:**

```
┌─────────────────────────────────────────────────────────┐
│  Timeline Extension Negotiation                    2:34  │ ← Timer
├─────────────────────────────────────────────────────────┤
│                                                          │
│           ┌─────────────────────────┐                   │
│           │                         │                   │
│           │    [Microphone Icon]    │                   │
│           │                         │                   │
│           │   Alex is speaking...   │ ← Status indicator
│           │                         │
│           └─────────────────────────┘                   │
│                                                          │
│                ┌───────────────┐                        │
│                │  Push to Talk  │ ← Big button (hold)   │
│                └───────────────┘                        │
│                                                          │
│                [End Session]                             │
│                                                          │
│  ─────────────────────────────────────────────────      │
│  Transcript (live)                                       │
│  Alex: "Two more weeks? The team is already stretched    │
│         thin..."                                         │
│  You: "Stretched thin..." [00:08]                        │
│  Alex: "Yeah, we've got the Q2 platform work coming up   │
│         and people are burnt out."                       │
│  ...                                                     │
└─────────────────────────────────────────────────────────┘
```

**Component Behavior:**
- **Push-to-Talk Button:**
  - Default state: Blue, "Push to Talk"
  - Pressed (user speaking): Red, "Recording..."
  - AI speaking: Disabled, grayed out
  - Mobile: Works with touch (tap and hold)

- **Status Indicator:**
  - "Alex is speaking..." (animated pulse)
  - "Your turn..." (when AI finishes)
  - "Recording..." (when user is speaking)

- **Auto-End:**
  - At 4:00, show modal: "Session complete! Analyzing your conversation..."
  - Redirect to feedback page

- **Early End:**
  - User clicks "End Session"
  - Confirm modal: "End session early? You can always try again."
  - If yes: redirect to feedback page

- **Transcript:**
  - Live-updating as conversation progresses
  - Scrollable
  - Timestamps on each message
  - Saved to localStorage for post-conversation analysis

### 5. Processing Screen

**Show for 5-10 seconds while Claude analyzes transcript**

```
┌─────────────────────────────────────────────────────────┐
│                                                          │
│                  [Animated spinner]                      │
│                                                          │
│           Analyzing your conversation...                 │
│                                                          │
│  Detecting framework usage, missed opportunities,        │
│  and areas for improvement.                              │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### 6. Feedback & Results Page (`/coach/scenarios/timeline-extension/results`)

**Page Structure:**

```
┌─────────────────────────────────────────────────────────┐
│ Session Complete: Timeline Extension Negotiation        │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  Your Overall Rating: PRACTITIONER ⭐⭐⭐              │
│  Conversation Length: 3:42                               │
│                                                          │
├─────────────────────────────────────────────────────────┤
│  📊 Framework Usage Detected                            │
│                                                          │
│  ✅ Mirroring (1:23) - "Stretched thin..."             │
│     Good! This encouraged Alex to elaborate on team      │
│     burnout. He revealed the Q2 platform pressure.       │
│                                                          │
│  ✅ Labeling (2:10) - "It sounds like you're worried   │
│     about team morale..."                                │
│     Excellent tactical empathy. Alex softened and        │
│     started problem-solving with you.                    │
│                                                          │
│  ❌ Calibrated Questions - Not detected                 │
│     You asked "Can we get 2 weeks?" (yes/no question).   │
│     Try: "How can we make this work without burning      │
│     out the team?"                                       │
│                                                          │
│  ❌ Accusation Audit - Not detected                     │
│     You could've started with: "I know this is terrible  │
│     timing with Q2 coming up and the team already        │
│     stretched..."                                        │
│                                                          │
├─────────────────────────────────────────────────────────┤
│  💡 What Worked Well                                    │
│                                                          │
│  • You let Alex speak first and listened for ~45         │
│    seconds before making your case. Strong tactical      │
│    empathy instinct.                                     │
│                                                          │
│  • Your labeling ("It sounds like you're worried...") │
│    was authentic and accurate. Alex responded with       │
│    "That's right" - the gold standard.                  │
│                                                          │
├─────────────────────────────────────────────────────────┤
│  🎯 Missed Opportunities                                │
│                                                          │
│  • At 1:45, Alex said "I don't know how I'll explain    │
│    this to the team." This was a Black Swan - a hidden   │
│    constraint (fear of looking bad to his team). You     │
│    didn't explore it. Try: "What's making this hard to  │
│    explain?"                                             │
│                                                          │
│  • You jumped to solution mode at 2:30 without getting   │
│    full buy-in first. Ask implementation questions:      │
│    "What do we need to do to make this work?"           │
│                                                          │
├─────────────────────────────────────────────────────────┤
│  🔧 2 Specific Improvements for Next Time               │
│                                                          │
│  1. Use calibrated questions instead of yes/no questions │
│     Replace "Can we...?" with "How might we...?" or      │
│     "What would need to happen for...?"                  │
│                                                          │
│  2. Listen for Black Swans (hidden constraints).         │
│     When Alex said "I don't know how I'll explain this", │
│     that's a signal. Explore it: "What concerns you most │
│     about explaining it?"                                │
│                                                          │
├─────────────────────────────────────────────────────────┤
│  📝 Full Transcript                                     │
│  [Expandable/collapsible - same as live transcript]      │
│                                                          │
├─────────────────────────────────────────────────────────┤
│  [Try This Scenario Again] [Try Another Scenario →]     │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

---

## Backend API: Conversation Analysis

### Endpoint: `/api/analyze-conversation`

**Method:** POST

**Request Body:**
```typescript
{
  transcript: Array<{
    speaker: "user" | "ai",
    text: string,
    timestamp: string  // "00:23"
  }>,
  scenario: "timeline-extension"
}
```

**Response:**
```typescript
{
  overallRating: "foundation" | "practitioner" | "advanced" | "expert",
  conversationLength: string,  // "3:42"
  frameworksDetected: Array<{
    framework: string,
    timestamp: string,
    quote: string,
    feedback: string,
    wasEffective: boolean
  }>,
  frameworksMissed: Array<{
    framework: string,
    explanation: string
  }>,
  whatWorkedWell: string[],
  missedOpportunities: Array<{
    timestamp: string,
    whatHappened: string,
    whatYouCouldHaveDone: string
  }>,
  topImprovements: string[]  // Max 3
}
```

**Implementation:**
```typescript
// app/api/analyze-conversation/route.ts
import Anthropic from '@anthropic-ai/sdk';

export async function POST(req: Request) {
  const { transcript, scenario } = await req.json();

  const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY
  });

  const analysisPrompt = `You are an expert negotiation coach analyzing a practice conversation.

SCENARIO: Timeline Extension Negotiation
The user (Product Manager) was trying to get 2 more weeks from Alex (Engineering Manager).

TRANSCRIPT:
${transcript.map(t => `[${t.timestamp}] ${t.speaker === 'user' ? 'PM' : 'Alex'}: ${t.text}`).join('\n')}

Analyze the PM's negotiation technique based on frameworks from "Never Split the Difference" by Chris Voss.

Provide your analysis in this JSON format:
{
  "overallRating": "foundation" | "practitioner" | "advanced" | "expert",
  "frameworksDetected": [
    {
      "framework": "Mirroring",
      "timestamp": "1:23",
      "quote": "exact quote from PM",
      "feedback": "why this worked or didn't work",
      "wasEffective": true/false
    }
  ],
  "frameworksMissed": [
    {
      "framework": "Calibrated Questions",
      "explanation": "specific explanation of how they could've used it"
    }
  ],
  "whatWorkedWell": ["bullet point 1", "bullet point 2"],
  "missedOpportunities": [
    {
      "timestamp": "1:45",
      "whatHappened": "Alex revealed a Black Swan",
      "whatYouCouldHaveDone": "specific technique to use"
    }
  ],
  "topImprovements": ["improvement 1", "improvement 2"]
}

Be specific, reference exact moments, and provide actionable feedback.`;

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-5-20250929',
    max_tokens: 2000,
    messages: [{
      role: 'user',
      content: analysisPrompt
    }]
  });

  const analysis = JSON.parse(message.content[0].text);

  return Response.json(analysis);
}
```

---

## Data Structures

### Conversation Transcript (localStorage)

```typescript
interface ConversationTranscript {
  scenario: string;
  startTime: string;  // ISO timestamp
  endTime: string;
  duration: number;   // seconds
  messages: Array<{
    speaker: 'user' | 'ai';
    text: string;
    timestamp: string;  // "00:23" (MM:SS)
  }>;
}
```

### Conversation Analysis (localStorage + shown to user)

```typescript
interface ConversationAnalysis {
  scenario: string;
  conversationId: string;
  overallRating: 'foundation' | 'practitioner' | 'advanced' | 'expert';
  conversationLength: string;
  frameworksDetected: Array<{
    framework: string;
    timestamp: string;
    quote: string;
    feedback: string;
    wasEffective: boolean;
  }>;
  frameworksMissed: Array<{
    framework: string;
    explanation: string;
  }>;
  whatWorkedWell: string[];
  missedOpportunities: Array<{
    timestamp: string;
    whatHappened: string;
    whatYouCouldHaveDone: string;
  }>;
  topImprovements: string[];
  analyzedAt: string;  // ISO timestamp
}
```

---

## Build Timeline: 1 Day (8 hours)

### Hour 1-2: ElevenLabs Setup & Agent Configuration
- [ ] Create ElevenLabs account
- [ ] Configure agent: system prompt, voice selection, Claude Sonnet 4.5
- [ ] Test agent in ElevenLabs dashboard
- [ ] Get agent ID

### Hour 3-4: Voice Conversation Page
- [ ] Install `@elevenlabs/react` package
- [ ] Create `/coach/scenarios/timeline-extension/conversation` page
- [ ] Implement `useConversation()` hook
- [ ] Build push-to-talk UI
- [ ] Capture transcript in real-time
- [ ] Save to localStorage

### Hour 5-6: Feedback Backend & Analysis
- [ ] Create `/api/analyze-conversation` route
- [ ] Write Claude analysis prompt
- [ ] Test with sample transcripts
- [ ] Parse JSON response
- [ ] Handle errors

### Hour 7: Results Page
- [ ] Create `/coach/scenarios/timeline-extension/results` page
- [ ] Display analysis sections (frameworks detected, missed opportunities, etc.)
- [ ] Expandable transcript section
- [ ] "Try Again" button

### Hour 8: Polish & Landing Pages
- [ ] Create `/coach` landing page
- [ ] Create `/coach/scenarios/timeline-extension/brief` page
- [ ] Add link from main landing page to voice coach
- [ ] Test end-to-end flow
- [ ] Deploy to Vercel

---

## MVP Feature Checklist

### Must Have (Launch Blockers)
- [ ] ElevenLabs agent configured correctly (Engineering Manager persona)
- [ ] Voice conversation works (push-to-talk, audio playback)
- [ ] Transcript captured accurately
- [ ] Post-conversation analysis works (detects frameworks, gives feedback)
- [ ] Results page displays feedback clearly
- [ ] One complete scenario: Timeline Extension

### Should Have (Important but not blockers)
- [ ] Pre-conversation brief page with context and tips
- [ ] Voice coach landing page (`/coach`)
- [ ] Link from main landing page to voice coach
- [ ] "Try Again" button on results page
- [ ] Conversation auto-ends at 4 minutes

### Nice to Have (Phase 2)
- [ ] Multiple scenarios (exec alignment, silent stakeholder, etc.)
- [ ] Progress tracking across sessions ("You've improved 30% on Calibrated Questions")
- [ ] Comparison: "This time vs last time"
- [ ] Recording playback (listen to yourself)
- [ ] Difficulty levels (beginner, intermediate, advanced)

---

## Out of Scope for MVP

- ❌ User accounts / authentication (use localStorage only)
- ❌ Payment / monetization
- ❌ Multiple scenarios (only Timeline Extension)
- ❌ Recording playback (can add in Phase 2)
- ❌ Real-time feedback during conversation
- ❌ Scenario customization (user creates their own scenario)
- ❌ Mobile app (web only, but should work on mobile browsers)
- ❌ Social sharing / leaderboards

---

## Cost Estimate (MVP Testing)

- **ElevenLabs Free Tier**: ~15 minutes of agent conversation time
- **Typical conversation**: 3-4 minutes
- **Testing budget**: 3-4 full test conversations with free tier
- **Post-MVP (paid)**: ~$0.10/minute = $0.30-0.40 per session

**For 100 users doing 1 session each:**
- Cost: ~$30-40 (ElevenLabs) + ~$5-10 (Claude API for analysis) = **~$40-50 total**

**For 500 users:**
- Cost: ~$200-250 (ElevenLabs) + ~$25-50 (Claude API) = **~$250-300 total**

---

## Success Metrics (2 Weeks Post-Launch)

- **Adoption**: 20+ users try voice coach (from quiz → voice coach funnel)
- **Completion Rate**: >60% finish full conversation (don't drop off early)
- **Perceived Value**: NPS or simple feedback form "Was this helpful?" >70% yes
- **Retention**: 30% of users try it 2+ times
- **Qualitative**: 5+ pieces of positive feedback / testimonials

---

## Legal & Disclaimers (Same as Quiz)

**All voice coach pages must include:**
- Header disclaimer (independent tool, not affiliated with Chris Voss)
- Footer disclaimer (full legal text)
- System prompt for AI must NOT claim to be Chris Voss or official
- Analysis feedback must reference "frameworks from the book" not "Chris Voss's frameworks"

---

## Phase 2 Ideas (Post-MVP)

1. **More Scenarios**
   - Executive alignment ("VP questions your roadmap strategy")
   - Silent stakeholder ("Design lead stops responding to messages")
   - Budget negotiation ("CFO wants to cut your team budget by 30%")

2. **Progress Tracking**
   - "You've done 5 sessions. Your Calibrated Questions usage has improved 40%"
   - Historical analysis

3. **Difficulty Levels**
   - Beginner: Stakeholder is more agreeable, slower pace
   - Advanced: Stakeholder is difficult, interrupts, uses deflection tactics

4. **Custom Scenarios**
   - User describes their real upcoming negotiation
   - AI generates custom scenario and persona

5. **Recording Playback**
   - Listen to yourself to catch verbal tics, filler words, tone

---

## Ready to Build ✓

**Voice Coach MVP Spec Contains:**
- ✓ Clear product vision and MVP scope
- ✓ Single scenario defined (Timeline Extension)
- ✓ Complete user flow (brief → conversation → feedback)
- ✓ Technical architecture (ElevenLabs + Claude)
- ✓ ElevenLabs agent configuration (system prompt, voice, settings)
- ✓ Page-by-page UI specifications
- ✓ Backend API spec for conversation analysis
- ✓ Data structures
- ✓ 1-day build timeline (8 hours)
- ✓ Must-have vs nice-to-have features
- ✓ Cost estimates
- ✓ Success metrics

**Ready to build in parallel with existing quiz app. Zero ambiguity.**
