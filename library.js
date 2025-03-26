const myLibrary = [];

function Book(title, author, pages, read = false) {
    if (!new.target) {
        throw Error("Must use the new keyword");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.uuid = crypto.randomUUID();
    this.info = function() {
        return this.read ? `${this.title} by ${this.author}, ${this.pages} pages, already read\n` : `${this.title} by ${this.author}, ${this.pages} pages, not yet read\n`;
    };
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
}


function renderLibrary() {
    const bookContainer = document.querySelector(".container");
    bookContainer.innerHTML = "";
    myLibrary.forEach((book) => {
        const bookDisplay = document.createElement("div");
        bookDisplay.textContent = book.info();
        bookDisplay.classList.add("book");
        bookContainer.appendChild(bookDisplay);
    });
}


addBookToLibrary("Harry Potter", "J.K. Rowling", 129, false);
addBookToLibrary("Red Rising", "Pierce Brown", 350, true);
addBookToLibrary("The Way of Kings", "Brandon Sanderson", 550, true);
console.table(myLibrary);

renderLibrary();

const addBookButton = document.querySelector("#add-book");
addBookButton.addEventListener("click", (e) => {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const readVal = document.querySelector('input[name="read"]:checked');
    const read = readVal.id === "has-read" ? true : false;
    addBookToLibrary(title, author, pages, read);
    renderLibrary();
});
