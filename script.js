const openFlyer = document.getElementById("openFlyer");
const modal = document.getElementById("flyerModal");
const closeModal = document.getElementById("closeModal");

// buka modal
openFlyer.onclick = () => {
  modal.classList.add("show");
}

// tutup modal (klik X)
closeModal.onclick = () => {
  modal.classList.remove("show");
}

// tutup modal (klik luar gambar)
modal.onclick = (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
}

// COUNTDOWN
const targetDate = new Date("April 18, 2026 06:30:00 GMT+0700").getTime();

const countdown = () => {
  const now = new Date().getTime();
  const gap = targetDate - now;

  if (gap <= 0) return;

  const days = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hours = Math.floor((gap / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((gap / (1000 * 60)) % 60);
  const seconds = Math.floor((gap / 1000) % 60);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
};

setInterval(countdown, 1000);
countdown();
document.addEventListener("click", () => {
  const music = document.getElementById("bgMusic");
  music.play();
}, { once: true });

// tambahan: ESC keyboard
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.remove("show");
  }
});
