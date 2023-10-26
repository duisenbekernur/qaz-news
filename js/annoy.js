document.addEventListener("DOMContentLoaded", function () {
  const modalOverlay = document.getElementById("modal-overlay");
  const centeredModal = document.getElementById("centered-modal");
  const closeModalButton = document.getElementById("close-modal");

  // Display the modal
  modalOverlay.style.display = "flex";

  // Handle the "Close" button click
  closeModalButton.addEventListener("click", function () {
    modalOverlay.style.display = "none";
  });
});
