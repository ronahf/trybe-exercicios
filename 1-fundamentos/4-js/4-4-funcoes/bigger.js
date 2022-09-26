//Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

let number1 = 2;
let number2 = 2.1;


function maior(number1, number2){
    if (number1 > number2){
        return number1;
    } 
    else if (number1 < number2){
        return number2;
    } else {
        return 'Os números são iguais';
    }
}

console.log(maior(number1, number2));