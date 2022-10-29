// 1)

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

// rectangles.forEach((rectangle) => {
//   console.log(rectangleArea(...rectangle)); 
// });

// ____________________________________________________________

// 2) Crie uma função sum que dado um número ilimitado de parâmetros retorna a soma desses parâmetros. Ao chamar a função dessa forma : sum(4,5,6) o número 15 deve ser retornado.

const sum = (...numeros) => numeros.reduce(((acc, numero) =>  acc + numero), 0);

// console.log(sum(4,5,6));


const sub = (...numeros) => numeros.reduce(((acc, numero) =>  acc - numero), 4);
// console.log(sub(4,5,6));

//__________________________________________________________________

//3) Escreva a função personLikes, que dado um objeto de parâmetro que representa uma pessoa (variáveis alex e gunnar), retorna todos os gostos daquela pessoa, conforme mostrado abaixo:

const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

// complete a assinatura da função abaixo
const personLikes = ({name, age, likes}) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;
// <nome> tem <anos de idade> e gosta de <gostos da pessoa>

// Retornos esperados:
// console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
// console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

// como acessar os valores das chaves de um objeto diretamente? coloca entre bigodes tudo que quero chamar, assim ao invés de precisar escrever person.name, escrevo apenas name.

//__________________________________________________________________

//4) Escreva uma função filterPeople que, dada uma lista de pessoas, retorne todas as pessoas australianas que nasceram no século 20: (dica: use o object destructuring)

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
   
];

const filterPeople = (array) => {
  return people.filter(({ nationality, bornIn}) => {
    return nationality === 'Australian' && bornIn > 1900 && bornIn <= 2000;
  })
}

//E se eu quisesse retornar apenas os nomes?
const filterPeople2 = (array) => {
  return people.filter(({ nationality, bornIn}) => {
    return nationality === 'Australian' && bornIn > 1900 && bornIn <= 2000;
  }).map((pessoa) => pessoa.name)
}

// console.log(filterPeople(people));
// console.log(filterPeople2(people));

//_______________________________________________________________________________

// 5) Escreva a função swap, que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando apenas 1 linha. O retorno da função utilizando o array myList deve ser [3, 2, 5].

const myList = [5, 2, 3];
// escreva swap abaixo
const swap = ([a, b, c]) => [c, b, a];

// console.log(swap(myList));
//_______________________________________________________________________________

// 6) Crie uma função toObject que, dada uma lista, retorna um objeto representando o carro: [dica:use o array destructuring e abbreviation object literal]

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = ([carro, marca, ano]) => ({carro, marca, ano});

// console.log(toObject(shelbyCobra));

//_______________________________________________________________________________

// 7) Escreva uma função shipLength que, dado um objeto representando um navio, retorna o comprimento dele, mostrando também a devida unidade de medida:
const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];

// escreva shipLength abaixo
const shipLength = ({name, length, measurementUnit}) => `${name} is ${length} ${measurementUnit} long`
// retorno esperado

// console.log(shipLength(ships[0])); // 'Titanic is 269.1 meters long'
// console.log(shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
// console.log(shipLength(ships[2])); // 'Yamato is 256 meters long'

//_______________________________________________________________________________

// 8) Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento. Um parâmetro adicional pode ser passado para alterar o cumprimento utilizado: [dica: use o default params]

// escreva greet abaixo
const greet = (name, message = 'Hi') => `${message}, ${name}`; 

// Retornos esperados:
console.log(greet('John')); // 'Hi John'
console.log(greet('John', 'Good morning')); // 'Good morning John'
console.log(greet('Isabela', 'Oi')); // 'Oi Isabela'