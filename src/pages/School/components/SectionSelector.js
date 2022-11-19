import React from 'react';
import { List, Modal, Button } from 'semantic-ui-react';
export default function SectionSelector({ setEditedRow,editedRow  }) {
  const sections = ['1', '2'];
  const names = ['上', '下'];
  
  return (
    <div>
      <List horizontal>
        {sections.map((section,index) => {
          return (
            <List.Item
              key={section}
              onClick={() => {               
                setEditedRow({...editedRow,section})
              }}
            >
              <List.Content>
                <List.Header>
                  <Button basic primary={editedRow.section==section}>{names[index]}學期</Button>
                </List.Header>
              </List.Content>
            </List.Item>
          );
        })}
      </List>
      
    </div>
  );
}
