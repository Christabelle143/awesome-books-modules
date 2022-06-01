import Ls from './Ls.js';
class BooksList extends Ls {
    books = [];
  
    constructor(
      form,
      inputAuthor,
      inputTitle,
      bookListContainer,
      booksKey = 'books',
    ) {
      super(booksKey);
      this.form = form;
      this.inputAuthor = inputAuthor;
      this.inputTitle = inputTitle;
      this.bookListContainer = bookListContainer;
      this.booksKey = booksKey;
    }
  
    removeBook = (id, btnHTML) => {
      btnHTML.target.parentNode.remove();
      this.removeFromLS(id);
    };
  
    renderHTML = (obj) => `
              <div class = "bookcontainer">
                  <div class='book-title'>${obj.title}</div>
                  <p>by</p>
                  <div class='book-author'>${obj.author}</div>
                  <button class='remove-book' data-id="${obj.id}">Remove</button>
              </div>
              `;
  
    findRemoveButtons = () => {
      const removeBookBtn = document.querySelectorAll('.remove-book');
  
      removeBookBtn.forEach((btn) => {
        btn.addEventListener('click', (event) => {
          const btnId = event.target.getAttribute('data-id');
  
          this.removeBook(btnId, event);
        });
      });
    };
  
    addBookToHTML = (obj) => {
      this.bookListContainer.insertAdjacentHTML(
        'afterbegin',
        this.renderHTML(obj),
      );
      this.findRemoveButtons();
    };
  
    addToBookList = (idBook, authorInput, titleInput) => {
      const bookObj = {
        id: idBook,
        title: titleInput,
        author: authorInput,
      };
  
      this.books[this.booksKey] = this.getFromLS(this.booksKey);
      this.books[this.booksKey].push(bookObj);
      this.addBookToHTML(bookObj);
      this.addToLS(this.books[this.booksKey]);
    };
  
    getUniqueId = () => {
      const data = this.getFromLS(this.booksKey);
      let max = 0;
  
      data.forEach((_, i) => {
        if (data[i].id > max) {
          max = data[i].id;
        }
      });
      max += 1;
      return max;
    };
  
    init() {
      const data = this.getFromLS(this.booksKey);
      if (data.length > 0) {
        data.forEach((book) => {
          this.addBookToHTML(book);
        });
      }
  
      this.form.addEventListener('submit', (e) => {
        e.preventDefault();
        const bookId = this.getUniqueId();
  
        const authorText = this.inputAuthor.value;
        const titleText = this.inputTitle.value;
  
        this.addToBookList(bookId, authorText, titleText);
        this.form.reset();
      });
    }
  }
  export default BooksList;