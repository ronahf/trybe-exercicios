// Exercícios - objetos e for/in
// Aula 4.4

console.log('-------------------------------------');

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
};
  
let newInfo = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
};

for (let index in info) {
    if (
      index === 'recorrente' &&
      info[index] === 'Sim' &&
      newInfo[index] === 'Sim'
    ) {
      console.log('Ambos recorrentes');
    } else {
      console.log(info[index] + ' e ' + newInfo[index]);
    }
  }