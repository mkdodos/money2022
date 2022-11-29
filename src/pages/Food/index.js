import { useEffect, useState } from 'react';
import EditForm from './component/EditForm';
// import Cart from './component/Cart';
import ProdList from './component/ProdList';
import { db } from '../../utils/firebase';
import Cart from './component/Cart';
// import { useHistory } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Button, Divider } from 'semantic-ui-react';

export default function index() {
  const history = useHistory();
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

  const viewCart = () => {
    history.push('/cart');
  };
  return (
    <div>
      
      <ProdList rows={rows} />
      <Divider/>
      <Button color="pink" fluid onClick={viewCart}>
        查看購物車
      </Button>
      
      {/* <EditForm/> */}
      {/* <Cart/> */}
    </div>
  );
}
