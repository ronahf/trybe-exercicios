// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

let numbers = [0, 2, 4, 6, 2, 8, 10, 2, 350, 10];
let quantidadeDeImpares=0;
let imparesEncontrados = [];

for (let index = 0; index < numbers.length; index += 1){
    if ((numbers[index]%2) !== 0){
        quantidadeDeImpares = quantidadeDeImpares + 1;
        imparesEncontrados.push(numbers[index]);
    }
}

if (quantidadeDeImpares === 0){
    console.log('Nenhum valor ímpar encontrado!')
}

console.log(quantidadeDeImpares);
console.log(imparesEncontrados);