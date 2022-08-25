import { db } from '../../../utils/firebase';
import DataTable from '../../../components/DataTable';
import React from 'react';
import axios from 'axios';
import { Table, Icon } from 'semantic-ui-react';

export default function ItemList({ rows, setItem, setEditedIndex, setOpen }) {
  // const [rows, setRows] = React.useState([]);
  const schema = [
    { text: '日期', value: 'date', type: 'date' },
    { text: '帳戶', value: 'account', type: 'map' },
    { text: '類別', value: 'cate', type: 'string' },
    { text: '項目', value: 'title', type: 'string' },
    { text: '收入', value: 'income', type: 'number' },
    { text: '支出', value: 'expense', type: 'number' },
  ];

  // React.useEffect(() => {
  // axios.get('http://192.168.0.12:9000/balances').then(res=>{
  //   setRows(res.data)
  // })

  function handleEdit(row) {
    setItem(row);
    setEditedIndex(rows.indexOf(row));
    setOpen(true)
  }

  return (
    <>
      {/* <pre>{JSON.stringify(rows)}</pre> */}

      <Table unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>日期</Table.HeaderCell>
            <Table.HeaderCell>項目</Table.HeaderCell>
            <Table.HeaderCell>金額</Table.HeaderCell>
            <Table.HeaderCell>#</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {rows.map((row) => {
            return (
              <Table.Row key={row.id}>
                <Table.Cell>{row.date}</Table.Cell>
                <Table.Cell>{row.title}</Table.Cell>
                <Table.Cell>{row.expense}</Table.Cell>
                <Table.Cell>{row.account?.name}</Table.Cell>
                <Table.Cell
                  onClick={() => {
                    handleEdit(row);
                  }}
                >
             <a href="#"><Icon  name='edit' /></a>      
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>

      {/* <DataTable rows={rows} schema={schema} /> */}
    </>
  );
}
