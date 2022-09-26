//Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

let a = 60;
let b = 70;
let c = -50;

function isTriangle (a, b, c) {
    if ((a + b + c) === 180) {
        return 'true';
    } 
    else {
        return 'Erro! A somatória dos ângulos internos deve ser 180graus!'
    }
}
console.log(isTriangle(a, b, c));