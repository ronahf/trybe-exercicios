//spread operator

const specialFruit = ['banana', 'maçã', 'pera'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['granola', 'aveia', 'mel'];

const fruitSalad = (fruit, additional) => {
  // basta atribuirmos os dois arrays a uma constante usando o spread operator e retorná-lo ao final da função.
  const fruitSaladaWithAdditional = [...fruit, ...additional];
  return fruitSaladaWithAdditional;
};

// console.log(fruitSalad(specialFruit, additionalItens));

//________________________________________________________

const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88


//________________________________________________________

const firstArray = [3, 5, 7];
const secondArray = [2, ...firstArray, 4];
// console.log(secondArray);

//________________________________________________________

const getPosition = (latitude, longitude) => ({
    latitude: latitude,
    longitude: longitude,
  });
// console.log(getPosition(-19.8157, -43.9542));

//________________________________________________________
