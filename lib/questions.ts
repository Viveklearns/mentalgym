import { Question } from "@/types";

export const QUESTIONS: Question[] = [
  // CLUSTER 1: Listening & Empathy (4 questions)
  {
    id: "bank1_q1",
    cluster: 1,
    framework: "Tactical Empathy",
    questionText: "You're presenting a roadmap to your engineering lead. She's been quiet throughout, arms crossed, giving short one-word answers. The meeting is halfway through. What's your first move?",
    options: [
      "Explain the business rationale in more detail — she may not have enough context to evaluate the direction",
      "Ask her directly: \"Do you have concerns about this roadmap?\"",
      "Acknowledge what you observe: \"It seems like there's something about this direction that doesn't sit right with you\"",
      "Keep the meeting moving and address concerns in a follow-up 1:1"
    ],
    correctAnswer: 2,
    explanationCorrect: "Tactical empathy means naming what you observe without demanding confirmation or denial. \"It seems like\" is non-accusatory and creates space without confrontation. If you're right, she'll open up. If you're slightly off, she'll correct you — and either way, you get real information.",
    explanationWrong: {
      0: "Logic-first response that completely bypasses her emotional state. Explaining more context to someone who's emotionally disengaged makes them more defensive, not less.",
      1: "A direct yes/no question that feels respectful but is actually confrontational — it forces her to either publicly commit to having a problem or retreat to \"I'm fine.\"",
      3: "Avoids the tension entirely. The concern will resurface at a worse moment."
    }
  },
  {
    id: "bank1_q2",
    cluster: 1,
    framework: "Mirroring",
    questionText: "Your engineering manager says in a planning meeting: \"This timeline is completely unrealistic and it's going to burn the team out.\" You want him to keep talking so you understand the real concern. What's your best response?",
    options: [
      "\"I hear you — let's look at what we can cut from scope to make this more realistic.\"",
      "\"Burn the team out?\"",
      "\"What specifically about the timeline concerns you most?\"",
      "\"I understand. What timeline would actually work for the team?\""
    ],
    correctAnswer: 1,
    explanationCorrect: "Mirroring repeats the last 1–3 critical words with a slight upward inflection. The manager will now elaborate on what \"burn the team out\" actually means to him — past trauma, specific workload concerns, a perception that he's never been heard on this before. You learn far more than any question would surface.",
    explanationWrong: {
      0: "Jumps immediately to problem-solving before you've understood the real concern. You might cut the wrong scope.",
      2: "A calibrated question is a good technique but the wrong sequence — you haven't let him elaborate yet. Use the mirror first, then a question if needed.",
      3: "Also rushes to solution. \"What timeline would work?\" assumes the problem is timeline, not something deeper."
    }
  },
  {
    id: "bank1_q3",
    cluster: 1,
    framework: "Labeling",
    questionText: "A senior stakeholder says \"I'm fine with whatever you decide\" in a flat, slightly clipped tone. His words say yes but his energy says no. What do you do?",
    options: [
      "Take the agreement at face value — he's a senior person who says what he means",
      "Thank him for his flexibility and proceed",
      "Say: \"It seems like you might not be fully on board with this direction\"",
      "Ask: \"Are you sure you're okay with this?\""
    ],
    correctAnswer: 2,
    explanationCorrect: "Labeling the incongruence between his words and tone surfaces the real feeling. If you're wrong, he'll correct you — \"No, I genuinely mean it.\" If you're right, he'll open up — \"Honestly, I do have a concern.\" Either way, you prevent counterfeit agreement from becoming an implementation problem later.",
    explanationWrong: {
      0: "Accept \"you're right\" disguised as \"I'm fine.\" Surface-level agreement that evaporates at the implementation stage.",
      1: "Accept \"you're right\" disguised as \"I'm fine.\" Surface-level agreement that evaporates at the implementation stage.",
      3: "A yes/no question makes it easy to retreat right back to \"Yes, I'm sure.\" Doesn't create space for genuine disclosure."
    }
  },
  {
    id: "bank1_q4",
    cluster: 1,
    framework: "Mirroring",
    questionText: "In a prioritization meeting, a product stakeholder says: \"We keep saying customer retention is the priority but our roadmap doesn't reflect that.\" You want more information before you respond. What do you say?",
    options: [
      "Defend the roadmap by walking through the tradeoffs that led to it",
      "\"Our roadmap doesn't reflect that?\"",
      "\"That's a fair point — let's revisit the prioritization framework.\"",
      "\"What would a retention-focused roadmap actually look like to you?\""
    ],
    correctAnswer: 1,
    explanationCorrect: "Mirror to extract what they mean before you respond. \"Doesn't reflect that\" could mean many things — specific features are missing, proportions are wrong, retention isn't in the OKRs, or they have a specific initiative in mind. You can't know until they elaborate.",
    explanationWrong: {
      0: "Defensive. You're arguing before you understand the accusation.",
      2: "Concedes ground without understanding what ground is actually being contested.",
      3: "Good instinct — but premature. You're jumping to solution design before fully understanding the grievance. Mirror first, then ask."
    }
  },

  // CLUSTER 2: Strategic Influence (5 questions)
  {
    id: "bank1_q5",
    cluster: 2,
    framework: "Accusation Audit",
    questionText: "You need to tell your CPO that the feature she has publicly championed for two quarters needs to be cut from the roadmap. How do you open the conversation?",
    options: [
      "\"I have some difficult news about the feature — can we walk through the data together?\"",
      "\"I know this is going to feel like we're not valuing your judgment, and that the timing is terrible given how hard you've pushed for this.\"",
      "\"Based on our capacity analysis, we need to make some hard prioritization calls this quarter.\"",
      "\"I want to be transparent — I've been wrestling with how to bring this to you.\""
    ],
    correctAnswer: 1,
    explanationCorrect: "The accusation audit names the worst things she might think or feel before she thinks them. She was probably already imagining: \"This is a judgment on me,\" and \"This is terrible timing.\" You voiced it first — now those accusations sound exaggerated when held up to the light, and her defenses lower before the news even lands.",
    explanationWrong: {
      0: "Data-forward. Logically respectful but emotionally tone-deaf for this moment. She'll experience it as minimizing.",
      2: "Business-speak that depersonalizes — feels dismissive of her investment.",
      3: "Shows personal vulnerability but doesn't actually address what she's likely fearing."
    }
  },
  {
    id: "bank1_q6",
    cluster: 2,
    framework: "Calibrated Questions",
    questionText: "Your engineering lead keeps saying a core architecture component needs \"more time\" but won't give specifics. You need clarity. What do you ask?",
    options: [
      "\"Can you give me a timeline for when it'll be ready?\"",
      "\"Why does this keep needing more time?\"",
      "\"What specifically would need to be true for you to feel confident in the timeline?\"",
      "\"Are we talking days or weeks?\""
    ],
    correctAnswer: 2,
    explanationCorrect: "An open-ended \"what\" question that invites specificity without triggering defensiveness. Forces him to articulate the actual blockers — technical dependencies, team capacity, unresolved design questions — which gives you something to work with.",
    explanationWrong: {
      0: "Closed question (\"can you\") that produces a number without the reasoning behind it.",
      1: "\"Why\" is accusatory in Voss's framework. It sounds like you're challenging his competence rather than trying to understand.",
      3: "Binary — caps the answer before it starts and produces no useful information about the actual blocker."
    }
  },
  {
    id: "bank1_q7",
    cluster: 2,
    framework: "No-Oriented Questions",
    questionText: "You've sent a proposal to a cross-functional partner three times with no response. What do you send next?",
    options: [
      "\"Following up again — can you let me know your thoughts by end of week?\"",
      "\"Have you had a chance to review the proposal I sent?\"",
      "\"Have you given up on this initiative?\"",
      "\"I wanted to check in — is this still a priority for your team?\""
    ],
    correctAnswer: 2,
    explanationCorrect: "No-oriented question. The phrase \"given up\" triggers an immediate \"no, of course not!\" response that breaks the silence and re-engages. It creates urgency without pleading and doesn't give them an easy way to continue ignoring you.",
    explanationWrong: {
      0: "Requires positive engagement to answer — they need to choose to respond, which is exactly what they've been avoiding. You're asking them to do the same thing that hasn't worked three times.",
      1: "Requires positive engagement to answer — they need to choose to respond, which is exactly what they've been avoiding.",
      3: "Requires positive engagement to answer — they need to choose to respond, which is exactly what they've been avoiding."
    }
  },
  {
    id: "bank1_q9",
    cluster: 2,
    framework: "Summary/Paraphrasing",
    questionText: "After a long discussion where a stakeholder explains why a feature keeps getting deprioritized, you want to check your understanding before proposing a solution. What's your move?",
    options: [
      "\"So it sounds like you feel this feature has been overlooked, your team's credibility is on the line, and there's real concern that leadership doesn't see its strategic value — is that right?\"",
      "\"I hear you. Let me share what we can do to address this.\"",
      "\"You're absolutely right that this has been a problem. Here's what I'd propose.\"",
      "\"Let me make sure I understand — you want this feature prioritized?\""
    ],
    correctAnswer: 0,
    explanationCorrect: "A complete summary combining paraphrase plus emotional acknowledgment, designed to trigger \"That's right.\" The goal is to demonstrate you understood both the facts and the feelings — overlooked feature, credibility stakes, leadership visibility. Only after \"that's right\" do you earn the right to pitch.",
    explanationWrong: {
      1: "Skips to solution before earning trust. The stakeholder hasn't confirmed you understand them — you've just told them you do.",
      2: "Skips to solution before earning trust. The stakeholder hasn't confirmed you understand them — you've just told them you do.",
      3: "Too reductive. A one-sentence summary fails to demonstrate the depth of understanding needed for genuine alignment. More likely to produce \"well, sort of...\" than \"that's right.\""
    }
  },
  {
    id: "bank1_q10",
    cluster: 2,
    framework: "\"That's Right\" vs \"You're Right\"",
    questionText: "In a tense roadmap review, a stakeholder says: \"I get it, you're right, we can't do everything.\" How do you interpret this?",
    options: [
      "Genuine alignment — they understand the constraints and are on board with the decision",
      "Polite capitulation — they want the conversation to end but haven't genuinely bought in",
      "Partial alignment — logical understanding without emotional buy-in",
      "A signal to move quickly before they change their mind"
    ],
    correctAnswer: 1,
    explanationCorrect: "\"You're right\" is Voss's clearest signal of disengagement. It means \"please stop talking.\" It is not the same as \"That's right\" — which reflects genuine understanding. When someone says \"you're right,\" they've stopped processing and started managing the conversation to an end.",
    explanationWrong: {
      0: "Treating \"you're right\" as real agreement is the most common and costly mistake. This stakeholder will either re-raise the objection later or passively fail to support the decision.",
      2: "Partially right about the logical/emotional split but misses the key Voss insight that \"you're right\" specifically signals conversational withdrawal.",
      3: "Treating \"you're right\" as real agreement is the most common and costly mistake. This stakeholder will either re-raise the objection later or passively fail to support the decision."
    }
  },

  // CLUSTER 3: Execution & Agreement (3 questions)
  {
    id: "bank1_q11",
    cluster: 3,
    framework: "Loss Aversion/Bending Reality",
    questionText: "You're trying to get VP buy-in for a new analytics investment. Which framing is most persuasive?",
    options: [
      "\"This investment will improve our decision-making speed by 30%.\"",
      "\"Teams with this capability are shipping features 30% faster — every quarter we wait, we fall further behind.\"",
      "\"This is a $200K investment with a projected 3x ROI over 18 months.\"",
      "\"Industry leaders in our space have already made this investment.\""
    ],
    correctAnswer: 1,
    explanationCorrect: "Loss framing activates loss aversion — research shows losses are felt roughly twice as strongly as equivalent gains. The answer combines competitor threat (they're pulling ahead), ongoing cost of waiting (every quarter), and implicit blame assignment (falling behind is a choice we're making). This is far more motivating than the equivalent gain framing.",
    explanationWrong: {
      0: "Pure gain framing — positive but weak. \"30% faster\" feels abstract and optional.",
      2: "ROI is gain framing in disguise. VPs have seen enough ROI projections to discount them heavily.",
      3: "Social proof — valid supporting evidence but lacks the loss urgency needed to force a decision."
    }
  },
  {
    id: "bank1_q12",
    cluster: 3,
    framework: "Black Swans",
    questionText: "You've been negotiating with a stakeholder for three weeks. They agree to everything in meetings but nothing moves. What's most likely happening, and what do you do?",
    options: [
      "They're too busy to prioritize execution — offer to handle the implementation yourself",
      "There's a hidden constraint — authority, budget, or approval they don't have and can't reveal. Ask: \"How does moving forward affect your team's priorities?\"",
      "They're conflict-avoidant and giving counterfeit agreement — use the Rule of Three to verify commitment",
      "The initiative isn't actually a priority — send a \"have you given up?\" message to force a decision"
    ],
    correctAnswer: 1,
    explanationCorrect: "The Black Swan here is a hidden constraint. \"Yes\" without movement is the clearest signal that your counterpart is constrained — they lack the authority, budget, or upstream approval to deliver what they're agreeing to. A calibrated \"how\" question gets them to reveal the constraint without putting them on the spot.",
    explanationWrong: {
      0: "Takes ownership of their problem without understanding it. You might be doing work that can't be used.",
      2: "Conflict avoidance is plausible but doesn't explain a three-week pattern. Rule of Three tests sincerity, not capability.",
      3: "Gives them an easy exit before you understand what's actually blocking progress."
    }
  },
  {
    id: "bank1_q13",
    cluster: 3,
    framework: "Implementation \"How\" Questions",
    questionText: "Your VP has just verbally approved your roadmap in a 1:1. Before the meeting ends, what do you ask?",
    options: [
      "\"Great — I'll send a summary and start the planning process.\"",
      "\"How do we make sure engineering, design, and data are all genuinely aligned before we kick off?\"",
      "\"Who else should I loop in as we start execution?\"",
      "\"What timeline are you expecting for the first milestone?\""
    ],
    correctAnswer: 1,
    explanationCorrect: "Implementation \"how\" questions force your VP to think through cross-functional dependencies himself — creating shared ownership rather than leaving alignment entirely to you. This also surfaces any behind-the-table stakeholders or constraints before they derail execution.",
    explanationWrong: {
      0: "Assumes the verbal yes is implementation-ready. It's often not.",
      2: "Close, but a closed question. Produces a list, not ownership. The VP lists names; you do all the alignment work.",
      3: "Timeline without alignment is the wrong sequence."
    }
  }
];
