import { useState, useEffect } from 'react';

// 查詢列
import SearchBar from './components/SearchBar';

// firebase
import { db } from '../../utils/firebase';

// 使用者登入相關
import { useAuth } from '../../contexts/AuthContext';
// 資料顯示
import DataList from './components/DataList';

// UI
import { Modal, Button } from 'semantic-ui-react';

import EditForm from './components/EditForm';

export default function Query() {
  // 目前登入使用者
  const { currentUser } = useAuth();
  // 資料列
  const [rows, setRows] = useState([]);

  const [defaultItem, SetDefaultItem] = useState({
    cate: '',
    title: '',
    income: '',
    expense: '',
  });
  const [editedRow, setEditedRow] = useState(defaultItem);

  // 編輯視窗開關

  const [open, setOpen] = useState(false);

  useEffect(() => {
    cateQuery();
  }, []);
  const cateQuery = (e, obj) => {
    db.collection('balances')
      .orderBy('date', 'desc')
      .where('user', '==', currentUser.email)
      .where('cate', '==', '洗牙')
      // .where('cate', '==', obj.value)
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        // setRows(data)
        // console.log(data);
        // 處理日期,取得日期的年月比對,不同的話設定 flag 為 true
        // 在顯示資料時, flag 為 true 才將年月顯示在標題列
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
        // console.log(newRows);
      });
  };

  const handleDataListRowClick = (row) => {
    setOpen(true);
    console.log(row);

    // 原始資料可能只有支出或收入,在欄位 onChange 時,會出現錯誤,在 defaultItem 有包含全部預設值
    // 一併設定給 editedRow , 即可解決
    setEditedRow({ ...defaultItem, ...row });
  };

  const saveRow = () => {
    console.log(editedRow);
    // setLoading(true);
    db.collection('balances')
      .doc(editedRow.id)
      // 帳戶欄位是以物件型態儲存,更新寫法和一般欄位有所差異
      .update({...editedRow,account:{...editedRow.account,name:'信用卡'}})
      // .update(editedRow)
      .then(() => {
        // Object.assign(rows[editedIndex], editedRow);
        // setLoading(false);
        setOpen(false);
      });
  };

  return (
    <div>
      <SearchBar cateQuery={cateQuery} />
      <DataList rows={rows} onDataListRowClick={handleDataListRowClick} />

      <Modal
        open={open}
        closeIcon
        onClose={() => {
          setOpen(false);
        }}
      >
        <Modal.Header>編輯</Modal.Header>
        <Modal.Content>
          <EditForm editedRow={editedRow} />
        </Modal.Content>
        <Modal.Actions>
          <Button color="teal" onClick={saveRow}>
            儲存
          </Button>
        </Modal.Actions>
      </Modal>

      {/* <TableRow rows={rows}/> */}
    </div>
  );
}
