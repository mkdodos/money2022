// 目標: 建立資料結構,自動產生表單和表格標題列
// 建立資料,自動產生表格內容

import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Button, Table } from 'semantic-ui-react';

// 產生表單
class MyForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {/* {JSON.stringify(this.props.schema)} */}
        {this.props.schema.map((obj, i) => {
          return (
            <div className="ui input" key={i}>
              <input onChange={() => {}} placeholder={obj.text} />
            </div>
          );
        })}
        <button className="ui button" onClick={this.props.onClick}>
          新增
        </button>
        {/* <button
          className="ui button"
          onClick={() => {
            this.props.onClick();
          }}
        >
          新增
        </button> */}
      </>
    );
  }
}

// 產生表格
class MyTableOLD extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <table className="ui unstackable table">
          <thead>
            <tr>
              {this.props.schema.map((header, i) => {
                return <th key={i}>{header.name}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {this.props.rows.map((obj, i) => {
              return (
                <tr key={i}>
                  <td>{obj.date}</td>
                  <td>{obj.title}</td>
                  <td>{obj.expense}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
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
              {this.props.schema.map((header, i) => {
                return (
                  <Table.HeaderCell key={i}>{header.text}</Table.HeaderCell>
                );
              })}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.props.rows.map((obj, i) => {
              return (
                <tr key={i}>
                  <td>{obj.date}</td>
                  <td>{obj.title}</td>
                  <td>{obj.expense}</td>
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
    { date: '2022-08-17', title: '蛋餅', expense: '30' },
    { date: '2022-08-18', title: '土司', expense: '20' },
  ];

  const [itemList, setItemList] = React.useState([]);
  const [item, setItem] = React.useState({
    date: '',
    title: '',
    expense: '',
  });

  React.useEffect(() => {
    setItemList(data);
  }, []);

  function handleClick() {
    // setItem({ date: '2022-08-17', title: '蛋餅', expense: '30' });
    // console.log(item);
    // const data = itemList
    setItemList([
      ...itemList,
      // 將這筆資料和表單結合
      // 取得表單的值
      item,
    ]);
  }
  return (
    <>
      <pre>{JSON.stringify(item)}</pre>
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
      <button className="ui button" onClick={handleClick}>
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
      <MyTable schema={schema} rows={itemList} />
    </>
  );
}
