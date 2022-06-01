import { BooksList } from './modules/BooksList.js';
import './modules/Date.js';
const form = document.getElementById('add-book');
const inputAuthor = document.getElementById('author');
const inputTitle = document.getElementById('title');
const bookList = document.getElementById('book-list');

const bookListClass = new BooksList(form, inputAuthor, inputTitle, bookList);
bookListClass.init();
const navContainer = document.querySelectorAll('.nav-container li');
const navContainerArray = Array.from(navContainer);
const sections = document.querySelectorAll('section');
const sectionsArray = Array.from(sections);

navContainerArray.forEach((ele) => {
  ele.addEventListener('click', (e) => {
    sectionsArray.forEach((section) => {
      section.classList.remove('active');
    });
    const showElementById = document.querySelector(
      e.target.getAttribute('href'),
    );
    showElementById.classList.add('active');
  });
});
