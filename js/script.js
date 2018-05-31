// Get the modal
var modal = document.getElementById('id01');
var retorno = document.getElementById('modal-content');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
