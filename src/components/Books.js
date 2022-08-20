// import React, { useContext } from 'react';
import BookContextProvider from '../contexts/BookContext';
import BookList from '../components/BookList';
import NewBookForm from './BookForm';
// import  from '../contexts/BookContext';

const Books = () => {  
  return <BookContextProvider>
    <BookList/>
    <NewBookForm/>
  </BookContextProvider>;
};

export default Books;
