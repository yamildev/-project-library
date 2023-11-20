// select form & form field values
const selectForm = document.getElementById('form').value;
const selectTitle = document.getElementById('title').value;
const selectAuthor = document.getElementById('author').value;
const selectPages = document.getElementById('pages').value;
const selectIsRead = document.getElementById('read').value;

// get UI elements 
const cardContainer = document.getElementById('card-container');
// get add button
const addBtn = document.getElementById('addBtn');

// Data structures 
class Book {
    constructor(
        title = 'Unknown',
        author = 'Unknown',
        pages = '',
        isRead = '',
        ) {
        this.title = title;   
        this.author = author;
        this.pages = pages;
        this.read = read;  
      }
}
class Library {
    constructor() {
        this.books = [];
    }

    addBook(newBook) {
        this.books.push[newBook]
    }

    removeBook(title) {
        this.books = this.books.filter((book) => book.title !== title)
    }

    getBook(title) {
        return this.books.find((book) => book.title === title);
    }

    isInLibrary(newBook) {
        return this.books.some((book) => book.title === newBook.title);
    }
}

/*
Book instance = LIBRO (OBJETO)
Crear instancia pasando como argumentos, los inputs
Pasar (push) la instancia a Library.books ===> Libary.addBook(LIBRO)
Recorrer el array, renderizando los libros en el DOM.

*/

// crear libro

function createBook (bookData) {
    return `
        <div class="book-card animated">
        <div class="description">
            <h2>${bookData.title}</h2>
            <h3>${bookData.author}</h3>
            <p>${bookData.pages}</p>
        </div>
        <div class="action-btns">
            <button class="read read-status success">Read</button>
            <button class="delete">Delete</button>
        </div>
        <div class="status">Completed</div></div>
    `;
}
/*
cuando el usuario le da submit al form
1) se genera una instancia de Book cuyos argumentos: los inputs
2) library almacena la instancia
3) se recorre library, aplicando la funcion createBook.

*/

// submit event
const submitBtn = document.getElementById('submit-button');
submitBtn.addEventListener('click', submitHandler());
function submitHandler () {

}