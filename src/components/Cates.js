import { db, db_dada } from '../utils/firebase';
import DataTable from './DataTable';
import DataRow from './DataRow';
import {
  Button,
  Form,
  Table,
  Divider,
  Segment,
  Input,
  Grid,
} from 'semantic-ui-react';
import React from 'react';
import { Cate } from './Cate';

export default function Cates() {
  const [rows, setRows] = React.useState([]);
  // const [editedRow, setEditedRow] = React.useState({});
  const [editIndex, setEditIndex] = React.useState(-1);
  const [docId, setDocId] = React.useState('');
  const [name, setName] = React.useState('');
  const [prior, setPrior] = React.useState('');
  const schema = [
    // { text: 'ID', value: 'id', type: 'string' },
    { text: '名稱', value: 'name', type: 'string' },
    { text: '順序', value: 'prior', type: 'number' },
    // { text: '使用者', value: 'user', type: 'string' },
  ];

  const col_name = 'notes';
  React.useEffect(() => {
    db.collection(col_name)
      .limit(3)
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setRows(data);
      });
  }, []);

  // 刪除
  const deleteTask = (id) => {
    // 篩選資料排除點選的項目
    const newTodoList = rows.filter((task) => {
      return task.id !== id;
    });

    // firebase
    db.collection(col_name).doc(id).delete();

    // 清空欄位值
    setName('');
    setPrior('');
    // 設定篩選後的資料
    setRows(newTodoList);
  };

  // 編輯
  const editTask = (item) => {
    // 設定 editIndex 做為儲存時判斷新增或修改的依據
    setEditIndex(rows.indexOf(item));
    // 設定編輯列傳給子元件
    // setEditedRow(item)
    // 設定表單輸入元件的值
    setName(item.name);
    setPrior(item.prior);
    // 更新時會用到
    setDocId(item.id);
  };

  // 儲存
  const saveTask = () => {
    // 複製一份原資料
    const newRows = rows.slice();
    // 欄位資料
    const row = { name, prior };
    // 修改
    if (editIndex > -1) {
      // 將欄位資料寫到複本
      Object.assign(newRows[editIndex], row);
      // firebase
      db.collection(col_name).doc(docId).update(row);
      // 清空欄位值
      setEditIndex(-1);
      setName('');
      setPrior('');
    }
    // 新增
    else {
      // const id = Date.now();
      // 將欄位資料加到複本
      // newRows.push({ ...row, id });

      // firebase
      db.collection(col_name)
        .add(row)
        .then((doc) => {
          newRows.push({ ...row, id: doc.id });
          // 將複本寫到原資料
          setRows(newRows);
        });
      // 清空欄位值
      setName('');
      setPrior('');
    }
  };

  return (
    <>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Form unstackable>
              <Form.Group widths={2}>
                <Form.Input
                  fluid
                  label="First name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder="First name"
                />
                <Form.Input
                  value={prior}
                  type="number"
                  onChange={(e) => {
                    setPrior(e.target.value);
                  }}
                  fluid
                  label="金額"
                  placeholder=""
                />
              </Form.Group>

              <Button color="teal" floated="right" onClick={saveTask}>
                儲存
              </Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            {' '}
            <Table unstackable>
              <Table.Header>
                <Table.Row>
                  {schema.map((obj, i) => (
                    <Table.HeaderCell key={i}>{obj.text}</Table.HeaderCell>
                  ))}
                  <Table.HeaderCell>刪除</Table.HeaderCell>
                  <Table.HeaderCell>編輯</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {rows.map((task, i) => {
                  return (
                    <Cate
                      key={i}
                      index={i}
                      schema={schema}
                      row={task}
                      deleteTask={deleteTask}
                      editTask={editTask}
                    />
                  );
                })}
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}
