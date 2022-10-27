const { books } = require("./books");

// Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
// filtrar todos os livros mais antigos, fazer um map para percorrer o array mas respondendo apenas o nome do livro.

const oldBooks = () => {
    return books.filter((book) => 
    book.releaseYear < 1962
    ).map((book) => book.name)
}
console.log(oldBooks());




const expectedResult = [
    'O Senhor dos Anéis',
    'Fundação',
    'O Chamado de Cthulhu',
  ];