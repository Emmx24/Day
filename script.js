// Array of love messages (20 messages)
const loveMessages = [
    "Every moment with you has been a beautiful adventure. Our first month together feels like a lifetime of love. Here's to us! ❤️",
    "From our first date to our first month, every second with you feels magical. I love you more every day. Happy first month! 💖",
    "You're the best part of my every day. I feel so lucky to have spent my first month with you, and I can't wait for the rest of our journey. 💕",
    "Our first month has been nothing short of amazing. You've made my heart fuller, my days brighter, and my love stronger. Here's to forever! 💝",
    "Like the most loyal puppy, you've shown me love and care every single day. Our first month has been perfect. I love you so much! 🐶💓",
    "Our first month has been filled with laughter, love, and unforgettable memories. You make my heart skip a beat every day. Here's to many more months with you! 😘",
    "To my favorite person. This first month with you has been a dream, and I can't wait for all the months to come. You're my everything. ❤️",
    "Every day with you has been a gift, and this first month together has been the best gift of all. I’m so lucky to call you mine. 💖",
    "You've filled my life with so much joy and love. I can't believe it's already been a month with you. I can't wait for forever! 🌹",
    "One month, countless smiles, endless love. I'm grateful for you every single day, and I will cherish you forever. ❤️",
    "This first month with you has been everything I dreamed of and more. Here's to making more memories, my love. 💕",
    "Every second with you has been so precious. I feel so loved, and I hope you feel the same. Happy first month! 💖",
    "Being with you is like a beautiful dream I never want to wake up from. Our first month has been perfect. Let's make it last forever! 💝",
    "I fall more in love with you every day. Our first month together has been the start of something beautiful. 😘",
    "From the moment we met, I knew there was something special. Our first month together has only confirmed that. ❤️",
    "You complete me in ways I never thought possible. Our first month has been a wonderful beginning, and I can't wait to see where we go. 🌟",
    "This first month has been so magical. I can't believe how lucky I am to have found someone like you. 💖",
    "You make me the happiest person in the world. Here's to our first month and to many more months of love. 💕",
    "I'm so grateful for every day we've spent together in this first month. You’re my best friend, my love, my everything. ❤️",
    "In this first month together, you've shown me nothing but love, and I feel incredibly lucky to have you by my side. 💖",
    "You are the one I've been waiting for. Our first month together has been full of love, and I look forward to every moment with you. 😘"
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
