import ItemList from './components/ItemList';
import EditForm from './components/EditForm';
import Accounts from './components/Accounts';
import { useState, useEffect } from 'react';
import { db, auth } from '../../utils/firebase';
import { Button, Grid, Header, Statistic } from 'semantic-ui-react';

import { useAuth } from '../../contexts/AuthContext';

const Balances = () => {
  const { currentUser, logout } = useAuth();

  // const user = auth.currentUser;
  // console.log(user)

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
    expense: '',
  };

  // 單筆資料
  const [item, setItem] = useState(defalutItem);

  // 點選時編輯時,複製一份單筆資料,做為儲存時計算帳戶餘額之用
  const [itemCopy, setItemCopy] = useState(defalutItem);

  const [editedIndex, setEditedIndex] = useState(-1);

  // const [item, setItem] = useState({});

  useEffect(() => {
    // axios.get('http://192.168.0.12:9000/balances').then(res=>{
    //   setRows(res.data)
    // })

    // console.log(currentUser?.uid)
    let dbCol = db.collection('balances').orderBy('date', 'desc').limit(300);
    if (currentUser) dbCol = dbCol.where('user', '==', currentUser?.email);

    dbCol.get().then((snapshot) => {
      // console.log(snapshot.size);
      const data = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setRows(data);
      setRowsCopy(data);
    });

    db.collection('accounts')
      .where('user', '==', currentUser.email)
      .orderBy('prior')
      .limit(3)
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setRowsAccount(data);
      });
  }, []);

  const handleOpen = () => {
    setOpen(true);
    setItem(defalutItem);
  };

  const handleAccountClick = (account) => {
    setActiveAccount(account);
    setRows(
      rowsCopy.filter((row) => row.account && row.account.name == account.name)
    );
  };

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

      <Grid>
        <Grid.Row>
          <Grid.Column>
            <ItemList
              setOpen={setOpen}
              rows={rows}
              rowsCopy={rowsCopy}
              setRows={setRows}
              item={item}
              setItem={setItem}
              setItemCopy={setItemCopy}
              setEditedIndex={setEditedIndex}
              activeAccount={activeAccount}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>

      {/* {JSON.stringify(item)} */}
      <EditForm
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
