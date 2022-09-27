//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

//Array de teste: [2, 3, 6, 7, 10, 1];.
//Valor esperado no retorno da função: 4.



function indiceMaior (array) {
    let indiceMaior = 0;
    for (let indice in array){
        
        if(array[indiceMaior] < array[indice]){
            indiceMaior = indice;
        }
    }
    console.log(indiceMaior);
}

indiceMaior([10, 0, 1, 7, -100, 0]);