// Crie um array formado pelos livros com mais de 60 anos desde sua publicação. Esse array deve ser ordenado do livro mais velho ao mais novo.

const { books } = require("./books")

// const oldBooksOrdered = () => {
//     return books.filter((book) => (
//         book.releaseYear < (2022 - 60)))
//     .sort((a,b) => a.releaseYear - b.releaseYear);
// }

// console.log(oldBooksOrdered());

// const oldBooksOrdered2 = () => books.filter((book) => (
//         book.releaseYear < (2022 - 60)))
//     .sort((a,b) => a.releaseYear - b.releaseYear);

// console.log(oldBooksOrdered2());


const oldBooksOrdered3 = () => {
    return books.filter((book) => (
    book.releaseYear < (2022 - 60)))
    .sort((a,b) => {
        return a.releaseYear - b.releaseYear
    }) 
}

console.log(oldBooksOrdered3());