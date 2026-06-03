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
function initializeNavToggle() {
    // 1. Target the exact IDs from your HTML images
    const menuToggleBtn = document.getElementById('menuToggleBtn');
    const navMenu = document.getElementById('navMenu');

    if (menuToggleBtn && navMenu) {
        menuToggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // 2. Toggle a clean inline style to force show/hide if the CSS class is missing
            if (navMenu.style.display === 'flex') {
                navMenu.style.setProperty('display', 'none', 'important');
            } else {
                navMenu.style.setProperty('display', 'flex', 'important');
                navMenu.style.flexDirection = 'column';
            }
            
            console.log("Navbar toggle clicked successfully!");
        });
    } else {
        console.log("Navbar elements not found. Check your HTML IDs.");
    }
}

// Run the script correctly regardless of load order
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeNavToggle);
} else {
    initializeNavToggle();
}