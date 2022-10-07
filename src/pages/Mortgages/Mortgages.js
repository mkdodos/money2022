import { useEffect, useState } from 'react';
import { Table, Form, Button, Modal } from 'semantic-ui-react';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../../utils/firebase';

export default function Mortgages() {
  const options = [
    { key: 'm', text: '房貸A', value: '房貸A' },
    { key: 'f', text: '房貸B', value: '房貸B' },
  ];

  const [rows, setRows] = useState([]);
  const defaultRow = {
    date: new Date().toISOString().slice(0, 10),
    basic: '',
    interest: '',
    account: '',
  };
  const [editedRow, setEditedRow] = useState(defaultRow);

  const [editedIndex, setEditedIndex] = useState(-1);

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const dbCol = db.collection('mortgages');
  useEffect(() => {
    dbCol.get().then((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setRows(data);
    });
  }, []);

  // 一般文字輸入
  const inputChange = (e) => {
    setEditedRow({ ...editedRow, [e.target.name]: e.target.value });
  };

  // 下拉選項輸入
  const selectChange = (e, obj) => {
    setEditedRow({ ...editedRow, [obj.name]: obj.value });
  };

  const saveRow = () => {
    // 新增
    if (editedIndex === -1) {
      setLoading(true);
      const item = {
        ...editedRow,
        basic: Number(editedRow.basic),
        id: uuidv4(),
      };
      dbCol.add(item).then(() => {
        setRows([...rows, item]);
        setEditedRow(defaultRow);
        setOpen(false);
        setLoading(false);
      });
    }
    // 更新
    else {
      setLoading(true);
      dbCol
        .doc(editedRow.id)
        .update(editedRow)
        .then(() => {
          const newRows = rows.slice();
          Object.assign(newRows[editedIndex], editedRow);
          setRows(newRows);
          setEditedRow(defaultRow);
          setEditedIndex(-1);
          setOpen(false);
          setLoading(false);
        });
    }
  };

  const deleteRow = () => {
    if (!confirm('確定刪除')) return;
    setLoading(true);
    dbCol
      .doc(editedRow.id)
      .delete()
      .then(() => {
        const newRows = rows.slice();
        newRows.splice(editedIndex, 1);
        setRows(newRows);
        setEditedRow(defaultRow);
        setOpen(false);
        setLoading(false);
      });
  };

  const rowClick = (item, index) => {
    setOpen(true);
    setEditedRow(item);
    setEditedIndex(index);
  };

  return (
    <div>
      <h1>Mortgages</h1>

      <Button
        floated="right"
        color="teal"
        onClick={() => {
          setOpen(true);
        }}
      >
        新增
      </Button>
      <Modal
        open={open}
        closeIcon
        onClose={() => {
          setOpen(false);
        }}
      >
        <Modal.Header>編輯房貸</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <label>日期</label>
              <input
                type="date"
                name="date"
                value={editedRow.date}
                onChange={inputChange}
              />
            </Form.Field>
            <Form.Field>
              <label>本金</label>
              <input
                type="number"
                name="basic"
                value={editedRow.basic}
                onChange={inputChange}
              />
            </Form.Field>
            <Form.Field>
              <label>利息</label>
              <input
                type="number"
                name="interest"
                value={editedRow.interest}
                onChange={inputChange}
              />
            </Form.Field>

            <Form.Select
              fluid
              label="帳戶"
              name="account"
              options={options}
              onChange={selectChange}
              value={editedRow.account}
            />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          {editedIndex > -1 && (
            <Button onClick={deleteRow} color="red" floated="left" loading={loading}>
              刪除
            </Button>
          )}
          <Button onClick={saveRow} color="blue" loading={loading}>
            儲存
          </Button>
        </Modal.Actions>
      </Modal>

      <Table celled unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>日期</Table.HeaderCell>
            <Table.HeaderCell>本金</Table.HeaderCell>
            <Table.HeaderCell>利息</Table.HeaderCell>
            <Table.HeaderCell>帳戶</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {rows.map((row, index) => (
            <Table.Row key={row.id} onClick={() => rowClick(row, index)}>
              <Table.Cell>{row.date}</Table.Cell>
              <Table.Cell>{row.basic}</Table.Cell>
              <Table.Cell>{row.interest}</Table.Cell>
              <Table.Cell>{row.account}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer></Table.Footer>
      </Table>
    </div>
  );
}
