import AutoTable from './AutoTable';
import { db } from '../utils/firebase';
import React, { useEffect, useState } from 'react';

import { useAuth } from '../contexts/AuthContext';


export default function Cates() {

  const {currentUser} = useAuth()

  const [rows, setRows] = useState([]);
  React.useEffect(() => {
    db.collection('cates')
    .where('user','==',currentUser.email)
    .orderBy('prior')
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setRows(data);
      });
  }, []);
  const schema = [
    // {
    //   name: '欄位名稱',
    //   text: '表格標題列欄位文字, 表單 placeholder 文字',
    //   type: '表單輸入項類型',
    // },
    // {
    //   name: 'date',
    //   text: '日期',
    //   type: 'date',
    // },
    // {
    //   name: 'title',
    //   text: '項目',
    //   type: 'text',
    // },
    // {
    //   name: 'expense',
    //   text: '支出',
    //   type: 'number',
    // },
    {
      name: 'name',
      text: '名稱',
      type: 'text',
    },
    {
      name: 'prior',
      text: '順序',
      type: 'number',
    },
  ];

  const defalutItem = {
    // date: new Date().toISOString().slice(0, 10),
    // title: '',
    // expense: '',
    name: '',
    prior: '',
  };

  return (
    <AutoTable
      rows={rows}
      // collectionName="cates"
      schema={schema}
      defalutItem={defalutItem}
    />
  );
}
