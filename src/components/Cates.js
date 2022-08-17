import { useState } from 'react';
export default function Cates() {
  const [row, setRow] = useState({
    // 每個都要有預設值,不然會報錯
    date: '',
    title: '',
    amt: '',
    income: '',
  });
  const schema = [
    { name: 'date', text: '日期' },
    { name: 'title', text: '項目' },
    { name: 'amt', text: '金額' },
    { name: 'income', text: '收入' },
  ];

  let updateInput = (e) => {
    setRow({ ...row, [e.target.name]: e.target.value });
  };

  return (
    <>
      <pre>{JSON.stringify(row)}</pre>

      {schema.map((obj, i) => {
        return (
          <input
            key={i}
            name={obj.name}
            onChange={updateInput}
            value={row[obj.name]}
            placeholder={obj.text}
          />
        );
      })}
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
