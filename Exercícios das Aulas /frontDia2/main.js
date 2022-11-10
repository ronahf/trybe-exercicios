import Swal from "sweetalert2";

const image = document.querySelector('#image');
const button = document.querySelector('#button');
const name = document.querySelector("#name");

// console.log(image);
// console.log(name);
// console.log(button);

const BASE_URL = `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id`;

//A API tem 731 heróis. Vamos setar com 1.000 para dar erro
const MAX_HEROES = 731;

//Função para retornar um número aleatório dentro da quantidade de heróis que foi definida acima.
const randomID = () => Math.floor(Math.random() * MAX_HEROES);

// console.log(randomID());

button.addEventListener('click', (event) => {
  //isso evita que a página seja recarregada ao clicar no botão.
  event.preventDefault(); 

  //guardando o valor gerado na função randomID na constante id para usarmos depois.
  const id = randomID();
  console.log(id);

  //fetch para buscarmos na API o herói com o id gerado na função, com um json no final.
  fetch(`${BASE_URL}/${id}.json`)
    .then((result) => result.json())
    .then((data) => {
      image.src = data.images.md;
      name.innerHTML = data.name;
    })
    .catch((error) => Swal.fire({
      title: 'Hero not found',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Cool',
    }));
});
