const types = require('../types');

const booksLoaded = (newBooks) => {
  return {
    type: types.BOOKS_LOADED,
    action: newBooks
  }
};

export {
  booksLoaded
};