import { useState } from 'react';
import Head from 'next/head';
export default function Home() {
  return (
    <div>
      <h1>Welcome to Joe Knows</h1>
    </div>
  );
}
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
