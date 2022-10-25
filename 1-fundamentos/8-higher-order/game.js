const { warrior } = require('./dataGame');
const { mage } = require('./dataGame');
const { dragon } = require('./dataGame');

// console.log(warrior.weaponDmg); //2
// console.log(warrior['weaponDmg']); //2

// Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
const danoDragao = (dragao) => {
    const danoMinimo = 15;
    const danoMaximo = dragao.strength;
    let dano = Math.ceil(Math.random()*(danoMaximo - danoMinimo) + danoMinimo);
    return dano;
}
console.log(danoDragao(dragon));

// Crie uma função que retorna o dano causado pelo warrior.
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
const danoWarrior = (warrior) => {
    const danoMinimo = warrior.strength;
    const danoMaximo = (warrior.strength * warrior.weaponDmg);
    let dano = Math.ceil(Math.random()*(danoMaximo - danoMinimo) + danoMinimo);
    return dano;
}
console.log(danoWarrior(warrior));

// Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: “Não possui mana suficiente”) e a mana gasta é 0.
const gastoDomago = (mage) => {
    if (mage.mana >=15) {
        const obj = {
            dano: Math.ceil(Math.random()*(2*mage.intelligence - mage.intelligence) + mage.intelligence),
            mana: 15,
        }
        return obj;
    }

    if (mage.mana <15) {
        const obj = {
            dano: Math.ceil(Math.random()*(2*mage.intelligence - mage.intelligence) + mage.intelligence),
            mana: 'Não possui mana suficiente',
        }
        return obj;
    }
}

console.log(gastoDomago(mage));
