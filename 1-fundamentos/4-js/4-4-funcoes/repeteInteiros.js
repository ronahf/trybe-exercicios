//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.

function mostRepeated(numbers){
    let scoreNumber = 0;
    let scoreRepetition = 0;
    let indexRepeatedNumber = 0;
    
    for (let index in numbers){
        let checkNumber = numbers[index];
        for (let index2 in numbers) {
            if(checkNumber === numbers[index2]) {
                scoreNumber += 1;
            }
        }
        if (scoreNumber > scoreRepetition){
            scoreRepetition = scoreNumber;
            indexRepeatedNumber = index;
        }
        scoreNumber = 0;
    }

    return numbers[indexRepeatedNumber];
}

console.log(mostRepeated([2, 8, 2, 5, 8, 2, 3, 8, 20, 80, 8, 2, 8, 3]));