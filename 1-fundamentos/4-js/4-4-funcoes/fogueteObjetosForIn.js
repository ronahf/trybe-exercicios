// Exercícios - objetos e for/in
// Aula 4.4

console.log('-------------------------------------');

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };

console.log('Bem-vinda, ' + info.personagem);

console.log('-------------------------------------');

console.log(info['recorrente']); //poderia ser console.log(info.recorrente).

console.log('-------------------------------------');

//mostra todas as chaves:
for (let index in info) {
    console.log(index);
}
console.log('-------------------------------------');

//mostra todos os valores das chaves
for (let index in info) {
    console.log(info[index]);
}

console.log('-------------------------------------');


let newInfo = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último McPatinhas',
    recorrente: 'Sim',
}

for (let index in newInfo) {
    console.log(newInfo[index]);
}
console.log('-------------------------------------');

console.log(info.personagem + ' e ' + newInfo.personagem);
console.log(info.origem + ' e ' + newInfo.origem);
console.log(info.nota + ' e ' + newInfo.nota);
//console.log(info.recorrente + ' e ' + newInfo.recorrente);
console.log('Ambos recorrentes');

console.log('-------------------------------------');

