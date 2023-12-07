// select form & form field values
const form = document.getElementsByClassName('form');
const formElement = form[0]
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const isRead = document.getElementById('isRead');
// select UI elements 
const cardContainer = document.getElementById('card-container');
const addBtn = document.getElementById('addBtn');
const submitBtn = document.getElementById('submit-button');



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
        this.isRead = isRead;  
      }
}
class Library {
    constructor() {
        this.books = [];
    }

    addBook(newBook) {
        this.books.push[newBook];
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

//addBtn event
addBtn.addEventListener('click', addBtnHandler);
function addBtnHandler (){
    console.log('addBtnHandler')
    toggleForm(); // => form[display = 'block']
}

// submit event
submitBtn.addEventListener('click', submitHandler);
function submitHandler () {
    if(formInputsAreValid(title.value, author.value, pages.value)) {
        
        resetDisplay(); // actualize GRID
        const book = new Book(title.value, author.value, pages.value, isRead.checked);
        library.books.push(book);
        displayBooks();
    
        toggleForm(); // => form[display = 'none']
        resetFormFields(title, author, pages, isRead);
    
    } else alert('Wrong or empty input/s');   
};

function createBook (bookData) {
    return `
        <div class="card">
        <div class="description">
            <h2>${this.title.value}</h2>
            <h3>${this.author.value}</h3>
            <p>Pages: ${this.pages.value}</p>
        </div>
        <div class="action-btns">
            <button class="is-read">Not read</button>
            <button class="delete">Delete</button>
        </div>
        <div class="status">On progress</div></div>
    `;
}

function displayBooks () {
    for (const books in library.books) {
        //console.log(library.books[books])
        cardContainer.innerHTML += createBook(library.books[books])
    }    
};

function resetDisplay() {
    cardContainer.innerHTML = ''; 
};

function toggleForm() {
    // in addBtn Event will form[display = 'block']
    // in submitBtn Event will form[display = 'none']
      if (formElement.classList.contains('hide')) {
        formElement.classList.remove('hide');
        formElement.classList.add('show');
      } else {
        formElement.classList.remove('show');
        formElement.classList.add('hide');
      }
  }

function formInputsAreValid (title, author, pages) {
    return title && author && !isNaN(pages); 
}
function resetFormFields (title, author, pages, isReadCheckBox) {
    title.value= '';
    author.value = '';
    pages.value= '';
    isReadCheckBox.checked = false;
}



