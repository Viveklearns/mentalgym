// Conversation data structures

export interface ConversationMessage {
  speaker: 'user' | 'ai';
  text: string;
  timestamp: string; // "MM:SS" format
}

export interface ConversationTranscript {
  scenario: string;
  startTime: string; // ISO timestamp
  endTime: string;
  duration: number; // seconds
  messages: ConversationMessage[];
}

export interface FrameworkDetected {
  framework: string;
  timestamp: string;
  quote: string;
  feedback: string;
  wasEffective: boolean;
}

export interface FrameworkMissed {
  framework: string;
  explanation: string;
}

export interface MissedOpportunity {
  timestamp: string;
  whatHappened: string;
  whatYouCouldHaveDone: string;
}

export interface ConversationAnalysis {
  scenario: string;
  conversationId: string;
  overallRating: 'foundation' | 'practitioner' | 'advanced' | 'expert';
  conversationLength: string;
  frameworksDetected: FrameworkDetected[];
  frameworksMissed: FrameworkMissed[];
  whatWorkedWell: string[];
  missedOpportunities: MissedOpportunity[];
  topImprovements: string[];
  analyzedAt: string; // ISO timestamp
}
