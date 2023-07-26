document.querySelector("#start-chat-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let userInput = document.querySelector("#start-chat-input").value;
    if (userInput.trim() !== '') {
        document.querySelector("#start-chat-input").value = '';
        document.querySelector("#welcome-screen").hidden = true;
        document.querySelector("#chat-screen").hidden = false;
        document.querySelector(".example-questions-container").hidden = true;
        document.querySelector(".info-container").hidden = true;
        let userMessage = document.createElement("div");
        userMessage.className = "message user-message";
        userMessage.textContent = userInput;
        document.querySelector("#chat-container").appendChild(userMessage);
        fetch('/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: userInput,
            }),
        })
        .then(response => response.json())
        .then(data => {
            let botMessage = document.createElement("div");
            botMessage.className = "message bot-message";
            botMessage.innerText = data.response;
            document.querySelector("#chat-container").appendChild(botMessage);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
});

document.querySelector("#chat-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let userInput = document.querySelector("#chat-input").value;
    if (userInput.trim() !== '') {
        document.querySelector("#chat-input").value = '';
        let userMessage = document.createElement("div");
        userMessage.className = "message user-message";
        userMessage.textContent = userInput;
        document.querySelector("#chat-container").appendChild(userMessage);
        fetch('/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: userInput,
            }),
        })
        .then(response => response.json())
        .then(data => {
            let botMessage = document.createElement("div");
            botMessage.className = "message bot-message";
            botMessage.innerText = JSON.parse(data.response);
            document.querySelector("#chat-container").appendChild(botMessage);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
});
