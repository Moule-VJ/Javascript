const bookArr = ["One", "Two", "Three", "Four", "Five"];

const books = bookArr.map((book) => {
  console.log(book);
});

const essentiaBooks = bookArr.map((book) => {
  return {
    title: book.title,
    author: book.author,
    reviewsCount: 0,
  };
});

// Filter

const longBooksWithMovie = bookArr
  .filter((book) => book.pages > 500 && books.pages <= 600)
  .filter((book) => book.hasMovieAdaptation);

const adventureBooks = bookArr
  .filter((books) => books.genres.includes("adventure"))
  .map((books) => books.title);

//   Reduce
// To reduce an entire array into one value

const pagesInAllBook = bookArr.reduce((acc, book) => acc + book.pages, 0);

// Array Sort Method

const x = [3, 5, 6, 3, 2, 1];

const sort = x.slice().sort((a, b) => a - b);

const sortedByPages = bookArr.slice().sort((a, b) => b.pages - a.pages);

// Mutating the arrays without changing the original one

// add a book object to an array

export const newBook = {
  id: 6,
  title: "Harry Potter and chamber of secrets",
  author: "J. K .Rowling",
};

// Adding a book
const booksAfterAdd = [...bookArr, newBook];

console.log(booksAfterAdd);

// Deleting a book
const booksAfterDeleting = booksAfterAdd.filter((book) => book.id !== 3);
console.log(booksAfterDeleting);

// Updating the books

const updateBooks = booksAfterAdd.map((book) => {
  if (book.id === 6)
    return {
      ...book,
      author: "Mouli VJ",
    };
});
