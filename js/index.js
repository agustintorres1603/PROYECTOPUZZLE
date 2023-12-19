var buttonPrimary = document.querySelector('.button-common.button-primary');
var modalElement = document.getElementById('modal_container');
var closeButton = document.getElementById('Close');

buttonPrimary.addEventListener("click", function () {
    // Muestra el modal al hacer clic en el botón "START"
    modalElement.classList.remove('modal-display-none');
});

closeButton.addEventListener('click', function () {
    // Oculta el modal al hacer clic en el botón "CLOSE MODAL"
    modalElement.classList.add('modal-display-none');
});