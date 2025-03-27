# Online Library

Online Library is a web-based application that lets users catalogue books they have read or plan to read. With an intuitive interface, users can add new books to their library, track reading status, and remove books from their collection. The application uses modern JavaScript and CSS to provide a seamless user experience.

# Demo Link
https://junehyukyoo.github.io/online-library

## Features

- **Book Catalogue:** Easily add books with details such as title, author, page count, and reading status.
- **Dynamic Display:** Books are displayed as cards in a responsive grid layout. Each card shows the book’s title, author, page count, and whether it has been read.
- **Add & Remove Books:** Use the provided form to add new books. Remove books from the catalogue with a simple click of a button.
- **Validation:** Ensure that all required fields (title, author, and page count) are filled out before adding a new book.
- **Responsive Design:** Built with a mobile-first approach to work well on all screen sizes.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/online-library.git
   cd online-library
   ```

2. **Open the project:**

   You can simply open the `index.html` file in your browser, or use a local development server such as [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in Visual Studio Code.

## Usage

1. Open `index.html` in your preferred web browser.
2. Use the form provided to add a new book:
   - Fill in the **Title**, **Author**, and **Page Count** fields.
   - Choose the reading status from the dropdown.
   - Click the **Add Book** button.
3. The new book will be added to the library and displayed in the grid.
4. To remove a book, click the **Remove** button on the book’s card.

## Technologies Used

- **HTML5:** Structure and semantics.
- **CSS3:** Styling and responsive design.
- **JavaScript (ES6):** Application logic and dynamic rendering.
- **[crypto.randomUUID()](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID):** Unique identifier generation for each book.

## Contributing

Contributions are welcome! If you would like to contribute, please fork the repository and submit a pull request with your improvements.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Inspired by the need for a simple yet effective tool to manage and track personal reading lists.
- Special thanks to all the contributors and open-source projects that made this application possible.
```