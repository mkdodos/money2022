import React, { useState } from 'react';
import { List, Modal, Label, Button } from 'semantic-ui-react';
export default function YearSelector({ open, setOpen, setYear, year }) {
  const years = [111, 112, 113, 114];
  const [thisY, setThisY] = useState('');
  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)} closeIcon>
        <Modal.Header>年度</Modal.Header>
        <Modal.Content>
          <List horizontal celled>
            {years.map((y) => {
              return (
                <List.Item
                  key={y}
                  onClick={() => {
                    console.log(y);
                    setOpen(false);
                    setYear(y);
                    // setThisY(y);
                  }}
                >
                  {/* <Label  horizontal>{y}</Label> */}

                  {y == year ? (
                    <Button color="teal">{y}</Button>
                  ) : (
                    <Button>{y}</Button>
                  )}

                  {/* <List.Content>
                    <List.Header>{y}</List.Header>
                  </List.Content> */}
                </List.Item>
              );
            })}
          </List>
        </Modal.Content>
      </Modal>
    </div>
  );
}
