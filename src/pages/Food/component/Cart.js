import React from 'react';
import {
  List,
  Image,
  Item,
  Input,
  Icon,
  Button,
  Label,
} from 'semantic-ui-react';
import image from '../../../img/image.png';

export default function Cart() {
  return (
    <div>
      <Item.Group divided unstackable>
        <Item>
          {/* <Button>a</Button> */}
          <Item.Image
            size="mini"
            src="https://react.semantic-ui.com/images/wireframe/image.png"
          />
          <Item.Content verticalAlign="middle">
            <Item.Header as="a">美式單層牛肉堡 $280</Item.Header>
            <Item.Description>
              <Button icon="minus" circular />
              <Button basic>2</Button>
              <Button icon="plus" color="pink" circular />
           
            </Item.Description>
          </Item.Content>
        </Item>
        <Item>
          {/* <Button>a</Button> */}
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
        </Item>

        {/* <Item>
          <Item.Image
            size="tiny"
            src="https://react.semantic-ui.com/images/wireframe/image.png"
          />
          <Item.Content verticalAlign="middle">
          <Item.Header as='a'>12 Years a Slave</Item.Header>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image
            size="tiny"
            src="https://react.semantic-ui.com/images/wireframe/image.png"
          />
          <Item.Content content="Content C" verticalAlign="middle" />
        </Item> */}
      </Item.Group>

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
