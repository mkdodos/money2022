import { useState } from 'react';
export default function Cates() {
  const [row, setRow] = useState({
    // 每個都要有預設值,不然會報錯
    date: '',
    title: '',
    amt: '',
    income: '',
  });

  const [editedIndex, setEditedIndex] = useState(-1);
  const [rows, setRows] = useState([]);
  const schema = [
    { name: 'date', text: '日期', type: 'date' },
    { name: 'title', text: '項目', type: 'text' },
    { name: 'amt', text: '金額', type: 'number' },
    { name: 'income', text: '收入', type: 'number' },
  ];

  let updateInput = (e) => {
    setRow({ ...row, [e.target.name]: e.target.value });
  };

  return (
    <>
      <pre>{JSON.stringify(row)}</pre>
      {/* {rows.map((row, i) => {
        return <pre key={i}>{JSON.stringify(row)}</pre>;
      })} */}
      <pre>{editedIndex}</pre>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {/* 表單輸入項 */}
        {schema.map((obj, i) => {
          return (
            <input
              key={i}
              name={obj.name}
              onChange={updateInput}
              value={row[obj.name]}
              placeholder={obj.text}
              type={obj.type}
            />
          );
        })}
        <button
          onClick={() => {
            // this.editItem = Object.assign({}, item);
            const editedItem= Object.assign({},row);
            // const newRow = row.slice()
            editedItem.id= Date.now()
            // setRow(editedItem)
            setRows([...rows, editedItem]);
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            // 複製一份原資料
            const newRows = rows.slice();
            Object.assign(newRows[editedIndex], row);
            // Object.assign(rows[editedIndex], row);
            setRows(newRows)
          }}
        >
          Update
        </button>
      </form>
      {/* 表格資料 */}
      <table>
        <tbody>
          {rows.map((row, i) => {
            return (

              <tr key={i}>
               <td>{row.id}</td>
                {schema.map((s, i) => {
                  return <td key={i}>{row[s.name]}</td>;
                })}
                <td
                  onClick={(e) => {
                    // 點選列在 rows 中的索引
                    setEditedIndex(rows.indexOf(row));
                    // setRow({ ...row, row });
                    setRow(row);
                  }}
                >
                  Edit
                </td>
                <td
                  onClick={(e) => {
                    console.log(row.title)
                    // 點選列在 rows 中的索引
                    const newRows = rows.filter(obj=>{
                      return obj.id!==row.id
                    })
                    // const newRows = rows.splice(editedIndex,1)
                    // console.log(newRows)
                    setRows(newRows)
                    // setRow({ ...row, row });
                  }}
                >
                  Delete
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <input
        name="title"
        value={row[schema[0].name]}
        onChange={updateInput}       
      /> */}
      {/* <input
        name="amt"
        value={row[schema[1].name]}
        onChange={updateInput}       
      /> */}
    </>
  );
}
