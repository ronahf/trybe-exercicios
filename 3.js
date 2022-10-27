const books = require('./books');

// Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

const averageAge = () => {
    return books.map((book) => book.releaseYear - book.author.birthYear)
    .reduce((acc, curr) => (acc + curr))/(books.length);
}

console.log(averageAge());