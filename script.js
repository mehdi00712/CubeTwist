const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

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
  ".section-head, .services article, .mockup-card, .split > div, .process article, .cta, .contact-links, .contact-form"
);

revealItems.forEach((item) => item.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((item) => observer.observe(item));

const tiltCard = document.getElementById("tiltCard");

if (tiltCard) {
  window.addEventListener("mousemove", (event) => {
    const rect = tiltCard.getBoundingClientRect();
    const cardX = rect.left + rect.width / 2;
    const cardY = rect.top + rect.height / 2;

    const rotateY = (event.clientX - cardX) / 35;
    const rotateX = -(event.clientY - cardY) / 35;

    tiltCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
  });

  window.addEventListener("mouseleave", () => {
    tiltCard.style.transform = "";
  });
}