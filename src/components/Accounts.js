import { db } from '../utils/firebase';
// import {db as dada} from '../utils/firebase-dada'
import { Table, Form, Button, Modal, Tab } from 'semantic-ui-react';
import DataTable from './DataTable';
import DataRow from './DataRow';
import React, { useState } from 'react';
import EditForm from './EditForm';
import { useAuth } from '../contexts/AuthContext';
export default function Accounts() {
  const { currentUser } = useAuth();
  const schema = [
    // { text: '名稱', value: 'id', type: 'string' },
    { text: '名稱', value: 'name', type: 'string' },
    { text: '順序', value: 'prior', type: 'number' },
    { text: '餘額', value: 'balance', type: 'number' },
  ];
  const defalutItem = { name: '', prior: '', balance: '' };
  const [rows, setRows] = React.useState([]);
  const [row, setRow] = React.useState(defalutItem);

  // 用來判斷新增或修改,還有修改後將資料更新回該列
  const [editedIndex, setEditedIndex] = useState(-1);

  // 控制 Modal 顯示
  const [modalOpen, setModalOpen] = useState(false);

  const dbCol = db.collection('accounts2');
  React.useEffect(() => {
    dbCol
      // .orderBy('prior')
      .where('user', '==', currentUser.email)
      .get()
      .then((snapshot) => {
        setRows(
          snapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
      });
  }, []);

  // 儲存
  function handleSubmit() {
    const { name, balance, prior } = row;
    if (editedIndex > -1) {
      db.collection('accounts2')
        .doc(row.id)
        .update({ name, balance, prior })
        .then(() => {
          // console.log(row)

          let newItemList = rows.slice();
          // Object.assign(newItemList[editedIndex], item);
          // delete editedRow["income"];
          Object.assign(newItemList[editedIndex], row);
          // console.log(newItemList);
          setRows(newItemList);

          setModalOpen(false);
          setRow(defalutItem);
          // Object.assign(rows[editedIndex], row);
        });
    } else {
      db.collection('accounts2')
        .add({ name, balance, prior, user: currentUser.email })
        .then((doc) => {
          setModalOpen(false);
          setRow(defalutItem);
          // const newRow = row;
          setRows([...rows, { ...row, id: doc.id }]);
        });
    }

  

    
    // console.log(row);
  }

  function handleClick(row) {
    setEditedIndex(rows.indexOf(row));
    setRow(row);
    setModalOpen(true);
    // console.log(row);
  }

  function renderRow(row, i) {
    return (
      <DataRow key={i} row={row} value={i} onClick={() => handleClick(row)} />
    );
  }

  function handleChange(e) {
    setRow({ ...row, [e.target.name]: e.target.value });
    // setRow({ [event.target.name]: event.target.value });
  }

  function handleAdd() {
    setEditedIndex(-1);
    setModalOpen(true);
  }

  return (
    <>
      <Modal open={modalOpen}>
        <Modal.Header>編輯帳戶</Modal.Header>
        <Modal.Content>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Field>
                <label>名稱</label>
                <input
                  name="name"
                  placeholder="First Name"
                  value={row.name}
                  onChange={handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label>順序</label>
                <input
                  type="number"
                  name="prior"
                  value={row.prior}
                  onChange={handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label>餘額</label>
                <input
                  type="number"
                  name="balance"
                  // placeholder="Last Name"
                  value={row.balance}
                  onChange={handleChange}
                />
              </Form.Field>
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        </Modal.Content>
      </Modal>
      {/* {editedIndex} */}
      <Button onClick={handleAdd}>ADD</Button>
      <Table unstackable>
        <Table.Header>
          <Table.Row>
            {schema.map((obj, i) => (
              <Table.HeaderCell key={i}>{obj.text}</Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {rows.map((row, i) => {
            // return <div>{row.id}</div>
            // (
            return (
              <Table.Row
                onClick={() => {
                  handleClick(row);
                }}
                key={row.id}
              >
                {/* <Table.Cell>{row.id}</Table.Cell> */}
                <Table.Cell>{row.name}</Table.Cell>
                <Table.Cell>{row.prior}</Table.Cell>
                <Table.Cell>{row.balance}</Table.Cell>
              </Table.Row>
            );
            // )

            // return renderRow(row, i);
          })}
        </Table.Body>
      </Table>

      {/* <DataTable rows={rows} schema={schema} onRowClick={handleRowClick} /> */}
    </>
  );
}
