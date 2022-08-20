// import React, { useContext } from 'react';
import BookContextProvider from '../contexts/BookContext';
import BookList from '../components/BookList';
import StockList from '../components/StockList';
import FirebaseBookContextProvider from '../contexts/FirebaseBookContext';

import NewBookForm from './BookForm';
// import  from '../contexts/BookContext';

const Books = () => {
  return (
    <>
      <FirebaseBookContextProvider collectionName="stocks">
        <NewBookForm />
        <StockList />
      </FirebaseBookContextProvider>
      <FirebaseBookContextProvider collectionName="books">
        <NewBookForm />
        <BookList />
      </FirebaseBookContextProvider>
    </>
  );
};

export default Books;
