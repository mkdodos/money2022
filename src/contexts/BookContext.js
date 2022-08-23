import React, { createContext, useState } from 'react';
// import uuid from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  // 資料陣列
  const [books, setBooks] = useState([
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
  ]);

  // 資料列預設值
  const defalutItem = {
    title: '',
    author: '',
  };
  // 編輯列
  const [editedBook, setEditedBook] = useState(defalutItem);
  // 編輯列索引
  const [editedIndex, setEditedIndex] = useState(-1);
  // 視窗開關
  const [open, setOpen] = useState(false);

  // 開啟編輯視窗
  const openForm = () => {
    setEditedIndex(-1);
    setEditedBook(defalutItem);
    setOpen(true);
  };

  // 刪除列
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  // 按下表格的編輯列
  const editBook = (book) => {
    setEditedBook(book);
    setEditedIndex(books.indexOf(book));
    setOpen(true);
  };

  // 表單輸入時 onChange
  const updateBook = (book) => {
    setEditedBook(book);
  };

  // 儲存資料
  const saveBook = (book) => {
    // 新增或修改
    if (editedIndex == -1) {
      setBooks([...books, { ...book, id: Date.now() }]);
    } else {
      const data = books.slice();
      Object.assign(data[editedIndex], book);
      setBooks(data);
    }
    // 預設值
    setEditedBook(defalutItem);
    setEditedIndex(-1);
    // 視窗關閉
    setOpen(false);
  };

  return (
    <BookContext.Provider
      value={{
        books,
        editedBook,
        open,
        removeBook,
        editBook,
        updateBook,
        saveBook,
        openForm,
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
