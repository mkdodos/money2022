import { db } from '../../../utils/firebase';
import DataTable from '../../../components/DataTable';
import React, { useState } from 'react';
import axios from 'axios';
import { Table, Icon, Label, Header, Input } from 'semantic-ui-react';

export default function ItemList({
  rows,
  rowsCopy,
  setRows,
  setItem,
  setItemCopy,
  setEditedIndex,
  setOpen,
  activeAccount,
  setIsIncome
}) {

  const [search, setSearch] = useState('')
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
    setItemCopy(row)
    setIsIncome(row.income?true:false)
    setEditedIndex(rows.indexOf(row));
    setOpen(true);
  }

  function handleSearch(e) {
    setSearch(e.target.value)
    
    // 要 toLowerCase 才能正確查詢
    setRows(rowsCopy.filter(row=>row.title.toLowerCase().includes(e.target.value.toLowerCase())))
  }

  return (
    <>
    {/* {search} */}
    {/* {JSON.stringify(rows)} */}
     <Input name="search" fluid value={search} onChange={handleSearch} placeholder="Search..."></Input>
      <Table unstackable>
        {/* <Table.Header>
          <Table.Row>
            <Table.HeaderCell>日期</Table.HeaderCell>
            <Table.HeaderCell>項目</Table.HeaderCell> 
            <Table.HeaderCell>金額</Table.HeaderCell>
             <Table.HeaderCell>#</Table.HeaderCell>
          </Table.Row>
        </Table.Header> */}
        <Table.Body>
          {rows.map((row) => {
            return (
              <Table.Row
                key={row.id}
                onClick={() => {
                  handleEdit(row);
                }}
              >
                <Table.Cell>
                  <Header as="h4">{row.title}</Header>
                  <span>{row.date} </span>

                  {!activeAccount && (
                    <Label color="teal">{row.account?.name}</Label>
                  )}
                </Table.Cell>
                <Table.Cell textAlign="right">
                  {row.income ? (
                    <Label color="teal" circular>
                      存
                    </Label>
                  ) : (
                    <Label color="orange" circular>
                      提
                    </Label>
                  )}
                  <br></br>$ {row.income ? row.income : row.expense + ''}
                </Table.Cell>

                {/* <Table.Cell>{row.date.slice(5,10)}</Table.Cell>
                <Table.Cell>{row.title}</Table.Cell>
                <Table.Cell>{row.expense}</Table.Cell>
                <Table.Cell>{row.account?.name}</Table.Cell> */}
                {/* <Table.Cell
                  onClick={() => {
                    handleEdit(row);
                  }}
                >
                  <a href="#">
                    <Icon name="edit" />
                  </a>
                </Table.Cell> */}
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>

      {/* <DataTable rows={rows} schema={schema} /> */}
    </>
  );
}
