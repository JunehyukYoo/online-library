const myLibrary = [];

function Book(title, author, pages, read = false) {
    if (!new.target) {
        throw Error("Must use the new keyword");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return this.read ? `${this.title} by ${this.author}, ${this.pages} pages, already read\n` : `${this.title} by ${this.author}, ${this.pages} pages, not yet read\n`;
    };
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
}


const hp = new Book("Harry Potter", "J.K. Rowling", 69, false);
console.log(hp.info());

console.table(myLibrary);
addBookToLibrary("Harry Potter", "J.K. Rowling", 69, false);
console.table(myLibrary);