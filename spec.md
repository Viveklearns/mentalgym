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
- All answers and explanations shown only on Results page
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
- Hour 10: Email capture
- Hour 11: Landing page structure
- Hour 12: Landing page polish

**Afternoon (4 hours):**
- Hour 13: Edge cases & error handling
- Hour 14: Analytics & final testing
- Hour 15: Deploy to Vercel (4:00-4:30pm)
- Hour 16: Final polish & prep for launch (4:30-6:00pm)

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

**Nice to Have:**
- Polished copy/design
- Full error handling
- Analytics events

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
