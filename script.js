var responses = {
    "hello": "Hi there!",
    "hi": "Hi there!",
    "Hello": "Hi there!",
    "Hi": "Hi there!",
    "hello": "Hi there!",
    "hi": "Hi there!",
    "how are you": "I'm doing well, thank you for asking.",
    "what's your name": "My name is Chatbot.",
    "what do you do": "I'm here to answer your questions.",
    "default": "I'm sorry, I don't understand. Could you please rephrase your question?"
};

function sendMessage() {
    var input = document.getElementById("chatbot-input-box").value;
    var dialogue = document.getElementById("chatbot-dialogue");
    var message = document.createElement("div");
    var reply = document.createElement("div");
    message.className = "chatbot-message";
    message.textContent = "You: " + input;
    dialogue.appendChild(message);
    document.getElementById("chatbot-input-box").value = "";
    reply.className = "chatbot-reply";
    reply.textContent = "Chatbot: " + getResponse(input);
    dialogue.appendChild(reply);
    dialogue.scrollTop = dialogue.scrollHeight;
    updateResponses(input);
}

function getResponse(input) {
    input = input.toLowerCase();
    if (responses[input]) {
        return responses[input];
    } else {
        responses[input] = responses["default"];
        return responses["default"];
    }
}

function updateResponses(input) {
    if (!responses[input]) {
        var response = prompt("I don't know the answer. Please enter a response:");
        responses[input] = response;
    }
}
