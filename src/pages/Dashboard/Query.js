import { useAuth } from '../../contexts/AuthContext';
import { useState, useEffect } from 'react';
import { db } from '../../utils/firebase';
import { Table, Button, Form, Input, Search } from 'semantic-ui-react';



import TableRow from './components/TableRow';
import SearchBar from './components/SearchBar';

export default function Query() {
  const { currentUser } = useAuth();
  const [rows, setRows] = useState([]);
  const [cate, setCate] = useState('');
  const [rowsCopy, setRowsCopy] = useState([]);
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    db.collection('balances')
      .limit(10)
      .orderBy('date', 'desc')
      .where('user', '==', currentUser.email)
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        // console.log(data);
        setRows(data);
        setRowsCopy(data);
      });
  }, []);

  const cateQuery = (e, obj) => {
    db.collection('balances')
      .orderBy('date', 'desc')
      .where('cate', '==', obj.value)
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });

        setRows(data);
        setRowsCopy(data);
      });

    console.log(obj.value);
  };
  return (
    <div>
      {cate}
      <SearchBar
        cateQuery={cateQuery}
        cate={cate}
        setCate={setCate}
        searchText={searchText}
        setSearchText={setSearchText}
        setRows={setRows}
        rowsCopy={rowsCopy}
      />

      <Table unstackable>
        <Table.Body>
          {rows.map((row) => {
            return <TableRow row={row} key={row.id} />;
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
