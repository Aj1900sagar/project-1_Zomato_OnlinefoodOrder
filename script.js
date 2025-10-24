// Background zoom animation
window.addEventListener("load", () => {
  const mainImg = document.querySelector("main img");
  mainImg.classList.add("animate-bg");

  // Typing animation for hero text
  const textElement = document.querySelector("main p");
  const text = textElement.textContent;
  textElement.textContent = "";
  let i = 0;
  function typeEffect() {
    if (i < text.length) {
      textElement.textContent += text.charAt(i);
      i++;
      setTimeout(typeEffect, 50);
    }
  }
  typeEffect();
});

// Fade-in animation for food cards on scroll
const cards = document.querySelectorAll(".food-card");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

cards.forEach(card => {
  observer.observe(card);
});
