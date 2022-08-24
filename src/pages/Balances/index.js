import ItemList from './components/ItemList';
import EditForm from './components/EditForm';
import { useState, useEffect } from 'react';
import { db } from '../../utils/firebase';
const Balances = () => {
  // 資料陣列
  const [rows, setRows] = useState([]);

  const defalutItem = {
    // date: '',
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

    db.collection('balances')
      .orderBy('date', 'desc')
      .limit(3)
      .get()
      .then((snapshot) => {
        console.log(snapshot.size);
        const data = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setRows(data);
      });
  }, []);

  return (
    <>
      {/* {JSON.stringify(item)} */}
      <EditForm
        add={setRows}
        defalutItem={defalutItem}
        rows={rows}
        setRows={setRows}
        item={item}
        setItem={setItem}
        editedIndex={editedIndex}
        setEditedIndex={setEditedIndex}
      />
      <ItemList
        rows={rows}
        item={item}
        setItem={setItem}
        setEditedIndex={setEditedIndex}
      />
    </>
  );
};

export default Balances;
