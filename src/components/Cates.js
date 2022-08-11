import { db, db_dada } from '../utils/firebase';
import DataTable from './DataTable';
import DataRow from './DataRow';
import { Button, Table } from 'semantic-ui-react';
// import {db as dada} from '../utils/firebase-dada'
import React from 'react';
import { Cate } from './Cate';
import { EditCate } from './EditCate';

export default function Cates() {
  const [rows, setRows] = React.useState([]);

  const [editIndex, setEditIndex] = React.useState(-1);

  const [rows2, setRows2] = React.useState([]);
  const [name, setName] = React.useState('');
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

  const deleteTask = (id) => {
    const newTodoList = rows.filter((task) => {
      return task.id !== id;
    });

    setRows(newTodoList);
  };

  const editTask = (item) => {

    setEditIndex(rows.indexOf(item));
    setName(item.name)
    //   editRow(item) {
    //     this.editIndex = this.rows.indexOf(item);
    //     this.editItem = Object.assign({}, item);
    // var newPlayer = Object.assign({}, player, {score: 2});
    // var newPlayer = {...player, score: 2};
   
    // },
  };

  const saveTask = () => {
    // console.log(editIndex)
    const newRows = rows.slice()
    if(editIndex>-1)
    Object.assign(newRows[editIndex],{name:name})
    else
    newRows.push({name:name})
    
    
    console.log(newRows)
    setRows(newRows)
    // Object.assign(rows[editIndex],{name:'abc'})
    // Object.assign(this.rows[this.editIndex], this.editItem)
  }

  return (
    <>
      {/* <EditCate value={name} /> */}
      <Button
        onClick={saveTask}
      >
        save
      </Button>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <Button
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
      </Button>
      <Table unstackable>
        <Table.Body>
          {rows.map((task, i) => {
            return (
              <Cate
                onClick={()=>editTask(task)}
                key={i}
                id={task.id}
                index={i}
                taskName={task.name}
                user={task.user}
                deleteTask={deleteTask}
              />
            );
          })}
        </Table.Body>
      </Table>
    </>
  );
}
