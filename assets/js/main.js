//capturar o evento de submit do formulário
const form = document.querySelector ('#formulario');

form.addEventListener('submit', function(event) {
    event.preventDefault();
})