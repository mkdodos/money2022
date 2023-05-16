import { useState, useEffect } from 'react';
import { db } from '../utils/firebase';
import { Dropdown, Form } from 'semantic-ui-react';
import { useAuth } from '../contexts/AuthContext';

export default function CateDropdown({ cate, setCate,placeholder, onChange,label,width, name }) {
  const { currentUser } = useAuth();
  const [rows, setRows] = useState([]);
  const [rowsCopy, setRowsCopy] = useState([]);
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    db.collection('cates')
      // .limit(10)
      .where('user', '==', currentUser.email)
      .orderBy('prior')
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          return { text: doc.data().name, value: doc.data().name, key: doc.id };
        });
        // console.log(data);
        setRows(data);
        // setRowsCopy(data);
      });
  }, []);
  return (
    <Form.Select
      value={cate}
      name={name}
      label={label}
      placeholder={placeholder}
      // fluid
      fluid
      width={width}
      // selection
      options={rows}
      onChange={onChange}
    />
  );
}
