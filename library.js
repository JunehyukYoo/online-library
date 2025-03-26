let myLibrary = [];

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
        botWrapper.setAttribute("style", "margin: 5px; padding: 0;");

        const thisStatus = document.createElement("p");
        thisStatus.setAttribute("style", "margin: 10px 0 0; font-size: 20px; font-weight: 400;");
        thisStatus.textContent = book.read ? "Status: Read" : "Status: Not Read";
        thisStatus.style.color = book.read ? "blue" : "red";

        const buttonWrapper = document.createElement("div");
        buttonWrapper.setAttribute("style", "margin: 0; display: flex;");

        const removeButton = document.createElement("button");
        removeButton.classList.add("remove-button");
        removeButton.setAttribute("data-uuid", book.uuid);
        removeButton.textContent = "Remove";

        const changeStatusButton = document.createElement("button");
        removeButton.classList.add("change-status-button");
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

// Example Books
addBookToLibrary("Harry Potter", "J.K. Rowling", 129, false);
addBookToLibrary("Red Rising", "Pierce Brown", 350, true);
addBookToLibrary("The Way of Kings", "Brandon Sanderson", 550, true);
console.table(myLibrary);

renderLibrary();

const bookForm = document.getElementById("book-form");
bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Get values and add the book if all required fields are filled
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const status = document.querySelector('select[name="status"]').value;
    const read = status === "has-read" ? true : false;

    addBookToLibrary(title, author, pages, read);
    renderLibrary();
});

// Add remove button functionality
document.querySelector(".container").addEventListener("click", (e) => {
    if (e.target.matches(".remove-button")) {
      const toRemove = e.target.dataset.uuid;
      myLibrary = myLibrary.filter((b) => b.uuid !== toRemove);
      renderLibrary();
    }
  });