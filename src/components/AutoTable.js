import React from 'react';
import { Button, Table, Modal, Form, Input } from 'semantic-ui-react';
import {db} from "../utils/firebase"
import { useAuth } from '../contexts/AuthContext';

export default function AutoTable(props) {
  const {currentUser} = useAuth()
  const defalutItem = props.defalutItem;
  const schema = props.schema;
  // const data = props.data;
  // 資料陣列
  const [itemList, setItemList] = React.useState([]);
  // 資料列
  const [item, setItem] = React.useState(defalutItem);
  // 編輯列索引
  const [editedIndex, setEditedIndex] = React.useState(-1);
  // Modal
  const [open, setOpen] = React.useState(false);


  React.useEffect(()=>{
    db.collection(props.collectionName)
    .where('user','==',currentUser.email)
    .get().then((snapshot)=>{
      const rows = snapshot.docs.map((doc)=>{
        return {...doc.data(),id:doc.id}
      })
      setItemList(rows)
    })
  },[])


  // CRUD
  function handleEdit(obj) {
    setOpen(true);
    // 點選編輯列的索引,用來修改後,把值傳回該列
    setEditedIndex(itemList.indexOf(obj));
    setItem(obj);   
  }

  function handleUpdate() {
    // 新增
    if (editedIndex == -1) {
      setItemList([...itemList, { ...item, id: Date.now() }]);
    }
    // 更新
    else {
      // 複製一份原資料陣列
      const data = itemList.slice();
      // 將編輯列的資料寫入
      Object.assign(data[editedIndex], item);
      // 設定更改後的資料陣列給原陣列
      setItemList(data);
      setEditedIndex(-1);
    }

    // 新增或更新完將表單輸入項的值清空
    setItem(defalutItem);
    setOpen(false);
  }

  function handleDelete() {
    if(!confirm('確定刪除嗎?'))
    return;

    const data = itemList.filter((obj) => obj.id !== item.id);
    setItemList(data);
    setOpen(false);
  }

  return (
    <>
      {/* <pre>{JSON.stringify(item)}</pre> */}
      <pre>{itemList.length}</pre>
      <Modal open={open} closeIcon onClose={() => setOpen(false)}>
        <Modal.Header>編輯表單</Modal.Header>
        <Modal.Content>
          <Form>
            {/* 表單 */}
            {schema.map((obj, i) => {
              return (
                <Form.Field key={i}>
                  <label>{obj.text}</label>
                  <Input
                    placeholder={obj.text}
                    name={obj.name}
                    value={item[obj.name]}
                    type={obj.type}
                    onChange={(e) => {
                      setItem({ ...item, [e.target.name]: e.target.value });
                    }}
                  />
                </Form.Field>
              );
            })}
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <button className="ui button blue" onClick={handleUpdate}>
            儲存
          </button>
          {editedIndex !== -1 && (
            <button
              className="ui button red left floated"
              onClick={handleDelete}
            >
              刪除
            </button>
          )}
        </Modal.Actions>
      </Modal>

      <button
        className="ui button"
        onClick={() => {
          setOpen(true);
          setItem(defalutItem);
          setEditedIndex(-1);
        }}
      >
        新增
      </button>

      <MyTable edit={handleEdit} schema={schema} rows={itemList} />
    </>
  );
}

class MyTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Table unstackable>
          <Table.Header>
            <Table.Row>
              {/* 標題列 */}
              {this.props.schema.map((header, i) => {
                return (
                  <Table.HeaderCell key={i}>{header.text}</Table.HeaderCell>
                );
              })}
              <Table.HeaderCell>#</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {/* 資料列 */}
            {this.props.rows.map((row, i) => {
              return (
                <tr key={i}>
                  {/* 資料欄 */}
                  {this.props.schema.map((obj, i) => {
                    return <td key={i}>{row[obj.name]}</td>;
                  })}
                 
                  <td onClick={() => this.props.edit(row)}>
                    <a href="#">編輯</a>
                  </td>
                </tr>
              );
            })}
          </Table.Body>
        </Table>
      </>
    );
  }
}
