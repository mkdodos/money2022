import React, { useState } from 'react';
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

import image from '../../../img/image.png';

export default function EditForm() {
  const [price, setPrice] = useState(140);
  const [qty, setQty] = useState(0);
  const add = () => {
    setQty((prev)=>{
      return prev+1;
    })
  };

  const minus = () => {
    setQty((prev)=>{
      return prev-1;
    })
  };
  return (
    <div>
      <Segment.Group horizontal>
        <Segment>
          <Image src={image} size="small" color="pink" />
          <Header as="h3"> 美式單層牛肉堡 </Header>
          <Header as="h4"> ${price}</Header>
          <Divider />
          {/* <Header as="h4"> 小計 ${price*qty}</Header> */}
          {/* <Divider /> */}
          <Button circular icon="minus" size='small' onClick={minus} />
          <Button basic>{qty}</Button>
          <Button circular icon="plus" size='small' color="pink" onClick={add} />
          <Button  color="pink" floated='right' >加入購物車</Button>
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
