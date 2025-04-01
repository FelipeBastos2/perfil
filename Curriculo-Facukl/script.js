function adicionarUC() {
    let inputUC = document.getElementById("novaUC").value.trim();
    if (inputUC !== "") {
        let tabela = document.getElementById("listaUCs");

        let novaLinha = document.createElement("tr");

        let celulaUC = document.createElement("td");
        celulaUC.innerText = inputUC;

        let celulaAcoes = document.createElement("td");
        celulaAcoes.innerHTML = `
            <button class="btn" onclick="moverParaCima(this)">▲</button>
            <button class="btn" onclick="moverParaBaixo(this)">▼</button>
        `;

        novaLinha.appendChild(celulaUC);
        novaLinha.appendChild(celulaAcoes);
        tabela.appendChild(novaLinha);

        document.getElementById("novaUC").value = ""; // Limpa o campo de entrada
    } else {
        alert("Digite o nome da UC.");
    }
}

function moverParaCima(botao) {
    let linha = botao.parentNode.parentNode;
    let tabela = document.getElementById("listaUCs");
    if (linha.previousElementSibling) {
        tabela.insertBefore(linha, linha.previousElementSibling);
    }
}

function moverParaBaixo(botao) {
    let linha = botao.parentNode.parentNode;
    let proximaLinha = linha.nextElementSibling;
    let tabela = document.getElementById("listaUCs");
    if (proximaLinha) {
        tabela.insertBefore(proximaLinha, linha);
    }
}

function validarCPF() {
    let cpf = document.getElementById("cpf").value;
    let regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!regexCPF.test(cpf)) {
        alert("CPF inválido! Use o formato 000.000.000-00.");
        document.getElementById("cpf").value = "";
    }
}

function validarEmail() {
    let email = document.getElementById("email").value;
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert("E-mail inválido! Use um formato correto.");
        document.getElementById("email").value = "";
    }
}