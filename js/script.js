var nome = document.querySelector("#nome")
var sobrenome = document.querySelector("#sobrenome")
var email = document.querySelector("#email")
var dataNascimento = document.querySelector("#dataNascimento")
var telefone = document.querySelector("#telefone")
var assunto = document.querySelector("#assunto")
var mensagem = document.querySelector("#mensagem")

var buttonEnviarDados = document.querySelector("button")

var resultado = document.querySelector("#resultado")

buttonEnviarDados.addEventListener('click', exibirDados)

function exibirDados() {
    resultado.innerHTML = `
        <h1> Registro </h1>
        <h3>NOME</h3>
        <p> ${nome.value} </p>
        <h3>SOBRENOME</h3>
        <p> ${sobrenome.value} </p>
        <h3>EMAIL</h3>
        <p> ${email.value} </p>
        <h3>DATA DE NASCIMENTO</h3>        
        <p> ${dataNascimento.value} </p>
        <h3>TELEFONE</h3>
        <p> ${telefone.value} </p>
        <h3>ASSUNTO</h3>
        <p> ${assunto.value} </p>
        <h3>MENSAGEM</h3>
        <p> ${mensagem.value} </p>
    `
}