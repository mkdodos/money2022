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

export default function Cart() {
  // 將 localStorage 的資料存在 state
  const [rows, setRows] = useState([]);
  useEffect(() => {
    let cartData = localStorage.getItem('cart');
    cartData = JSON.parse(cartData);
    setRows(cartData);
    console.log(cartData);
  }, []);

  const placeOrder = () => {
    localStorage.removeItem('cart');
    // console.log('order')
  };

  return (
    <div>
      <Item.Group divided unstackable>
        {rows.map((row) => {
          return (
            <Item key={row.id}>
              <Item.Image size="mini" src={row.imageUrl} />
              <Item.Content verticalAlign="middle">
                <Item.Header as="a">{row.name} ${row.price}</Item.Header>
                <Item.Description>
                  <Button icon="minus" circular />
                  <Button basic>{row.qty}</Button>
                  <Button icon="plus" color="pink" circular />
                </Item.Description>
              </Item.Content>
            </Item>
          );
        })}

        {/* <Item>
          <Item.Image
            size="mini"
            src="https://react.semantic-ui.com/images/wireframe/image.png"
          />
          <Item.Content verticalAlign="middle">
            <Item.Header as="a">鮮蝦輕沙拉 $140</Item.Header>
            <Item.Description>
              <Button icon="minus" circular />
              <Button basic>1</Button>
              <Button icon="plus" color="pink" circular />
            </Item.Description>
          </Item.Content>
        </Item> */}
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
