//função que soma todos os itens de um array.



function sumFunction (array){ //bigode = chave!
    let result = 0;
    for (let index = 0; index < array.length; index += 1){
        result = result + array[index];
}
return result;   
}


console.log(sumFunction([1, 2, 3, 4, 5, 1000]));