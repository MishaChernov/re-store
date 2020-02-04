import React from 'react';

const {
  Provider: bookstoreServiceProvider,
  Consumer: bookstoreServiceCounsumer
} = React.createContext();

export {
  bookstoreServiceProvider,
  bookstoreServiceCounsumer
}