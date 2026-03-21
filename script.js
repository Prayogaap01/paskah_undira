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

// tambahan: ESC keyboard
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.remove("show");
  }
});
