import { useState, useEffect } from 'react';
import { db } from '../utils/firebase';
import { Dropdown, Form } from 'semantic-ui-react';
import { useAuth } from '../contexts/AuthContext';

export default function AccountDropdown({ account, name, onChange,label }) {
  const { currentUser } = useAuth();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    db.collection('accounts')
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
    label={label}
      value={account}
      name={name}
      fluid      
      options={rows}
      onChange={onChange}
    />
  );
}
