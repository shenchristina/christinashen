function changeLinkURL() {
  document.getElementById("myLink").href = "https://www.ChristinaShen.com";
}




/* 

  JS Script for Typing Text Animation

*/

const rotatingText = document.getElementById('rotating-text');
const words = ["Web Designer", "Web Developer", "Software Developer", "University Student"];
let wordIndex = 0;
let letterIndex = 0;
let currentWord = '';
let isDeleting = false;

function type() {
  if (isDeleting) {
    currentWord = currentWord.slice(0, letterIndex - 1);
    letterIndex--;
  } else {
    currentWord = words[wordIndex].slice(0, letterIndex + 1);
    letterIndex++;
  }

  rotatingText.textContent = currentWord;

  // Check if word is typed out, start deleting
  if (!isDeleting && letterIndex === words[wordIndex].length) {
    setTimeout(() => {
      isDeleting = true;
    }, 1000);
  }

  // Check if word is deleted, start next word
  if (isDeleting && letterIndex === 0) {
    wordIndex = (wordIndex + 1) % words.length;
    isDeleting = false;

    rotatingText.textContent = '';
    setTimeout(type, 150);
    return;
  }

  // Slower typing speed, faster deleting
  const typingSpeed = isDeleting ? 100 : 150;
  setTimeout(type, typingSpeed);
}

type();

// Menu drop down toggle

function toggleMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('active'); 
}
