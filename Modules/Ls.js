class Ls {
  constructor(booksKey) {
    this.booksKey = booksKey;
  }

  addToLS = (bookObj) => {
    localStorage.setItem(this.booksKey, JSON.stringify(bookObj));
  };

  getFromLS = (key) => {
    const lsData = localStorage.getItem(key);
    if (lsData) {
      const data = JSON.parse(lsData);
      return data;
    }

    return [];
  };

  removeFromLS = (bookId) => {
    const bookdata = this.getFromLS(this.booksKey);
    bookdata.filter((el, i) => {
      if (el.id === Number(bookId)) {
        bookdata.splice(i, 1);
        this.addToLS(bookdata);
      }
      return true;
    });
  };
}

export default Ls;
