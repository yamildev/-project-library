const form = document.getElementById('form');
const cardParent = document.getElementById('card-container')
const titleField = document.getElementById('title');
const authorField = document.getElementById('author');
const pagesField = document.getElementById('pages');
const readField = document.getElementById('read');
const addBookBtn = document.getElementById('addBookBtn');
const library = [];
const bookIndex = library.length;

class Book {
  constructor(title, author, pages, read) {
    this.title = title;   
    this.author = author;
    this.pages = pages;
    this.read = read;  
  }
}

// organizar nomenclaturas, por (library > book) || (parent > child)
Book.prototype.renderizeBook = function () {
  // create card element and customize 
  const card = (() => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('data-index', bookIndex); 
    return card;
  })();
  // create delete button element for stored books 
  const delBtn = (() => {
    const btn = document.createElement('button');
    btn.textContent = 'x'
    btn.classList.add('delBookBtn');
    btn.setAttribute('type', 'button');
    return btn;
  })();


  //function: create paragraph and text content attribute
  function createParagraph (string) {
    const paragraph = document.createElement('p');
    paragraph.textContent = string;
    return paragraph;
  }
  //create card childs elements
  const titleElement = createParagraph(`Title: ${this.title}`);
  const authorElement = createParagraph(`Author: ${this.author}`);
  const pagesElement = createParagraph(`Pages: ${this.pages}`);
  const readElement = createParagraph(`Read: ${this.read}`);
  
  const cardElements = [];
  cardElements.push(titleElement, authorElement, pagesElement, readElement, delBtn);;   
  cardElements.forEach(element => card.appendChild(element));
  cardParent.appendChild(card);
  
  //delete button in cards. 
  delBtn.addEventListener('click', handleDelBtn)  
  function handleDelBtn () {
    //store reference to parent 'card' and then stores their data-index value;
    const card = delBtn.parentNode;
    const index = card.getAttribute('data-index');
    card.parentNode.removeChild(card);
    delete library[index] 
    };
};
//add an eventListener to the botton, when the event runs, 
addBookBtn.addEventListener('click', handleAddBtn);
function handleAddBtn () {
  form.style.display = 'block'; 
};

form.addEventListener('submit', handleSubmit);
function handleSubmit (event) {

  event.preventDefault(); // prevent page reload
  //stablish form data, get data fields to tempBook and then upload it to library.   
  const formData = new FormData(form); 
  const title = formData.get('title');
  const author = formData.get('author');
  const pages = parseInt(formData.get('pages'));
  const read = formData.get('read') === 'on';
  
  if (!isValidInput(title, author, pages)) {
    alert('Faltan datos por llenar')
  } else {
    //Create a new instance from Book constructor and add it to library Array.
    const tempBook = new Book (title, author, pages, read);   
    library.push(tempBook);
    console.log(library);

    hideForm.call(form);
    resetFormFields(titleField, authorField, pagesField, readField);
    library[library.length -1].renderizeBook();
  };
};

function hideForm () {
  this.style.display = 'none';
}

function isValidInput (title, author, pages) {
  return title && author && !isNaN(pages);
}

function resetFormFields (title, author, pages, read) {
  title.value = '';
  author.value = '';
  pages.value = '';
  read.checked = false; 
}

function addBookToLibrary (title, author, pages, read) {
  const tempBook = new Book(title, author, pages, read)
  library.push(tempBook);
}


