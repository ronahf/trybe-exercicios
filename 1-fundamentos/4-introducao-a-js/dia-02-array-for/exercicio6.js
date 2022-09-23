//Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let array = [];

for (let index = 1; index <= 25; index += 1) {
    array.push(index);
}

console.log(array);

//Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2;
let arrayDividePorDois = [];

for (let index = 0; index < 25; index += 1) {
    arrayDividePorDois.push((array[index]/2));
}

console.log(arrayDividePorDois);