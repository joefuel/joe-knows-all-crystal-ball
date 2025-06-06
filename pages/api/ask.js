export default async function handler(req, res) {
  const { question } = req.body;
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  const completion = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o",
      messages: [{ role: "user", content: question }],
      max_tokens: 100,
    }),
  });

  const data = await completion.json();
  res.status(200).json({ answer: data.choices[0].message.content });
}
