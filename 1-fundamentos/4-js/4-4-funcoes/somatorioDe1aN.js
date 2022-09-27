//Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

let array = [0];

function sumN (number){
    let soma = 0;
    
    for (let index = number; index > 0; index -= 1){
        soma = soma + index;
    }
    
    return soma;
}
console.log(sumN(2));
console.log(sumN(3));
console.log(sumN(4));
console.log(sumN(5));