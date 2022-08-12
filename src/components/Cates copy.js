import { db, db_dada } from '../utils/firebase';
import DataTable from './DataTable';
import DataRow from './DataRow';
import { Button, Form, Table, Divider } from 'semantic-ui-react';
// import {db as dada} from '../utils/firebase-dada'
import React from 'react';
import { Cate } from './Cate';
import { EditCate } from './EditCate';

export default function Cates() {
  const [rows, setRows] = React.useState([]);
  const [editedRow, setEditedRow] = React.useState({});

  const [editIndex, setEditIndex] = React.useState(-1);

  const [rows2, setRows2] = React.useState([]);
  const [name, setName] = React.useState('');
  const [prior, setPrior] = React.useState('');
  const schema = [
    { text: '名稱', value: 'name', type: 'string' },
    { text: '順序', value: 'prior', type: 'number' },
    // {text:'建立',value:'createdAt',type:'number'},
  ];
  React.useEffect(() => {
    db.collection('cates')
      .limit(3)
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setRows(data);
        setRows2(data);
        // setRows(
        //   snapshot.docs.map((doc) => {
        //     return { ...doc.data(), id: doc.id };
        //   })
        // );
      });
  }, []);

  // 刪除
  const deleteTask = (id) => {
    const newTodoList = rows.filter((task) => {
      return task.id !== id;
    });

    setName('')
    setPrior('')

    setRows(newTodoList);
  };

  // 編輯
  const editTask = (item) => {
    setEditIndex(rows.indexOf(item));
    setEditedRow(item)
    setName(item.name);
    setPrior(item.prior);
    //   editRow(item) {
    //     this.editIndex = this.rows.indexOf(item);
    //     this.editItem = Object.assign({}, item);
    // var newPlayer = Object.assign({}, player, {score: 2});
    // var newPlayer = {...player, score: 2};

    // },
  };

  const saveTask = () => {
    const newRows = rows.slice();
    const row = {name,prior}
    // 修改
    if (editIndex > -1) {
      Object.assign(newRows[editIndex], row);
      setEditIndex(-1);
      setName('')
      setPrior('')
    } 
    // 新增
    else {

      const id = Date.now() 
      newRows.push({...row,id});
      setName('')
      setPrior('')
    
    }
    
    setRows(newRows);
  };

  return (
    <>
      <Form unstackable>
        <Form.Group widths={2}>
          <Form.Field
            label="名稱"
            control="input"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="name"
          />
          <Form.Field
            label="順序"
            control="input"
            value={prior}
            onChange={(e) => {
              setPrior(e.target.value);
            }}
           
          />
        </Form.Group>

        <Divider hidden />
        <Button color="teal" floated="right" onClick={saveTask}>
          儲存
        </Button>
      </Form>

      {/* <Button
        onClick={() => {
          const data = rows2.filter((row) => row.user === 'mkdodos@gmail.com');
          setRows(data);
        }}
      >
        M
      </Button>
      <Button
        onClick={() => {
          const data = rows2.filter((row) => row.user === 'dada@gmail.com');
          setRows(data);
        }}
      >
        D
      </Button> */}
      <Table unstackable>
        <Table.Body>
          {rows.map((task, i) => {
            return (
              <Cate
                // onClick={() => editTask(task)}
                key={i}
                id={task.id}
                index={i}
                // taskName={task.name}
                prior={task.prior}
                user={task.user}
                row={task}
                deleteTask={deleteTask}
                editTask={editTask}
              />
            );
          })}
        </Table.Body>
      </Table>
    </>
  );
}
