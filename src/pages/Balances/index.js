import ItemList from './components/ItemList';
import EditForm from './components/EditForm';
import { useState, useEffect } from 'react';
import { db, auth } from '../../utils/firebase';
import { Button, Header } from 'semantic-ui-react';

const Balances = () => {

  const user = auth.currentUser;
  // console.log(user)

  // 顯示 Modal
  const [open, setOpen] = useState(false);

  // 資料陣列
  const [rows, setRows] = useState([]);

  const defalutItem = {
    date: new Date().toISOString().slice(0,10),
    title: '',
    expense: '',
  };

  // 單筆資料
  const [item, setItem] = useState(defalutItem);

  const [editedIndex, setEditedIndex] = useState(-1);

  // const [item, setItem] = useState({});

  useEffect(() => {
    // axios.get('http://192.168.0.12:9000/balances').then(res=>{
    //   setRows(res.data)
    // })

    console.log(user?.uid)
    let dbCol = db.collection('balances')
      .orderBy('date', 'desc')
      .limit(10)
    if(user)
      dbCol = dbCol.where('user','==',user?.email)
     

      dbCol.get()
      .then((snapshot) => {
        // console.log(snapshot.size);
        const data = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setRows(data);
      });
  }, []);


  const handleOpen = () => {
    setOpen(true);
    setItem(defalutItem)
  };

  return (
    <>
     <Button onClick={handleOpen} floated="right" color="yellow">ADD</Button>
     <Header>{rows.length}</Header>
      {/* {JSON.stringify(item)} */}
      <EditForm
        defalutItem={defalutItem}
        rows={rows}
        setRows={setRows}
        item={item}
        setItem={setItem}
        editedIndex={editedIndex}
        setEditedIndex={setEditedIndex}
        open={open}
        setOpen={setOpen}
      />
      <ItemList
        setOpen={setOpen}
        // open={open}
        rows={rows}
        item={item}
        setItem={setItem}
        setEditedIndex={setEditedIndex}
      />
    </>
  );
};

export default Balances;
