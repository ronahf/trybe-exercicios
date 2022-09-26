
// Sem função
// let nome = 'João';

//console.log('Bom dia, ' + nome);


// Com função
//function bomDiaTryber(nome) {
//  console.log('Bom dia, ' + nome);
//}

//bomDiaTryber('João'); // Bom dia, João
//bomDiaTryber('Julia'); // Bom dia, Julia
//bomDiaTryber('Marcelo'); // Bom dia, Marcelo

let statusCarro = 'desligado';
let aceleracao = 0;
let rotacaoDoVolante = 0;

function ligarDesligar() {
    if (statusCarro === 'desligado'){
        statusCarro = 'ligado';
    } else {
        statusCarro = 'desligado';
    }

    return statusCarro;
}

function acelerar(incremento) {
    aceleracao = aceleracao + incremento;

    return 'Acelerando a ' + aceleracao + 'm/s²';
}

function frear(decremento) {
    aceleracao = aceleracao - decremento;

    return 'Desacelerando para ' + aceleracao + 'm/s²';
}

function girarVolante(anguloRotacao) {
    rotacaoDoVolante = anguloRotacao;

    return rotacaoDoVolante + 'graus';
}