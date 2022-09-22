// A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

let numbers = [4, 9, 100, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let index=0; index < numbers.length; index += 1){
    soma = soma + numbers[index];
}

let media = soma / numbers.length;

console.log(soma);
console.log(media);

if (media > 20){
    console.log('valor maior que 20');
}
else{
    console.log('valor menor ou igual a 20')
}

