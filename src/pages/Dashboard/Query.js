import { useAuth } from '../../contexts/AuthContext';
import { useState, useEffect } from 'react';
import { db } from '../../utils/firebase';
import { Table, Button, Form, Input, Search, Modal } from 'semantic-ui-react';

import TableRow from './components/TableRow';
import SearchBar from './components/SearchBar';
import EditForm from './components/EditForm';

export default function Query() {
  const { currentUser } = useAuth();
  const [rows, setRows] = useState([]);

  const [defaultItem, SetDefaultItem] = useState({
    cate: '',
    title: '',
  });
  const [editedRow, setEditedRow] = useState(defaultItem);

  const [open,setOpen]=useState(false);

  const [cate, setCate] = useState('');
  const [rowsCopy, setRowsCopy] = useState([]);
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    db.collection('balances')

      .orderBy('date', 'desc')
      .where('user', '==', currentUser.email)
      .where('date', '>=', `2019-01-01`)
      .where('date', '<=', `2022-03-31`)
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
    setRows(rowsCopy.filter((row) => row.cate?.includes(obj.value)));

    setCate(obj.value);
    // db.collection('balances')
    //   .orderBy('date', 'desc')
    //   .where('cate', '==', obj.value)
    //   .get()
    //   .then((snapshot) => {
    //     const data = snapshot.docs.map((doc) => {
    //       return { ...doc.data(), id: doc.id };
    //     });

    //     setRows(data);
    //     setRowsCopy(data);
    //   });

    // console.log(obj.value);
  };
  return (
    <div>
      <Modal open={open} closeIcon onClose={()=>{
        setOpen(false)
      }}>
        <Modal.Header>編輯</Modal.Header>
        <Modal.Content>
          <EditForm editedRow={editedRow} />
        </Modal.Content>
      </Modal>

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
            return (
              <TableRow
                row={row}
                key={row.id}
                onClick={() => {
                  console.log('edit');
                  setEditedRow(row);
                  setOpen(true)
                }}
              />
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
