const { books } = require("./books");

// Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.

const authorWith3DotsOnName = () => {
    return books.find((book) => 
    book.author.name[1] === '.' &&
    book.author.name[4] === '.' &&
    book.author.name[7] === '.' 
    ).name
}

console.log(authorWith3DotsOnName());