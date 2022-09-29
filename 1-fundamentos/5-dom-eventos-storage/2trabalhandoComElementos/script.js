console.log(document.getElementById('elementoOndeVoceEsta'));
document.getElementById('elementoOndeVoceEsta');








// Acesse o elemento elementoOndeVoceEsta.
// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
// Acesse o primeiroFilho a partir de pai.
// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
// Agora acesse o terceiroFilho a partir de pai.




// // parentNode (é apenas para leitura. Não serve para reatribuir valores): 
// // ingredient-item é uma classe: 
// // document.querySelector('.ingredient-item').parentNode : mostra o pai da classe que determinei. Posso ir concatenando, por exemplo:
// // document.querySelector('.ingredient-item').parentNode.parentNode (...): pai do pai de ingredient-item

//<div id="start"></div>
//nó
//<p>elemento</p>

// console.log(document.getElementById('start').nextSibling) // nó
// console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>