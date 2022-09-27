//Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

//Valor de teste: 'trybe' e 'be'
//Valor esperado no retorno da função: true

//verificaFimPalavra('joaofernando', 'fernan');
//Retorno esperado: false

function wordAndEnding (word, ending){
    word = word.split(''); //transforma as strings em arrays!
    ending = ending.split(''); // transforma as strings em arrays!

    let comparation = true;

    for (let index = 0; index < ending.length; index += 1) {
        if (word[word.length - ending.length + index] !== ending[index]){
            comparation = false;
        }
    }
    return comparation;
}

console.log(wordAndEnding('ronaldo', 'aldo'));
console.log(wordAndEnding('ronaldo', 'rona'));
console.log(wordAndEnding('trybe', 'b'));