const openFlyer = document.getElementById("openFlyer");
const modal = document.getElementById("flyerModal");
const closeModal = document.getElementById("closeModal");

openFlyer.onclick = () => {
modal.classList.add("show");
}

closeModal.onclick = () => {
modal.classList.remove("show");
}

modal.onclick = (e) => {
if(e.target === modal){
modal.classList.remove("show");
}
}