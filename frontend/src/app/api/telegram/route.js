// app/api/telegram/route.js
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { text } = await request.json();
    
    if (!text) {
      return NextResponse.json(
        { ok: false, message: "Missing text" },
        { status: 400 }
      );
    }
    const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_TOKEN || !CHAT_ID) {
      return NextResponse.json(
        { ok: false, message: "Missing environment variables" },
        { status: 500 }
      ); 
    }

    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
          parse_mode: "Markdown",
        }),
      }
    );

    const data = await response.json();
    
    return NextResponse.json({ ok: data.ok }, { status: 200 });
  } catch (err) {
    console.error("Telegram API error:", err);
    return NextResponse.json(
      { ok: false, error: err.message },
      { status: 500 }
    );
  }
}