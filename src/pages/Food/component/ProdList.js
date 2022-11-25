import React from 'react';
import wire from '../../../img/image.png';
import ham from '../images/hamburger.jpg';
import { v4 as uuidv4 } from 'uuid';

import { Segment, Image, Header, Card, Icon } from 'semantic-ui-react';
export default function ProdList() {
  const rows = [
    {
      id: '1',
      name: '法式鮮蔬湯品',
      price: 40,
      image:'https://s7d1.scene7.com/is/image/mcdonalds/caesar-salad-with-spicy-fried-chicken-filet_832x822:product-header-desktop?wid=829&hei=455&dpr=off'
    },
    {
      id: '2',
      name: '鮮蝦輕沙拉',
      price: 140,
      image:'https://s7d1.scene7.com/is/image/mcdonalds/mushroom-angus-beef-burger_832x822:product-header-desktop?wid=829&hei=455&dpr=off'
    },
    {
      id: '3',
      name: '牛肉堡',
      price: 130,
      image:'https://s7d1.scene7.com/is/image/mcdonalds/hamburger_832x822:product-header-desktop?wid=829&hei=455&dpr=off'
    },
    {
      id: '4',
      name: '牛肉堡4',
      price: 30,
      image:'https://s7d1.scene7.com/is/image/mcdonalds/big-mac_832x822_2:product-header-desktop?wid=829&hei=455&dpr=off'
    },
    {
      id: '5',
      name: '豬肉堡',
      price: 10,
      image:'https://s7d1.scene7.com/is/image/mcdonalds/egg-burger-with-sausage_832x822:product-header-desktop?wid=829&hei=455&dpr=off'
    },
    // {
    //   id: '5',
    //   name: '牛肉堡5',
    //   price: 50,
    //   image:image
    // },
    // {
    //   id: '6',
    //   name: '豬肉堡6',
    //   price: 60,
    // },
  ];
  return (
    <div>
      {/* <Card.Group itemsPerRow={2}>
        <Card image={image}>
          <Image src={image} wrapped ui={false} />
          <Card.Content>
            <Card.Header>豬肉堡6</Card.Header>

            <Card.Description>$60</Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
      <Card.Group itemsPerRow={2}>
        <Card image={image}>
          <Image src={image} wrapped ui={false} />
          <Card.Content>
            <Card.Header>豬肉堡6</Card.Header>

            <Card.Description>$60</Card.Description>
          </Card.Content>
        </Card>
      </Card.Group> */}

      {rows.map((row, index) => {
        return (
          <div key={row.id}>
            {/* {row.image} */}
            {index % 2 == 0 && (
              <Card.Group itemsPerRow={2}>
                <Card>
                  <Image src={row.image} style={{margin:'10px'}}  />
                  <Card.Content>
                    <Card.Header>{row.name}</Card.Header>
                    <Card.Description>${row.price}</Card.Description>
                  </Card.Content>
                </Card>

                {/* 判斷索引未達最大值才顯示 */}
                {index < rows.length - 1 && (
                  <Card>
                    <Image src={rows[index+1].image}  style={{margin:'10px'}} />
                    <Card.Content>
                      <Card.Header>{rows[index+1].name}</Card.Header>
                      <Card.Description>${rows[index+1].price}</Card.Description>
                    </Card.Content>
                  </Card>
                )}

                
              </Card.Group>
            )}
          </div>
        );
      })}

      {rows.map((row, index) => {
        return (
          <div key={row.id}>
            {index % 2 == 0 && (
              <Segment.Group horizontal>
                <Segment>
                  <Image rounded src={row.image} size="small" color="pink" />
                  <Header as="h4"> {row.name} </Header>
                  <Header as="h4"> ${row.price}</Header>
                </Segment>

                {/* 判斷索引未達最大值才顯示 */}
                {index < rows.length - 1 && (
                  <Segment>
                    <Image rounded src={row.image} size="small" color="pink" />
                    <Header as="h4"> {rows[index + 1].name} </Header>
                    <Header as="h4"> ${rows[index + 1].price}</Header>
                  </Segment>
                )}
              </Segment.Group>
            )}
          </div>
        );
      })}

    
    </div>
  );
}
