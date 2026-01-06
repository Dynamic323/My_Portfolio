// pages/api/telegram.js
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { text } = req.body;
  if (!text) return res.status(400).json({ ok: false, message: "Missing text" });

  const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN; 
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;     

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: "Markdown" }),
      }
    );
    const data = await response.json();
    return res.status(200).json({ ok: data.ok });
  } catch (err) {
    return res.status(500).json({ ok: false, error: err.message });
  }
}
