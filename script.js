const moods = {
    "Happy": { bg: "#ffeb3b", music: "happy.mp3", quote: "Happiness is within you." },
    "Chill": { bg: "#673ab7", music: "chill.mp3", quote: "Relax. Nothing is under control." },
    "Stressed": { bg: "#f44336", music: "calm.mp3", quote: "Breathe. Everything will be okay." },
    "Motivated": { bg: "#4caf50", music: "motivate.mp3", quote: "Push yourself, because no one else will!" }
};

function setMood(mood) {
    document.body.style.backgroundColor = moods[mood].bg;
    document.getElementById("mood-text").innerText = mood;

    const music = document.getElementById("music-source");
    music.src = moods[mood].music;
    document.getElementById("music").load();
}

// AI Quote System with Voice
function generateQuote() {
    fetch("https://api.quotable.io/random")
        .then(response => response.json())
        .then(data => {
            let quoteText = data.content;
            document.getElementById("quote").innerText = `"${quoteText}"`;
            
            let speech = new SpeechSynthesisUtterance(quoteText);
            speech.rate = 0.9;
            speech.pitch = 0.8;
            window.speechSynthesis.speak(speech);
        });
}

// AI Chatbot with Typing Effect
function chatbotResponse() {
    const input = document.getElementById("user-input").value.trim();
    if (!input) return;

    const chatDisplay = document.getElementById("chat-display");
    const responses = [
        "The stars whisper secrets...",
        "Energy flows where attention goes.",
        "You are the architect of your own destiny.",
        "A storm always passes, stay strong."
    ];
    
    const response = responses[Math.floor(Math.random() * responses.length)];

    let userBubble = `<div class="chat-bubble user-bubble">${input}</div>`;
    let botBubble = `<div class="chat-bubble bot-bubble">...</div>`;
    chatDisplay.innerHTML += userBubble + botBubble;
    document.getElementById("user-input").value = "";

    setTimeout(() => {
        document.querySelector(".bot-bubble").innerText = response;
        let speech = new SpeechSynthesisUtterance(response);
        window.speechSynthesis.speak(speech);
    }, 1000);
}

// AI Mood Journal Analysis
function saveJournal() {
    let entry = document.getElementById("journal-entry").value.trim();
    if (!entry) return;

    let response = "🌌 Your thoughts are unique!";
    document.getElementById("mood-feedback").innerText = response;

    let speech = new SpeechSynthesisUtterance(response);
    window.speechSynthesis.speak(speech);
}
