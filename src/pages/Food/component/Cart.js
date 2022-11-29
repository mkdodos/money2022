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
  useEffect(() => {
    let cartData = localStorage.getItem('cart');
    if (!cartData) return;
    cartData = JSON.parse(cartData);
    setRows(cartData);
    console.log(cartData);
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
    localStorage.setItem('cart',JSON.stringify(newRows))
  };

  const minus = (row) => {
    let i = rows.indexOf(row);
    // console.log(i)

    let newRows = rows.slice();
    row.qty = row.qty - 1;
    Object.assign(newRows[i], row);
    setRows(newRows);
    localStorage.setItem('cart',JSON.stringify(newRows))
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
                  {row.name} ${row.price}
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

      <Button fluid color="pink" onClick={placeOrder}>
        結帳
      </Button>

      {/* <List  divided>
        
        <List.Item>
          <Image src={image} size="tiny" color="pink" />
          <List.Content verticalAlign="middle">Middle</List.Content>
        </List.Item>
        <List.Item>
          <Image src={image} size="tiny" color="pink" />
          <List.Content verticalAlign="middle">Middle</List.Content>
        </List.Item>
      
      </List> */}
    </div>
  );
}
