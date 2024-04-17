const nome = document.querySelector('#nome');
const data_n = document.querySelector('#data_n');
const CPF = document.querySelector('#CPF');
const ab_nome = document.querySelector('[ab_nome]');
//funções 
function escreve_mostra(){
    ab_nome.innerHTML = `<p> Meu nome é: <span>${nome.value}</span></p>` <p> Meu nome é: <span>${nome.value}</span></p>
    ab_nome.innerHTML = `<p> Meu nome é: <span>${nome.value}</span></p>` <p> Meu nome é: <span>${nome.value}</span></p>
    ab_nome.innerHTML = `<p> Meu nome é: <span>${nome.value}</span></p>` <p> Meu nome é: <span>${nome.value}</span></p>
    ab_nome.innerHTML = `<p> Meu nome é: <span>${nome.value}</span></p>` <p> Meu nome é: <span>${nome.value}</span></p>
    ab_nome.innerHTML = `<p> Meu nome é: <span>${nome.value}</span></p>    ` 
}
const enviar = document.getElementById('submit');
enviar.addEventListener ('click',escreve_mostra);