import React from 'react';
import {BookStoreServiceConsumer} from '../BookstoreServiceContext';

const withBookstoreService = () => (Wrapped) => {

  return (props) => {

    return (
      <BookStoreServiceConsumer>
        {
          (bookstoreService) => <Wrapped {...props} bookstoreService={bookstoreService}/>
        }
      </BookStoreServiceConsumer>
    );
  }
}

export default withBookstoreService;