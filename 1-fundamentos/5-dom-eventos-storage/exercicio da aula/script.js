//1
document.getElementsByTagName("p")[1].innerText = "Daqui a 2 anos pretendo estar em uma organização da qual me orgulho e que possa trabalhar remotamente de forma saudável.";

//2
document.querySelector('.main-content').style.backgroundColor = 'rgb(76,164,109)';

//3
document.querySelector('.center-content').style.backgroundColor = 'white';

//4
document.getElementsByTagName("h1")[0].innerText =  "Exercício - JavaScript";

//5
let minus = document.getElementsByTagName("p")[0].innerText;
let maius = minus.toUpperCase();
document.getElementsByTagName("p")[0].innerText = maius;

//6
console.log(document.querySelectorAll("p"));
console.log(document.getElementsByTagName("p"));

/*Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
4. Crie e execute uma função que corrija o texto da tag <h1>.
5. Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo.
6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.*/