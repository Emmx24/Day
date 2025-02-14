// Array of love messages (20 messages)
const loveMessages = [
    "I love you more than yesterday but less than tomorrow.", "I fall for you every single day."
];

// Function to randomly select a love message
function revealLetter() {
    const message = document.getElementById('message');
    const loveMessageElement = document.getElementById('loveMessage');

    // Randomly pick a message
    const randomMessage = loveMessages[Math.floor(Math.random() * loveMessages.length)];

    // Display the message
    loveMessageElement.textContent = randomMessage;
    message.classList.remove('hidden');
}
