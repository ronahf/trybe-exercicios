//Calcular a quantidade de número primos em um intervalo entre dois números dados.



let primos = [];

for (let index=2; index<=50; index += 1){
    if ((index%2 !== 0) && (index%3 !==0) && (index%5 !==0)){
        primos.push(index);
    }
}
console.log(primos)
console.log(primos.length)

console.log('O maior número primo do intervalo é ' + primos[12])

