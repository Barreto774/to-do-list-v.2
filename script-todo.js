document.addEventListener("keypress", function (e) {
    if(e.key ==="Enter"){
        const button = document.querySelector(".button");
        
        button.click();

    }
});

function adicionar() {
    var conteudo = document.getElementById("texto").value;
    if (conteudo != "") {
        var novoElemento = document.createTextNode(conteudo);
        var divNova = document.createElement("div");
        divNova.className = "itens";
        var botao = document.createElement("button");
        var check = document.createElement("input");
        check.setAttribute("type", "checkbox");

        botao.innerHTML = "Remover";
        botao.className = "button";
        botao.style.color = "white";
        botao.addEventListener("click", function() {
            divNova.remove();
        });
        divNova.appendChild(check);
        check.addEventListener("change", function() {
            if (this.checked) {
                divNova.style.textDecoration = "line-through";
            } else {
                divNova.style.textDecoration = "none";
            }
        });
        divNova.appendChild(novoElemento);

        divNova.appendChild(botao);
        document.getElementById("tarefas").appendChild(divNova);
        document.getElementById("texto").value = "";
        document.getElementById("descricao").value = "";
        document.getElementById("cad").style.display = "none";
        document.getElementById("tarefas").style.display = "block";
    }
}

function cadastrar() {
    document.getElementById("cad").style.display = "block";
    document.getElementById("tarefas").style.display = "none";
    document.getElementById("dados").style.display = "none";
}

function exibir() {
    document.getElementById("cad").style.display = "none";
    document.getElementById("tarefas").style.display = "block";
    document.getElementById("dados").style.display = "none";
}

function mostrarDados(){
    document.getElementById("cad").style.display = "none";
    document.getElementById("tarefas").style.display = "none";
    document.getElementById("dados").style.display = "block";

    var nomeDado = (localStorage.getItem('nome'));
    var loginDado = (localStorage.getItem('login'));
    var emailDado = (localStorage.getItem('email'));
    var senhaDado = (localStorage.getItem('senha'));

    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    var p3 = document.getElementById("p3");
    var p4 = document.getElementById("p4");

    p1.innerText = "Nome: " + nomeDado;
    p2.innerText = "Login: " + loginDado;
    p3.innerText = "Email: " + emailDado;
    p4.innerText = "Senha: " + senhaDado;
}