import React from 'react';
import { List, Modal } from 'semantic-ui-react';
export default function SectionSelector({ open, setOpen, setSection }) {
  const sections = ['01', '02'];
  
  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Modal.Header>期數</Modal.Header>
        <Modal.Content>
          <List horizontal>
            {sections.map((section) => {
              return (
                <List.Item
                  key={section}
                  onClick={() => {
                    setOpen(false);
                    setSection(section);
                  }}
                >
                  <List.Content>
                    <List.Header>{section}</List.Header>
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
