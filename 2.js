const books = require('./books');

//Crie uma string com os nomes de todas as pessoas autoras.

const reduceNames = () => {
    return books.reduce((acc, curr) => acc + `${curr.author.name}, `, '')
}
console.log(reduceNames());







const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";