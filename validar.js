var salvarNome = function () {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;

    console.log(nome + email);
}

document.onclick = salvarNome;