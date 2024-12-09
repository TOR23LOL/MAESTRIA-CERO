const $BTNform = document.querySelector("#form-h2");
const $form = document.querySelector("#form");

function abrir(){
    $form.classList.toggle("ocultar");
}

$BTNform.addEventListener('click', abrir)