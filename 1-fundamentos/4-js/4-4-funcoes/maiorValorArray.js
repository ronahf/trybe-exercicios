//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

//Array de teste: [2, 3, 6, 7, 10, 1];.
//Valor esperado no retorno da função: 4.

let array = [10, 10000, 1, 7, -100, 99999];
let maiorElemento = [];
let indexMaiorElemento = [];

function biggest (array){
    for (let index = 0; index < array.length; index += 1){
        if (array[index] > maiorElemento){
            maiorElemento = array[index];
            console.log(index);
        } 
    } 
    return maiorElemento;
}
console.log(biggest(array));
