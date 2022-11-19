import React from 'react';
import { List, Modal, Button } from 'semantic-ui-react';
export default function TypeSelector({ open, setOpen, setEditedRow,editedRow }) {
  const types = ['1', '2'];
  const names = ['期中', '期末'];
  
  return (
    <div>
      
      <List horizontal>
        {types.map((type,index) => {
          return (
            <List.Item
              key={type}
              onClick={() => {                
                setEditedRow({...editedRow,type})
              }}
            >
              <List.Content>
                <List.Header>
                  <Button basic positive={editedRow.type==type}>{names[index]}考</Button>
                </List.Header>
              </List.Content>
            </List.Item>
          );
        })}
      </List>
    </div>
  );
}
