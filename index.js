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
    booksContainer.innerHTML += `<ul style="list-style: none; padding: 0;">
      <li>${bookList[i].title}</li>
      <li>${bookList[i].author}</li>
      <button class="remove-button" onclick="removeBook(${i})">Remove</button><hr>
      </ul>`;
  }
};

const addBook = (bookTitle, bookAuthor) => {
  if (bookTitle === '' || bookAuthor === '') {
    alert('Fields cannot be empty');
  } else {
    const books = {
      title: bookTitle,
      author: bookAuthor,
    };
    bookList.push(books);
    updateLocalStorage();
    displayBooks();
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