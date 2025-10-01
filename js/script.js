// Set current year in footer
document.getElementById("currentYear").textContent = new Date().getFullYear();

// Smooth scrolling for navigation links
document.querySelectorAll("a.nav-link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    window.scrollTo({
      top: targetSection.offsetTop - 70,
      behavior: "smooth",
    });
  });
});

// Smooth scrolling for hero button
document
  .querySelector('a[href="#projects"]')
  .addEventListener("click", function (e) {
    e.preventDefault();
    const targetSection = document.querySelector("#projects");
    window.scrollTo({
      top: targetSection.offsetTop - 70,
      behavior: "smooth",
    });
  });

// Typewriter effect
const typewriterElement = document.getElementById("typewriter");
const texts = [
  "Computer Engineering Graduate",
  "Aspiring Software Developer",
  "Problem Solver",
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeWriter() {
  const currentText = texts[textIndex];

  if (isDeleting) {
    typewriterElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 50;
  } else {
    typewriterElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 100;
  }

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    typingSpeed = 1000; // Pause at end of text
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    typingSpeed = 500; // Pause before starting next text
  }

  setTimeout(typeWriter, typingSpeed);
}

// Start the typewriter effect
setTimeout(typeWriter, 1000);
