class Book {
    constructor(title, author, pages, read = false) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.uuid = crypto.randomUUID();
    }

    info () {
        return this.read ? `${this.title} by ${this.author}, ${this.pages} pages, already read\n` : `${this.title} by ${this.author}, ${this.pages} pages, not yet read\n`;
    };
}

const library = (function() {
    let myLibrary = [];

    const getLibrary = () => myLibrary;

    const getBook = (uuid) => myLibrary.find((book) => book.uuid === uuid);

    const setLibrary = (newLibrary) => myLibrary = newLibrary;

    const addBookToLibrary = function(title, author, pages, read) {
        myLibrary.push(new Book(title, author, pages, read));
    }

    const renderLibrary = function () {
        const bookContainer = document.querySelector(".container");
        bookContainer.innerHTML = "";
        myLibrary.forEach((book) => {
            const thisBook = document.createElement("div");
            thisBook.classList.add("book");
    
            // Top Wrapper
            const topWrapper = document.createElement("div");
            topWrapper.setAttribute("style", "margin: 5px; padding: 0;");
    
            const thisTitle = document.createElement("p");
            thisTitle.setAttribute("style", "margin: 0; font-size: 20px; font-weight: bold;");
            thisTitle.textContent = book.title;
    
            const thisAuthor = document.createElement("p");
            thisAuthor.setAttribute("style", "margin: 0; font-size: 15px;");
            thisAuthor.textContent = book.author;
    
            const thisPages = document.createElement("p");
            thisPages.setAttribute("style", "margin: 0; font-size: 15px; font-weight: 200;");
            thisPages.textContent = `Page Count: ${book.pages}`;
    
            topWrapper.appendChild(thisTitle);
            topWrapper.appendChild(thisAuthor);
            topWrapper.appendChild(thisPages);
    
            // Bottom wrapper
            const botWrapper = document.createElement("div");
            botWrapper.setAttribute("style", "margin: 5px; padding: 0; display: flex; flex-direction: column; justify-content: center; align-items: center;");
    
            const thisStatus = document.createElement("p");
            thisStatus.setAttribute("style", "margin: 10px 0 0; font-size: 20px; font-weight: 400; text-align: center");
            thisStatus.textContent = book.read ? "Status: Read" : "Status: Not Read";
            thisStatus.style.color = book.read ? "#aecbfa" : "#f28b82"; // blue vs red
    
            // Button wrapper in bottom wrapper
            const buttonWrapper = document.createElement("div");
            buttonWrapper.setAttribute("style", "margin: 0; display: flex;");
    
            const removeButton = document.createElement("button");
            removeButton.classList.add("remove-button");
            removeButton.setAttribute("data-uuid", book.uuid);
            removeButton.textContent = "Remove";
    
            const changeStatusButton = document.createElement("button");
            changeStatusButton.classList.add("change-status-button");
            changeStatusButton.setAttribute("data-uuid", book.uuid);
            changeStatusButton.textContent = "Change Status"
    
            buttonWrapper.appendChild(changeStatusButton);
            buttonWrapper.appendChild(removeButton);
    
            botWrapper.appendChild(thisStatus);
            botWrapper.appendChild(buttonWrapper);
    
            // Add wrappers to book div, then book div to container
            thisBook.appendChild(topWrapper);
            thisBook.appendChild(botWrapper);
            bookContainer.appendChild(thisBook);
        });
    }

    return {getLibrary, setLibrary, getBook, renderLibrary, addBookToLibrary};
})();

// Example Books
library.addBookToLibrary("Harry Potter", "J.K. Rowling", 129, false);
library.addBookToLibrary("Red Rising", "Pierce Brown", 350, true);
library.addBookToLibrary("The Way of Kings", "Brandon Sanderson", 550, true);
library.renderLibrary();

// Check's for form button click
const bookForm = document.getElementById("book-form");
bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Get values and add the book if all required fields are filled
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const status = document.querySelector('select[name="status"]').value;
    const read = status === "has-read" ? true : false;

    library.addBookToLibrary(title, author, pages, read);
    library.renderLibrary();
});

// Add remove button functionality
document.querySelector(".container").addEventListener("click", (e) => {
    const lib = library.getLibrary();
    if (e.target.matches(".remove-button")) {
      const toRemove = e.target.dataset.uuid;
      library.setLibrary(lib.filter((b) => b.uuid !== toRemove));
      library.renderLibrary();
    } else if (e.target.matches(".change-status-button")) {
        const toChange = e.target.dataset.uuid;
        const bookToChange = library.getBook(toChange);
        bookToChange.read = !bookToChange.read;
        library.renderLibrary();
    }
  });