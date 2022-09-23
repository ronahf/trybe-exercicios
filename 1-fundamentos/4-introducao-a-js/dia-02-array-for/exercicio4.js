////Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let numbers = [5, 9, 3, 100, 70, 8, 100, 2, 35, 27];
let menor=0;

for (let index=0; index<numbers.length; index += 1){
    if (numbers[index] < numbers[index+1]){
        menor = numbers[index];
    }
}
console.log(menor);
