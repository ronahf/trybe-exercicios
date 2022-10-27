const { books } = require("./books");

// Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
  
const fantasyOrScienceFictionAuthors = () => {
    return books.filter((book) => (
    book.genre === 'Ficção Científica' || book.genre === 'Fantasia'
    ))
    .map((book) => book.author.name)
    .sort()
}
console.log(fantasyOrScienceFictionAuthors());