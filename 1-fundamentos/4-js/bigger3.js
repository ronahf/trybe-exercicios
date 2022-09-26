// Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

let number1 = 101;
let number2 = 101;
let number3 = 101;


function maior(number1, number2, number3){
    if (number1 > number2 && number1 > number3){
        return number1;
    } 
    else if (number1 < number2 && number3 < number2){
        return number2;
    } 
    else if (number3 > number1 && number3 > number2){
        return number3;
    }
    else{
        return 'Há pelo menos 2 números iguais';
    }
}

console.log(maior(number1, number2, number3));