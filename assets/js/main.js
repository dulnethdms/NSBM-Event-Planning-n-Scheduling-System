/**
 * NSBM EventHub - Client-Side JavaScript Application Logic
 * Interactive UI behaviors, Theme Switcher, Live Client Search/Filter, and AJAX seat registration.
 */



    //photo frame


  document.addEventListener("scroll", () => {
  const section = document.querySelector(".photo-section");
  const overlay = document.querySelector(".overlay-photo");
  const base = document.querySelector(".base-photo");

  // total scrollable distance inside the section
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const windowHeight = window.innerHeight;

  // current scroll position relative to section
  const scrollY = window.scrollY;
  const scrolled = scrollY - sectionTop;

  // normalize progress between 0 and 1
  const maxScroll = sectionHeight - windowHeight;
  let progress = scrolled / maxScroll;
  progress = Math.min(Math.max(progress, 0), 1);

  // circle size follows progress
  const size = progress * 100; // 0% → 100%
  overlay.style.clipPath = `circle(${size}% at 50% 50%)`;

  // fade base image
  base.style.opacity = 1 - progress;
});






