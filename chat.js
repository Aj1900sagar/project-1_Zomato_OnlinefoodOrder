const chatIcon = document.getElementById('chatIcon');
const chatWidget = document.getElementById('chatWidget');
const chatHeader = document.getElementById('chatHeader');
const chatBody = document.getElementById('chatBody');
const chatInput = document.getElementById('chatInputField');
const sendBtn = document.getElementById('sendBtn');

// Toggle open/close
chatIcon.addEventListener('click', () => {
  chatWidget.style.display = 'flex';
  chatIcon.style.display = 'none';
});

chatHeader.addEventListener('click', () => {
  chatWidget.style.display = 'none';
  chatIcon.style.display = 'flex';
});

// Send message
sendBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
  const message = chatInput.value.trim();
  if (message === '') return;

  const userMsg = document.createElement('div');
  userMsg.className = 'message user';
  userMsg.innerHTML = `<p>${message}</p><span class="time">${getTime()}</span>`;
  chatBody.appendChild(userMsg);
  chatInput.value = '';

  chatBody.scrollTop = chatBody.scrollHeight;

  // Simulated bot reply
  setTimeout(() => {
    const botMsg = document.createElement('div');
    botMsg.className = 'message bot';
    botMsg.innerHTML = `<p>${generateBotReply(message)}</p><span class="time">${getTime()}</span>`;
    chatBody.appendChild(botMsg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 800);
}

function getTime() {
  const now = new Date();
  return now.getHours() + ':' + String(now.getMinutes()).padStart(2, '0');
}

function generateBotReply(msg) {
  msg = msg.toLowerCase();
  if (msg.includes('where') || msg.includes('order'))
    return "🚴‍♂️ Your order is nearby! It’ll arrive in 5–10 minutes.";
  if (msg.includes('thanks') || msg.includes('thank'))
    return "You're welcome 😊 Stay safe!";
  if (msg.includes('delay'))
    return "Sorry for the delay 🙏 Traffic is heavy, but I’m on my way!";
  if (msg.includes('hello') || msg.includes('hi'))
    return "Hi there! 👋 How can I help with your order?";
  return "Got it! I'll update you soon. 🍱";
}
