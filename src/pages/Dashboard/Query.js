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
    income:'',
    expense:''
  });
  const [editedRow, setEditedRow] = useState(defaultItem);

  // 點選列時,記錄該列的索引,在儲存時將資料更新至該列
  const [editedIndex, setEditedIndex] = useState(-1);

  const [open, setOpen] = useState(false);
  // 資料更新時,做為按鈕顯示載入中的依據
  const [loading, setLoading] = useState(false);

  const [cate, setCate] = useState('');
  const [rowsCopy, setRowsCopy] = useState([]);
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    db.collection('balances')

      .orderBy('date', 'desc')
      .where('user', '==', currentUser.email)
      // .where('date', '>=', `2019-01-01`)
      // .where('date', '<=', `2022-03-31`)
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

  const saveRow = () => {
    setLoading(true)
    db.collection('balances')
      .doc(editedRow.id)
      .update(editedRow)
      .then(() => {
        Object.assign(rows[editedIndex], editedRow);
        setLoading(false)
        setOpen(false);
      });
    //  const index = rows.indexOf(editedRow);
  };


  const handleRowClick = (row) => {
    // console.log(row);
    // 原始資料可能只有支出或收入,在欄位 onChange 時,會出現錯誤,在 defaultItem 有包含全部預設值
    // 一併設定給 editedRow , 即可解決
    setEditedRow({...defaultItem,...row});
    const index = rows.indexOf(row);
    setEditedIndex(index);
    setOpen(true);
  };


  return (
    <div>
      <Modal
        open={open}
        closeIcon
        onClose={() => {
          setOpen(false);
        }}
      >
        <Modal.Header>編輯</Modal.Header>
        <Modal.Content>
          <EditForm editedRow={editedRow} setEditedRow={setEditedRow} />
        </Modal.Content>
        <Modal.Actions>
          <Button color="teal" onClick={saveRow} loading={loading}>
            儲存
          </Button>
        </Modal.Actions>
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
                onClick={()=>handleRowClick(row)}
              />
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
