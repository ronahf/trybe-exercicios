//Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

let parameter = -1;

function biggerThanZero (parameter) {
    if (parameter > 0) {
        return 'positive';
    } 
    else if (parameter < 0) {
        return 'negative';
    }
    else {
        return 'zero';
    }
}
console.log(biggerThanZero(parameter));