import React, { createContext, useState } from 'react';
// import uuid from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: 'a', author: 'mark', id: 1 },
    { title: 'b', author: 'dada', id: 2 },
    { title: 'c', author: 'ray', id: 3 },
  ]);


  const defalutItem = {
    title:'',
    author:''
  }
  const [editedBook, setEditedBook] = useState(defalutItem);

  const [editedIndex, setEditedIndex] = useState(-1);
  const [open, setOpen] = useState(false);

  const addBook = (title, author) => {
    // setBooks([...books, { title, author, id: Date.now() }]);
  };

  const openForm = () => {
    setEditedIndex(-1);
    setEditedBook(defalutItem)
    setOpen(true);
  }

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const editBook = (book) => {
    setEditedBook(book);
    setEditedIndex(books.indexOf(book));
    setOpen(true)
  };

  const updateBook = (book) => {    
    setEditedBook(book)
    // setBooks([...books, { title }]);
  }

  const saveBook = (book) => {    
    // setEditedBook({...book,title})
    if(editedIndex==-1){
      setBooks([...books, {...book, id:Date.now()}]);
    }else{
      const data = books.slice();
      Object.assign(data[editedIndex],book)
      setBooks(data);
    }

    setEditedBook(defalutItem)
    setEditedIndex(-1)
    setOpen(false)
   
  }

  return (
    <BookContext.Provider value={{ 
      books, addBook, removeBook, editBook, editedBook, updateBook, saveBook
      , openForm, open
      }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
