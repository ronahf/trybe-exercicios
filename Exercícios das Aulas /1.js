const {books} = require('./books')

//Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

//Primeira forma
const formatedBookNames = () => {
  return books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
}
console.log(formatedBookNames());

//Segunda forma, mais simplificada e com return implícito
const formatedBookNames2 = () => books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
console.log(formatedBookNames2());









// const expectedResult = [
//     'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
//     'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
//     'Fundação - Ficção Científica - Isaac Asimov',
//     'Duna - Ficção Científica - Frank Herbert',
//     'A Coisa - Terror - Stephen King',
//     'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
//   ];