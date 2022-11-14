import { useAuth } from '../../contexts/AuthContext';
import { useState, useEffect } from 'react';
import { db } from '../../utils/firebase';
import { Table, Button, Form, Input, Header, Modal } from 'semantic-ui-react';

import TableRow from './components/TableRow';
import SearchBar from './components/SearchBar';
import EditForm from './components/EditForm';
import MyPhoto from './components/MyPhoto';

export default function Query() {
  const { currentUser } = useAuth();
  const [rows, setRows] = useState([]);

  const [defaultItem, SetDefaultItem] = useState({
    cate: '',
    title: '',
    income: '',
    expense: '',
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
    // db.collection('balances')
    //   .orderBy('date', 'desc')
    //   .where('user', '==', currentUser.email)
    //   .where('date', '>=', `2019-01-01`)
    //   .where('date', '<=', `2022-12-31`)
    //   .get()
    //   .then((snapshot) => {
    //     const data = snapshot.docs.map((doc) => {
    //       return { ...doc.data(), id: doc.id };
    //     });
    //     // console.log(data);
    //     setRows(data);
    //     setRowsCopy(data);
    //   });
  }, []);

  const cateQuery = (e, obj) => {
    db.collection('balances')
      .orderBy('date', 'desc')
      .where('user', '==', currentUser.email)
      .where('cate', '==', obj.value)
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        // setRows(data);
        setRowsCopy(data);

        const newRows = data.slice();
        newRows.map((row, index) => {
          let s1 = newRows[index].date.substring(0, 7);
          let s2 = '';
          if (index > 0) {
            s2 = newRows[index - 1].date.substring(0, 7);
          }

          let flag = false;
          if (s1 != s2) {
            flag = true;
          }

          let newRow = { ...row, s1, s2, flag };
          newRows[index] = newRow;
        });

        setRows(newRows);

        console.log(newRows);
      });

    // setRows(rowsCopy.filter((row) => row.cate?.includes(obj.value)));
    setCate(obj.value);
  };

  const saveRow = () => {
    setLoading(true);
    db.collection('balances')
      .doc(editedRow.id)
      .update(editedRow)
      .then(() => {
        Object.assign(rows[editedIndex], editedRow);
        setLoading(false);
        setOpen(false);
      });
    //  const index = rows.indexOf(editedRow);
  };

  const handleRowClick = (row) => {
    // console.log(row);
    // 原始資料可能只有支出或收入,在欄位 onChange 時,會出現錯誤,在 defaultItem 有包含全部預設值
    // 一併設定給 editedRow , 即可解決
    setEditedRow({ ...defaultItem, ...row });
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
          <MyPhoto id={editedRow?.id} />
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
          {rows.map((row, index) => {
            return (
              <>
                {row.flag && (
                  <Table.Row positive>
                    <Table.Cell colSpan="2" textAlign="center">
                      <Header as="h4">{row.s1}</Header>
                    </Table.Cell>
                  </Table.Row>
                )}
                <TableRow
                  index={index}
                  rows={rows}
                  row={row}
                  key={row.id}
                  onClick={() => handleRowClick(row)}
                />
              </>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
