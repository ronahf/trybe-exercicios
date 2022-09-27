//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.




function biggestName (words){
    let biggestWord = words[0];
    for (let index in words){
        if (words[index].length > biggestWord.length){
            biggestWord = words[index];
        }
    }
    return biggestWord;
    }
   


console.log(biggestName(['José', 'weeeeeeee vamos testar arriba', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana', 'Ermenegildo El Galindo']));