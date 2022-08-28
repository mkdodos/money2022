import { Form, Button, Modal, Menu } from 'semantic-ui-react';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { db } from '../../../utils/firebase';
import { useAuth } from '../../../contexts/AuthContext';
const EditForm = ({
  rows,
  setRows,
  rowsCopy,
  setRowsCopy,
  rowsAccount,
  setRowsAccount,
  item,
  setItem,
  editedIndex,
  defalutItem,
  setEditedIndex,
  open,
  setOpen,
  setActiveAccount,
  activeAccount,
  itemCopy,  
  isIncome,
  setIsIncome
}) => {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
 
  // 表單輸入時,設定 item 的值
  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const dbCol = db.collection('balances');
  function saveItem() {
    if (editedIndex == -1) {
      setLoading(true);
      dbCol
        .add({ ...item, user: currentUser.email, account: activeAccount })
        .then((doc) => {
          const row = {
            ...item,
            id: doc.id,
            user: currentUser.email,
            account: activeAccount,
          };
          setRows([row, ...rows]);
          setRowsCopy([row, ...rowsCopy]);
          setLoading(false);
          setEditedIndex(-1);
          setItem(defalutItem);
          setOpen(false);

          // 更新帳額餘額
          let amt = activeAccount.balance - item.expense * 1;
          updateBalance(amt);
        });
    } else {
      setLoading(true);
      dbCol
        .doc(item.id)
        .update(item)
        .then(() => {
          // 更新帳額餘額
          let amt =
            activeAccount.balance - item.expense * 1 + itemCopy.expense * 1;
          updateBalance(amt);

          // 先更新帳戶餘額再做表格更新,才會正常
          let newItemList = rows.slice();
          Object.assign(newItemList[editedIndex], item);
          setRows(newItemList);

          setLoading(false);
          setEditedIndex(-1);
          setItem(defalutItem);
          setOpen(false);
        });
    }

    // console.log(activeAccount);
    // setRowsAccount()
    // setActiveAccount(function (prev) {

    //   // 原來的帳戶陣列資料也要更新,在點選時才能顯示更新後資料
    //   let amt = prev.balance - item.expense * 1
    //   const accounts = rowsAccount.slice();
    //   Object.assign(accounts[accounts.indexOf(prev)],{ ...prev, balance: amt })

    //   setRowsAccount(accounts)
    //   // 新增支出
    //   // 修改支出
    //   // 刪除支出
    //   db.collection('accounts')
    //     .doc(activeAccount.id)
    //     .update({ balance: amt });

    //   return { ...prev, balance: amt };
    // });

    // setActiveAccount
  }

  function updateBalance(amt) {
    // 更新帳戶餘額
    db.collection('accounts').doc(activeAccount.id).update({ balance: amt });
    const index = rowsAccount.indexOf(activeAccount);
    const newRows = rowsAccount.slice();
    Object.assign(newRows[index], { ...activeAccount, balance: amt });
    setRowsAccount(newRows);
  }
  const handleDelete = () => {
    setLoading(true);
    dbCol
      .doc(item.id)
      .delete()
      .then(() => {
        setRows(rows.filter((obj) => obj.id !== item.id));
        setRowsCopy(rowsCopy.filter((obj) => obj.id !== item.id));
        setEditedIndex(-1);
        setItem(defalutItem);
        setOpen(false);
        setLoading(false);

        let amt = activeAccount.balance + item.expense * 1;
        updateBalance(amt);

        // setActiveAccount(function (prev) {
        //   let amt = prev.balance + item.expense * 1

        //   // 刪除支出
        //   db.collection('accounts')
        //   .doc(activeAccount.id)
        //   .update({ balance: amt });

        //   return { ...prev, balance: amt };
        // });
      });
  };

  function handleItemClick() {
    setIsIncome((prev)=>{
      return !prev
    });
  }

  return (
    <>

     
      {/* <pre>{JSON.stringify(itemCopy)}</pre> */}

      <Modal
        open={open}
        closeIcon
        onClose={() => {
          setOpen(false);
        }}
      >
        <Modal.Header>編輯表單
        {item.expense?'expense':'income'}

        </Modal.Header>
        <Modal.Content>
        <Menu fluid widths={2} pointing secondary>
              <Menu.Item
                color="teal"
                name="income"
                active={isIncome}
                onClick={handleItemClick}
              >
                收入
              </Menu.Item>
              <Menu.Item
                color="orange"
                name="expense"
                active={!isIncome}
                onClick={handleItemClick}
              >
                支出
              </Menu.Item>
            </Menu>


          <Form>
            <Form.Field>
              <label>日期</label>
              <input
                name="date"
                type="date"
                placeholder=""
                value={item.date}
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>項目</label>
              <input
                name="title"
                placeholder=""
                value={item.title}
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>金額</label>
              <input
                name="expense"
                type="number"
                placeholder=""
                value={isIncome?item.income:item.expense}
                onChange={handleChange}
              />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          {editedIndex > -1 && (
            <Button
              loading={loading}
              floated="left"
              color="red"
              onClick={handleDelete}
            >
              Delete
            </Button>
          )}

          <Button loading={loading} floated="right" primary onClick={saveItem}>
            Save
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default EditForm;
