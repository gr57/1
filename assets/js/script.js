document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Formulario enviado!');
    });
});
document.querySelector('.sidebar').addEventListener('click', function() {
    this.classList.toggle('show');
});
