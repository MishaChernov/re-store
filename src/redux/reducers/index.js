const types = require('../types');

const initialStore = {
  books: []
};

const reducer = (state = initialStore, action) => {

  switch(action.type) {
    case types.BOOKS_LOADED: 
      return {
        books: action.payload
      };
    default: {
      return state;
    };
  }
};

export default reducer;