const {books} = require('./books');

// Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age, com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha, considerando suas idades quando o livro foi lançado.

const nameAndAge = () => {
    return books.map((book) => (
        {
            age: book.releaseYear - book.author.birthYear,
            author: book.author.name,
        }
    ))
    .sort((a,b) => a.age - b.age)
}

console.log(nameAndAge());


// return books.map(() => ({age:calcula a idade, author: puxa o autor})).sort((a,b) => a.age - b.age);