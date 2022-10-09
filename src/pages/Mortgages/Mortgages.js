import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { accountData as accounts, mortgageData as mortgages } from './data';
import {
  Segment,
  Header,
  Table,
  Grid,
  Button,
  Modal,
  Form,
} from 'semantic-ui-react';
export default function Mortgages() {
  // 帳戶資料
  const [accountData, setAccountData] = useState([]);

  // 房貸支出資料另外複製一份作為篩選用(在新增和刪除時都要同步更新這二份資料)
  const [mortgageData, setMorgageData] = useState([]);
  const [mortgageDataCopy, setMorgageDataCopy] = useState([]);

  // 作用中帳戶
  const [activeAccount, setActiveAccount] = useState();

  // 編輯列
  const defaultRow = {
    date: new Date().toISOString().slice(0, 10),
    basic: '',
    interest: '',
    account: '',
  };
  const [editedRow, setEditedRow] = useState(defaultRow);
  const [editedIndex, setEditedIndex] = useState(-1);

  // 視窗
  const [open, setOpen] = useState(false);
  // 按鈕載入中
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setAccountData(accounts);
    // 設定原始資料
    setMorgageData(mortgages);
    setMorgageDataCopy(mortgages);
  }, []);

  useEffect(() => {
    // const filterData = mortgageData
    //   .slice()
    //   .filter((obj) => obj.account === activeAccount?.name);
    // setMorgageData(filterData);
    // setMorgageData(mortgages);
  }, [activeAccount]);

  // 點擊帳戶
  const handleAccountClick = (item, index) => {
    // 設定作用中帳戶和索引
    setActiveAccount({ ...item, index });    
    setMorgageData(mortgageDataCopy.filter((obj) => obj.account === item.name));   
  };

  const deleteRow = () => {
    // 計算新的帳戶餘額
    const newBalance = activeAccount.balance * 1 + editedRow.basic * 1;
    updateBalance(newBalance);

    setMorgageData(mortgageData.filter((obj) => obj.id !== editedRow.id));
    setMorgageDataCopy(
      mortgageDataCopy.filter((obj) => obj.id !== editedRow.id)
    );
   
    setOpen(false);
  };

  // 一般文字輸入
  const inputChange = (e) => {
    // 設定編輯列的值
    setEditedRow({ ...editedRow, [e.target.name]: e.target.value });
  };

  // 儲存
  const saveRow = () => {
    if (editedIndex > -1) {
    } else {
      createRow();
    }
  };

  const createRow = () => {
    // 將新的值加入陣列
    const newRow = { ...editedRow, account: activeAccount.name, id: uuidv4() };
    setMorgageData([newRow, ...mortgageData]);
    setMorgageDataCopy([newRow, ...mortgageDataCopy]);

    // 計算新的帳戶餘額
    const newBalance = activeAccount.balance * 1 - editedRow.basic * 1;
    updateBalance(newBalance);

    setOpen(false);
    setEditedRow(defaultRow);
  };

  const updateBalance = (balance) => {
    // 複製一份帳戶資料
    const newAccountData = accountData.slice();
    // 更新該筆作用中帳戶的餘額
    Object.assign(newAccountData[activeAccount.index], {
      ...activeAccount,
      balance,
    });

    // 將資料寫入原資料
    setAccountData(newAccountData);

    // 更新作用中帳戶的餘額,再下次新增支出時計算餘額才會正確
    setActiveAccount({ ...activeAccount, balance });
  };

  // 點擊表格列
  const tableRowClick = (item, index) => {
    // 設定編輯列的值
    setEditedRow(item);
    setEditedIndex(index);
    setOpen(true);
    console.log(item);
  };
  return (
    <div>
      {/* 編輯視窗 */}

      <Modal
        open={open}
        closeIcon
        onClose={() => {
          setOpen(false);
        }}
      >
        <Modal.Header>編輯房貸</Modal.Header>
        <Modal.Content>
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
          </Form>
        </Modal.Content>
        <Modal.Actions>
          {editedIndex > -1 && (
            <Button
              onClick={deleteRow}
              color="red"
              floated="left"
              loading={loading}
            >
              刪除
            </Button>
          )}
          <Button onClick={saveRow} color="blue" loading={loading}>
            儲存
          </Button>
        </Modal.Actions>
      </Modal>

      {/* 帳戶 */}
      <Grid columns={2}>
        <Grid.Row>
          {accountData.map((obj, index) => (
            <Grid.Column key={obj.id}>
              <Segment
                inverted={obj.name === activeAccount?.name}
                color="teal"
                onClick={() => handleAccountClick(obj, index)}
              >
                <Header as="h2" inverted={obj.name === activeAccount?.name}>
                  {obj.balance}
                  <Header.Subheader>{obj.name}</Header.Subheader>
                </Header>
              </Segment>
            </Grid.Column>
          ))}
        </Grid.Row>
        <Grid.Row>
          <Grid.Column></Grid.Column>
          {/* 新增鈕 */}
          <Grid.Column>
            {activeAccount && (
              <Button
                floated="right"
                color="yellow"
                onClick={() => {
                  setOpen(true);
                  setEditedIndex(-1);
                  setEditedRow(defaultRow);
                }}
              >
                ADD
              </Button>
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
      {/* 表格 */}
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
          {mortgageData.map((row, index) => (
            <Table.Row key={row.id} onClick={() => tableRowClick(row, index)}>
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
