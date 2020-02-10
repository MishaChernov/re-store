import React from 'react';
import {connect} from 'react-redux';
import Footer from '../Footer';
import Header from '../Header';


require('./app.scss');

function App(props) {

  return(
    <>
      <Header />
      <main className="container">
        {props.books.map(book => (
          <>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
          </>
        ))}
      </main>
      <Footer />
    </>
  )
}

const mapStateToProps = (state) => {

  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(App);