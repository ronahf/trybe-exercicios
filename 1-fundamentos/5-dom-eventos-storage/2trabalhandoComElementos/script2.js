// Comece criando algumas coisas:
// 1.Adicione a tag h1 com o texto Exercício - JavaScript DOM como filho da tag body;
let h1 = document.createElement('h1');
h1.innerHTML = 'Exercício - <em>JavaScript<em> DOM';
document.querySelector('body').appendChild(h1);

// 2.Adicione a tag main com a classe main-content como filho da tag body;
let mainContent = document.createElement('main'); //criou a variável
mainContent.className = 'main-content'; //definiu a classe da variável criada
document.querySelector('body').appendChild(mainContent); //posicionou o elemento main

// 3.Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
let centerContent = document.createElement('section');
centerContent.className = 'center-content';
document.querySelector('main').appendChild(centerContent);

// 4.Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let p = document.createElement('p');
p.innerHTML = 'Algum texto sendo colocado aqui para teste!';
centerContent.appendChild(p);

// 5.Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
let leftContent = document.createElement('section');
leftContent.className = 'left-content';
document.querySelector('main').appendChild(leftContent);

// 6.Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
let rightContent = document.createElement('section');
rightContent.className = 'right-content';
document.querySelector('main').appendChild(rightContent);

// 7.Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
let img = document.createElement('img');
img.src = 'https://picsum.photos/200';
img.classList.add('small-image');
leftContent.appendChild(img);

// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. Essa lista deve ser filha do section criado no passo 6;
let ul = document.createElement('ul');
let numbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
for (let index = 0; index<numbers.length; index +=1){
    let li = document.createElement('li');
    li.innerText = numbers[index];
    li.className = 'numbers-list';
    ul.appendChild(li);
}
rightContent.appendChild(ul);

// Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
for (let index = 1; index <= 3; index +=1){
    let h3 = document.createElement('h3');
    h3.innerText = index;
    h3.className = 'description';
    mainContent.appendChild(h3);
}
//_----------------------------------------------------------------------------------------------------------------------------------------
// 7.Adicione a classe title na tag h1 criada;
h1.className = 'title';

// 8.Adicione a classe description nas 3 tags h3 criadas;
// feito acima! h3.className = 'description';

// 9.Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();
mainContent.removeChild(leftContent);

// 10.Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;
rightContent.style.marginRight = 'auto';

// 11.Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
mainContent.style.backgroundColor = 'green';

// 12.Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.
let list = document.querySelectorAll('.numbers-list');
for (let index = 0; index < list.length; index +=1){
    let element = list[index];
    
    if (element.innerText.includes('Nove') || element.innerText.includes('Dez')){
        ul.removeChild(element); 
    }
}
