import React, { useEffect, useState } from 'react';
import {
  List,
  Image,
  Item,
  Input,
  Icon,
  Button,
  Label,
  Placeholder,
} from 'semantic-ui-react';
import image from '../../../img/image.png';

import { useHistory } from 'react-router-dom';

export default function Cart() {
  const history = useHistory();
  // 將 localStorage 的資料存在 state
  const [rows, setRows] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    // localStorage.removeItem('cart');
    let cartData = localStorage.getItem('cart');
    if (!cartData) return;
    cartData = JSON.parse(cartData);
    setRows(cartData);
    const sum = cartData.reduce((a, b) => {
      // return  b.price * b.qty;
      // return a.price * a.qty + b.price * b.qty;
      return a + b.price * b.qty;
      // return a.price * a.qty ;
    },0);
    // console.log(sum)
    setTotal(sum);
    // console.log(cartData);
  }, []);

  const placeOrder = () => {
    localStorage.removeItem('cart');
    history.push('/food');
    // console.log('order')
  };

  // 調整數量 + -
  const add = (row) => {
    // 取得該列索引
    let i = rows.indexOf(row);

    // 將該列數量更新
    row.qty = row.qty + 1;
    let newRows = rows.slice();
    Object.assign(newRows[i], row);
    setRows(newRows);
    localStorage.setItem('cart', JSON.stringify(newRows));

    const sum = newRows.reduce((a, b) => {
      return a + b.price * b.qty;
    },0);
    setTotal(sum);
  };

  const minus = (row) => {
    let i = rows.indexOf(row);
    // console.log(i)

    let newRows = rows.slice();
    row.qty = row.qty - 1;
    Object.assign(newRows[i], row);
    setRows(newRows);
    localStorage.setItem('cart', JSON.stringify(newRows));

    const sum = newRows.reduce((a, b) => {
      return a + b.price * b.qty;
    },0);
    setTotal(sum);
    // setQty((prev) => {
    //   return prev - 1;
    // });
  };

  return (
    <div>
      <Item.Group divided unstackable>
        {rows.map((row) => {
          return (
            <Item key={row.id}>
              <Item.Image size="mini" src={row.imageUrl} />
              <Item.Content verticalAlign="middle">
                <Item.Header as="a">
                  {row.name} ${row.price * row.qty}
                </Item.Header>
                <Item.Description>
                  <Button
                    circular
                    icon="minus"
                    size="small"
                    onClick={() => {
                      minus(row);
                    }}
                  />
                  <Button basic>{row.qty}</Button>
                  <Button
                    circular
                    icon="plus"
                    size="small"
                    color="pink"
                    onClick={() => {
                      add(row);
                    }}
                  />

                  {/* <Button icon="minus" circular />
                  <Button basic>{row.qty}</Button>
                  <Button icon="plus" color="pink" circular /> */}
                </Item.Description>
              </Item.Content>
            </Item>
          );
        })}
      </Item.Group>

      <Button
        fluid
       
        as="div"
        labelPosition="left"
        onClick={placeOrder}
      >
        <Label as="a" color='pink' basic>
          ${total}
        </Label>
        <Button fluid  color="pink">結帳</Button>
      </Button>
    </div>
  );
}
