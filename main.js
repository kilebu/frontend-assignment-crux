// ── Countdown timer ──
function updateCountdown() {
  const now = new Date();
  const target = new Date(now);
  target.setHours(
    now.getHours() + 7,
    now.getMinutes() + 48,
    now.getSeconds() + 42,
  );
  let totalSecs = Math.floor((target - Date.now()) / 1000);
  if (totalSecs < 0) totalSecs = 0;

  // Fixed countdown from a set total
  let stored = parseInt(sessionStorage.getItem("cd_end") || "0");
  if (!stored) {
    stored = Math.floor(Date.now() / 1000) + 7 * 3600 + 48 * 60 + 42;
    sessionStorage.setItem("cd_end", stored);
  }
  const diff = Math.max(stored - Math.floor(Date.now() / 1000), 0);
  const h = Math.floor(diff / 3600);
  const m = Math.floor((diff % 3600) / 60);
  const s = diff % 60;
  document.getElementById("cd-h").textContent = String(h).padStart(2, "0");
  document.getElementById("cd-m").textContent = String(m).padStart(2, "0");
  document.getElementById("cd-s").textContent = String(s).padStart(2, "0");
}
setInterval(updateCountdown, 1000);
updateCountdown();

// ── FAQ toggle ──
function toggleFaq(el) {
  const isOpen = el.classList.contains("open");
  document
    .querySelectorAll(".faq-item")
    .forEach((i) => i.classList.remove("open"));
  if (!isOpen) el.classList.add("open");
}

// ── FAQ search ──
document.getElementById("faq-search").addEventListener("input", function () {
  const q = this.value.toLowerCase();
  document.querySelectorAll(".faq-item").forEach((item) => {
    const text = item.querySelector("span").textContent.toLowerCase();
    item.style.display = text.includes(q) ? "block" : "none";
  });
});

// ── Animated stats counter ──
function animateCounter(el, target, suffix) {
  const duration = 2000;
  const start = performance.now();
  const format = (n) => {
    if (n >= 1000) return Math.round(n / 1000) + "K";
    return Math.round(n).toString();
  };
  function step(ts) {
    const progress = Math.min((ts - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = format(eased * target) + (suffix || "");
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = format(target) + (suffix || "");
  }
  requestAnimationFrame(step);
}

// Intersection observer for stats
const statsSection = document.querySelector("#stat1")?.closest("section");
if (statsSection) {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          animateCounter(document.getElementById("stat1"), 60000);
          animateCounter(document.getElementById("stat2"), 76000);
          animateCounter(document.getElementById("stat3"), 27000);
          obs.disconnect();
        }
      });
    },
    { threshold: 0.3 },
  );
  obs.observe(statsSection);
}

// ── Auto-scroll payments ──
const payList = document.getElementById("payments-list");
let scrollDir = 1;
setInterval(() => {
  if (!payList) return;
  payList.scrollLeft += scrollDir * 1;
  if (payList.scrollLeft >= payList.scrollWidth - payList.clientWidth)
    scrollDir = -1;
  if (payList.scrollLeft <= 0) scrollDir = 1;
}, 30);

// carousel scroll
const track = document.querySelector(".carousel-track");
const cards = Array.from(track.querySelectorAll(".product-card"));
// // Clone all cards and append them for the seamless loop
// track.querySelectorAll(".product-card").forEach((card) => {
//   const clone = card.cloneNode(true);
//   clone.setAttribute("aria-hidden", "true");
//   track.appendChild(clone);
// });

let scrollDir2 = 1;
setInterval(() => {
  if (!cards) return;
  cards.scrollLeft += scrollDir2 * 1;
  if (cards.scrollLeft >= cards.scrollWidth - cards.clientWidth)
    scrollDir2 = -1;
  if (cards.scrollLeft <= 0) scrollDir2 = 1;
}, 30);
