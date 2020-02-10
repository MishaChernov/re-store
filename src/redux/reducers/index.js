const types = require('../types');

const initialStore = {
  books: [
    {
      title: 'Book 1',
      author: 'Author 1'
    },
    {
      title: 'Book 2',
      author: 'Author 2'
    },
  ]
};

const reducer = (state = initialStore, action) => {

  switch(action.type) {
    case types.BOOKS_LOADED: 
      return {
        books: action.payload
      }

    default: 
      return state;
  }
};

export default reducer;