import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import ReactDOM from 'react-dom';

import store from './redux/store';
import App from './components/App';
import ErrorBoundary from './components/ErrorBoundary';
import {BookstoreServiceProvider} from './components/BookstoreServiceContext';
import BookstoreService from './services/BookstoreService';

const bookstoreService = new BookstoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BookstoreServiceProvider value={bookstoreService}>
        <Router>
          <App />   
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundary>
  </Provider>, 
  document.getElementById('root')
);
