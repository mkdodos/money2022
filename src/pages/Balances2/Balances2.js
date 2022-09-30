import { compact, filter } from 'lodash';
import { useEffect, useState } from 'react';
import {
  Table,
  Form,
  Button,
  Input,
  Modal,
  Dropdown,
  Grid,
  GridRow,
} from 'semantic-ui-react';
import { db } from '../../utils/firebase';
export default function Balances2() {
  // 帳戶類別下拉資料
  const [accountOptions, setAccountOptions] = useState([]);
  const [cateOptions, setCateOptions] = useState([]);
  // 記帳資料
  const [rows, setRows] = useState([]);
  // 查詢用
  const [rowsCopy, setRowsCopy] = useState([]);

  // 篩選條件
  const [filters, setFilters] = useState({ title: '', account: '', cate:'' });

  const handleFilters = (e, obj) => {
    setFilters({
      ...filters,
      [obj.name]: obj.value,
    });
    // console.log(filters);
  };

  // 編輯列預設值
  const defaultRow = {
    date: new Date().toISOString().slice(0, 10),
    title: '',
    expense: '',
    type: '一般',
  };

  // 編輯列
  const [editedRow, setEditedRow] = useState(defaultRow);

  // 記帳類型下拉資料
  const types = [
    { key: '1', text: '一般', value: '一般' },
    { key: '2', text: '轉帳', value: '轉帳' },
    { key: '3', text: '投資', value: '投資' },
  ];

  // 按鈕載入中圖示
  const [loading, setLoading] = useState(false);

  // 編輯視窗
  const [open, setOpen] = useState(false);

  // 篩選月份
  const [month, setMonth] = useState(new Date().getMonth() + 1);

  // const dbCol = db.collection('test');
  const dbCol = db.collection('balances');

  useEffect(() => {
    getBalancesData();
    getAccountsData();
    getCatesData();
  }, []);

  useEffect(() => {
    setRows(
      rowsCopy.filter(
        (row) =>
          row.account.name.includes(filters.account) &&
          //  row.title?.toLowerCase().includes(filters.title?.toLowerCase())
          row.title.includes(filters.title) &&
          row.cate?.includes(filters.cate)
      )
    );

    console.log(filters);
    // setRows(
    //   rowsCopy.filter((item) =>
    //     Object.entries(filters).every(([key, value]) =>
    //       item[key].includes(value)
    //     )
    //   )
    // );
  }, [filters]);

  // 取得帳戶下拉資料
  const getAccountsData = () => {
    setLoading(true);
    db.collection('accounts')
      .where('user', '==', 'mkdodos@gmail.com')
      .orderBy('prior')
      .get()
      .then((snapshot) => {
        let data = snapshot.docs.map((doc) => {
          return { key: doc.id, text: doc.data().name, value: doc.data().name };
        });
        // console.log(data);
        setAccountOptions(data);
        setLoading(false);
      });
  };

  // 取得類別下拉資料
  const getCatesData = () => {
    setLoading(true);
    db.collection('cates')
      .where('user', '==', 'mkdodos@gmail.com')
      .orderBy('prior')
      .get()
      .then((snapshot) => {
        let data = snapshot.docs.map((doc) => {
          return { key: doc.id, text: doc.data().name, value: doc.data().name };
        });
        // console.log(data);
        setCateOptions(data);
        setLoading(false);
      });
  };

  // 取得記帳資料
  const getBalancesData = () => {
    setLoading(true);
    dbCol
      .where('date', '>=', `2022-0${month}-01`)
      .where('date', '<=', `2022-0${month}-31`)
      // .limit(20)
      .get()
      .then((snapshot) => {
        let data = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        data = data.slice().reverse();
        console.log(data);
        setRows(data);
        setRowsCopy(data);
        setLoading(false);
      });
  };
  // 表單輸入時,設定編輯列的值
  const handleInputChange = (e) => {
    setEditedRow({ ...editedRow, [e.target.name]: e.target.value });
  };

  // 儲存
  const saveRow = () => {
    setLoading(true);
    // 用 id 判斷新增或更新
    if (editedRow.id) {
      dbCol
        .doc(editedRow.id)
        .update(editedRow)
        .then(() => {
          getBalancesData();
          setEditedRow(defaultRow);
          setOpen(false);
        });
    } else {
      dbCol.add(editedRow).then(() => {
        getBalancesData();
        setEditedRow(defaultRow);
        setOpen(false);
      });
    }

    // console.log(editedRow.id)
  };

  return (
    <>
      <Modal
        open={open}
        closeIcon
        onClose={() => {
          setOpen(false);
        }}
      >
        <Modal.Header>編輯</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <label>日期</label>
              <input
                name="date"
                type="date"
                placeholder=""
                value={editedRow.date}
                onChange={handleInputChange}
              />
            </Form.Field>
            <Form.Field>
              <label>項目</label>
              <input
                name="title"
                type="text"
                value={editedRow.title}
                onChange={handleInputChange}
              />
            </Form.Field>
            <Form.Field>
              <label>金額</label>
              <input
                name="expense"
                type="number"
                value={editedRow.expense}
                onChange={handleInputChange}
              />
            </Form.Field>
            <Form.Select
              label="記帳類型"
              value={editedRow.type}
              onChange={(e, obj) => {
                setEditedRow({ ...editedRow, type: obj.value });
              }}
              name="types"
              options={types}
            ></Form.Select>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button primary loading={loading} onClick={saveRow}>
            儲存
          </Button>
        </Modal.Actions>
      </Modal>

      {/* 查詢 */}
      <Grid>
        <Grid.Row columns={3}>
          <Grid.Column>
            <Input
              name="search"
              fluid
              // value={search}
              onChange={(e) => {
                setFilters({ ...filters, title: e.target.value });
              }}
              placeholder="Search..."
            ></Input>
          </Grid.Column>
          <Grid.Column>
            <Dropdown
              selection
              clearable
              options={accountOptions}
              label="帳戶"
              onChange={(e, obj) => {
                setFilters({ ...filters, account: obj.value });
              }}
            ></Dropdown>
          </Grid.Column>
          <Grid.Column>
            <Dropdown
              selection
              clearable
              options={cateOptions}
              label="類別"
              onChange={(e, obj) => {
                setFilters({ ...filters, cate: obj.value });
              }}
            ></Dropdown>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Table striped unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={2}>日期</Table.HeaderCell>
            <Table.HeaderCell width={1}>帳戶</Table.HeaderCell>
            <Table.HeaderCell width={4}>項目</Table.HeaderCell>
            <Table.HeaderCell width={2}>金額</Table.HeaderCell>
            <Table.HeaderCell>記帳類型</Table.HeaderCell>
            {/* <Table.HeaderCell>#</Table.HeaderCell> */}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {rows.map((row) => {
            return (
              <Table.Row
                key={row.id}
                onClick={() => {
                  setEditedRow(row);
                  setOpen(true);
                  console.log(row);
                }}
              >
                <Table.Cell>{row.date}</Table.Cell>
                <Table.Cell>{row.account.name}</Table.Cell>
                <Table.Cell>{row.title}</Table.Cell>
                <Table.Cell>{row.expense || row.income}</Table.Cell>
                <Table.Cell>{row.type}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </>
  );
}
