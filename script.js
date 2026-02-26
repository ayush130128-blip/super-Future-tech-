document.addEventListener('DOMContentLoaded', () => {
    // Chatbot Toggle Logic
    const chatToggle = document.getElementById('chatToggle');
    const chatBox = document.getElementById('chatBox');
    
    chatToggle.addEventListener('click', () => {
        if (chatBox.style.display === 'none' || chatBox.style.display === '') {
            chatBox.style.display = 'block';
        } else {
            chatBox.style.display = 'none';
        }
    });

    // Chatbot Messaging Logic
    const sendBtn = document.getElementById('sendBtn');
    const userInput = document.getElementById('userInput');
    const chatBody = document.getElementById('chatBody');

    function sendMessage() {
        const text = userInput.value.trim();
        if (text === '') return;

        // User Message append
        const userDiv = document.createElement('p');
        userDiv.className = 'user-msg';
        userDiv.textContent = text;
        chatBody.appendChild(userDiv);
        userInput.value = '';

        // Auto Scroll
        chatBody.scrollTop = chatBody.scrollHeight;

        // Bot Reply (Simulated)
        setTimeout(() => {
            const botDiv = document.createElement('p');
            botDiv.className = 'bot-msg';
            botDiv.textContent = "That's fascinating! Future Tech is vast. Please explore our pages to learn more.";
            chatBody.appendChild(botDiv);
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 1000);
    }

    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
});
