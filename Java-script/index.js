
  const words = ["Developer", "Designer", "Creator", "Coder", "Programmer"];
  let i = 0;
  let j = 0;
  let currentWord = "";
  let isDeleting = false;
  const speed = 120;

  function type() {
    const typedText = document.getElementById("typed-text");

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

  document.addEventListener("DOMContentLoaded", type);




// Navigation bar

fetch("html/navbar.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar-placeholder").innerHTML = data;
    });
