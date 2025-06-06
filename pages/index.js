import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const askQuestion = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setAnswer('');
    const res = await fetch('/api/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question })
    });
    const data = await res.json();
    setAnswer(data.answer);
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Joe Knows</title>
      </Head>
      <div className="container">
        <img src="/crystal_ball.gif" alt="Crystal Ball" className="crystal-ball" />
        <div className="answer">{loading ? '✨ Thinking...' : answer}</div>
        <input
          type="text"
          placeholder="Ask the crystal ball..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && askQuestion()}
        />
        <button onClick={askQuestion}>Ask</button>
      </div>
    </>
  );
}
