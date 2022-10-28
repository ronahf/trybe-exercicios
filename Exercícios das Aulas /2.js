const books = require('../books');

// Crie uma string com os nomes de todas as pessoas autoras.
const reduceNames = () => {
    return books.reduce((acc, curr) => acc + `${curr.author.name}, `, '')
}
// console.log(reduceNames());


// Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
const averageAge = () => {
    return books.map((book) => book.releaseYear - book.author.birthYear)
    .reduce((acc, curr) => (acc + curr))/(books.length);
}
// console.log(averageAge());


// Encontre o livro com o maior nome.
const longestNamedBook = () => {
    return books.reduce((biggestBook, currentBook) => {
        if (currentBook.name.length > biggestBook.name.length){
            return currentBook;
        }
        return biggestBook;
    });
}

// console.log(longestNamedBook());

// para entender um pouco melhor: 
books.forEach((elemento, index, arrayCompleto) => {
    console.log(`${elemento.name} é o livro na posição ${index} do array ${arrayCompleto}`)
})