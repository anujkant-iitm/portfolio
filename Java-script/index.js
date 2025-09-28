document.addEventListener("DOMContentLoaded", () => {
  // Preloader
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', () => {
    preloader.style.display = 'none';
  });

  // Typing effect
  const words = ["Developer", "Designer", "Creator", "Coder", "Programmer"];
  let i = 0;
  let j = 0;
  let currentWord = "";
  let isDeleting = false;
  const speed = 120;

  function type() {
    const typedText = document.getElementById("typed-text");
    if (!typedText) return;

    currentWord = words[i];

    if (isDeleting) {
      typedText.textContent = currentWord.substring(0, j--);
    } else {
      typedText.textContent = currentWord.substring(0, j++);
    }

    if (!isDeleting && j === currentWord.length + 1) {
      isDeleting = true;
      setTimeout(type, 3000); // wait before deleting
      return;
    }

    if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }

    setTimeout(type, isDeleting ? speed / 5 : speed);
  }

  type();

  // Navigation bar
  fetch("html/navbar.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar-placeholder").innerHTML = data;
    });

  // Scroll to top button
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.onscroll = function () {
    scrollFunction();
    revealSections();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  }

  scrollToTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });

  // Scroll reveal animation
  function revealSections() {
    const sections = document.querySelectorAll('.section');
    for (let i = 0; i < sections.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = sections[i].getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        sections[i].classList.add('visible');
      }
    }
  }
});