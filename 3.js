const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  

  // retorne a quantidade de vezes que retorna a letra A ou a
  
  const containsA = () => {
    let totalDeLetrasA = 0;
    names.forEach((name) => {
        const letras = name.split('');
        console.log(letras);
        totalDeLetrasA += letras.reduce((letrasAa, currentLetter) => {
            if (currentLetter === 'a' || currentLetter === 'A') {
                return letrasAa + 1
            }
            return letrasAa;
        }, 0)
    }); 
    return totalDeLetrasA;
}

// variável que contém o total de letras que nos interessa, ou seja, total;
// para cada palavra, contar quantas vezes a letra A ou a aparecem;
// percorrer o array que contém os nomes, com o forEach
// a string serve para quebrar a string em array com cada letra, cada letra é um elemento do array letras no caso.

  console.log(containsA());

