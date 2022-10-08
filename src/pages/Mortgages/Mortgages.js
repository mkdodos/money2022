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

  // 房貸支出資料
  const [mortgageData, setMorgageData] = useState([]);

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
    setMorgageData(mortgages);
  }, []);

  const handleAccountClick = (item, index) => {
    // console.log(item);
    setActiveAccount({ ...item, index });
  };

  // 一般文字輸入
  const inputChange = (e) => {
    setEditedRow({ ...editedRow, [e.target.name]: e.target.value });
  };

  // 儲存
  const saveRow = () => {
    const newRow = { ...editedRow, account: activeAccount.name, id: uuidv4() };
    setMorgageData([...mortgageData, newRow]);

    // 更新帳戶餘額
    const newBalance = activeAccount.balance * 1 - editedRow.basic * 1;

    

    // 複製一份帳戶資料
    const newAccountData = accountData.slice();
    // 更新該筆作用中帳戶的餘額
    Object.assign(newAccountData[activeAccount.index], {
      ...activeAccount,
      balance: newBalance,
    });

    // 將資料寫入原資料
    setAccountData(newAccountData);

    // 更新作用中帳戶的餘額,再下次新增支出時計算餘額才會正確
    setActiveAccount({ ...activeAccount, balance: newBalance });

    console.log(activeAccount.balance);
    setOpen(false);
    setEditedRow(defaultRow);
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
                }}
              >
                ADD
              </Button>
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>

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
