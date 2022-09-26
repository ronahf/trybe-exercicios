//Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

// Exemplo de palíndromo: arara
//verificaPalindrome('arara')
//Retorno esperado: true
//verificaPalindrome('desenvolvimento')
//Retorno esperado: false


function verificaPalindrome (frase){
    for (let index = 0; index < frase.length/2; index += 1){
        if (frase[index] !== frase[frase.length -1 - index]){
            return false;
        } else{
            return true;
        }
    }
}

console.log(verificaPalindrome('ludi idul'));