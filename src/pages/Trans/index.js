import React, { useEffect, useState } from 'react';
import { db } from '../../utils/firebase';

import TransList from './TransList';
import './index.css';

import { useAuth } from '../../contexts/AuthContext';

export default function Index() {
  // accounts 帳戶資料
  // {
  //   "name": "一卡通",
  //   "balance": 0,
  //   "prior": 6,
  //   "user": "dada@gmail.com",
  //   "id": "4NV13sCkLhIhxX1EfXZF"
  // }

  const { currentUser } = useAuth();

  const [rows, setRows] = useState([]);

  const [options, setOptions] = useState([]);

  useEffect(() => {
    console.clear();
    // console.log(currentUser.email);
    db.collection('accounts')
      // .where('user', '==', 'dada@gmail.com')
      .where('user', '==', currentUser.email)
      .orderBy('prior')
      // .limit(1)
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });

        setRows(data);

        const items = snapshot.docs.map((doc) => {
          const item = doc.data();
          return {
            key: doc.id,
            // text: item.name + ' $' + item.balance,
            text: item.name,
            value: doc.id,
          };
        });

        setOptions(items);

        console.log(items);
      });
  }, []);
  return (
    <div>
      <TransList rows={rows} options={options} />
      {/* <AccList rows={rows} /> */}
    </div>
  );
}
