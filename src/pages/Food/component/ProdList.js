import React from 'react';
import wire from '../../../img/image.png';
import ham from '../images/hamburger.jpg';
import { v4 as uuidv4 } from 'uuid';

import { useHistory } from 'react-router-dom';

import { Segment, Image, Header, Card, Icon } from 'semantic-ui-react';
export default function ProdList({rows}) {
const history = useHistory();

  

  const toCart = (id)=>{
    history.push(`prod/${id}`)
    console.log('toc')
  }
  return (
    <div>
      

      {rows.map((row, index) => {
        return (
          <div key={row.id}>
            {/* {row.image} */}
            {index % 2 == 0 && (
              <Card.Group itemsPerRow={2}>
                <Card onClick={()=>toCart(row.id)}>
                  <Image src={row.imageUrl} style={{margin:'10px'}}  />
                  <Card.Content>
                    <Card.Header>{row.name}</Card.Header>
                    <Card.Description>${row.price}</Card.Description>
                  </Card.Content>
                </Card>

                {/* 判斷索引未達最大值才顯示 */}
                {index < rows.length - 1 && (
                  <Card onClick={()=>toCart(rows[index+1].id)}>
                    <Image src={rows[index+1].imageUrl}  style={{margin:'10px'}} />
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

      
    
    </div>
  );
}
