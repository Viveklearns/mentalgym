import { Question } from "@/types";
import { QUESTIONS } from "./questions";

// Bank 1: Original MVP questions (same as QUESTIONS export)
export const BANK_1 = QUESTIONS;

// Bank 2: Questions from nstd_quiz_banks.md
export const BANK_2: Question[] = [
  // CLUSTER 1: Listening & Empathy (4 questions)
  {
    id: "bank2_q1",
    cluster: 1,
    framework: "Tactical Empathy",
    questionText: "You're in sprint planning. A senior engineer says \"I'll do it\" to taking on a complex task, but his tone is flat and his posture is closed. What's the right move?",
    options: [
      "Accept the commitment — he said yes and he's a professional",
      "Say: \"It seems like this task might be creating some concerns you haven't mentioned\"",
      "Ask: \"Are you sure you can handle this on top of everything else?\"",
      "Redistribute the task to someone who volunteers more willingly"
    ],
    correctAnswer: 1,
    explanationCorrect: "Tactical empathy names the underlying emotional state. A flat \"I'll do it\" from an experienced engineer often signals hidden concerns — an unrealistic estimate, dependency on another team, or a technical approach he disagrees with. Naming it creates the opening.",
    explanationWrong: {
      0: "Accepts counterfeit commitment. You'll find out at the sprint review that the task is incomplete.",
      2: "A yes/no that makes it easy to retreat to \"No, I'm fine.\" Also slightly condescending.",
      3: "Avoids the conversation you actually need to have."
    }
  },
  {
    id: "bank2_q2",
    cluster: 1,
    framework: "Mirroring",
    questionText: "A product stakeholder says: \"This is the third time we've had to change direction because of shifting priorities.\" You want to understand the frustration before responding. What do you say?",
    options: [
      "\"I completely understand your frustration. Let me explain the context behind the changes.\"",
      "\"Shifting priorities?\"",
      "\"You're right, this has been inconsistent. How can we make the next change easier?\"",
      "\"I hear you — what would a more stable process look like?\""
    ],
    correctAnswer: 1,
    explanationCorrect: "Mirror the most emotionally loaded phrase. \"Shifting priorities\" is the frustration anchor. They'll elaborate on what that has meant for them — wasted work, lost credibility, resource confusion — information you can't get by explaining or problem-solving.",
    explanationWrong: {
      0: "Explaining context is the most counterproductive response. You're defending the behavior before understanding their experience of it.",
      2: "Concedes without understanding what \"inconsistent\" means to them specifically.",
      3: "Jumps to solution before the concern has been fully heard."
    }
  },
  {
    id: "bank2_q3",
    cluster: 1,
    framework: "Labeling",
    questionText: "You're presenting a new workflow framework to your design team. Halfway through, the lead designer interrupts: \"We tried something similar before.\" What do you do?",
    options: [
      "Ask: \"What happened when you tried it before?\"",
      "Say: \"It seems like there's a concern that this might lead to the same outcome as last time.\"",
      "Acknowledge and pivot: \"That's useful context — this approach is actually different because...\"",
      "Say: \"It seems like you're skeptical of new frameworks in general.\""
    ],
    correctAnswer: 1,
    explanationCorrect: "Labels the underlying fear — repeating past failure — not just the surface statement. This is more likely to get her to open up than a question, because she feels understood before she has to explain herself.",
    explanationWrong: {
      0: "Calibrated question is the right tool eventually, but label first. The question comes after the emotion is acknowledged.",
      2: "Pivots to selling before understanding. She hasn't said why the previous attempt failed.",
      3: "The label is too broad and slightly accusatory — it misidentifies the concern."
    }
  },
  {
    id: "bank2_q4",
    cluster: 1,
    framework: "Tactical Empathy",
    questionText: "You just told an engineering manager that a feature his team spent six weeks building will not ship due to a strategy pivot. He goes completely silent. What do you do first?",
    options: [
      "Fill the silence by explaining the business reasoning — he deserves to understand why",
      "Say: \"I imagine this feels like six weeks of your team's work being wasted.\"",
      "Ask: \"What are you thinking right now?\"",
      "Give him space — suggest a follow-up conversation once he's had time to process"
    ],
    correctAnswer: 1,
    explanationCorrect: "This is tactical empathy applied to bad news delivery — name the likely emotional experience before asking for any cognitive processing. \"Wasted work\" is the fear. Naming it shows you understand what this actually means to him and his team.",
    explanationWrong: {
      0: "Logic in response to emotional shock is almost always counterproductive. He can't hear the reasoning yet.",
      2: "\"What are you thinking?\" when someone is in shock is an unfair question. They may not know yet.",
      3: "Delays the empathy he needs right now. Space without acknowledgment reads as indifference."
    }
  },

  // CLUSTER 2: Strategic Influence (6 questions)
  {
    id: "bank2_q5",
    cluster: 2,
    framework: "Accusation Audit",
    questionText: "You need to ask a cross-functional team that's already stretched thin to take on additional work this quarter. How do you open the request?",
    options: [
      "\"I know you're all slammed, but I wouldn't be asking if it wasn't truly critical.\"",
      "\"I want to be upfront — I know this feels like we're piling onto an already impossible list, and you're probably thinking your team always gets handed the extra work no one else will take.\"",
      "\"This is a high-priority request from the CPO, so I want to make sure we're aligned on urgency.\"",
      "\"I have a request, and before I share it, I want to hear your constraints.\""
    ],
    correctAnswer: 1,
    explanationCorrect: "Full accusation audit. Names both the factual concern (overloaded) and the deeper resentment (always the team that gets the overflow). Hearing their unspoken frustrations voiced out loud deflates them — the team often responds by arguing against their own worst interpretation.",
    explanationWrong: {
      0: "\"But\" negates everything before it. \"I know you're slammed but...\" signals that you know and don't care enough to change the ask.",
      2: "Authority-based framing generates resentment, not engagement.",
      3: "Responsive but reactive — waits for objections instead of defusing them proactively."
    }
  },
  {
    id: "bank2_q6",
    cluster: 2,
    framework: "Calibrated Questions",
    questionText: "Your CEO asks why a major feature is delayed. You need to understand what specifically concerns him before you respond. What do you ask?",
    options: [
      "\"Is your concern primarily about the timeline or the scope?\"",
      "\"What aspect of this delay is most important for us to address right now?\"",
      "\"Why do you think this happened?\"",
      "\"Can you tell me more about what's worrying you?\""
    ],
    correctAnswer: 1,
    explanationCorrect: "An open \"what\" question that gives him control of where to take the answer — he might be concerned about a customer commitment, a board presentation, a competitor launch, or team morale. You can't solve the right problem until you know which problem it is.",
    explanationWrong: {
      0: "Binary — limits his answer to two options before you know which one matters.",
      2: "\"Why do you think this happened?\" sounds like you're asking the CEO to diagnose your team's failure. Tone-deaf in this direction.",
      3: "Vague and open-ended in an unproductive way — invites a long response without direction."
    }
  },
  {
    id: "bank2_q7",
    cluster: 2,
    framework: "No-Oriented Questions",
    questionText: "You want to propose a new data instrumentation approach to a VP who has historically been skeptical of analytics investments. How do you open?",
    options: [
      "\"I have a new analytics proposal I think addresses your previous concerns.\"",
      "\"Would it be completely off base to take 20 minutes to walk through a new approach to how we're instrumenting the product?\"",
      "\"I know you've heard a lot of analytics pitches. Would you be open to hearing one more?\"",
      "\"I wanted to get your input on an instrumentation initiative we're evaluating.\""
    ],
    correctAnswer: 1,
    explanationCorrect: "No-oriented framing. \"Would it be completely off base...\" invites a \"no, that wouldn't be off base\" response while giving her a genuine exit. Low-threat, low-pressure framing that doesn't trigger the \"here we go again\" defense.",
    explanationWrong: {
      0: "Presumes your proposal solved her past concerns — presumptuous without knowing what they were.",
      2: "Condescending — acknowledges her fatigue then asks her to endure more anyway.",
      3: "Procedurally fine but misses the opportunity to defuse the historical skepticism with no-framing."
    }
  },
  {
    id: "bank2_q8",
    cluster: 2,
    framework: "Three Negotiator Types",
    questionText: "Your designer frequently says \"whatever you think is best\" in meetings, agrees to everything in the room, but then raises concerns via Slack hours later or in side conversations. What's happening and what's the risk?",
    options: [
      "She's an Analyst — she needs more processing time, give her 24 hours before expecting a decision",
      "She's an Accommodator giving counterfeit agreement — her real concerns are going underground and will resurface as passive resistance",
      "She's an Assertive who tests ideas by first agreeing then stress-testing privately",
      "She's an Accommodator who genuinely defers to expertise — this is a healthy dynamic"
    ],
    correctAnswer: 1,
    explanationCorrect: "Classic Accommodator profile. Accommodators hate conflict so much that they produce \"yes\" in the room and then route real concerns through low-confrontation channels. The risk is that you build with false alignment — her concerns re-emerge at sprint review, launch, or retrospective.",
    explanationWrong: {
      0: "Analysts are deliberate, not conflict-avoidant. They express disagreement; they just do it slowly and with data.",
      2: "Completely inverts the Assertive profile.",
      3: "The most dangerous trap — taking the deference at face value produces the exact dynamic that leads to late-stage surprises."
    }
  },
  {
    id: "bank2_q9",
    cluster: 2,
    framework: "Summary/Paraphrasing",
    questionText: "After 40 minutes listening to an engineering director's concerns about a Q3 plan, you want to verify understanding before pitching anything. Which response is most likely to produce \"That's right\"?",
    options: [
      "\"So you're saying the timeline is too aggressive?\"",
      "\"It sounds like you're worried about the timeline, frustrated that the team wasn't consulted earlier, and concerned that technical debt isn't being accounted for — and underneath all of that is a real fear that if this fails, your team takes the blame publicly.\"",
      "\"I understand your concerns. Let me address them one by one.\"",
      "\"You're right that we have a lot to work through.\""
    ],
    correctAnswer: 1,
    explanationCorrect: "A complete summary hitting factual concerns (timeline, consultation, tech debt) and the underlying emotional stakes (public blame). The deeper you go — especially naming the fear they haven't said out loud — the more likely \"That's right.\"",
    explanationWrong: {
      0: "Too thin. One concern summarized out of several heard.",
      2: "Pivots to solution before earning trust — he hasn't confirmed you understood him.",
      3: "\"You're right\" from you signals you want the conversation to move on, not that you truly understood him."
    }
  },
  {
    id: "bank2_q10",
    cluster: 2,
    framework: "\"That's Right\" vs \"You're Right\"",
    questionText: "You've just made a comprehensive case to your CPO for why a feature should be cut. She responds: \"You've made some good points. I suppose you're right.\" What do you do?",
    options: [
      "Thank her and move to next steps — you've earned the decision",
      "Pause and label: \"It seems like there's still something giving you pause about this.\"",
      "Confirm: \"So we're aligned on cutting it?\"",
      "Send a follow-up email summarizing the decision while the conversation is fresh"
    ],
    correctAnswer: 1,
    explanationCorrect: "\"You're right\" is the disengagement signal. She's closing the conversation, not agreeing with the decision. Label the residual hesitation before moving forward — otherwise she reverses course later or quietly fails to support it.",
    explanationWrong: {
      0: "All treat \"I suppose you're right\" as genuine commitment and move to execution. This is the exact path to the reversal that happens two weeks later in a different meeting.",
      2: "All treat \"I suppose you're right\" as genuine commitment and move to execution. This is the exact path to the reversal that happens two weeks later in a different meeting.",
      3: "All treat \"I suppose you're right\" as genuine commitment and move to execution. This is the exact path to the reversal that happens two weeks later in a different meeting."
    }
  },

  // CLUSTER 3: Execution & Agreement (3 questions)
  {
    id: "bank2_q11",
    cluster: 3,
    framework: "Loss Aversion/Bending Reality",
    questionText: "Your team is debating whether to invest engineering capacity in reducing technical debt. Which argument is most persuasive to a risk-averse VP of Engineering?",
    options: [
      "\"Addressing this now will make the team 25% more productive over the next year.\"",
      "\"Every quarter we delay, we're compounding the problem. At our current trajectory, this will cost twice the engineering time to fix in 12 months — and we've already seen it eat three sprints this quarter.\"",
      "\"Industry best practice recommends allocating 20% of engineering capacity to debt reduction.\"",
      "\"The team morale impact of working in poor code quality is real and measurable.\""
    ],
    correctAnswer: 1,
    explanationCorrect: "Specific, recent loss framing (three wasted sprints this quarter) with an implied escalating future cost (double the effort in 12 months). Makes the status quo feel expensive and risky rather than safe and neutral.",
    explanationWrong: {
      0: "Gain framing — sounds good but doesn't trigger the urgency that loss does.",
      2: "Social proof is supporting evidence, not a primary argument. A VP will say \"we're not average.\"",
      3: "Real concern but soft and hard to quantify in the budget conversation."
    }
  },
  {
    id: "bank2_q12",
    cluster: 3,
    framework: "Black Swans",
    questionText: "You've been trying to get sign-off on a vendor contract for six weeks. Legal keeps requesting minor revisions but never escalates real concerns and never closes. What Black Swan should you investigate, and how?",
    options: [
      "Legal is understaffed — offer to expedite by handling more of the coordination yourself",
      "There's a hidden approval bottleneck — a senior stakeholder hasn't blessed this engagement and legal is stalling without being able to say so. Get face time and ask: \"How does this contract affect your team's ability to close it?\"",
      "The contract terms are genuinely problematic — request a full legal review call",
      "Legal isn't resourced for this type of contract — escalate to your legal team's manager"
    ],
    correctAnswer: 1,
    explanationCorrect: "\"Minor revisions that never resolve\" for six weeks is the Black Swan pattern of a hidden constraint. Someone who needs to approve this hasn't — legal is in an impossible position. A calibrated \"how\" question in a face-to-face moment is most likely to surface it.",
    explanationWrong: {
      0: "Takes ownership of their process problem without understanding what's actually blocked.",
      2: "Genuine problems would have produced escalating, not trivial, revisions. The pattern doesn't fit.",
      3: "Escalation without information may accelerate or kill a deal you don't fully understand yet."
    }
  },
  {
    id: "bank2_q13",
    cluster: 3,
    framework: "Implementation \"How\" Questions",
    questionText: "Your roadmap has just been approved in a VP review. Before the meeting ends, what's the most important question to ask?",
    options: [
      "\"Great — I'll put together a comms plan and project kickoff.\"",
      "\"How do we make sure engineering, design, and data are genuinely aligned before we start?\"",
      "\"Who should I loop in during execution?\"",
      "\"What's the timeline expectation for the first milestone?\""
    ],
    correctAnswer: 1,
    explanationCorrect: "Forces the VP to own cross-functional alignment, not just approve the plan. She's now thinking through the dependencies herself — which surfaces any hidden blockers (misaligned engineering lead, budget gate, design resource constraint) before they hit you in week three.",
    explanationWrong: {
      0: "Assumes implementation will be smooth. Premature.",
      2: "Closed question that produces a list, not ownership or insight into hidden blockers.",
      3: "Timeline before alignment is the wrong sequence. You can have a perfect timeline with a misaligned organization."
    }
  }
];

// Bank 3: Questions from nstd_quiz_banks.md
export const BANK_3: Question[] = [
  // CLUSTER 1: Listening & Empathy (4 questions)
  {
    id: "bank3_q1",
    cluster: 1,
    framework: "Tactical Empathy",
    questionText: "You present a quarterly OKR update. The room goes quiet. Your VP of Engineering nods slowly but says nothing. A product stakeholder checks her phone. What should you do?",
    options: [
      "Ask: \"Does anyone have questions or concerns about the update?\"",
      "Continue presenting — silence often means they're processing",
      "Say: \"It seems like this update is raising concerns that haven't been voiced yet.\"",
      "Address it directly: \"I know these numbers aren't where we hoped.\""
    ],
    correctAnswer: 2,
    explanationCorrect: "Labels the group's emotional state without singling anyone out. Creates permission for honest reactions. \"It seems like\" is non-accusatory — it's an invitation, not a confrontation.",
    explanationWrong: {
      0: "Yes/no question produces polite denial. Nobody wants to be the first to say the room is uncomfortable.",
      1: "Ignores clear signals. The discomfort will surface later in a less controllable setting.",
      3: "Explains the situation rather than inviting response. \"I know the numbers aren't great\" closes conversation rather than opening it."
    }
  },
  {
    id: "bank3_q2",
    cluster: 1,
    framework: "Mirroring",
    questionText: "A stakeholder says: \"I've been in five roadmap reviews this year and nothing ever actually changes.\" You want to draw out the frustration. Which phrase do you mirror?",
    options: [
      "\"Nothing ever actually changes?\"",
      "\"Five roadmap reviews?\"",
      "\"It sounds like you're frustrated with the process.\"",
      "\"I understand. What would you want to see change?\""
    ],
    correctAnswer: 0,
    explanationCorrect: "Mirror the most emotionally loaded phrase — \"nothing ever changes\" carries the frustration and the implied futility. \"Five roadmap reviews\" is just a count. Mirroring the wrong phrase wastes the technique.",
    explanationWrong: {
      1: "Mirrors the neutral detail, not the emotional core.",
      2: "This is labeling, not mirroring — a different technique. Good instinct, wrong tool for this moment.",
      3: "Jumps immediately to solution before the frustration has been fully heard."
    }
  },
  {
    id: "bank3_q3",
    cluster: 1,
    framework: "Labeling",
    questionText: "Your lead engineer says \"I just don't think this is technically feasible\" about a feature leadership has already committed to. Best response?",
    options: [
      "\"It seems like there are some specific technical concerns about the current approach.\"",
      "\"That's a serious concern — what specifically is the blocker?\"",
      "\"It seems like you're worried this will fail and your team will take the blame for something they didn't design.\"",
      "Say nothing — let him elaborate on his own."
    ],
    correctAnswer: 2,
    explanationCorrect: "Goes beneath the surface concern (technical feasibility) to the underlying fear (being blamed for failure on something they didn't choose). The deeper label is more likely to unlock honest conversation — if correct, he'll open up about the real dynamic; if wrong, he'll correct you with useful information.",
    explanationWrong: {
      0: "Valid label but shallow — stays on the surface technical concern. Misses the political/emotional dimension.",
      1: "Calibrated question, good technique but premature. Label the emotion first, then ask.",
      3: "Silence is fine but you've missed the opportunity to demonstrate you understand what this means to him."
    }
  },
  {
    id: "bank3_q4",
    cluster: 1,
    framework: "Tactical Empathy",
    questionText: "You're inheriting a product from a PM who was deeply respected by the engineering team. Your first team meeting, you sense wariness and guardedness. How do you open?",
    options: [
      "\"I'm excited to be here and I want to start by hearing what's working and what isn't.\"",
      "\"I know it's hard when a PM you respect moves on. You're probably wondering whether I'll understand what matters to this team the way she did.\"",
      "\"Let me share a bit about my background and how I like to work.\"",
      "\"I've been reviewing the roadmap and I have some initial thoughts I'd like to share.\""
    ],
    correctAnswer: 1,
    explanationCorrect: "Proactively names the emotional state of the room — wariness about change, loyalty to the predecessor, uncertainty about you. This is an accusation audit applied to a first impression. It's the most disarming possible opening because you've said what they were all privately thinking.",
    explanationWrong: {
      0: "Generic onboarding opener that ignores the emotional reality in the room.",
      2: "Self-focused at exactly the moment the team needs to feel acknowledged.",
      3: "The worst possible opening — immediately signals that you're in evaluation mode, which triggers defensiveness in a team that's already protective of their previous PM's work."
    }
  },

  // CLUSTER 2: Strategic Influence (6 questions)
  {
    id: "bank3_q5",
    cluster: 2,
    framework: "Accusation Audit",
    questionText: "You're about to propose cutting a feature that a key stakeholder has been publicly associated with for two quarters. How do you open?",
    options: [
      "\"I want to walk through some data before we make any decisions on this.\"",
      "\"I know this is going to feel like a direct challenge to your judgment on something you've put yourself on the line for. You might be thinking this is political or that leadership has lost confidence in you. It isn't.\"",
      "\"I want to be sensitive to the work you've put into this, and I think the data will help us think through it together.\"",
      "\"This is a hard conversation, but we need to have an honest discussion about the future of this feature.\""
    ],
    correctAnswer: 1,
    explanationCorrect: "Full accusation audit naming the specific fears: \"judgment questioned,\" \"political,\" \"leadership lost confidence.\" These are the things she's been privately dreading. Hearing them spoken out loud — especially as something you're preemptively denying — defuses them before they can solidify into defensiveness.",
    explanationWrong: {
      0: "Data-led approach that bypasses the emotional reality entirely.",
      2: "Shows sensitivity but doesn't name the specific fears. Leaves them to fester.",
      3: "Acknowledges difficulty without doing the specific work of defusing."
    }
  },
  {
    id: "bank3_q6",
    cluster: 2,
    framework: "Calibrated Questions",
    questionText: "A senior stakeholder says: \"I need this shipped in six weeks, no exceptions.\" You're not sure if the deadline is real or positional. What's your best response?",
    options: [
      "\"That's a very aggressive timeline. What can we cut to make it work?\"",
      "\"What would need to be true for six weeks to actually be achievable?\"",
      "\"Six weeks is very tight — can you help us understand the constraints driving this timeline?\"",
      "\"What happens if we don't hit six weeks?\""
    ],
    correctAnswer: 1,
    explanationCorrect: "Forces the stakeholder to think through the dependencies themselves — which reveals whether the deadline is tied to a real event (customer commitment, board meeting, competitive launch) or is positional pressure. If they can't answer it, the deadline may be negotiable.",
    explanationWrong: {
      0: "Assumes the deadline is fixed and immediately concedes on scope.",
      2: "\"Can you help us understand...\" is slightly passive. B is more direct and productive.",
      3: "Good question — understanding consequences of missing deadline is valuable — but B is better because it steers toward collaborative problem-solving rather than risk discussion."
    }
  },
  {
    id: "bank3_q7",
    cluster: 2,
    framework: "No-Oriented Questions",
    questionText: "A VP has said she'll review your proposal \"soon\" for three weeks running. What do you send?",
    options: [
      "\"Following up on the proposal — happy to answer any questions you have.\"",
      "\"Is it safe to say this initiative isn't a priority right now?\"",
      "\"Have you given up on this initiative?\"",
      "\"Would it be wrong to assume we should pause this until next quarter?\""
    ],
    correctAnswer: 2,
    explanationCorrect: "The classic Voss re-engagement trigger. \"Have you given up\" produces an immediate \"no, of course not\" that breaks the silence and creates urgency. It forces her to actively re-engage rather than passively continue avoiding.",
    explanationWrong: {
      0: "Standard follow-up that has already failed three times.",
      1: "No-oriented but too soft — they explicitly give her permission to say \"yes, let's pause it,\" which is the outcome you're trying to prevent.",
      3: "No-oriented but too soft — they explicitly give her permission to say \"yes, let's pause it,\" which is the outcome you're trying to prevent."
    }
  },
  {
    id: "bank3_q8",
    cluster: 2,
    framework: "Three Negotiator Types",
    questionText: "Your data science lead sends 40-page analyses before every meeting, requests agendas 48 hours in advance, and goes noticeably silent when new information is introduced without warning. What type is this, and how do you adapt?",
    options: [
      "Assertive — he needs to feel in control; let him set the agenda and own the analysis",
      "Analyst — he hates surprises; always send detailed pre-reads, never introduce new information cold, treat his silence as thinking rather than agreement or disagreement",
      "Accommodator — the lengthy analysis is an attempt to please; his silence is discomfort with conflict",
      "Analyst — agree with his analyses to build rapport and trust"
    ],
    correctAnswer: 1,
    explanationCorrect: "Classic Analyst. Methodical, thorough, time-independent, surprise-averse. The silence during new information is him processing — interrupting or pushing for a reaction is counterproductive. Pre-reads, advance notice, no cold surprises.",
    explanationWrong: {
      0: "Assertives are fast and bottom-line focused — the opposite of this profile.",
      2: "Accommodators avoid conflict through agreement — this person expresses himself through data, not silence.",
      3: "Agreeing with all his analyses without engaging signals you haven't read them — the worst signal to an Analyst who has invested heavily in rigor."
    }
  },
  {
    id: "bank3_q9",
    cluster: 2,
    framework: "Summary/Paraphrasing",
    questionText: "You've spent 40 minutes listening to a skeptical VP of Sales explain why the product doesn't meet his team's needs. You want to earn the right to present a solution. What do you say?",
    options: [
      "\"Thanks for sharing all of that. I think we have some options that address most of these concerns.\"",
      "\"So if I'm hearing you right — the product is built for discovery, but your team lives in the close. The missing piece isn't features, it's workflow integration at the moment of truth. And every week without that is a quota miss your reps have to explain upward. Is that right?\"",
      "\"You've raised a lot of valid concerns. Let me take these back to the team and come back with a proposal.\"",
      "\"I've been hearing similar feedback from others — let me share what we're planning to address it.\""
    ],
    correctAnswer: 1,
    explanationCorrect: "A complete summary that hits the factual gap (discovery vs. close), the missing piece (workflow integration), and the emotional stakes (quota misses explained upward). When he says \"That's right,\" you've earned the pitch and he's already partially sold.",
    explanationWrong: {
      0: "Jumps straight to \"we have options\" before confirming understanding. He'll be skeptical before you start.",
      2: "Unnecessary deferral — you have enough to summarize now and lose momentum by leaving.",
      3: "Makes his specific concern generic. He'll feel unheard."
    }
  },
  {
    id: "bank3_q10",
    cluster: 2,
    framework: "\"That's Right\" vs \"You're Right\"",
    questionText: "Midway through a contentious roadmap session, your lead engineer says: \"Fine. You're right. Let's just do it your way.\" How do you interpret this and what do you do?",
    options: [
      "This is hard-won agreement after working through his objections — proceed",
      "This is tactical withdrawal — he'll comply but won't be an engaged owner of the outcome. Label it: \"It seems like you still have real concerns about this approach.\"",
      "This is passive aggression — \"you're right\" is his way of expressing frustration",
      "This is genuine buy-in — the \"fine\" signals that he worked through the resistance"
    ],
    correctAnswer: 1,
    explanationCorrect: "\"You're right, let's do it your way\" is disengagement, not alignment. He's handing you the decision while withdrawing ownership. The risk is compliance without investment — he'll execute minimally and the first problem will become \"I told you so.\" Label it and surface the real concern.",
    explanationWrong: {
      0: "\"You're right\" is not the same as \"That's right.\" Treating it as genuine buy-in leads directly to the implementation failure you were trying to avoid.",
      2: "Reads it as emotional when it's actually strategic — Voss's insight is specifically about the language as a disengagement signal, not just frustration.",
      3: "\"You're right\" is not the same as \"That's right.\" Treating it as genuine buy-in leads directly to the implementation failure you were trying to avoid."
    }
  },

  // CLUSTER 3: Execution & Agreement (3 questions)
  {
    id: "bank3_q11",
    cluster: 3,
    framework: "Loss Aversion/Bending Reality",
    questionText: "You're trying to get budget approval for UX research. Which argument is most effective with a VP who controls the budget?",
    options: [
      "\"Good UX research will help us build more user-centric features and improve satisfaction scores.\"",
      "\"Companies that invest in UX research see 2x improvement in feature adoption.\"",
      "\"Every feature we ship without research validation carries real rework risk. We've already seen this cost us three sprints this quarter — and without a change, the next three quarters look the same.\"",
      "\"UX research is a standard investment at our stage of growth.\""
    ],
    correctAnswer: 2,
    explanationCorrect: "Specific, recent, concrete loss framing with a forward projection of ongoing cost. Three wasted sprints is real and recent — it makes the status quo feel expensive rather than safe. The forward projection (\"next three quarters look the same\") extends the loss into a trajectory.",
    explanationWrong: {
      0: "Vague gain framing. Sounds good but creates no urgency.",
      1: "Benchmark gain framing — sounds compelling but VPs have learned to discount \"companies that do X see Y% improvement\" claims.",
      3: "Social proof — the weakest form of argument for a budget conversation."
    }
  },
  {
    id: "bank3_q12",
    cluster: 3,
    framework: "Black Swans",
    questionText: "You've been trying to launch a partnership with another team for two months. Their lead seems enthusiastic every time you meet but always has \"one more thing\" to finalize before they can commit. What's most likely happening and what do you do?",
    options: [
      "They're a detail-oriented Analyst — give them more documentation and time",
      "There's a hidden constraint — competing priority, budget they don't have, or an approval they can't get. Ask in person: \"How does this partnership affect your team's current priorities?\"",
      "They're not actually interested — send a \"have you given up on this?\" message to force clarity",
      "The partnership terms aren't working — ask for a full renegotiation conversation"
    ],
    correctAnswer: 1,
    explanationCorrect: "\"One more thing\" for two months is the Black Swan signature of a hidden constraint. An Analyst with a genuine concern would have raised it by now. The calibrated \"how\" question in a face-to-face conversation creates the opening for them to reveal what they can't say directly.",
    explanationWrong: {
      0: "Analysts express their concerns clearly, just slowly and with data. The \"one more thing\" pattern is evasion, not thoroughness.",
      2: "Would surface disinterest but gives them an easy exit before you understand the real blocker.",
      3: "Assumes a contract issue without evidence. The pattern suggests a constraint, not a terms problem."
    }
  },
  {
    id: "bank3_q13",
    cluster: 3,
    framework: "Implementation \"How\" Questions",
    questionText: "Your CEO has just verbally approved a major product pivot in a 1:1. This is a significant strategic shift affecting multiple teams. What do you ask before leaving?",
    options: [
      "\"Wonderful — I'll put together an announcement and implementation plan.\"",
      "\"How do we make sure the board is aligned with this direction before we announce it internally?\"",
      "\"Who else needs to know about this decision?\"",
      "\"What's your timeline expectation for the first visible milestone?\""
    ],
    correctAnswer: 1,
    explanationCorrect: "Forces the CEO to think about the most significant hidden stakeholder — the board — and her own role in securing alignment there. A product pivot announced internally before the board is aligned is the exact scenario that causes reversals and whiplash. Asking \"how\" makes her responsible for the answer.",
    explanationWrong: {
      0: "A verbal 1:1 approval for a major pivot is often the beginning of the alignment process, not the end of it.",
      2: "Produces a list, not a plan. You do the coordination, discovering blockers only when you hit them.",
      3: "Timeline before alignment is the wrong sequence — you can have a perfect plan on a dead initiative."
    }
  }
];

// Bank 4: Questions from nstd_quiz_banks_expanded.md
export const BANK_4: Question[] = [
  // CLUSTER 1: Listening & Empathy (4 questions)
  {
    id: "bank4_q1",
    cluster: 1,
    framework: "Tactical Empathy",
    questionText: "Mark from Sales sends you a Slack message: \"Hey, just a heads-up — I already promised our largest client that the next release will include one-click data migration. They've already signed the contract. Oh, and no, you can't join the next client meeting.\" You're furious. What's your first move?",
    options: [
      "Immediately escalate to your VP of Product — Sales can't commit engineering resources without approval",
      "Reply to Mark: \"It seems like you felt the pressure to close this deal was important enough to commit our roadmap without checking with product first\"",
      "Tell Mark this is unacceptable and demand to be included in the next client meeting",
      "Pull up the sprint plan and show Mark why this feature can't be built in the timeline he promised"
    ],
    correctAnswer: 1,
    explanationCorrect: "Tactical empathy names the underlying motivation — Mark didn't commit your roadmap out of malice, he did it under deal pressure. By naming that dynamic without accusation, you create an opening for honest conversation about what actually happened and what's feasible. This is the only response that treats the situation as a negotiation rather than a fight.",
    explanationWrong: {
      0: "Escalation before conversation turns a recoverable situation into a political war. You'll need Sales as an ally eventually.",
      2: "Direct confrontation triggers defensiveness. Mark will justify his actions rather than collaborate on a solution.",
      3: "Logic-first response. Showing the sprint plan to someone who just closed a major deal ignores the emotional and political dynamics completely."
    }
  },
  {
    id: "bank4_q2",
    cluster: 1,
    framework: "Mirroring",
    questionText: "Your design lead pulls you aside after a team meeting and says: \"I've been the buffer between leadership's anxiety and the team's frustration for six months and I'm running on fumes.\" You want to understand the full picture. What do you say?",
    options: [
      "\"Running on fumes?\"",
      "\"I hear you. Let's talk about what I can take off your plate.\"",
      "\"That's really tough. How can we restructure things so you're not carrying that alone?\"",
      "\"It sounds like the team dynamics have been draining for you.\""
    ],
    correctAnswer: 0,
    explanationCorrect: "Mirror the most emotionally loaded phrase. \"Running on fumes\" carries the exhaustion, the unsustainability, and the implicit warning that something is about to break. She'll elaborate on what \"running on fumes\" actually looks like — skipped lunches, weekend work, specific incidents — and you'll understand the real scope of the problem before trying to solve it.",
    explanationWrong: {
      1: "Jumps to problem-solving before understanding the problem. You might take the wrong things off her plate.",
      2: "Also solution-first. Restructuring requires knowing what's actually broken.",
      3: "This is labeling, not mirroring. It's a reasonable technique but the wrong one here — you want her to keep talking, not confirm a diagnosis."
    }
  },
  {
    id: "bank4_q3",
    cluster: 1,
    framework: "Labeling",
    questionText: "You've just delivered quarterly metrics that missed targets. Your product director says: \"The numbers speak for themselves.\" His tone is cold. You know the miss was largely driven by a leadership-mandated pivot mid-quarter that ate three sprints. What's your best response?",
    options: [
      "\"It seems like these results are frustrating, especially when the mid-quarter pivot made the original targets nearly impossible to hit\"",
      "Lay out the timeline showing exactly when the pivot happened and how it impacted velocity",
      "\"You're right, the numbers aren't where we wanted. Here's what I'd do differently next quarter.\"",
      "\"It seems like there's a concern that the team isn't performing, and that worry might be bigger than what these specific numbers show\""
    ],
    correctAnswer: 3,
    explanationCorrect: "The deeper label. \"The numbers speak for themselves\" isn't really about the numbers — it's about whether your director is losing confidence in you and the team. Labeling that underlying fear (not just the surface frustration) creates space for the real conversation. If you're right, he'll share what's actually worrying him. If you're wrong, he'll correct you — and either way, you've moved past the surface.",
    explanationWrong: {
      0: "A label, but too defensive — it immediately points to the pivot as an excuse. Even if factually accurate, it sounds like blame-shifting.",
      1: "Logic-first response when the moment calls for emotional intelligence. A timeline won't fix a confidence problem.",
      2: "Accepting blame for something that wasn't your fault is a form of counterfeit agreement. It might end the conversation but it sets a dangerous precedent."
    }
  },
  {
    id: "bank4_q4",
    cluster: 1,
    framework: "Tactical Empathy",
    questionText: "An engineer on your team says in standup: \"I'll build whatever you want. You're the PM. Just tell me what to do.\" His tone is flat, almost resigned. What's the right move?",
    options: [
      "Thank him for his flexibility and assign the next task",
      "Say: \"It seems like you've stopped feeling like your input on what we build actually matters\"",
      "Ask: \"Is there something about the current direction you disagree with?\"",
      "Explain the strategic context behind the current priorities so he understands the \"why\""
    ],
    correctAnswer: 1,
    explanationCorrect: "This is the \"order-taker\" dynamic in reverse — the engineer has become an order-taker because he feels unheard. Naming the resignation behind his compliance creates an opening. If you're right, he'll share what killed his engagement. If wrong, he'll clarify. Either way, you've signaled that you value his perspective, which is the first step to getting it back.",
    explanationWrong: {
      0: "Accepts counterfeit compliance. You've now lost a thinking partner and gained a task executor.",
      2: "A yes/no question that makes it easy to retreat to \"No, it's fine.\" He already told you it's fine with his words — the problem is everything his tone said.",
      3: "More context won't fix disengagement. He doesn't need more \"why\" — he needs to feel heard."
    }
  },

  // CLUSTER 2: Strategic Influence (6 questions)
  {
    id: "bank4_q5",
    cluster: 2,
    framework: "Accusation Audit",
    questionText: "Your CEO just read a Business Insider article about a competitor's new feature and wants the team to pivot immediately. You have a strong roadmap backed by user research that this would derail. You're about to push back in a 1:1 with her. How do you open?",
    options: [
      "\"You're probably going to think I'm being resistant to new ideas, and that I'm not being responsive to competitive threats. I want to share some data that might reframe how we think about this.\"",
      "\"I appreciate you flagging this. Let me share some competitive analysis that puts this in context.\"",
      "\"I understand the urgency, but our current roadmap is backed by six months of user research.\"",
      "\"Can you help me understand what specifically about the article felt urgent?\""
    ],
    correctAnswer: 0,
    explanationCorrect: "The accusation audit preemptively names every negative thought she might have — that you're rigid, unresponsive, not competitive enough. By saying the worst things she could think about you before she thinks them, you defuse the emotional charge. She's now more likely to listen to your data because you've removed the defensive barrier.",
    explanationWrong: {
      1: "Polite but generic. \"I appreciate you flagging this\" is corporate filler that doesn't address the underlying dynamic — a CEO who feels her PM isn't moving fast enough.",
      2: "\"But\" immediately negates everything before it. She hears \"I'm going to argue with you\" and stops listening.",
      3: "A calibrated question — good technique, but wrong sequence. Without an accusation audit first, this feels like you're cross-examining her judgment."
    }
  },
  {
    id: "bank4_q6",
    cluster: 2,
    framework: "Calibrated Questions",
    questionText: "A stakeholder pings you on Slack for the fourth time this week: \"Quick question — can we squeeze in one more small feature before next sprint?\" Each request is individually reasonable but collectively they've expanded scope by 30%. What do you say?",
    options: [
      "\"I'd love to help. How do you want me to reprioritize the existing commitments to make room for this?\"",
      "\"We can't keep adding scope without trade-offs. What would you like me to cut?\"",
      "\"Let me check with engineering and get back to you on feasibility.\"",
      "\"I understand this feels small, but we've added four requests this week. We need to hold the line.\""
    ],
    correctAnswer: 0,
    explanationCorrect: "The calibrated \"how\" question makes the stakeholder solve their own problem. \"How do you want me to reprioritize?\" forces them to confront that adding scope means removing something else — without you being the one to say no. Most stakeholders, when forced to choose what to cut, realize their \"small\" request isn't worth the trade-off. The \"I'd love to help\" framing keeps the relationship warm.",
    explanationWrong: {
      1: "Same idea but confrontational framing. \"We can't keep adding\" is accusatory and \"what would you like me to cut\" sounds punitive.",
      2: "Kicks the can. You'll be back in the same position tomorrow with request number five.",
      3: "\"Hold the line\" is a war metaphor that positions you as adversarial. Even if correct, the framing damages the relationship."
    }
  },
  {
    id: "bank4_q7",
    cluster: 2,
    framework: "No-Oriented Questions",
    questionText: "In a product review, your VP of Engineering says: \"I've been thinking about this and I believe we should completely redesign the onboarding flow.\" This contradicts three months of validated user research. The room goes quiet, waiting for your response. What do you say?",
    options: [
      "\"Would it be a terrible idea to run a quick user test on the current flow before we commit to a full redesign?\"",
      "\"I respect your perspective. Here's what the user research shows about the current onboarding experience.\"",
      "\"That's an interesting idea. Can you walk me through what specifically isn't working about the current flow?\"",
      "\"I'd push back on that — our research shows the current flow has strong completion rates.\""
    ],
    correctAnswer: 0,
    explanationCorrect: "A \"no\"-oriented question gives the VP an illusion of control. \"Would it be a terrible idea\" invites them to say \"No, that's not terrible\" — which means they've just agreed to let data inform the decision. It's non-confrontational, preserves their status in front of the room, and redirects toward evidence without making them feel overruled.",
    explanationWrong: {
      1: "\"Here's what the research shows\" is a polite way of saying \"you're wrong,\" which a senior exec will resist even when faced with data.",
      2: "Sounds collaborative but is actually a stalling tactic. The VP has already formed an opinion — asking \"what's not working\" invites them to build a case you'll then have to dismantle.",
      3: "Direct pushback on a VP in a public setting. Even if you're right, you've created an adversarial dynamic that will haunt you."
    }
  },
  {
    id: "bank4_q8",
    cluster: 2,
    framework: "Summary/Paraphrasing",
    questionText: "You've been in a 45-minute meeting where engineering wants to rebuild the backend (6-month timeline), sales wants three new integrations by Q2, and your CEO wants an AI feature because a competitor announced one. You need to align the room. What's your move?",
    options: [
      "Present your own recommendation for what to prioritize and ask the room to react",
      "Say: \"So what I'm hearing is — engineering needs infrastructure stability that's been deferred too long, sales has client commitments that are at risk, and the exec team is feeling competitive pressure from the AI announcement. Everyone's concern is legitimate, and right now the core tension is that we can't do all three simultaneously. Is that a fair summary?\"",
      "Ask each person to rank their priority on a 1–3 scale so you can stack-rank objectively",
      "Suggest a follow-up meeting with a structured framework for prioritization"
    ],
    correctAnswer: 1,
    explanationCorrect: "A Voss-style summary paraphrases all positions and drives toward \"that's right.\" By naming each person's concern without judgment — engineering's technical debt, sales' client risk, the CEO's competitive fear — you demonstrate that you've heard everyone. The \"is that a fair summary\" close invites correction or agreement. If they say \"that's right,\" you've created a shared foundation to negotiate from.",
    explanationWrong: {
      0: "Presenting your recommendation before demonstrating you've heard everyone means they'll argue positions rather than evaluate trade-offs.",
      2: "Stack-ranking sounds objective but ignores the emotional dynamics. A CEO won't rank their competitive anxiety as \"3.\"",
      3: "Punting to another meeting signals you can't handle the complexity. The room will lose confidence."
    }
  },
  {
    id: "bank4_q9",
    cluster: 2,
    framework: "\"That's Right\" vs \"You're Right\"",
    questionText: "A stakeholder went over your head to your VP after you declined their feature request. Your VP now asks you to \"just find a way to make it work.\" You explain the trade-offs and your VP says: \"You're right, but we need to keep them happy.\" What does \"you're right\" signal here?",
    options: [
      "Your VP agrees with your analysis and will support you if you push back on the stakeholder",
      "Your VP is dismissing your concerns politely — \"you're right\" means \"I hear you, now do what I asked\"",
      "Your VP needs more data to fully commit — send a follow-up analysis",
      "Your VP is testing whether you can find a creative solution that satisfies both constraints"
    ],
    correctAnswer: 1,
    explanationCorrect: "\"You're right\" is what Voss calls a \"counterfeit yes\" — it means \"I want this conversation to end.\" Your VP hasn't internalized your trade-off analysis; they've acknowledged it to move past it. The signal you actually need is \"that's right\" — which means they've adopted your framing as their own. \"You're right, but...\" always means the word after \"but\" is what they actually believe.",
    explanationWrong: {
      0: "Dangerously optimistic. \"You're right, but we need to keep them happy\" is not support — it's a directive with a courtesy wrapper.",
      2: "More data won't solve a political problem. The VP's decision isn't data-driven — it's relationship-driven.",
      3: "Gives the VP too much credit. This isn't a creative challenge — it's a capitulation signal."
    }
  },
  {
    id: "bank4_q10",
    cluster: 2,
    framework: "Three Negotiator Types",
    questionText: "You need to tell three different stakeholders that a major feature will ship two months late. Your Head of Sales responds with rapid-fire questions and visible frustration. Your CTO says \"that's fine, these things happen\" without looking up from her laptop. Your CEO says nothing and stares at you for an uncomfortable pause. How do you adapt?",
    options: [
      "Give all three the same clear, factual explanation with a recovery plan — consistency builds trust",
      "With Sales (Assertive): match his pace and give direct answers before sharing the plan. With the CTO (Analyst): follow up in writing with the technical details she'll want to review later. With the CEO (Accommodator): sit with the silence and let her process before offering the path forward",
      "Start with the CEO since she has the most authority, then cascade the message down",
      "Send all three a detailed written update and offer to discuss live if they have questions"
    ],
    correctAnswer: 1,
    explanationCorrect: "Voss identifies three negotiator types and each needs a different approach. The Head of Sales is an Assertive — he needs to feel heard and get direct answers before he can listen to your plan. The CTO is an Analyst — her \"that's fine\" is surface-level; she'll process the real implications later and want technical detail in writing. The CEO is an Accommodator — her silence is her way of processing, and rushing to fill it with solutions will feel dismissive.",
    explanationWrong: {
      0: "One-size-fits-all approach ignores that each stakeholder processes information and emotion differently. The same message will land three different ways.",
      2: "Hierarchy-first approach treats this as a chain-of-command problem when it's actually a communication calibration problem.",
      3: "Email avoidance. Bad news delivered in writing feels impersonal and removes your ability to read emotional reactions in real time."
    }
  },

  // CLUSTER 3: Execution & Agreement (3 questions)
  {
    id: "bank4_q11",
    cluster: 3,
    framework: "Black Swans",
    questionText: "Engineering, Marketing, and Sales have been fighting over Q3 priorities for weeks. Every meeting ends in the same stalemate. Engineering wants platform reliability. Marketing wants a rebrand launch. Sales wants three client-requested features. You suspect there's something beneath the surface. What's your approach?",
    options: [
      "Bring data showing which initiative has the highest ROI and let the numbers decide",
      "Escalate to your CPO — this level of misalignment needs executive intervention",
      "Have separate 1:1 conversations with each team lead, probing for what they're actually afraid of losing if their priority doesn't win",
      "Propose a compromise that gives each team a partial win"
    ],
    correctAnswer: 2,
    explanationCorrect: "Black Swans are hidden pieces of information that, once uncovered, change the entire negotiation. The stalemate exists because each team has an unexpressed fear or motivation: Engineering might fear a public outage that could cost the CTO's job. Marketing might have a board presentation dependent on the rebrand. Sales might have a renewal at risk. You can't find the Black Swan in a group meeting — people don't share their deepest concerns in front of rivals for resources.",
    explanationWrong: {
      0: "Data-driven prioritization assumes the disagreement is rational. It's not — it's emotional and political. The team whose initiative loses will feel unheard regardless of the numbers.",
      1: "Executive intervention creates a winner and a loser. The losing team's engagement drops for the rest of the quarter.",
      3: "A compromise where everyone gets a partial win usually means nobody gets enough to succeed. Three under-resourced initiatives fail worse than one fully resourced one."
    }
  },
  {
    id: "bank4_q12",
    cluster: 3,
    framework: "Implementation \"How\" Questions",
    questionText: "Your CPO assigns you a project and says: \"I need this feature built exactly as specced — the board is expecting it.\" The spec has obvious usability problems that will hurt adoption. You don't want to be a glorified secretary but you also can't refuse a board-level commitment. What do you do?",
    options: [
      "Build it as specced but document your concerns in writing so you're covered if it fails",
      "Go back to the CPO with alternative specs and argue for a better approach",
      "Ask: \"How do you want me to handle it if early user testing shows adoption problems with the current spec? Should I flag it to you first, or adjust in flight?\"",
      "Build the MVP as specced, then run user tests and present data for iteration"
    ],
    correctAnswer: 2,
    explanationCorrect: "Implementation \"how\" questions accomplish two things simultaneously: they signal that you're committed to executing (not resisting), and they create a pre-agreed escalation path for when the predictable problems emerge. \"How do you want me to handle it if...\" gives the CPO ownership of the contingency plan, which means when you bring adoption data later, you're following their instruction — not challenging their judgment.",
    explanationWrong: {
      0: "CYA documentation is defensive, not strategic. It protects you but doesn't improve the outcome.",
      1: "Arguing against a board-level commitment is career-limiting. The decision is already made — your job is to shape the execution path.",
      3: "Building then testing sounds pragmatic but you've missed the window to set expectations. When you bring bad data later, there's no pre-agreed process for what happens next."
    }
  },
  {
    id: "bank4_q13",
    cluster: 3,
    framework: "Loss Aversion/Bending Reality",
    questionText: "A major release is going to slip by three weeks. You need to tell your VP. She's already publicly committed the date to the board. How do you frame the conversation?",
    options: [
      "\"We're going to miss the deadline by three weeks. Here's the recovery plan.\"",
      "\"We can hit the original date if we cut features X and Y, or we can ship the full scope three weeks late. Shipping on time with the reduced scope protects the board commitment. Which path do you prefer?\"",
      "\"I wanted to give you as much lead time as possible — we're tracking toward a delay. Let me walk you through options.\"",
      "\"The team has been working incredibly hard but the scope was larger than estimated.\""
    ],
    correctAnswer: 1,
    explanationCorrect: "Loss aversion — frame the choice so that one option clearly protects what the VP cares most about (her board commitment). You haven't said \"we're late.\" You've said \"here are two paths, and one of them keeps your credibility intact.\" The VP will almost always choose the path that avoids the loss. By making her choose, you've also made her a co-owner of the decision.",
    explanationWrong: {
      0: "Straightforward honesty without framing. You've delivered the loss without offering the VP a way to protect what she values most.",
      2: "\"Lead time\" framing is considerate but delays the decision. Walking through options vaguely is less effective than presenting a concrete binary choice.",
      3: "Explaining how hard the team worked sounds like an excuse. The VP doesn't care about effort — she cares about outcome and her board commitment."
    }
  }
];

// Bank 5: Questions from nstd_quiz_banks_expanded.md
export const BANK_5: Question[] = [
  // CLUSTER 1: Listening & Empathy (4 questions)
  {
    id: "bank5_q1",
    cluster: 1,
    framework: "Tactical Empathy",
    questionText: "Your CEO saw a competitor demo at a conference and is now insisting the entire roadmap shift toward AI features. Your team spent three months validating the current direction with customers. In your 1:1, you notice the CEO is speaking faster than usual, leaning forward, and interrupting. What's your first move?",
    options: [
      "Wait for a pause and present the customer validation data that supports the current roadmap",
      "Say: \"It seems like that demo created a real sense of urgency — like if we don't move on AI now, we'll fall behind in a way that's hard to recover from\"",
      "Ask: \"What specifically about the demo felt most threatening to our position?\"",
      "Acknowledge the competitive pressure and suggest a task force to evaluate AI opportunities"
    ],
    correctAnswer: 1,
    explanationCorrect: "Name the fear beneath the excitement. The CEO's energy isn't about AI — it's about falling behind. When you label that specific fear (\"hard to recover from\"), the CEO feels understood at the emotional level. That understanding lowers defenses enough for a real conversation about whether the current roadmap already addresses the competitive threat. Without this step, any data you present will feel like resistance.",
    explanationWrong: {
      0: "Presenting data to someone in a state of urgency reads as \"I don't share your concern.\" The CEO needs to feel heard before they can hear you.",
      2: "Good question, wrong sequence. Without labeling the urgency first, this sounds like you're interrogating their judgment.",
      3: "Jumps to solution before demonstrating understanding. A \"task force\" sounds like corporate delay to a CEO who feels competitive urgency."
    }
  },
  {
    id: "bank5_q2",
    cluster: 1,
    framework: "Mirroring",
    questionText: "A senior stakeholder says in a cross-functional meeting: \"We did all this work on the incentive program and then management kept expanding it to every division and the thing never launched.\" You sense this history is shaping her resistance to your current proposal. What do you say?",
    options: [
      "\"Never launched?\"",
      "\"That sounds like a really frustrating experience. How can we make sure this project is different?\"",
      "\"Can you tell me more about what went wrong with that program?\"",
      "\"I want to make sure we avoid those same pitfalls. Let me share how this project is scoped differently.\""
    ],
    correctAnswer: 0,
    explanationCorrect: "Mirror the gut-punch phrase. \"Never launched\" carries the weight of wasted effort, broken trust, and skepticism about whether any initiative will actually ship. She'll elaborate on the specific failures — the scope expansion, the leadership changes, the team demoralization — and you'll understand exactly what emotional barrier you need to address before she'll support your project.",
    explanationWrong: {
      1: "Labels the emotion but then immediately pivots to solving it. She hasn't finished processing the old wound yet.",
      2: "An open question that sounds like an interview. Mirroring is more natural and elicits deeper, less guarded responses.",
      3: "Jumps to \"this time is different\" before understanding why last time failed. She'll hear this as naive optimism."
    }
  },
  {
    id: "bank5_q3",
    cluster: 1,
    framework: "Labeling",
    questionText: "A fellow PM confides in you: \"I just want a job where I have the authority to help customers solve their problems. That's all.\" Her voice cracks slightly. She's been in product for eight years. What do you say?",
    options: [
      "\"Have you thought about looking at companies with stronger product cultures?\"",
      "\"It sounds like after eight years, the gap between what you were promised product management would be and what it actually is has become too painful to ignore\"",
      "\"I totally get that. A lot of PMs feel the same way.\"",
      "\"What specifically happened that's making you feel this way?\""
    ],
    correctAnswer: 1,
    explanationCorrect: "The deep label. She's not just frustrated about a bad quarter — she's experiencing an existential gap between the profession she chose and the reality she lives. Naming that gap (\"what you were promised vs. what it actually is\") validates the scope of what she's feeling. Labels like this don't solve problems — they make people feel deeply understood, which is what she needs before she can think clearly about next steps.",
    explanationWrong: {
      0: "Jumps to solution. She's not asking for career advice — she's expressing pain.",
      2: "\"A lot of PMs feel the same way\" minimizes her individual experience by making it generic. Commiseration is not empathy.",
      3: "Asks for specifics before acknowledging the emotional weight. She may not even be able to articulate specifics right now — the feeling is bigger than any single incident."
    }
  },
  {
    id: "bank5_q4",
    cluster: 1,
    framework: "Tactical Empathy",
    questionText: "You notice your product designer has been uncharacteristically quiet in the last three sprint retrospectives. She used to be the most vocal advocate for user experience. When you ask if everything is okay, she says \"I'm fine, just busy.\" What do you do?",
    options: [
      "Take her at her word — she said she's fine and pushing further could feel intrusive",
      "Say: \"It seems like something has shifted in how you're feeling about the work — like maybe the things you used to fight for aren't feeling worth the fight anymore\"",
      "Send her a Slack message later asking if she wants to grab coffee and talk",
      "Bring up specific examples of when her advocacy made a difference, to remind her of her impact"
    ],
    correctAnswer: 1,
    explanationCorrect: "\"I'm fine\" is almost always a door-closing statement. Tactical empathy pushes gently past it by naming what you've observed — the shift from vocal advocacy to silence. The phrase \"not worth the fight\" names a specific form of burnout that designers experience when they feel user experience keeps losing to business pressure. If you're right, this opens a real conversation. If wrong, she'll correct you with the actual issue.",
    explanationWrong: {
      0: "Accepts the counterfeit \"I'm fine.\" You'll lose a key team member — either to disengagement or departure — without ever understanding why.",
      2: "Coffee is a kind gesture but a deferral. The moment to address the observation is now, when you've named what you see.",
      3: "Reminding someone of past impact when they're disengaged can feel tone-deaf — like telling a burned-out person to remember why they should keep burning."
    }
  },

  // CLUSTER 2: Strategic Influence (6 questions)
  {
    id: "bank5_q5",
    cluster: 2,
    framework: "Accusation Audit",
    questionText: "You told a stakeholder team that you can't commit to their requests this quarter. You've heard through the grapevine that they're planning to present those same requests directly to your VP and claim you already agreed. You have a meeting with the stakeholder lead tomorrow. How do you open?",
    options: [
      "Confront them directly: \"I heard you're planning to go over my head. That's not how we work together.\"",
      "\"You're probably thinking I'm being obstructionist, that I don't care about your team's goals, and that going to leadership is the only way to get things done. I understand why it might feel that way.\"",
      "\"I want to make sure we're aligned before the VP review. Can you walk me through your team's priorities?\"",
      "Send an email to your VP preemptively explaining your rationale for declining the requests"
    ],
    correctAnswer: 1,
    explanationCorrect: "The accusation audit names every negative perception they might have — that you're blocking them, that you don't care, that leadership is their only recourse. By saying it first, you've taken the sting out of it. They can't use those arguments against you because you've already acknowledged them. This creates a reset moment where the stakeholder can either escalate (which now feels petty because you've addressed it) or engage honestly.",
    explanationWrong: {
      0: "Direct confrontation with \"I heard you're planning\" puts them on the defensive and confirms that going over your head was the right instinct (since you're clearly combative).",
      2: "Pretending you don't know about the end-run is a form of counterfeit agreement. They'll smile through the alignment meeting and still go to the VP.",
      3: "Preemptive email to the VP turns this into a he-said-she-said political fight. You win the battle but lose the working relationship."
    }
  },
  {
    id: "bank5_q6",
    cluster: 2,
    framework: "Calibrated Questions",
    questionText: "You've discovered that a feature your team shipped last month has a critical usability issue that's causing 40% drop-off at a key step. Your VP shipped this feature over your objections. You need to deliver the news without it becoming a political minefield. What do you say?",
    options: [
      "\"The data is showing a 40% drop-off at step three. How would you like me to approach fixing this — quick iteration on the current design, or a broader rethink of the flow?\"",
      "\"I flagged concerns about this flow before launch, and the data is confirming those concerns. Here's what I recommend.\"",
      "\"We've found a usability issue that's impacting conversion. I have three options to present for your feedback.\"",
      "\"The feature has a significant issue. We need to prioritize a fix immediately.\""
    ],
    correctAnswer: 0,
    explanationCorrect: "The calibrated \"how\" question shares the objective data (40% drop-off — not opinion) and then gives your VP ownership of the solution path. Critically, neither option you're offering requires them to admit the original decision was wrong. They're choosing between two forward-looking approaches, which preserves their dignity while ensuring the problem gets fixed.",
    explanationWrong: {
      1: "\"I flagged concerns before launch\" is technically true but politically toxic. You've just told your VP \"I told you so\" with data. The fix will happen but your relationship won't survive it.",
      2: "Too vague. \"Three options\" without specifics makes you sound like you're managing up rather than solving a problem.",
      3: "Declaring urgency without offering the VP a role in the decision feels like an ambush. VPs don't want to be told — they want to decide."
    }
  },
  {
    id: "bank5_q7",
    cluster: 2,
    framework: "No-Oriented Questions",
    questionText: "Your Head of Customer Success sends you a Slack message: \"A top-tier client is threatening to churn unless we add custom reporting by next month. Can you make this happen?\" You know this would blow up the current sprint. What do you respond?",
    options: [
      "\"Would it be unreasonable for us to explore what we could ship in two weeks that gives them enough to stay, without derailing the full sprint?\"",
      "\"I understand the urgency, but I need to protect the current sprint commitments.\"",
      "\"Let me see what we can do — I'll check with engineering and get back to you.\"",
      "\"Can you tell me more about what the client actually needs? Custom reporting is pretty broad.\""
    ],
    correctAnswer: 0,
    explanationCorrect: "\"Would it be unreasonable\" invites a \"no\" — \"No, that's not unreasonable\" — which means they've just agreed to a scoped-down alternative without feeling like you said no to the client. You've reframed the question from \"can you build everything by next month\" to \"can we find something that works for everyone.\" The two-week timeline also anchors the conversation to reality.",
    explanationWrong: {
      1: "\"Protect the sprint\" frames the conversation as your engineering plan vs. their client relationship. You've created an adversary.",
      2: "Kicks the can and signals you might say yes, which sets expectations you probably can't meet.",
      3: "Good discovery instinct, but it delays the answer the CS lead needs right now. They have a client threatening to churn — they need a committed direction, not a requirements gathering session."
    }
  },
  {
    id: "bank5_q8",
    cluster: 2,
    framework: "Summary/Paraphrasing",
    questionText: "Your CPO just spent 20 minutes in a product review explaining why the team should shift focus to a completely new market segment. Three of your direct reports look concerned. You need to respond in a way that acknowledges the CPO without steamrolling your team. What do you say?",
    options: [
      "\"I think there are some good ideas here. Let me take this back to the team and come back with a feasibility assessment.\"",
      "\"So if I'm understanding correctly — you're seeing a market opportunity in this new segment that could be significantly larger than our current focus, and the concern is that if we don't move now, a competitor will capture it first. You also want to make sure the team has the bandwidth to execute a pivot without burning out. Did I get that right?\"",
      "\"That's a bold vision. Can we discuss the trade-offs with the current roadmap?\"",
      "\"I appreciate the direction. Let me align the team on this new priority.\""
    ],
    correctAnswer: 1,
    explanationCorrect: "A comprehensive summary that drives toward \"that's right.\" You've included both the CPO's strategic argument (market opportunity, competitive urgency) AND the unstated constraint they should care about (team bandwidth and burnout). By including the team concern inside the summary, you've legitimized it as part of the CPO's own framing. If they say \"that's right,\" they've just acknowledged team capacity as a factor in their own plan.",
    explanationWrong: {
      0: "\"Take it back to the team\" sounds like you're going to go build a case against the idea. The CPO will worry you're stalling.",
      2: "\"Bold vision\" is faint praise. \"Can we discuss trade-offs\" immediately signals resistance.",
      3: "Counterfeit compliance. You said yes without your team's input, and now you're the PM who just accepted a HiPPO directive without negotiation — the exact trap the role falls into."
    }
  },
  {
    id: "bank5_q9",
    cluster: 2,
    framework: "\"That's Right\" vs \"You're Right\"",
    questionText: "You've had a long conversation with your Head of Sales about why the team can't build a custom feature for one client. After 30 minutes, he says: \"That's right — we can't keep making promises we can't keep. But this client is different.\" What just happened?",
    options: [
      "He had a genuine breakthrough in the first sentence but the second sentence shows he's already backsliding — you need to hold the line",
      "The \"that's right\" was real — he fully internalized your point. \"But this client is different\" is a separate, legitimate concern you should explore",
      "He used \"that's right\" as a transition phrase, not a genuine agreement — the real message is \"this client is different\" and he still wants the feature",
      "He's testing whether you'll bend for edge cases after establishing the principle"
    ],
    correctAnswer: 1,
    explanationCorrect: "This is subtle. \"That's right\" followed by a new concern is actually the best possible outcome. He's genuinely internalized that making blanket promises is unsustainable (that's the real \"that's right\" breakthrough). Now he's raising a specific case that might warrant different treatment. This is not backsliding — it's a collaborator who's accepted your principle and is asking you to problem-solve a specific exception with him.",
    explanationWrong: {
      0: "Treats the second sentence as a threat rather than a collaboration. If you \"hold the line\" now, you'll undo the trust you just built.",
      2: "Misreads a genuine \"that's right\" as a tactical move. Not everyone is manipulating — sometimes people actually agree and then have a follow-up concern.",
      3: "Assumes bad faith. He's not testing you — he's integrating your principle while flagging a real business risk."
    }
  },
  {
    id: "bank5_q10",
    cluster: 2,
    framework: "Three Negotiator Types",
    questionText: "You need buy-in from three team leads to shift a shared resource to your project for two weeks. The engineering lead says: \"Send me the technical requirements and I'll evaluate by Friday.\" The marketing lead says: \"Whatever works for the team, I'm flexible.\" The data lead says: \"Two weeks? That's my entire analytics sprint. This better be worth it.\" How do you handle each?",
    options: [
      "Send the same proposal to all three with a clear business case and deadline for response",
      "For the engineering lead (Analyst): send detailed requirements now and follow up Friday. For the marketing lead (Accommodator): check in privately — her \"flexible\" may hide concerns she won't voice publicly. For the data lead (Assertive): acknowledge the cost directly and show exactly what his team gets in return",
      "Start with the data lead since he's the most resistant, then use his buy-in to convince the others",
      "Get all three in a room together so they can hear each other's concerns and negotiate collectively"
    ],
    correctAnswer: 1,
    explanationCorrect: "Each lead is a different negotiator type requiring a different approach. The engineering lead (Analyst) wants data and time to process — don't rush him. The marketing lead (Accommodator) says \"whatever works\" but may harbor unvoiced concerns — Accommodators avoid conflict and then become resentful later if their needs aren't surfaced. The data lead (Assertive) needs to feel his sacrifice is acknowledged and reciprocated — Assertives want to know \"what's in it for me.\"",
    explanationWrong: {
      0: "One-size-fits-all ignores that each person processes decisions differently. The Analyst needs detail, the Accommodator needs safety, the Assertive needs reciprocity.",
      2: "Using one person's buy-in to pressure others is manipulative and will be perceived as such.",
      3: "Group settings favor Assertives and silence Accommodators. The marketing lead will agree in the room and resist later."
    }
  },

  // CLUSTER 3: Execution & Agreement (3 questions)
  {
    id: "bank5_q11",
    cluster: 3,
    framework: "Loss Aversion/Bending Reality",
    questionText: "Your leadership team keeps assigning you features to build without involving you in the strategic conversation. You've been treated as a project manager for six months. You want to propose a shift to a more strategic PM model. How do you frame the pitch?",
    options: [
      "\"I'd like to take on a more strategic role. Here are the areas where I think I can contribute to product direction.\"",
      "\"Right now, I'm focused on execution, which means the product decisions are being made without customer data or market analysis in the loop. The risk is that we ship features that don't move metrics, and we won't know why until it's too late. I'd like to propose a model where I bring customer insight into the decision process before specs are written.\"",
      "\"Other companies give their PMs more strategic ownership. I think we should adopt a similar approach.\"",
      "\"I've been thinking about how we can improve our product process. Can I present some ideas at the next leadership meeting?\""
    ],
    correctAnswer: 1,
    explanationCorrect: "Loss aversion framing — you're not asking for more responsibility (gain), you're showing what leadership is at risk of losing (shipping features that fail without knowing why). The frame shifts from \"I want more\" to \"you're exposed to a risk you can't currently see.\" Then the proposed solution (customer insight before specs) is positioned as protection, not a power grab.",
    explanationWrong: {
      0: "Frames it as a personal desire (\"I'd like to...\"), which is easy to dismiss. Leadership doesn't care what you want — they care what they might lose.",
      2: "Comparing to other companies is an argument from authority that can be dismissed with \"we're not other companies.\"",
      3: "Asking to present ideas is a soft, deferential approach that signals low confidence. It also gives leadership the option to say \"not right now.\""
    }
  },
  {
    id: "bank5_q12",
    cluster: 3,
    framework: "Black Swans",
    questionText: "Your engineering team keeps sandbagging estimates — every feature takes twice as long as quoted. You've tried velocity tracking, reference class forecasting, and planning poker. Nothing works. Estimates keep ballooning. What's the Black Swan approach?",
    options: [
      "Implement stricter estimation accountability — track estimate-to-actual ratios and discuss discrepancies in retro",
      "Have private, exploratory 1:1s with individual engineers to understand what they're actually protecting themselves from — is it blame for missed deadlines, fear of being given more work if they finish early, or distrust of how estimates are used by leadership?",
      "Bring in an engineering manager to recalibrate the estimation process",
      "Accept that estimates are inherently unreliable and move to a continuous delivery model instead"
    ],
    correctAnswer: 1,
    explanationCorrect: "Black Swans are hidden motivations that, once uncovered, transform the negotiation. Sandbagging isn't a skills problem or a process problem — it's a trust problem. Engineers pad estimates for specific reasons they won't share publicly: past experiences of being punished for missed deadlines, fear that accurate estimates will just mean more work, or distrust of how PMs use estimates with stakeholders. You'll only find the Black Swan in private conversation where psychological safety exists.",
    explanationWrong: {
      0: "Accountability for estimates creates exactly the dynamic that causes sandbagging — \"if I give an accurate estimate and miss it, I get punished.\" More tracking means more padding.",
      2: "An engineering manager adds authority but not trust. The root cause isn't technical — it's emotional.",
      3: "Gives up on the problem rather than solving it. Continuous delivery is a good practice but won't fix the underlying trust deficit."
    }
  },
  {
    id: "bank5_q13",
    cluster: 3,
    framework: "Implementation \"How\" Questions",
    questionText: "Your CEO wants to launch a new AI feature in six weeks. Your technical assessment says eight weeks minimum. The CEO won't budge on the date. What do you say?",
    options: [
      "\"We'll do our best to hit six weeks, but I want to set expectations that it might slip.\"",
      "\"How would you like me to handle the quality trade-offs if we compress the timeline? Should I reduce the feature set, skip QA cycles, or bring in contractors? And how should I communicate the trade-offs to the board if they come up?\"",
      "\"Six weeks isn't feasible. Here's why, with a detailed technical breakdown.\"",
      "\"What if we launch a limited beta in six weeks and full release in eight?\""
    ],
    correctAnswer: 1,
    explanationCorrect: "Implementation \"how\" questions make the CEO confront the real cost of their demand. You're not saying \"no\" — you're saying \"yes, and here's what that requires you to decide.\" Every option you've listed has an obvious downside the CEO will recognize. The board communication question is the masterstroke — it makes the CEO imagine explaining the trade-offs publicly, which often recalibrates their timeline without you ever pushing back.",
    explanationWrong: {
      0: "\"We'll do our best\" is a soft commitment that sets you up to fail and accept the blame later. You've absorbed the risk without negotiating.",
      2: "Direct refusal with a technical breakdown. The CEO doesn't care about technical details — they care about a market window. You're arguing on the wrong axis.",
      3: "A reasonable compromise, but you're the one proposing the creative solution. Implementation \"how\" questions are more powerful because they make the CEO solve their own problem."
    }
  }
];

// Bank 6: Questions from nstd_quiz_banks_expanded.md
export const BANK_6: Question[] = [
  // CLUSTER 1: Listening & Empathy (4 questions)
  {
    id: "bank6_q1",
    cluster: 1,
    framework: "Tactical Empathy",
    questionText: "You walk into a leadership meeting to discover that a stakeholder team has presented your declined feature requests to the VP — and claimed you had already committed to building them. You're blindsided. The VP turns to you and says: \"I thought you were already working on this?\" What do you do?",
    options: [
      "Correct the record immediately: \"That's not accurate. I specifically declined these requests and communicated that to the stakeholder team.\"",
      "Say: \"It seems like there's been a miscommunication about what was committed. I can understand how frustrating it must be to hear conflicting information — let me clarify what was actually discussed and where we go from here.\"",
      "Ask the stakeholder lead to clarify what conversation they're referencing",
      "Tell the VP you'll follow up after the meeting with the full context"
    ],
    correctAnswer: 1,
    explanationCorrect: "In a high-stakes moment where you've been publicly misrepresented, tactical empathy is counterintuitive — but essential. By labeling the confusion (\"miscommunication,\" not \"lie\") and acknowledging the VP's frustration, you've lowered the emotional temperature in the room. \"Let me clarify\" signals competence without aggression. You correct the record without making anyone the villain, which preserves your ability to work with both the VP and the stakeholder team afterward.",
    explanationWrong: {
      0: "Factually correct but politically catastrophic. Directly contradicting a stakeholder in front of leadership turns a misunderstanding into a war. Even if you win this battle, you've created an enemy.",
      2: "Putting the stakeholder on the spot publicly escalates the conflict. They'll double down to save face.",
      3: "Deferring leaves the false impression standing. The VP will operate on wrong information until you correct it — and by then, decisions may already be made."
    }
  },
  {
    id: "bank6_q2",
    cluster: 1,
    framework: "Mirroring",
    questionText: "In a product review, your CEO says: \"I just don't understand why we aren't moving faster. Every company I talk to is shipping AI features monthly.\" You want to understand the real pressure before responding. What do you say?",
    options: [
      "\"Shipping AI features monthly?\"",
      "\"I understand the competitive pressure. Let me show you our AI roadmap timeline.\"",
      "\"Which companies specifically? I'd like to understand the comparison.\"",
      "\"It sounds like you're feeling behind compared to what you're seeing in the market.\""
    ],
    correctAnswer: 0,
    explanationCorrect: "Mirror the comparison that's driving the urgency. \"Shipping AI features monthly\" is the benchmark the CEO is measuring against — and it may or may not be accurate. By mirroring it, the CEO will elaborate: which companies, what she actually saw, what specific features, whether it was real shipping or just announcements. You'll discover whether this is informed competitive analysis or conference-fueled anxiety — and your response will be completely different depending on which it is.",
    explanationWrong: {
      1: "Jumping to the roadmap before understanding the CEO's mental model means you're answering a question she didn't ask.",
      2: "\"Which companies specifically\" sounds like you're challenging her claim. The CEO will feel interrogated.",
      3: "A label, not a mirror. Good technique, wrong moment — you want her to keep talking, not confirm a diagnosis."
    }
  },
  {
    id: "bank6_q3",
    cluster: 1,
    framework: "Labeling",
    questionText: "Your Slack is relentless. Twenty scope requests a week from different stakeholders, each framed as \"quick\" or \"small.\" You've been absorbing them all and your team is drowning. You finally pull aside the most frequent requestor and she says: \"I know I send a lot of requests, but they're all important for my team's goals.\" What do you say?",
    options: [
      "\"I get it. Let's set up a weekly intake meeting so I can evaluate all requests together.\"",
      "\"It seems like you feel caught between your team's needs and what feels like a bottleneck on my side — and that's a frustrating position to be in\"",
      "\"I understand they're important to you, but we need to talk about the cumulative impact on my team.\"",
      "\"Can you help me prioritize which of these requests are truly urgent vs. nice-to-have?\""
    ],
    correctAnswer: 1,
    explanationCorrect: "Label her position, not just her behavior. She's not a bad actor — she's stuck between her team's goals and your team's capacity. Naming that tension acknowledges her legitimacy (\"your needs are real\") while surfacing the systemic problem (\"there's a bottleneck\") without making her the villain. This creates a collaborative frame for the process conversation you need to have next.",
    explanationWrong: {
      0: "Process solution before emotional acknowledgment. A weekly intake meeting is probably the right answer, but she won't engage with it if she feels unheard first.",
      2: "\"But\" negates the acknowledgment. \"I understand\" followed by \"but we need to talk\" translates to \"I don't actually understand.\"",
      3: "Asking her to prioritize puts the burden back on her without addressing the relational dynamic. She'll prioritize everything as urgent because that's her incentive."
    }
  },
  {
    id: "bank6_q4",
    cluster: 1,
    framework: "Tactical Empathy",
    questionText: "Your VP of Product overrides your team's data-driven recommendation in a planning meeting, saying: \"I've been in this industry for 20 years. Trust me on this one.\" Your team looks deflated. After the meeting, two engineers come to you privately and say: \"Why do we even bother running experiments if the VP ignores them?\" What do you say to the engineers?",
    options: [
      "\"I know it's frustrating. I'm going to push back on this in my next 1:1 with the VP.\"",
      "\"It seems like this isn't just about this one decision — it feels like the entire process of running experiments and using data is being called into question, and that makes the work feel pointless\"",
      "\"The VP has context we don't always see. Let's execute on this direction and measure the results.\"",
      "\"I hear you. Let me see if I can present the data differently to make a stronger case.\""
    ],
    correctAnswer: 1,
    explanationCorrect: "Name the existential frustration, not just the situational one. The engineers aren't asking you to fix the VP — they're telling you that the pattern of data being overridden is eroding their motivation to do rigorous work. Naming that deeper concern (\"makes the work feel pointless\") shows you understand the stakes. This creates the trust needed for them to keep doing quality work while you address the systemic issue.",
    explanationWrong: {
      0: "Promising to push back sets an expectation you may not be able to deliver on. If the VP doesn't change, you've lost credibility with your team.",
      2: "\"The VP has context we don't see\" is a corporate platitude that translates to \"just do what you're told.\" The engineers will disengage further.",
      3: "\"Present the data differently\" implies the data presentation was the problem, not the VP's willingness to listen. The engineers know the difference."
    }
  },

  // CLUSTER 2: Strategic Influence (6 questions)
  {
    id: "bank6_q5",
    cluster: 2,
    framework: "Accusation Audit",
    questionText: "You need to have a conversation with the Head of Sales about a pattern: her team has made client commitments three times in the past quarter without consulting product. Each time, your team scrambled to deliver, barely hit the deadline, and quality suffered. You're about to have the conversation. How do you open?",
    options: [
      "\"We need to talk about the pattern of Sales making client commitments without checking with Product first.\"",
      "\"You're probably going to think I'm trying to slow Sales down, that I don't understand client pressure, and that I'm putting process over revenue. I want to talk about how we can actually help you close deals faster.\"",
      "\"I respect what your team has accomplished this quarter. I have some ideas for how we can work together more effectively.\"",
      "\"I've been tracking the last three instances where client commitments were made without product input, and I'd like to discuss the impact.\""
    ],
    correctAnswer: 1,
    explanationCorrect: "The accusation audit names every negative perception the Head of Sales might have — that you're a bottleneck, that you don't get sales pressure, that you're a process bureaucrat. By saying these worst-case labels out loud, you've neutralized them. She can't use those objections because you've already addressed them. The pivot to \"help you close deals faster\" reframes the conversation from conflict to collaboration.",
    explanationWrong: {
      0: "\"We need to talk about\" is the corporate equivalent of \"we need to talk\" in a relationship — it immediately puts the other person on the defensive.",
      2: "Generic praise followed by \"ideas for working together\" sounds like a feedback sandwich. Experienced leaders see through this immediately.",
      3: "\"Tracking instances\" sounds like building a case for prosecution. She'll feel ambushed and become adversarial."
    }
  },
  {
    id: "bank6_q6",
    cluster: 2,
    framework: "Calibrated Questions",
    questionText: "Your product team is burned out. Three consecutive quarters of crunch, leadership keeps adding \"urgent\" priorities mid-sprint, and two team members have quietly started interviewing elsewhere. You need to raise this with your VP without sounding like you're complaining. What do you say?",
    options: [
      "\"How do you want me to handle the situation if we lose two more team members this quarter? And how should I communicate to leadership that the current pace isn't sustainable without it sounding like we're unable to keep up?\"",
      "\"The team is burned out and we're at risk of losing people. We need to reduce scope or extend timelines.\"",
      "\"I'd like to share some team health data and propose some adjustments to our quarterly planning process.\"",
      "\"I'm concerned about team morale. Can we discuss how to better protect sprint commitments?\""
    ],
    correctAnswer: 0,
    explanationCorrect: "Calibrated \"how\" questions make the VP confront the consequences without you delivering the bad news. \"How do you want me to handle losing two more people\" makes the attrition risk real and immediate — the VP has to imagine the scenario. The second question (\"how should I communicate\") is the masterstroke — it makes the VP realize that the sustainability problem will eventually become visible to leadership anyway, and they'd rather be ahead of it than behind it.",
    explanationWrong: {
      1: "Direct, honest, but politically clumsy. \"We need to reduce scope or extend timelines\" sounds like an ultimatum from a PM who can't handle the pressure.",
      2: "\"Team health data\" is too abstract and too process-oriented. Your VP needs to feel the urgency, not review a dashboard.",
      3: "\"Protect sprint commitments\" frames the problem as a planning issue when it's actually a people issue. The real risk isn't sprint integrity — it's team survival."
    }
  },
  {
    id: "bank6_q7",
    cluster: 2,
    framework: "No-Oriented Questions",
    questionText: "Your CEO comes back from a board meeting and says: \"The board wants us to enter the enterprise market by Q3. Reprioritize everything.\" You believe this is a strategic mistake — your product-market fit is in SMB and enterprise requires infrastructure your team doesn't have. What do you say?",
    options: [
      "\"Would you be against us spending two weeks validating whether our current architecture can support enterprise before we commit the full roadmap?\"",
      "\"I have concerns about entering enterprise without the right infrastructure. Can I present an analysis?\"",
      "\"Enterprise is a completely different go-to-market. We'd need to hire, rebuild the platform, and delay the current roadmap by at least two quarters.\"",
      "\"I want to make sure we set the board up for success. What specifically about enterprise is most important to them?\""
    ],
    correctAnswer: 0,
    explanationCorrect: "\"Would you be against\" invites a \"no\" — \"No, I wouldn't be against that\" — which means the CEO has just agreed to a validation phase without feeling like you rejected the board's directive. Two weeks is a small, non-threatening ask. If the validation reveals what you suspect (that enterprise requires significant investment), the data makes the case for you. You've bought time and credibility without confrontation.",
    explanationWrong: {
      1: "\"I have concerns\" positions you as the obstacle. Asking to \"present an analysis\" sounds like you've already built a case against the CEO's directive.",
      2: "Listing everything that's wrong with the plan is the fastest way to be labeled as not strategic. Even if every point is correct, the CEO will hear \"I don't want to do this.\"",
      3: "Good discovery question but it skips the critical step — getting agreement to validate before committing. Without that, the discovery just feeds into a plan you don't believe in."
    }
  },
  {
    id: "bank6_q8",
    cluster: 2,
    framework: "Summary/Paraphrasing",
    questionText: "Your CPO and VP of Engineering have been going back and forth for 20 minutes about whether to invest in platform reliability or ship new features. The CPO wants features for a board demo. The VP of Engineering says the platform is \"a ticking time bomb.\" The conversation is going in circles. How do you break the deadlock?",
    options: [
      "\"So what I'm hearing is two legitimate concerns. The platform has accumulated enough technical debt that the engineering team believes we're at real risk of a major incident — and the timing couldn't be worse because we need compelling new features for the board in eight weeks. The tension isn't features vs. reliability — it's that both feel urgent and we need a sequence that addresses the highest risk first. Does that capture it?\"",
      "\"Can we agree on a 70/30 split — 70% features, 30% reliability — for this quarter?\"",
      "\"Let me build a proposal that addresses both priorities and bring it back next week.\"",
      "\"I think the real question is: what happens to the board demo if we have an outage before it?\""
    ],
    correctAnswer: 0,
    explanationCorrect: "A comprehensive summary that drives toward \"that's right\" from both parties. You've validated the CPO's urgency (board demo) and the VP's fear (major incident) while reframing the conversation from a zero-sum battle to a sequencing problem. \"Does that capture it?\" invites either agreement or correction — both of which move the conversation forward. The reframe is the key move: \"it's not features vs. reliability, it's sequencing.\"",
    explanationWrong: {
      1: "An arbitrary split that satisfies nobody. The CPO won't accept 30% less feature work, and the VP won't accept a platform that's only 30% more stable.",
      2: "Punts the decision. Another week means another week of circular arguments and mounting frustration.",
      3: "A clever rhetorical question but it's a power move disguised as a question. It implicitly argues for reliability over features, which will alienate the CPO."
    }
  },
  {
    id: "bank6_q9",
    cluster: 2,
    framework: "\"That's Right\" vs \"You're Right\"",
    questionText: "You've been making the case to your VP that the team needs to slow down and fix technical debt before shipping the next major feature. After a long discussion, your VP says: \"That's right — we can't keep building on a shaky foundation. Let's carve out two sprints for stabilization.\" What should you do next?",
    options: [
      "Immediately send a summary email locking in the commitment before the VP changes their mind",
      "Express gratitude: \"Thank you for hearing the team's concerns. This will make a real difference.\"",
      "Transition to implementation: \"Great — how would you like me to communicate the prioritization shift to the stakeholders who are waiting on the feature?\"",
      "Push for more: \"Two sprints is a start, but ideally we'd want a full quarter. Can we revisit after the two sprints?\""
    ],
    correctAnswer: 2,
    explanationCorrect: "When you hear \"that's right,\" the breakthrough has happened — your VP has internalized the argument as their own. The next step is implementation, not celebration. The \"how\" question about stakeholder communication does two things: it makes the VP co-own the communication (so it becomes their decision publicly, not just privately), and it surfaces the real-world consequences they'll need to manage. This solidifies the commitment through action.",
    explanationWrong: {
      0: "Sending a CYA email immediately signals distrust. If you just got a \"that's right\" moment, locking it in writing feels transactional and undermines the trust you just built.",
      1: "Gratitude is nice but it subtly repositions you as the subordinate who received a favor rather than a partner who made a persuasive case.",
      3: "Pushing for more immediately after a win is greedy. You've damaged the \"that's right\" by making the VP feel like their agreement wasn't enough. They'll regret agreeing at all."
    }
  },
  {
    id: "bank6_q10",
    cluster: 2,
    framework: "Three Negotiator Types",
    questionText: "You're a PM with no direct authority, trying to get three team leads to adopt a new sprint process. The engineering lead says nothing in the meeting, takes extensive notes, and asks for the written proposal. The marketing lead nods enthusiastically and says: \"Love it, let's do it!\" The operations lead pushes back immediately: \"This won't work for my team. We've tried similar things before.\" How do you proceed?",
    options: [
      "Focus on convincing the operations lead since she's the strongest objector — once she's on board, the others will follow",
      "For the engineering lead (Analyst): send the written proposal with data and give her a week to process. For the marketing lead (Accommodator): follow up privately to surface any hidden concerns behind the enthusiasm. For the operations lead (Assertive): engage directly with her objection and show how the new process addresses her specific team's pain points",
      "Implement the process with engineering and marketing first, then use their success to bring operations on board later",
      "Schedule individual follow-ups with each lead to address their specific concerns"
    ],
    correctAnswer: 1,
    explanationCorrect: "The engineering lead (Analyst) needs time and data — her silence isn't resistance, it's processing. The marketing lead (Accommodator) is the most dangerous \"yes\" — her enthusiastic agreement may not hold up when implementation creates friction. Accommodators avoid conflict in meetings and resurface concerns later. The operations lead (Assertive) respects direct engagement — dismissing her objection or routing around it will make her a permanent opponent.",
    explanationWrong: {
      0: "Focusing on the loudest objector neglects the Accommodator's hidden concerns (which will sabotage implementation) and the Analyst's need for time (which will produce a more thoughtful adoption).",
      2: "Implementing without operations creates a two-tier system. The operations lead will feel excluded and actively undermine the process.",
      3: "Individual follow-ups are the right instinct but without type-calibrated approaches, you'll use the same strategy three times and it'll only work for one of them."
    }
  },

  // CLUSTER 3: Execution & Agreement (3 questions)
  {
    id: "bank6_q11",
    cluster: 3,
    framework: "Black Swans",
    questionText: "Engineering and product have been fighting about technical debt for three quarters. Engineering says the codebase is \"held together with duct tape.\" Product leadership says \"users don't care about clean code, ship features.\" You've tried multiple times to broker a compromise and failed. What's the Black Swan approach?",
    options: [
      "Present a cost analysis showing how much technical debt is actually costing in bug fixes, incident response, and engineer hours",
      "Have a private conversation with the engineering lead and ask: \"If we fixed the technical debt tomorrow, what would actually change for your team? What's the thing you're really worried about?\"",
      "Propose a \"tech debt sprint\" as a compromise — one sprint of reliability work for every three feature sprints",
      "Escalate to the CTO and CPO to force a decision"
    ],
    correctAnswer: 1,
    explanationCorrect: "The Black Swan hides beneath the stated position. \"Technical debt\" might not actually be about code quality — it might be about engineer retention (\"my best people are leaving because the codebase is embarrassing\"), or about on-call burden (\"three engineers spent their weekend on incidents last month\"), or about professional pride (\"we used to build things we were proud of\"). Until you uncover the Black Swan, you're negotiating on the surface while the real issue drives the stalemate.",
    explanationWrong: {
      0: "Cost analysis assumes the disagreement is rational. It's not — it's emotional and identity-based. Engineers feel their professional craft is being disrespected.",
      2: "A compromise that neither side chose won't have genuine buy-in. Engineering will feel patronized by one sprint, and product will resent losing the velocity.",
      3: "Executive intervention creates a winner and a loser. The losing side's engagement drops and the underlying resentment persists."
    }
  },
  {
    id: "bank6_q12",
    cluster: 3,
    framework: "Implementation \"How\" Questions",
    questionText: "Your leadership team wants a \"competitive analysis dashboard\" — a feature that sounds impressive but has no clear user or business case. The request came directly from the board. You know from experience that vague board-driven features end up consuming months of engineering time and rarely get used. You can't say no. What do you do?",
    options: [
      "Build a minimal version, ship it, and let the usage data make the case for deprioritizing it",
      "Ask: \"How should we define success for this dashboard? And how do you want me to proceed if our first user interviews reveal that the target users want something different from what the board described?\"",
      "Push back: \"Can we validate the use case before committing engineering resources?\"",
      "Accept the assignment and build it as specced — sometimes you have to execute on political priorities"
    ],
    correctAnswer: 1,
    explanationCorrect: "Implementation \"how\" questions create pre-agreed decision points without saying no to the board. \"How should we define success\" forces leadership to articulate what the dashboard actually needs to accomplish — which often reveals that the board wants an outcome (competitive awareness), not a specific artifact (a dashboard). \"How should I proceed if interviews reveal something different\" builds a sanctioned off-ramp: if users need something else, you already have permission to adapt.",
    explanationWrong: {
      0: "Building a minimal version still consumes engineering time and creates maintenance burden. You've also now shipped something nobody uses with your name on it.",
      2: "\"Can we validate\" sounds like resistance to a board directive. You're asking for permission when you should be shaping execution.",
      3: "Pure order-taker compliance. This is exactly the pattern that hollows out the PM role — building what you're told without contributing strategic judgment."
    }
  },
  {
    id: "bank6_q13",
    cluster: 3,
    framework: "Loss Aversion/Bending Reality",
    questionText: "A stakeholder team has been going around you to leadership whenever you decline their requests. You've tried addressing it directly with them and it hasn't stopped. Now you need to raise it with your VP. How do you frame the conversation?",
    options: [
      "\"I need your support in reinforcing that feature requests should go through the product process.\"",
      "\"Right now, stakeholders have learned that if I say no, they can go to leadership and get a yes. The risk is that this undermines the entire prioritization framework — and eventually, leadership will be the bottleneck for every product decision because stakeholders will skip the product team entirely. I'd like to discuss how we realign the process so that your time is protected and the product team can serve as an effective filter.\"",
      "\"Stakeholders are circumventing the product process and it's creating confusion about priorities.\"",
      "\"Can we establish a policy that stakeholder requests must go through product before reaching leadership?\""
    ],
    correctAnswer: 1,
    explanationCorrect: "Loss aversion framing aimed at what the VP personally stands to lose — their own time and decision bandwidth. You're not complaining about being bypassed (which sounds like a personal grievance). You're showing the VP that the current pattern leads to a future where they become the decision bottleneck for every product request (a massive loss of their time and strategic focus). The proposed solution (\"so that your time is protected\") positions the fix as serving the VP's interests.",
    explanationWrong: {
      0: "\"I need your support\" positions you as someone who can't handle stakeholder relationships alone. The VP may wonder why you can't manage this yourself.",
      2: "Factual but emotionally flat. \"Creating confusion\" doesn't convey the severity of the problem or its trajectory. The VP won't feel urgency to act.",
      3: "Asking for a policy is bureaucratic and unenforceable. Policies don't change behavior — incentives and framing do."
    }
  }
];
export const BANK_7: Question[] = []; // TODO: Create new bank
export const BANK_8: Question[] = []; // TODO: Create new bank
export const BANK_9: Question[] = []; // TODO: Create new bank

export type BankNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export const ALL_BANKS: Record<BankNumber, Question[]> = {
  1: BANK_1,
  2: BANK_2,
  3: BANK_3,
  4: BANK_4,
  5: BANK_5,
  6: BANK_6,
  7: BANK_7,
  8: BANK_8,
  9: BANK_9
};

export function getBankQuestions(bankNumber: BankNumber): Question[] {
  return ALL_BANKS[bankNumber];
}

export function isBankAvailable(bankNumber: BankNumber): boolean {
  return ALL_BANKS[bankNumber].length > 0;
}

export const AVAILABLE_BANKS: BankNumber[] = Object.keys(ALL_BANKS)
  .map(Number)
  .filter((n) => isBankAvailable(n as BankNumber)) as BankNumber[];
