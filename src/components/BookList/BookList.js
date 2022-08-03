import React from 'react';
import {connect} from 'react-redux';

require('./BookList.scss');

function BookList(books) {

  console.log(books);

  return(
    <ul className="book-list">
      {books.map(book => {
        return(
          <li key={book.id}>
            <span>Title: {book.title}</span>
            <br/>
            <span>Author: {book.author}</span>
          </li>
        )
      })}
    </ul>
  );
}

const mapStateToProps = ({books}) => {
  return {books};
};

export default connect(mapStateToProps)(BookList);