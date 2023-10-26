document.addEventListener("DOMContentLoaded", function () {
  const modalOverlay = document.getElementById("modal-overlay");
  const centeredModal = document.getElementById("centered-modal");
  const closeModalButton = document.getElementById("close-modal");

  modalOverlay.style.display = "flex";

  closeModalButton.addEventListener("click", function () {
    modalOverlay.style.display = "none";
  });
});
