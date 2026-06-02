// ================================
// Reveal on Scroll Animation
// ================================
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach(el => observer.observe(el));
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const msg = document.getElementById("formMessage");

  if (!form || !msg) return;

  form.addEventListener("submit", e => {
    e.preventDefault();
    msg.textContent = "Message sent successfully ✅";
    msg.style.color = "green";
    form.reset();
  });
});
