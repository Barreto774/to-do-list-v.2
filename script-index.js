document.addEventListener("keypress", function (e) {
    if(e.key ==="Enter"){
        const button = document.querySelector(".button");
        
        button.click();

    }
});

const form = document.getElementById('form');
const nome = document.getElementById('nome');
const login = document.getElementById('login');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const confsenha = document.getElementById('confsenha');

function nomeValidar(){
    if(nome.value.length < 10)
    {
        console.log("Nome menor que 10 caracteres");
    }
    else
    {
        console.log("Nome Aceito");
    }
}

function loginValidar(){
    if(login.value.length > 10)
    {
        console.log("Nome menor que 10 caracteres");
    }
    else
    {
        console.log("Nome Aceito");
    }
}

function emailValidar(){
    if(email.value.length > 10)
    {
        console.log("Tem @");
    }
    else
    {
        console.log("Não tem @");
    }
}
function compareSenha(){
    if(senha.value == "" && confsenha.value == "" )
    {
        console.log("Campo obrigatorio")
    }
    else if(senha.value == confsenha.value )
    {
        console.log("Senhas Batem");
    }
    else
    {
        console.log("Senhas não batem");
    }
}