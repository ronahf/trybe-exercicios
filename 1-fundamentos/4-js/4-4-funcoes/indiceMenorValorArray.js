//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
//Array de teste: [2, 4, 6, 7, 10, 0, -3];.
//Valor esperado no retorno da função: 6.

function indexDoMenor (array) {
    let indexMenor = 0;
    for (let index in array) {
        if (array[indexMenor] > array[index]){
            indexMenor = index;
        }
    }
    return indexMenor;
}

console.log(indexDoMenor([2, 4, 6, 7, 10, 0, -3]));