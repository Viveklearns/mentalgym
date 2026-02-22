# Mental Gym - Project Context

## Core Concept
A "mental gym" where users practice frameworks from books they've read - starting with *Never Split the Difference* by Chris Voss. The product helps bridge the gap between reading a book and actually applying its frameworks in real situations.

## Product Positioning
- **Book-first approach**: Target people who recently finished reading a specific book and want the concepts to stick
- **Cognitive skill building**: Focus on practicing how to think in situations (negotiation, decision-making, persuasion) rather than behavioral change
- **Practice layer, not summary**: Not competing with the book - helping people practice what they already learned

## Target Launch
- MVP in 2 days
- Start with one book: *Never Split the Difference*
- Initial segment: Product Managers

## Product Flow

### 1. Diagnostic Quiz (Entry Point)
**Purpose**: Sorting quiz that assesses baseline understanding and places users in the right practice path

**Structure**:
- 12-15 questions total (5-10 minutes max)
- Three question banks for repeated testing
- Mix: 30% conceptual, 70% scenario-based
- Scenarios must have enough context for one clearly best answer

**Clusters** (PM-focused):
1. **Listening & Empathy** (3 frameworks)
   - Tactical Empathy
   - Mirroring
   - Labeling

2. **Strategic Influence** (6 frameworks)
   - Accusation Audit
   - Calibrated Questions
   - No-Oriented Questions
   - Summary/Paraphrasing
   - "That's Right" vs "You're Right"
   - Three Negotiator Types

3. **Execution & Agreement** (3 frameworks)
   - Loss Aversion/Bending Reality
   - Black Swans
   - Implementation "How" Questions

**Quiz Output**:
- Overall score 0-100
- Score per cluster
- "Strongest area / Gap area" callout
- Feeds directly into personalized flashcard practice

### 2. Practice Layer (Core Experience)
**Initial Version**: Flashcard model
- Scenario/prompt on front
- Technique name + explanation + example on back
- Feedback after each answer explaining why other plausible answers are wrong
- Trap answers engineered into every question

**Future Version**: Simulation model (Phase 2)
- Full conversation where AI plays counterpart
- User must respond using Voss techniques

## Key Design Principles

### Copyright Strategy
- Don't reproduce book text
- Focus on practicing concepts (which aren't copyrightable)
- User brings the book knowledge; product provides practice layer
- Position as complement to book, not replacement

### Question Design
- Each scenario needs "trap answer" - intuitively right but wrong by Voss logic
- Provide enough context to make one answer clearly best
- Avoid overly lengthy scenarios
- Test application gaps, not just definitional knowledge

### User Segments (Future Expansion)
1. **Salespeople** - discovery calls, objection handling, deal negotiation
2. **Product Managers** - influence without authority, stakeholder alignment (LAUNCH SEGMENT)
3. **Founders** - term sheets, investor pitches, partnerships
4. **Salary Negotiators** - offer negotiation, promotions, counter-offers
5. **Personal Relationships** - boundary-setting, conflict resolution

## Key Insights from Research

### Reddit Community Intelligence
- People adopt 4-5 techniques and ignore the rest
- **Most used**: Mirroring, calibrated questions, labeling, "have you given up?" email
- **Hardest to apply**: FM DJ voice, dynamic silence, full Ackermann model
- **#1 complaint**: No structured practice mechanism despite having read the book
- **Primary use case**: Salary negotiation in tech

### The Gap
- Users have access to book, MasterClass, YouTube summaries
- What's missing: realistic, low-stakes practice tailored to their job function
- Voss's own quote: "Under pressure, you fall to your highest level of preparation"
- The book provides no preparation mechanism

### Skill Progression
1. **Level 1 - Gateway** (high success, low difficulty): Mirroring, basic calibrated questions
2. **Level 2 - Emotional Intelligence**: Labeling, silence, "That's Right"
3. **Level 3 - Strategic Framing**: Accusation audits, loss aversion, negotiator types
4. **Level 4 - Advanced Bargaining**: Ackermann, anchoring, Black Swans

## MVP Validation Plan
**Week 1**:
- Build concept library for NSTD frameworks (PM-focused)
- Create 3 question banks (12-15 questions each)
- Build simple web app with quiz flow
- Set up Stripe for $9 payment

**Week 2**:
- Share with 50 people: LinkedIn network, r/negotiation, r/ProductManagement, book clubs
- Only success metric: paid signups
- 10+ paying users = validated

## Distribution Channels
- Reddit: r/ProductManagement, r/negotiation, r/productivity, r/selfimprovement
- Goodreads: People who just logged finishing NSTD
- YouTube: Comment sections on NSTD summary videos
- Book clubs
- LinkedIn posts in relevant communities

## Technical Approach
- Start with flashcard model (buildable in 1 day)
- Quiz feeds into flashcard sequence (personalized based on weak areas)
- Claude-powered scenario generation
- Simple session structure: "10 cards, then summary"

## Critical Success Factors
1. **Trap answers** - every question must have plausible-but-wrong options with clear explanations
2. **Context richness** - scenarios must provide enough detail for one clearly best answer
3. **Immediate value** - user feels smarter after single session, not weeks of practice
4. **Tight feedback loop** - explanation of why answers are right/wrong is the core teaching moment
5. **Professional relevance** - scenarios must map to PM's actual week

## Files Created
- `/context.md` - This file
- `/nstd_framework_guide.md` - Complete framework breakdown with Reddit intelligence
- `/nstd_quiz_banks.md` - Three question banks (13 questions each, PM-focused)
