import { useAuth } from "../../contexts/AuthContext";
import { useState, useEffect } from "react";

import List from "./components/List";

import { db } from '../../utils/firebase';

export default function Cates() {

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



  const {currentUser} = useAuth()

  const [rows, setRows] = useState([]);
  useEffect(() => {
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


  return (
    <>
    <List rows={rows} schema={schema}></List>
    </>
  )
}