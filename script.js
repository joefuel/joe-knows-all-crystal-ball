
async function getAnswer() {
    const question = document.getElementById("question").value;
    const answerEl = document.getElementById("answer");
    answerEl.innerText = "Consulting the crystal...";

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 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"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are a wise and emotionally intelligent oracle named Joe who gives warm, comforting, thoughtful answers to all questions." },
                { role: "user", content: question }
            ]
        })
    });

    const data = await response.json();
    const aiReply = data.choices[0].message.content;
    answerEl.innerText = aiReply;
}
