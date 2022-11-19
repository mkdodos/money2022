import { useState, useEffect } from 'react';
import Scoreboard from './components/Scoreboard';
// import YearSelector from './components/YearSelector';
import EditForm from './components/EditForm';

import { db } from '../../utils/firebase';
import { Divider } from 'semantic-ui-react';

export default function index() {
  const defaultItem = {
    year: '',
    section: '',
    ch: '',
    en: '',
    math: '',
    nature: '',
    society: '',
  };
  const [editedRow, setEditedRow] = useState(defaultItem);
  const [rows, setRows] = useState([]);

  const [open, setOpen] = useState(false);
  const [yearOpen, setYearOpen] = useState(false);

  const [editedIndex, setEditedIndex] = useState(-1);

  const [loading, setLoading] = useState(false);

  const dbCol = db.collection('schoolExams');

  useEffect(() => {
    dbCol.get().then((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setRows(data);
    });
  }, []);

  // 儲存
  const saveRow = () => {
    const newRows = rows.slice();

    editedRow.total =
      Number(editedRow.ch) +
      Number(editedRow.en) +
      Number(editedRow.math) +
      Number(editedRow.nature) +
      Number(editedRow.society);

    setLoading(true);
    if (editedIndex > -1) {
      dbCol
        .doc(editedRow.id)
        .update(editedRow)
        .then(() => {
          Object.assign(newRows[editedIndex], editedRow);
          setRows(newRows);
          setOpen(false);
          setLoading(false);
        });
    } else {
      dbCol.add(editedRow).then((doc) => {
        setRows([...rows, { ...editedRow, id: doc.id }]);
        setOpen(false);
        setLoading(false);
      });
    }
  };

  // 刪除
  const deleteRow = () => {
    setLoading(true);
    dbCol
      .doc(editedRow.id)
      .delete()
      .then(() => {
        const newRows = rows.slice();
        newRows.splice(editedIndex, 1);
        setRows(newRows);
        setOpen(false);
        setLoading(false);
      });
  };

  return (
    <div>
      {/* 編輯表單 */}
      <EditForm
        open={open}
        setOpen={setOpen}
        editedRow={editedRow}
        setEditedRow={setEditedRow}
        defaultItem={defaultItem}
        rows={rows}
        editedIndex={editedIndex}
        setEditedIndex={setEditedIndex}
        saveRow={saveRow}
        deleteRow={deleteRow}
        loading={loading}
        setLoading={setLoading}
        yearOpen={yearOpen}
        setYearOpen={setYearOpen}
      />
      <Divider horizontal>考試成績</Divider>
      {/* 資料表格 */}
      <Scoreboard
        rows={rows}
        open={open}
        setOpen={setOpen}
        editedRow={editedRow}
        setEditedRow={setEditedRow}
        setEditedIndex={setEditedIndex}
      />
    </div>
  );
}
