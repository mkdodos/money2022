import React from 'react';
import { List, Modal } from 'semantic-ui-react';
export default function YearSelector({open,setOpen,setYear}) {
  const years = [101, 102, 103];
  return (
    <div>
      <Modal open={open}>
        <Modal.Content>
          <List horizontal>
            {years.map((y) => {
              return (
                <List.Item
                  key={y}
                  onClick={() => {
                    console.log(y);
                    setOpen(false)
                    setYear(y)
                  }}
                >
                  <List.Content>
                    <List.Header>{y}</List.Header>
                  </List.Content>
                </List.Item>
              );
            })}
          </List>
        </Modal.Content>
      </Modal>
    </div>
  );
}
