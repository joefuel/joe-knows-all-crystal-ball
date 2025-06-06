
function getAnswer() {
    const responses = [
        "Absolutely.",
        "Not today.",
        "Definitely yes.",
        "I wouldn’t count on it.",
        "Joe says: Ask again later.",
        "Only if you believe it.",
        "Without a doubt.",
        "The answer is within you."
    ];
    const question = document.getElementById("question").value;
    const answer = responses[Math.floor(Math.random() * responses.length)];
    document.getElementById("answer").innerText = answer;
}
