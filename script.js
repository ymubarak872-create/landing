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
  const preloader = document.querySelector(".preloader");
  if (preloader) {
    document.body.classList.add("is-preloading");
    preloader.classList.add("active");

    window.addEventListener("load", () => {
      setTimeout(() => {
        preloader.classList.add("done");
        document.body.classList.remove("is-preloading");
        preloader.addEventListener(
          "transitionend",
          () => {
            preloader.style.display = "none";
          },
          { once: true }
        );
      }, 350);
    });
  }

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
// This setup ensures the script waits until the entire page is fully loaded
function initializeNavToggle() {
    const navToggleBtn = document.getElementById('navToggleBtn');
    const navLinks = document.getElementById('navLinks');

    if (navToggleBtn && navLinks) {
        // Remove any old click listeners first to avoid double-firing
        navToggleBtn.removeAttribute('onclick'); 
        
        navToggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.classList.toggle('mobile-active');
            console.log("Menu toggle clicked! Active status:", navLinks.classList.contains('mobile-active'));
        });
    } else {
        console.log("Navbar elements not found on this specific page.");
    }
}

// Run the function immediately when the DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeNavToggle);
} else {
    initializeNavToggle();
}