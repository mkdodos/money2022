import { useEffect, useState } from 'react';
import EditForm from './component/EditForm';
// import Cart from './component/Cart';
import ProdList from './component/ProdList';
import { db } from '../../utils/firebase';
import Cart from './component/Cart';

export default function index() {
  

  const [rows, setRows] = useState([]);
  useEffect(() => {
    // console.log('data')
    db.collection('food')
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        console.log('data');
        setRows(data);
      });
  }, []);

  return (
    <div>
      
      <ProdList rows={rows} />
      {/* <EditForm/> */}
      {/* <Cart/> */}
    </div>
  );
}
