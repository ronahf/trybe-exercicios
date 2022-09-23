// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

let numbers = [0, 2, 4, 6, 77, 8, 1, 2, 35, 1];
let quantidadeDeImpares=0;
let imparesEncontrados = [];

for (let index = 0; index < numbers.length; index += 1){
    if ((numbers[index]%2) !== 0){
        quantidadeDeImpares = quantidadeDeImpares + 1;
        imparesEncontrados.push(numbers[index]);
    }
}
console.log(quantidadeDeImpares);
console.log(imparesEncontrados);