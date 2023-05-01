import React from 'react'
import { useAuth } from '../../contexts/AuthContext';
import { useState, useEffect } from 'react';

import List from './components/List';

import { Button } from 'semantic-ui-react';

import { Link } from 'react-router-dom';

import { db } from '../../utils/firebase';


export default function index() {

  const schema = [
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


  // 登入使用者
  const { currentUser } = useAuth();
  // 資料
  const [rows, setRows] = useState([]);
  // 設定資料
  useEffect(() => {
    db.collection('catesNote')
      .where('user', '==', currentUser.email)
      // .orderBy('prior')
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setRows(data);
      });
  }, []);
  return (
    <div>
       <Link to={`/cates-note/insert`}>新增</Link>
      <List rows={rows} schema={schema}/>
      </div>
  )
}
