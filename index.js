class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

if (localStorage.getItem('Book List') === null) {
  localStorage.setItem('Book List', JSON.stringify([]));
}

const bookList = JSON.parse(localStorage.getItem('Book List'));

function updateLocalStorage() {
  localStorage.setItem('Book List', JSON.stringify(bookList));
}

const displayBooks = () => {
  const booksContainer = document.querySelector('.books-container');
  booksContainer.innerHTML = '';
  for (let i = 0; i < bookList.length; i += 1) {
    if ((i % 2) === 0) {
      booksContainer.innerHTML += `<div class="book-data grey"><ul>
      <li>"${bookList[i].title}" by ${bookList[i].author}</li>
      </ul>
      <button class="remove-button" onclick="removeBook(${i})">Remove</button></div>`;
    } else {
      booksContainer.innerHTML += `<div class="book-data white"><ul>
      <li>"${bookList[i].title}" by ${bookList[i].author}</li>
      </ul>
      <button class="remove-button" onclick="removeBook(${i})">Remove</button></div>`;
    }
  }
};

const clearInput = () => {
  document.querySelector('.book-title').value = '';
  document.querySelector('.book-author').value = '';
};
const addBook = (bookTitle, bookAuthor) => {
  if (bookTitle === '' || bookAuthor === '') {
    alert('Fields cannot be empty');
  } else {
    const books = new Book(bookTitle, bookAuthor);
    bookList.push(books);
    updateLocalStorage();
    displayBooks();
    clearInput();
  }
};

// eslint-disable-next-line
const removeBook = (i) => {
  bookList.splice(i, 1);
  updateLocalStorage();
  displayBooks();
};

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  const bookTitle = document.querySelector('.book-title');
  const bookAuthor = document.querySelector('.book-author');
  e.preventDefault();
  addBook(bookTitle.value, bookAuthor.value);
});

window.onload = displayBooks();