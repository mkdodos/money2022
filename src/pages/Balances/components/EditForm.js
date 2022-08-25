import { Form, Button, Modal } from 'semantic-ui-react';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { db } from '../../../utils/firebase';
import { useAuth } from '../../../contexts/AuthContext';
const EditForm = ({
  rows,
  setRows,
  item,
  setItem,
  editedIndex,
  defalutItem,
  setEditedIndex,
  open,
  setOpen,
  setActiveAccount
}) => {
  const {currentUser} = useAuth()
  const [loading, setLoading] = useState(false);
  // 表單輸入時,設定 item 的值
  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const dbCol = db.collection('balances');
  function saveItem() {
    if (editedIndex == -1) {
      setLoading(true);
      dbCol.add({...item, user:currentUser.email}).then((doc) => {
        setRows([{ ...item, id: doc.id,user:currentUser.email }, ...rows]);
        setLoading(false);
        setEditedIndex(-1);
        setItem(defalutItem);
        setOpen(false);
      });
    } else {
      setLoading(true);
      dbCol
        .doc(item.id)
        .update(item)
        .then(() => {
          let newItemList = rows.slice();
          Object.assign(newItemList[editedIndex], item);
          setRows(newItemList);
          setLoading(false);
          setEditedIndex(-1);
          setItem(defalutItem);
          setOpen(false);
        });
    }

    // 更新帳額餘額
    setActiveAccount(function(prev){
      return {...prev,balance:prev.balance-item.expense*1}
    })

    // setActiveAccount

  }

  const handleDelete = () => {
    setLoading(true);
    dbCol
      .doc(item.id)
      .delete()
      .then(() => {
        setRows(rows.filter((obj) => obj.id !== item.id));
        setEditedIndex(-1);
        setItem(defalutItem);
        setOpen(false);
        setLoading(false);
      });
  };

  return (
    <>
      {/* <pre>{JSON.stringify(editedIndex)}</pre> */}

      <Modal
        open={open}
        closeIcon
        onClose={() => {
          setOpen(false);
        }}
      >
        <Modal.Header>編輯表單</Modal.Header>
        <Modal.Content>
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
                value={item.expense}
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
