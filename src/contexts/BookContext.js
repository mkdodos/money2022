import React, { createContext, useState } from 'react';
// import uuid from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: 'a', author: 'mark', id: 1 },
    { title: 'b', author: 'dada', id: 2 },
    { title: 'c', author: 'ray', id: 3 },
  ]);

  const [editedBook, setEditedBook] = useState({
    title:'',
    author:''
  });

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: Date.now() }]);
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const editBook = (book) => {
    setEditedBook(book);
  };

  const updateBook = (book) => {    
    setEditedBook(book)
    // setBooks([...books, { title }]);
  }

  const saveBook = (book,title) => {    
    // setEditedBook({...book,title})
    const data = books.slice();
    Object.assign(data[1],book)
    setBooks(data);
  }

  return (
    <BookContext.Provider value={{ books, addBook, removeBook, editBook, editedBook, updateBook, saveBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
