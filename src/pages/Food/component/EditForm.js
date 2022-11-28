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
  useEffect(() => {
    db.collection('food')
      .doc(id)
      .get()
      .then((doc) => {
        setRow({ ...doc.data(), id });
        // console.log(doc.data());
      });

    // db.collection('food')
    // .where('id','==',id)
    //   .get()
    //   .then((snapshot) => {
    //     const data = snapshot.docs.map((doc) => {
    //       return { ...doc.data(), id: doc.id };
    //     });
    //     console.log(data);
    //     setRow(data[0]);
    //   });
  }, []);

  // console.log(row);

  const [price, setPrice] = useState(140);
  const [qty, setQty] = useState(0);

  const [cart, setCart] = useState([]);

  const history = useHistory();

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
    // const cart = [{
    //   prodId:'1',
    //   qty:10
    // },
    // {
    //   prodId:'2',
    //   qty:100
    // }]

    // 取出
    let cartData = localStorage.getItem('cart');
    if (cartData) cartData = JSON.parse(cartData);
    else cartData = [];

    // 加入
    // const item = {prodId:id,qty}
    const item = { ...row, qty };
    cartData.push(item);

    // 存入
    const cartStr = JSON.stringify(cartData);
    localStorage.setItem('cart', cartStr);

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

        {/* <Segment>
          <Image src={image} size="small" color="pink" />
          <Header as="h3"> 美式單層牛肉堡 </Header>
          <Header as="h4"> ${price}</Header>
          <Header as="h4"> 小計 ${price*qty}</Header>
          <Divider />
          <Button circular icon="minus" size='small' onClick={minus} />
          <Button basic>{qty}</Button>
          <Button circular icon="plus" size='small' color="pink" onClick={add} />
        </Segment> */}

        {/* <Segment>
          <Image src={image} size="small" color="pink" />
          <Header as="h4"> 起司牛肉堡 </Header>
          <Header as="h4"> $160</Header>
          <Divider />
          <Button circular icon="minus" />
          <Button basic>0</Button>
          <Button circular icon="plus" color="pink" />
        </Segment> */}
      </Segment.Group>
    </div>
  );
}
