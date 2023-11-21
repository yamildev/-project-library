// select form & form field values
const Form = document.getElementById('form').value;
const Title = document.getElementById('title').value;
const Author = document.getElementById('author').value;
const Pages = document.getElementById('pages').value;
const IsRead = document.getElementById('read').value;
// select UI elements 
const cardContainer = document.getElementById('card-container');
const addBtn = document.getElementById('addBtn');
const submitBtn = document.getElementById('submit-button');

// select #card-container innerHTML


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
        this.isRead = read;  
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
const library = new Library();

function renderizeBook () {

};

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
0) cuando el usuario le da submit al form
1) const book = new Book (title, author, pages, isRead)
2) library.addBook(book)
3) 
x) innerHTML += createBook (book) , entre las ultimas acciones
4) 


}
*/
//addBtn event
addBtn.addEventListener('click', addBtnHandler());
function addBtnHandler (){
    toggleForm(); // => form[display = 'block']
}

// submit event
submitBtn.addEventListener('click', submitHandler());
function submitHandler () {
    // create Book instance
    const book = new Book (title, author, pages, isRead);
    // add Book instance to Library instance
    library.addBook(book);
//  library.books.renderize(book); crear funcion en library que renderice los libros

    toggleForm(); // => form[display = 'none']
}

// '
function toggleForm() {
  // in addBtn Event will form[display = 'block']
  // in submitBtn Event will form[display = 'none']
    if (form.classList.contains('hide')) {
      form.classList.remove('hide');
      form.classList.add('show');
    } else {
      form.classList.remove('show');
      form.classList.add('hide');
    }
}