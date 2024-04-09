let nome = prompt('digite seu nome') ;
let idade= prompt('digite sua idade');
let sexo= prompt('digite o sexo de nascimento(M ou F)');
if(idade >= 18 && sexo.toLowerCase() == 'm' ){
document.write(`${nome} deve se alistar ou ja fez o alistamento militar obrigatorio`)
}else{
    document.write('muito cedo')
}
