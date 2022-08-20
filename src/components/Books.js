// import React, { useContext } from 'react';
import BookContextProvider from '../contexts/BookContext';
import BookList from '../components/BookList';
import NewBookForm from './BookForm';
// import  from '../contexts/BookContext';

const Books = () => {  
  return <BookContextProvider>
    <NewBookForm/>
    <BookList/>
    
  </BookContextProvider>;
};

export default Books;
