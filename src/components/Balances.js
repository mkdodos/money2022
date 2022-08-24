import { db, db_dada } from '../utils/firebase';
import DataTable from './DataTable';
import React from 'react';
import axios from 'axios';

export default function Balances() {
  const [rows, setRows] = React.useState([]);
  const schema = [
    { text: '日期', value: 'date', type: 'date' },
    { text: '帳戶', value: 'account', type: 'map' },
    { text: '類別', value: 'cate', type: 'string' },
    { text: '項目', value: 'title', type: 'string' },
    { text: '收入', value: 'income', type: 'number' },
    { text: '支出', value: 'expense', type: 'number' },
  ];

  React.useEffect(() => {
    // axios.get('http://192.168.0.12:9000/balances').then(res=>{
    //   setRows(res.data)
    // }) 
    
    db.collection('balances')
      .orderBy('date', 'desc')
      .limit(30)
      .get()
      .then((snapshot) => {
        console.log(snapshot.size);
        const data = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setRows(data);
      });
  }, []);

  return (
    <>
      {/* {rows.map(obj=>console.log(obj['account']['name']))} */}
      {/* {rows[0].date} */}
      {/* {rows[0].account.name} */}
      <DataTable rows={rows} schema={schema} />
    </>
  );
}
