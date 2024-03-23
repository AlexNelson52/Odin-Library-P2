const dialog = document.querySelector('.dialog-div');
const dialogButton = document.querySelector('.dialogButton');
const addBookButton = document.querySelector('.addBookButton');
const dialogSubmit = document.querySelector('.dialogSubmit');
const formUserInput = document.querySelector('#userFormInput');
const titleInput = document.querySelector('.userBookTitle');
const authorInput = document.querySelector('.userAuthor');
const pagesInput = document.querySelector('.userPages');
const userRead = document.querySelector('.userRead');
const bookTable = document.querySelector('.bookInfoTable')
const removeButton = document.querySelector('.removeButton')
const bookDisplay = document.querySelector('.bookInfoTable')

class Book {
  title;
  author;
  page;
  read;
  element;
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read
    let bookTableDiv = document.createElement('tr');
    let bookTableTitle = document.createElement('td');
    bookTableTitle.textContent = this.title;
    let bookTableAuthor = document.createElement('td');
    bookTableAuthor.textContent = this.author;
    let bookTablePages = document.createElement('td');
    bookTablePages.textContent = this.pages;
    let bookTableRead = document.createElement('td');
    let bookTableRemove = document.createElement('td');
    let readButton = document.createElement('input')
    bookTableRead = document.createElement('td');
    readButton.setAttribute("type", "checkbox")
    readButton.classList.add('userRead')
    bookTableRead.appendChild(readButton)
    readButton.checked = this.read;
    let removeBtn = document.createElement('button');
    removeBtn.textContent = 'X';
    removeBtn.classList.add('removeButton');
    bookTableRemove.appendChild(removeBtn);
    bookTableDiv.appendChild(bookTableTitle);
    bookTableDiv.appendChild(bookTableAuthor);
    bookTableDiv.appendChild(bookTablePages);
    bookTableDiv.appendChild(bookTableRead);
    bookTableDiv.appendChild(bookTableRemove);
    bookDisplay.appendChild(bookTableDiv)
    removeBtn.addEventListener('click', () => {
      bookDisplay.removeChild(bookTableDiv)
    })
  }
}

dialogButton.addEventListener('click', () => {
  titleInput.textContent = ' ';
  authorInput.textContent = ' ';
  pagesInput.textContent = ' ';
  userRead.checked = false;
  dialog.style.display = 'none'
})

addBookButton.addEventListener('click', () => {
  userRead.checked = false;
  dialog.style.display = 'flex'
})

dialogSubmit.addEventListener('click', () => {
  titleInput.textContent = '';
  authorInput.textContent = '';
  pagesInput.textContent = '';
  dialog.style.display = 'none'
})

formUserInput.addEventListener('submit', () => {
  titleInput.textContent = '';
  authorInput.textContent = '';
  pagesInput.textContent = '';

  let newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, userRead.checked)
})
