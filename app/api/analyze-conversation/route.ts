import Anthropic from '@anthropic-ai/sdk';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { transcript, scenario } = await req.json();

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: 'Anthropic API key not configured' },
        { status: 500 }
      );
    }

    const anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY
    });

    const analysisPrompt = `You are an expert negotiation coach analyzing a practice conversation.

SCENARIO: Timeline Extension Negotiation
The user (Product Manager) was trying to get 2 more weeks from Alex (Engineering Manager).

TRANSCRIPT:
${transcript.map((t: any) => `[${t.timestamp}] ${t.speaker === 'user' ? 'PM' : 'Alex'}: ${t.text}`).join('\n')}

Analyze the PM's negotiation technique based on frameworks from "Never Split the Difference" by Chris Voss.

Provide your analysis in this JSON format (valid JSON only, no markdown):
{
  "overallRating": "foundation" | "practitioner" | "advanced" | "expert",
  "frameworksDetected": [
    {
      "framework": "Mirroring",
      "timestamp": "1:23",
      "quote": "exact quote from PM",
      "feedback": "why this worked or didn't work",
      "wasEffective": true
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

Be specific, reference exact moments from the transcript, and provide actionable feedback. Return ONLY the JSON object, no other text.`;

    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-5-20250929',
      max_tokens: 2000,
      messages: [{
        role: 'user',
        content: analysisPrompt
      }]
    });

    const responseText = message.content[0].type === 'text'
      ? message.content[0].text
      : '';

    // Try to extract JSON from response (in case there's extra text)
    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    const jsonText = jsonMatch ? jsonMatch[0] : responseText;

    const analysis = JSON.parse(jsonText);

    return NextResponse.json(analysis);
  } catch (error) {
    console.error('Error analyzing conversation:', error);
    return NextResponse.json(
      { error: 'Failed to analyze conversation' },
      { status: 500 }
    );
  }
}
