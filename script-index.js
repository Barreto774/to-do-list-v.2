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
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const senha = document.getElementById('senha');
const confsenha = document.getElementById('confsenha');
const span = document.querySelectorAll('span');

form.addEventListener('submit', (e) => {
    e.preventDefault()

})

function nomeValidar(){
    
    if(nome.value == "")
    {
        nome.style.border=" 0px solid #fff";
        span[0].style.display="none";
    }
    else if(nome.value.length < 10)
    {
        nome.style.border="3px solid #DB5A5A";
        span[0].style.display="block";
    }
    else
    {
        nome.style.border="3px solid #4ECA64";
        span[0].style.display="none";
    }
}

function loginValidar(){
    if(login.value == "")
    {
        login.style.border=" 0px solid #fff";
        span[1].style.display="none";
    }
    else if(login.value.length > 10)
    {
        login.style.border="3px solid #DB5A5A";
        span[1].style.display="block";
    }
    else
    {
        login.style.border="3px solid #4ECA64";
        span[1].style.display="none";
    }
}

function emailValidar(){
    if(email.value == "")
    {
        email.style.border=" 0px solid #fff";
        span[2].style.display="none";
    }
    else if(!emailRegex.test(email.value))
    {
        email.style.border="3px solid #DB5A5A";
        span[2].style.display="block";
    }
    else
    {
        email.style.border="3px solid #4ECA64";
        span[2].style.display="none";
    }
}

function compareSenha(){
    if(senha.value == "" && confsenha.value == "" )
    {
        senha.style.border=" 0px solid #fff";
        confsenha.style.border=" 0px solid #fff";
        span[3].style.display="none";
        span[4].style.display="none";
    }
    else if(senha.value == confsenha.value )
    {
        senha.style.border="3px solid #4ECA64";
        confsenha.style.border="3px solid #4ECA64";
        span[3].style.display="none";
        span[4].style.display="none";
    }
    else
    {
        senha.style.border="3px solid #DB5A5A";
        confsenha.style.border="3px solid #DB5A5A";
        span[3].style.display="block";
        span[4].style.display="block";
    }
}