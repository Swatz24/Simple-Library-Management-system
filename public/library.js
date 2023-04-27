"use strict";
// Define an interface Book with the following properties:
// id (number)
// title (string)
// author (string)
// published (Date)
// available (boolean)
//Create an array books with the type Book[] and add a few sample books to the array.
let Book1 = {
    id: 1,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J. K. Rowling",
    published: new Date("26, Jun, 1997"),
    available: true,
};
const Book2 = {
    id: 2,
    title: "Harry Potter and the Chamber of Secrets",
    author: "J. K. Rowling",
    published: new Date("2 July 1998"),
    available: true,
};
let books = [Book1, Book2];
// Don't use console.log(obj), use console.log(JSON.parse(JSON.stringify(obj))).
// This way you are sure you are seeing the value of obj at the moment you log it. Otherwise, many browsers provide a live view that constantly updates as values change. This may not be what you want.
console.log("List of Books", JSON.parse(JSON.stringify(books)));
// Define a function addBook(book: Book): void that takes a Book object as a parameter and adds it to the books array.
function addBook(book) {
    books.push(book);
    console.log("Updated Books:", JSON.parse(JSON.stringify(books)));
}
const Book3 = {
    id: 3,
    title: "Harry Potter and the Prisoner of Azkaban",
    author: "J. K. Rowling",
    published: new Date("8 July 1999"),
    available: true,
};
addBook(Book3);
//Define a function findBookById(id: number): Book | undefined that takes a book id as a parameter and returns the book with the given id or undefined if the book is not found.
function findBookById(id) {
    return books.find((book) => book.id === id);
}
const FindBook1 = console.log("The book with ID 1 is :", findBookById(1));
const FindBook4 = console.log("The book with ID 4 is :", findBookById(4));
//Define a function updateBook(book: Book): boolean that takes a Book object as a parameter, finds the book with the same id in the books array, and updates its properties. The function should return true if the book was updated successfully or false if the book was not found.
function updateBook(updBook) {
    if (books.find((book) => book.id === updBook.id)) {
        let index = books.findIndex((book) => book.id === updBook.id);
        books[index] = updBook;
        return true;
    }
    else {
        return false;
    }
}
Book1 = {
    id: 1,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J. K. Rowling",
    published: new Date("26, Jun, 1997"),
    available: false,
};
updateBook(Book1);
console.log("Updated Book1's availability from true to false:", Book1);
// Define a function removeBook(id: number): boolean that takes a book id as a parameter and removes the book with the given id from the books array. The function should return true if the book was removed successfully or false if the book was not found.
function removeBook(id) {
    if (books.find((book) => book.id === id)) {
        let index = books.findIndex((book) => book.id === id);
        books.splice(index, 1);
        return true;
    }
    else {
        return false;
    }
}
removeBook(1);
console.log("Removed Book with Id 1", JSON.parse(JSON.stringify(books)));
removeBook(4);
console.log("Remove Book with ID 4", removeBook(4));
