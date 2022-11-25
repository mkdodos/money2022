import React from 'react';
import image from '../../../img/image.png';

import { Segment, Image, Header } from 'semantic-ui-react';
export default function ProdList() {
  const rows = [
    {
      id: '1',
      name: '法式鮮蔬湯品',
      price: 40,
    },
    {
      id: '2',
      name: '鮮蝦輕沙拉',
      price: 140,
    },
    {
      id: '3',
      name: '牛肉堡',
      price: 130,
    },
    {
      id: '4',
      name: '豬肉堡',
      price: 10,
    },
    {
      id: '5',
      name: '牛肉堡5',
      price: 50,
    },
    {
      id: '6',
      name: '豬肉堡6',
      price: 60,
    },
  ];
  return (
    <div>
      {rows.map((row, index) => {
        return (
          <>
            {index % 2 == 0 && (
              <Segment.Group horizontal>
                <Segment>
                  <Image rounded src={image} size="small" color="pink" />
                  <Header as="h4"> {row.name} </Header>
                  <Header as="h4"> ${row.price}</Header>
                </Segment>

                <Segment>
                  <Image rounded src={image} size="small" color="pink" />
                  <Header as="h4"> {rows[index+1].name} </Header>
                  <Header as="h4"> ${rows[index+1].price}</Header>
                </Segment>
              </Segment.Group>
            )}
          </>
        );
      })}
    </div>
  );
}
