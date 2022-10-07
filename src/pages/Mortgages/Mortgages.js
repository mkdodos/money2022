import { useEffect, useState } from 'react';
import { Table, Form, Button, Dropdown } from 'semantic-ui-react';
import { v4 as uuidv4 } from 'uuid';

export default function Mortgages() {
  const data = [
    {
      id: 1,
      date: '2022-10-07',
      basic: 11302,
      interest: 5256,
      account: '房貸A',
    },
    {
      id: 2,
      date: '2022-10-07',
      basic: 2568,
      interest: 382,
      account: '房貸B',
    },
  ];

  const options = [
    { key: 'm', text: '房貸A', value: '房貸A' },
    { key: 'f', text: '房貸B', value: '房貸B' },
  ];

  const [rows, setRows] = useState(data);
  const defaultRow = {
    date: new Date().toISOString().slice(0, 10),
    basic: '',
    interest: '',
    account: ''
  };
  const [editedRow, setEditedRow] = useState(defaultRow);

  useEffect(() => {
    console.log(editedRow);
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
    const item = {
      ...editedRow,
      basic: Number(editedRow.basic),
      id: uuidv4(),
    };
    setRows([...rows, item]);
    setEditedRow(defaultRow);   
  };

  return (
    <div>
      <h1>Mortgages</h1>

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

        <Button onClick={saveRow}>Submit</Button>
      </Form>
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
          {rows.map((row) => (
            <Table.Row key={row.id}>
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
