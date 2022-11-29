import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Input,
  Form,
  Grid,
  Menu,
  Image,
  Label,
  Header,
  Segment,
  Icon,
  Divider,
} from 'semantic-ui-react';

import { db } from '../../../utils/firebase';
// import image from '../../../img/image.png';

import { useParams } from 'react-router-dom';

export default function EditForm() {
  const { id } = useParams();
  // const row = rows.filter((row) => row.id == id)[0];

  const [row, setRow] = useState({});

  const [price, setPrice] = useState(140);
  const [qty, setQty] = useState(0);

  const [cart, setCart] = useState([]);

  const history = useHistory();

  useEffect(() => {
    db.collection('food')
      .doc(id)
      .get()
      .then((doc) => {
        setRow({ ...doc.data(), id });
        // console.log(doc.data());
      });

    // 購物車
    let cart = localStorage.getItem('cart');
    if (!cart) return;

    cart = JSON.parse(cart);
    const item = cart.find((item) => item.id == id);
    if (item) setQty(item.qty);
    // console.log(item);
  }, []);

  // console.log(row);

  const add = () => {
    setQty((prev) => {
      return prev + 1;
    });
  };

  const minus = () => {
    setQty((prev) => {
      return prev - 1;
    });
  };

  const CartAdd = () => {
    // 取出
    let cartData = localStorage.getItem('cart');
    if (cartData) cartData = JSON.parse(cartData);
    else cartData = [];

    // 判斷購物車中是否已有該品項
    const index = cartData.findIndex((obj) => obj.id == id);
    const item = { ...row, qty };

    if (index > -1) {
      // 有
      Object.assign(cartData[index], item);
      console.log('yes');
    } else {
      // 無
      cartData.push(item);
      console.log('no');
    }

    // 加入
    // const item = {prodId:id,qty}

    // 存入
    const cartStr = JSON.stringify(cartData);
    localStorage.setItem('cart', cartStr);

    console.log(cartStr);
    history.push('/cart');
  };

  const viewCart = () => {
    history.push('/cart');
  };

  return (
    <div>
      {/* {id} */}
      <Segment.Group horizontal>
        <Segment>
          <Image src={row.imageUrl} size="small" color="pink" />
          <Header as="h3"> {row.name} </Header>
          <Header as="h4"> ${row.price}</Header>
          <Divider />
          {/* <Header as="h4"> 小計 ${price*qty}</Header> */}
          {/* <Divider /> */}
          <Button circular icon="minus" size="small" onClick={minus} />
          <Button basic>{qty}</Button>
          <Button
            circular
            icon="plus"
            size="small"
            color="pink"
            onClick={add}
          />
          <Button color="pink" floated="right" onClick={CartAdd}>
            加入購物車
          </Button>
        </Segment>
      </Segment.Group>

      <Button color="pink" fluid onClick={viewCart}>
        查看購物車
      </Button>
    </div>
  );
}
