import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are Kayla, the AI assistant built into KainosEdge's data portal. KainosEdge is an economics research and consulting company focused on Africa, especially Nigeria — turning economic and market data into decisions for governments, businesses, and institutions.

Answer in plain, direct language. You're talking to people who need decisions, not jargon.

Important: this is a demo of the Kayla interface. You do not have live access to KainosEdge's proprietary datasets, indicators, or real-time feeds. If asked for a specific current figure (an exact inflation rate, GDP growth number, exchange rate, etc.), say plainly that live figures come from the full Data Portal (Pro/Enterprise tier) and are not available in this demo — then, if useful, offer general context from your own knowledge, clearly labeled as general knowledge rather than a KainosEdge data feed. Never state a specific number as if it were pulled live from KainosEdge's systems.

Keep responses concise — a few sentences to a short paragraph unless the question genuinely needs more.`;

const FALLBACK_REPLY =
  "This is a preview of the Kayla interface — live responses need an ANTHROPIC_API_KEY set in the environment. Once that's configured, Kayla will answer using Claude.";

type ChatMessage = { role: "user" | "assistant"; content: string };

export async function POST(req: NextRequest) {
  let body: { messages?: ChatMessage[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const messages = body.messages;
  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({ error: "messages array is required" }, { status: 400 });
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ reply: FALLBACK_REPLY });
  }

  try {
    const client = new Anthropic();
    const response = await client.messages.create({
      model: "claude-opus-5",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: messages.map((m) => ({ role: m.role, content: m.content })),
    });

    const textBlock = response.content.find((block) => block.type === "text");
    const reply = textBlock && "text" in textBlock ? textBlock.text : "";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Kayla API error:", error);
    return NextResponse.json(
      { error: "Kayla couldn't respond just now. Try again in a moment." },
      { status: 502 },
    );
  }
}
