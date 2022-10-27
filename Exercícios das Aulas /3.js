const {books} = require('./books');

// Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

const fantasyOrScienceFiction = () => {
    return books.filter((book) => (
        book.genre === 'Fantasia' || book.genre === 'Ficção Científica'
    ));
}
console.log(fantasyOrScienceFiction());


const fantasyOrScienceFiction2 = () => books.filter((book) => 
    (book.genre === 'Fantasia' || book.genre === 'Ficção Científica'));

console.log(fantasyOrScienceFiction2());

