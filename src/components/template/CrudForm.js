// 具備 CRUD 功能的表單
import { useState } from 'react';
import { Form, Button, Table, Header, Modal } from 'semantic-ui-react';
export default function CrudForm() {
  const defalutItem = {
    name: '',
    amt: '',
  };

  // 單筆資料
  const [item, setItem] = useState(defalutItem);
  // 資料陣列
  const [itemList, setItemList] = useState([]);

  const [editedIndex, setEditedIndex] = useState(-1);

  // 顯示 Modal
  const [open, setOpen] = useState(false);

  // 表單輸入時,設定 item 的值
  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleDelete = () => {
    setItemList(itemList.filter((obj) => obj.id !== item.id));
    setOpen(false);
    setEditedIndex(-1);
    setItem(defalutItem);
  };

  const handleEdit = (item) => {
    setOpen(true);
    // 刪除會用到 item.id ,更新表單輸入項
    setItem(item);
    // 做為更新完資料要更新那一列的依據
    setEditedIndex(itemList.indexOf(item));
  };

  const handleSave = () => {
    if (editedIndex == -1) {
      // id 做為更新和刪除之用
      setItemList([...itemList, { ...item, id: Date.now() }]);
    } else {
      let newItemList = itemList.slice();
      Object.assign(newItemList[editedIndex], item);
      setItemList(newItemList);
    }

    setOpen(false);
    setEditedIndex(-1);
    setItem(defalutItem);
  };

  return (
    <>
      {/* <pre>{editedIndex}</pre>
      <pre>{JSON.stringify(itemList)}</pre> */}
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
            <Form.Group>
              <Form.Field>
                <label>名稱</label>
                <input
                  name="name"
                  placeholder=""
                  value={item.name}
                  onChange={handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label>金額</label>
                <input
                  name="amt"
                  placeholder=""
                  value={item.amt}
                  onChange={handleChange}
                />
              </Form.Field>
            </Form.Group>           
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button
            floated="left"
            color="red"
            onClick={() => {
              handleDelete();
            }}
          >
            Delete
          </Button>

          <Button
            primary
            onClick={() => {
              handleSave();
            }}
          >
            Save
          </Button>
        </Modal.Actions>
      </Modal>

      <Header>{itemList.length}</Header>
      <Button onClick={handleOpen}>ADD</Button>
      <Table unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>名稱</Table.HeaderCell>
            <Table.HeaderCell>金額</Table.HeaderCell>           
            <Table.HeaderCell>#</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {itemList.map((item) => {
            return (
              <Table.Row key={item.id}>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.amt}</Table.Cell>
              
                <Table.Cell
                  onClick={() => {
                    handleEdit(item);
                  }}
                >
                  <a href="#">Edit</a>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </>
  );
}
