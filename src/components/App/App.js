import React from 'react';
import {connect} from 'react-redux';
import {
  BrowserRouter as Router,
  Route, 
  Switch} from 'react-router-dom';

import Footer from '../Footer';
import Header from '../Header';

import HomePage from '../pages/HomePage';
import CartPage from '../pages/CartPage';


require('./app.scss');

function App(props) {

  return(
    <>
      <Header />
      <Router>
        <Switch>
          <Route path='/cart'>
            <CartPage />
          </Route>
          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>
      </Router>
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