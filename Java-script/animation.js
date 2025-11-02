// animation-on-scroll.js
// Track element visibility on screen
// Add 'visible' class when in view, remove when out of view
const animationOnScroll = document.querySelectorAll(".animation-on-scroll");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } 
    else {
      entry.target.classList.remove("visible");
    }
  });
}, { threshold: 0.4 });
animationOnScroll.forEach((section) => {
  observer.observe(section);
});