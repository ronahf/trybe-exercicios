//Usando o objeto abaixo, faça os exercícios a seguir:

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos:
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      }
    
  };

//1 Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.

//2 Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a essa chave um objeto contendo as seguintes informações:

console.log(leitor.nome);
console.log(leitor.sobrenome);
console.log(leitor.livrosFavoritos.titulo);

console.log('-------------------------------------');

console.log('O livro favorito de '+ leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + "'" + leitor.livrosFavoritos.titulo + "'");

console.log('-------------------------------------');

let leitorAtualizado = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos:[
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
      {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
      }
    ]
    
  };

console.log(leitorAtualizado.nome);
console.log(leitorAtualizado.livrosFavoritos.length);

console.log('-------------------------------------');

console.log(leitorAtualizado.nome + ' ' + 'tem' + ' ' + leitorAtualizado.livrosFavoritos.length + ' livros favoritos');
