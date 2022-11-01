var modal = document.querySelector(".modal");
var triggers = document.querySelectorAll(".trigger");
var closeButton = document.querySelector(".close-button");
var columns = document.querySelectorAll(".wp-block-kadence-column");

function toggleModal() {
  modal.classList.toggle("show-modal");
  console.log(columns);
  columns.forEach((item) => {
    item.classList.toggle("modal-hide-content");
  });
  document
    .querySelector(".wp-block-template-part")
    .classList.toggle("modal-hide-content");
  document.querySelector("body").classList.toggle("overflow-hidden");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

for (var i = 0, len = triggers.length; i < len; i++) {
  triggers[i].addEventListener("click", toggleModal);
}
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
