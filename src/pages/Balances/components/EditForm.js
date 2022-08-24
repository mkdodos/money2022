import { Form, Button, Modal } from 'semantic-ui-react';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
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
}) => {
  // 表單輸入時,設定 item 的值
  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  function saveItem() {
    if (editedIndex == -1) {
      setRows([...rows, { ...item, id: uuid() }]);
    } else {
      let newItemList = rows.slice();
      Object.assign(newItemList[editedIndex], item);
      setRows(newItemList);
    }

    setEditedIndex(-1);
    setItem(defalutItem);
    setOpen(false);
  }

  const handleDelete = () => {
    setRows(rows.filter((obj) => obj.id !== item.id));
    // setOpen(false);
    setEditedIndex(-1);
    setItem(defalutItem);
    setOpen(false);
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
            <Button floated='left' color="red" onClick={handleDelete}>
              Delete
            </Button>
          )}
          
          <Button floated='right' primary onClick={saveItem}>
            Save
          </Button>
          
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default EditForm;
