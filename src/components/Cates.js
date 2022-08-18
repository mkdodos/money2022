// 目標: 建立資料結構,自動產生表單和表格標題列
// 建立資料,自動產生表格內容

import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Button, Table, Modal } from 'semantic-ui-react';

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
              {this.props.schema.map((header, i) => {
                return (
                  <Table.HeaderCell key={i}>{header.text}</Table.HeaderCell>
                );
              })}
              <Table.HeaderCell>#</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.props.rows.map((obj, i) => {
              return (
                <tr key={i}>
                  <td>{obj.date}</td>
                  <td>{obj.title}</td>
                  <td>{obj.expense}</td>
                  <td onClick={() => this.props.edit(obj)}>編輯</td>
                </tr>
              );
            })}
          </Table.Body>
        </Table>
      </>
    );
  }
}

export default function Cates() {
  const schema = [
    // {
    //   name: '欄位名稱',
    //   text: '表格標題列欄位文字, 表單 placeholder 文字',
    //   type: '表單輸入項類型',
    // },
    {
      name: 'date',
      text: '日期',
      type: 'date',
    },
    {
      name: 'title',
      text: '項目',
      type: 'text',
    },
    {
      name: 'expense',
      text: '支出',
      type: 'number',
    },
  ];

  const data = [
    // { date: '2022-08-17', title: '蛋餅', expense: '30' },
    // { date: '2022-08-18', title: '土司', expense: '20' },
  ];

  const [itemList, setItemList] = React.useState([]);
  const defalutItem = {
    date: new Date().toISOString().slice(0, 10),
    title: '',
    expense: '',
  };
  const [item, setItem] = React.useState(defalutItem);

  const [editedIndex, setEditedIndex] = React.useState(-1);

  // Modal
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setItemList(data);
  }, []);

  function handleClick() {
    setItemList([
      ...itemList,
      // 將這筆資料和表單結合
      // 取得表單的值
      item,
    ]);
  }

  function handleEdit(obj) {
    setOpen(true);
    // 點選編輯列的索引,用來修改後,把值傳回該列
    setEditedIndex(itemList.indexOf(obj));
    setItem(obj);
    // setItem({...item})
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
    const data = itemList.filter((obj) => obj.id !== item.id);
    setItemList(data);
    setOpen(false);
  }

  return (
    <>
      <pre>{JSON.stringify(item)}</pre>
      <pre>{editedIndex}</pre>
      <Modal open={open} closeIcon onClose={() => setOpen(false)}>
        <Modal.Header>編輯表單</Modal.Header>
        <Modal.Content>
          {/* 表單 */}
          {schema.map((obj, i) => {
            return (
              <div className="ui input" key={i}>
                <input
                  name={obj.name}
                  value={item[obj.name]}
                  type={obj.type}
                  onChange={(e) => {
                    setItem({ ...item, [e.target.name]: e.target.value });
                  }}
                  placeholder={obj.text}
                />
              </div>
            );
          })}
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

      {/* <MyForm
        schema={schema}
        onClick={() => {
          // data.push({ date: '2022-08-17', title: '蛋餅', expense: '30' })
          setItemList([
            ...itemList,
            // 將這筆資料和表單結合
            // 取得表單的值
            { date: '2022-08-17', title: '蛋餅', expense: '30' },
          ]);
        }}
      /> */}
      <MyTable edit={handleEdit} schema={schema} rows={itemList} />
    </>
  );
}
