import { Form, Button } from 'semantic-ui-react';
import { useState } from 'react';
const EditForm = ({
  add,
  rows,
  setRows,
  item,
  setItem,
  editedIndex,
  defalutItem,
  setEditedIndex
}) => {
  // 表單輸入時,設定 item 的值
  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  function saveItem() {
    if (editedIndex == -1) {
      add([...rows, { ...item, date: '2022-08-24', id: Date.now() }]);
    } else {
      let newItemList = rows.slice();
      Object.assign(newItemList[editedIndex], item);
      setRows(newItemList);
    }

    setEditedIndex(-1);
    setItem(defalutItem);
  }


  const handleDelete = () => {
    setRows(rows.filter((obj) => obj.id !== item.id));
    // setOpen(false);
    setEditedIndex(-1);
    setItem(defalutItem);
  };

  return (
    <>
      <pre>{JSON.stringify(editedIndex)}</pre>
      <Form>
        <Form.Group>
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
              placeholder=""
              value={item.expense}
              onChange={handleChange}
            />
          </Form.Field>
        </Form.Group>
        <Button primary onClick={saveItem}>
          Save
        </Button>
        {editedIndex>-1 && 
         <Button color="red" onClick={handleDelete}>
         Delete
       </Button>
        }
       
      </Form>
    </>
  );
};

export default EditForm;
