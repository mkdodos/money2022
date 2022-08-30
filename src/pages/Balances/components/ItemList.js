import { db } from '../../../utils/firebase';
import DataTable from '../../../components/DataTable';
import React, { useState } from 'react';
import axios from 'axios';
import {
  Table,
  Icon,
  Label,
  Header,
  Input,
  Select,
  Grid,
} from 'semantic-ui-react';

export default function ItemList({
  cates,
  rows,
  rowsCopy,
  setRows,
  setItem,
  setItemCopy,
  setEditedIndex,
  setOpen,
  activeAccount,
  setIsIncome,
  isIncome,
  setIsIncomeOrigin,
  setCate,
}) {
  const [search, setSearch] = useState('');
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
    // setIsIncome(row.income?true:false)

    setCate(row.cate);

    // 設定作用中項目(收入或支出),同時更新表單中的金額
    setIsIncome((prev) => {
      let editedRow = { date: row.date, title: row.title, id: row.id };
      if (row.income) {
        setItem({ ...editedRow, amt: row.income });
        setItemCopy({ ...editedRow, amt: row.income });
        return true;
      } else {
        setItem({ ...editedRow, amt: row.expense });
        setItemCopy({ ...editedRow, amt: row.expense });
        return false;
      }
    });

    setIsIncomeOrigin(() => {
      if (row.income) return true;
      return false;
    });

    setEditedIndex(rows.indexOf(row));
    setOpen(true);
  }

  function handleSearch(e) {
    setSearch(e.target.value);

    // 要 toLowerCase 才能正確查詢
    setRows(
      rowsCopy.filter((row) =>
        row.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  }

  function handleCateSearch(e, obj) {
    console.log(obj.value);
    // setSearch(e.target.value);

    // 要 toLowerCase 才能正確查詢
    setRows(rowsCopy.filter((row) => (row.cate === obj.value)));
  }

  return (
    <>
      {/* {search} */}
      {/* {JSON.stringify(rows)} */}
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Input
              name="search"
              fluid
              value={search}
              onChange={handleSearch}
              placeholder="Search..."
            ></Input>
          </Grid.Column>
          <Grid.Column>
            <Select
              selection
              fluid
              label="類別"
              placeholder=""
              // value={cate}
              options={cates}
              onChange={handleCateSearch}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>

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
                  {row.cate && <Label>{row.cate}</Label>}
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
                  {/* {JSON.stringify(row)} */}
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
