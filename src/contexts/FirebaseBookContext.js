import React, { createContext, useState, useEffect } from 'react';
import { db } from '../utils/firebase';

export const FirebaseBookContext = createContext();

const FirebaseBookContextProvider = (props) => {
  const dbCol = db.collection(props.collectionName)
  useEffect(() => {
    dbCol
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setBooks(data);
      });
  }, []);

  // 資料陣列
  const [books, setBooks] = useState([]);

  // 資料列預設值
  const defalutItem = {
    name: '',
    price: '',
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

  // 關閉編輯視窗
  const closeForm = () => {
    setEditedIndex(-1);
    setEditedBook(defalutItem);
    setOpen(false);
  };

  // 刪除列
  const removeBook = (id) => {
    dbCol.doc(id).delete()
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
      // const row = { ...book, id: Date.now() }
      dbCol.add(book).then((doc)=>{
        setBooks([...books, { ...book, id: doc.id } ]);
      })
      
    } else {
      dbCol.doc(book.id).update(book)
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
    <FirebaseBookContext.Provider
      value={{
        books,
        editedBook,
        open,
        removeBook,
        editBook,
        updateBook,
        saveBook,
        openForm,
        closeForm
      }}
    >
      {props.children}
    </FirebaseBookContext.Provider>
  );
};

export default FirebaseBookContextProvider;
