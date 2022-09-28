document.getElementById('page-title').innerText = '7ven & Pulp Fiction';

document.getElementById('paragraphs').innerText = 'Tarantino é um dos maiores escritores e diretores que a sétima arte já viu!';

document.getElementById('subtitle').innerText = 'Maravilhas das telinhas && || telonas'

// esses comandos alteram o conteúdo que está no .html
//
// getElementsByClassName pega elementoS com a mesma classe.  Uma busca retornará todas os conteúdos dessa classe. Para alterar esse conteúdo, NÃO utilizo innerText. Devo acessar uma posição da lista, ou seja, do array.
//
// let pilotosDeF1 = document.getElementsByClassName("piloto-f1-atual");
//
// for (let i = 0; i < pilotosDeF1.length; i += 1){
//     pilotosDeF1[i].innerText = 'Francis Rona';
// }
//
// getElementsByTagName sempre retorna uma lista, e não um único elemento. Isso é independente se o elemento está em div, p, h1, span, etc. 
// poderia fazer: documents.getElementsByTagName("div"), vai retornar uma lista com todas as divs que existem html.

// Quero alterar apenas o 2º elemento da classe piloto-f1-atual: document.getElementsByClassName('piloto-f1-atual')[1].innerText = 'Xablau';

getElementsByClassName('paragraphs'));