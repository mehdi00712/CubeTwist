const loader = document.getElementById("loader");
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

window.addEventListener("load", () => {
  setTimeout(() => {
    if (loader) loader.classList.add("hide");
  }, 700);
});

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });
}

function sendWhatsApp(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const business = document.getElementById("business").value.trim();
  const project = document.getElementById("project").value.trim();
  const message = document.getElementById("message").value.trim();

  const text =
    `Hello CubeTwist,%0A%0A` +
    `Name: ${encodeURIComponent(name)}%0A` +
    `Business: ${encodeURIComponent(business)}%0A` +
    `Project: ${encodeURIComponent(project)}%0A%0A` +
    `Message:%0A${encodeURIComponent(message)}`;

  window.open(`https://wa.me/23057750662?text=${text}`, "_blank");
}

const revealItems = document.querySelectorAll(
  ".section-head, .trust-card, .services article, .project-card, .split > div, .process article, .testimonial-grid article, .pricing-grid article, .cta, .contact-links, .contact-form"
);

revealItems.forEach((item) => item.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("active");
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((item) => observer.observe(item));

const counters = document.querySelectorAll(".counter");
let countersStarted = false;

function startCounters() {
  if (countersStarted) return;

  const stats = document.querySelector(".hero-stats");
  if (!stats) return;

  const statsTop = stats.getBoundingClientRect().top;
  if (statsTop > window.innerHeight) return;

  countersStarted = true;

  counters.forEach((counter) => {
    const target = Number(counter.dataset.target || 0);
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 45));

    const timer = setInterval(() => {
      current += step;

      if (current >= target) {
        counter.textContent = target;
        clearInterval(timer);
      } else {
        counter.textContent = current;
      }
    }, 30);
  });
}

window.addEventListener("scroll", startCounters);
window.addEventListener("load", startCounters);
