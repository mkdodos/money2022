import ItemList from './components/ItemList';
import EditForm from './components/EditForm';
import Accounts from './components/Accounts';
import Query from './components/Query';
import DateFilter from './components/DateFilter';
import { useState, useEffect } from 'react';
import { db, auth } from '../../utils/firebase';
import { Button, Grid, Header, Statistic, Input } from 'semantic-ui-react';

import { useAuth } from '../../contexts/AuthContext';

const Balances = () => {
  const { currentUser, logout } = useAuth();

  // 顯示 Modal
  const [open, setOpen] = useState(false);

  // 資料陣列
  const [rows, setRows] = useState([]);

  // 提供給篩選用的資料陣列,才不會因為篩選變動了原陣列
  const [rowsCopy, setRowsCopy] = useState([]);

  // 帳戶資料
  const [rowsAccount, setRowsAccount] = useState([]);

  const [activeAccount, setActiveAccount] = useState();

  const defalutItem = {
    date: new Date().toISOString().slice(0, 10),
    title: '',
    amt: '',
  };

  // 單筆資料
  const [item, setItem] = useState(defalutItem);

  // 點選時編輯時,複製一份單筆資料,做為儲存時計算帳戶餘額之用
  const [itemCopy, setItemCopy] = useState(defalutItem);

  const [editedIndex, setEditedIndex] = useState(-1);

  // 收支判斷
  const [isIncome, setIsIncome] = useState(false);

  // 收支判斷(在更新時,有可能收支互換,用此作用判斷以便更新帳戶餘額)
  // 在 ItemList row click 事件設定
  // 在 EditForm save 時,用來判斷
  const [isIncomeOrigin, setIsIncomeOrigin] = useState(false);

  // 類別下拉
  const [cate, setCate] = useState();
  const [cates, setCates] = useState([]);

  const [type, setType] = useState();

  // 日期篩選條件值
  const [filterDate, setFilterDate] = useState(
    new Date().toISOString().slice(0, 10)
  );

  useEffect(() => {
    // axios.get('http://192.168.0.12:9000/balances').then(res=>{
    //   setRows(res.data)
    // })

    // 類別資料
    let colCates = db.collection('cates').orderBy('prior');
    // let colCates = db.collection('cates');
    if (currentUser) colCates = colCates.where('user', '==', currentUser.email);

    colCates = colCates.get().then((snapshot) => {
      const rows = snapshot.docs.map((doc) => {
        const d = doc.data();
        return { text: d.name, value: d.name, key: doc.id };
      });
      setCates(rows);
    });

    // 帳戶資料
    db.collection('accounts')
      .where('user', '==', currentUser.email)
      .orderBy('prior')
      // .limit(4)
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          // console.log(doc.data().name);
          return { ...doc.data(), id: doc.id };
        });

        // 帳戶預設值
        setActiveAccount(data[0]);
        setRowsAccount(data);

        fetchBalancesData(data[0]);
      });
  }, []);

  useEffect(() => {
    fetchBalancesData(activeAccount);
  }, [filterDate]);

  const fetchBalancesData = (account) => {
    let dbCol = db.collection('balances');
    if (currentUser) dbCol = dbCol.where('user', '==', currentUser?.email);
    // 收支資料(一次顯示一天資料)
    dbCol
      .where('date', '==', filterDate)
      .get()
      .then((snapshot) => {
        const data2 = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });

        setRowsCopy(data2);
        setRows(
          data2.filter(
            (row) => row.account && row.account.name == account?.name
          )
        );
      });
  };

  const handleOpen = () => {
    setOpen(true);
    setItem(defalutItem);
    setEditedIndex(-1);
  };

  const handleAccountClick = (account) => {
    setActiveAccount(account);
    setRows(
      rowsCopy.filter((row) => row.account && row.account.name == account.name)
    );
  };

  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  const handleFilterDate = (days) => {
    const newDate = addDays(filterDate, days).toISOString().slice(0, 10);
    setFilterDate(newDate);
    // console.log(newDate);
  };

  // const handleFilterDateMinus = () => {
  //   const newDate = addDays(filterDate, -1).toISOString().slice(0, 10);
  //   setFilterDate(newDate);
  //   console.log(newDate);
  // };

  return (
    <>
      {/* <pre>{JSON.stringify(itemCopy)}</pre> */}

      {/* {JSON.stringify(activeAccount?.balance)} */}

      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Accounts
              rows={rowsAccount}
              activeAccount={activeAccount}
              accountClick={handleAccountClick}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>

      {activeAccount && (
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              {/* <Header>{rows.length}</Header> */}

              <Statistic horizontal>
                <Statistic.Value>{activeAccount?.balance}</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column verticalAlign="middle">
              <Button onClick={handleOpen} floated="right" color="yellow">
                ADD
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )}

      <br></br>
      <DateFilter
        filterDate={filterDate}
        setFilterDate={setFilterDate}
        handleFilterDate={handleFilterDate}
      />

      <Grid>
        <Grid.Row>
          <Grid.Column>
            <ItemList
              setType={setType}
              setCate={setCate}
              cates={cates}
              setOpen={setOpen}
              rows={rows}
              rowsCopy={rowsCopy}
              setRows={setRows}
              item={item}
              setItem={setItem}
              setItemCopy={setItemCopy}
              isIncome={isIncome}
              setIsIncome={setIsIncome}
              isIncomeOrigin={isIncomeOrigin}
              setIsIncomeOrigin={setIsIncomeOrigin}
              setEditedIndex={setEditedIndex}
              activeAccount={activeAccount}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>

      {/* {JSON.stringify(item)} */}
      <EditForm
        type={type}
        setType={setType}
        cates={cates}
        cate={cate}
        setCate={setCate}
        isIncomeOrigin={isIncomeOrigin}
        setIsIncome={setIsIncome}
        isIncome={isIncome}
        defalutItem={defalutItem}
        rows={rows}
        setRows={setRows}
        setRowsCopy={setRowsCopy}
        rowsCopy={rowsCopy}
        rowsAccount={rowsAccount}
        setRowsAccount={setRowsAccount}
        item={item}
        setItem={setItem}
        editedIndex={editedIndex}
        setEditedIndex={setEditedIndex}
        open={open}
        setOpen={setOpen}
        setActiveAccount={setActiveAccount}
        activeAccount={activeAccount}
        itemCopy={itemCopy}
      />
    </>
  );
};

export default Balances;
