import { compact } from 'lodash';
import { useEffect, useState } from 'react';
import { Table, Form, Button, Input } from 'semantic-ui-react';
import { db } from '../../utils/firebase';
export default function Balances2() {
  // 記帳資料
  const [rows, setRows] = useState([]);
  // 查詢用
  const [rowsCopy, setRowsCopy] = useState([]);

  // 編輯列預設值
  const defaultRow = {
    date: new Date().toISOString().slice(0, 10),
    title: '',
    expense: '',
    type: '一般',
  };

  // 編輯列
  const [editedRow, setEditedRow] = useState(defaultRow);

  // const [editedRowDefault, setEditedRowDefault] = useState();

  // 記帳類型下拉資料
  const types = [
    { key: '1', text: '一般', value: '一般' },
    { key: '2', text: '轉帳', value: '轉帳' },
    { key: '3', text: '投資', value: '投資' },
  ];

  // 按鈕載入中圖示
  const [loading, setLoading] = useState(false);

  // const dbCol = db.collection('test');
  const dbCol = db.collection('balances');

  useEffect(() => {
    getBalancesData();
  }, []);

  // 取得記帳資料
  const getBalancesData = () => {
    setLoading(true);
    dbCol
      .limit(200)      
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setRows(data);
        setRowsCopy(data);
        setLoading(false);
      });
  };
  // 表單輸入時,設定編輯列的值
  const handleInputChange = (e) => {
    setEditedRow({ ...editedRow, [e.target.name]: e.target.value });
  };

  // 儲存
  const saveRow = () => {
    setLoading(true);
    // 用 id 判斷新增或更新
    if (editedRow.id) {
      dbCol
        .doc(editedRow.id)
        .update(editedRow)
        .then(() => {
          getBalancesData();
          setEditedRow(defaultRow);
        });
    } else {
      dbCol.add(editedRow).then(() => {
        getBalancesData();
        setEditedRow(defaultRow);
      });
    }

    // console.log(editedRow.id)
  };

  return (
    <>
      <Form>
        <Form.Field>
          <label>日期</label>
          <input
            name="date"
            type="date"
            placeholder=""
            value={editedRow.date}
            onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>項目</label>
          <input
            name="title"
            type="text"
            value={editedRow.title}
            onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>金額</label>
          <input
            name="expense"
            type="number"
            value={editedRow.expense}
            onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Select
          label="記帳類型"
          value={editedRow.type}
          onChange={(e, obj) => {
            setEditedRow({ ...editedRow, type: obj.value });
          }}
          name="types"
          options={types}
        ></Form.Select>
        <Button primary loading={loading} onClick={saveRow}>
          儲存
        </Button>
      </Form>

      <Input
        name="search"
        fluid
        // value={search}
        onChange={(e) => {
          // 要 toLowerCase 才能正確查詢
          // const copyRows = rows.slice();
          setRows(
            rowsCopy              
              .filter((row) =>
                row.title?.toLowerCase().includes(e.target.value.toLowerCase())
              )
          );
        }}
        placeholder="Search..."
      ></Input>

      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>日期</Table.HeaderCell>
            <Table.HeaderCell>項目</Table.HeaderCell>
            <Table.HeaderCell>金額</Table.HeaderCell>
            <Table.HeaderCell>記帳類型</Table.HeaderCell>
            {/* <Table.HeaderCell>#</Table.HeaderCell> */}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {rows.map((row) => {
            return (
              <Table.Row
                key={row.id}
                onClick={() => {
                  setEditedRow(row);
                  console.log(row);
                }}
              >
                <Table.Cell>{row.date}</Table.Cell>
                <Table.Cell>{row.title}</Table.Cell>
                <Table.Cell>{row.expense || row.income}</Table.Cell>
                <Table.Cell>{row.type}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </>
  );
}
