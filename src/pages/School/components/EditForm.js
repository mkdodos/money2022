import { useState } from 'react';

import { Modal, Form, Divider, Header, Icon, Button } from 'semantic-ui-react';
import YearSelector from './YearSelector';
import SectionSelector from './SectionSelector';
import TypeSelector from './TypeSelector';
export default function EditForm({
  open,
  setOpen,
  editedRow,
  setEditedRow,
  defaultItem,
  rows,
  editedIndex,
  setEditedIndex,
  saveRow,
  deleteRow,
  loading,
  setLoading,
  yearOpen,
  setYearOpen
}) {
  
  const setYear = (y) => {
    setEditedRow({ ...editedRow, year: y });
  };
  
  return (
    <div>
      <Button
      basic
        color='teal'
        onClick={() => {
          setEditedIndex(-1);
          setOpen(true);
          setEditedRow(defaultItem);
        }}
      ><Icon name='plus'/>
        新增
      </Button>

      <Modal closeIcon open={open} onClose={() => setOpen(false)}>
        <YearSelector
          open={yearOpen}
          setOpen={setYearOpen}
          setYear={setYear}
          year={editedRow.year}
        />

        <Modal.Header>編輯</Modal.Header>
        <Modal.Content>
          <Form unstackable>
            <Form.Group widths={2}>
              <Form.Input
                placeholder="年度"
                type="number"
                value={editedRow.year}
                onChange={(e) => {
                  setEditedRow({ ...editedRow, year: e.target.value });
                }}
              />
              <Form.Button
                onClick={() => {
                  setYearOpen(true);
                }}
              >
                選擇年度
              </Form.Button>
            </Form.Group>

            <Form.Group widths={2}>
             
           
            </Form.Group>


            <SectionSelector editedRow={editedRow} setEditedRow={setEditedRow}/>
            <TypeSelector editedRow={editedRow} setEditedRow={setEditedRow}/>

            <Divider horizontal>
              <Header as="h4">
                <Icon name="signal" />
              </Header>
            </Divider>
            {/* <Header>分數</Header> */}
            <Form.Field inline>
              <label>國語</label>
              <input
                type="number"
                value={editedRow.ch}
                onChange={(e) => {
                  setEditedRow({ ...editedRow, ch: e.target.value });
                }}
              />
            </Form.Field>

            <Form.Field inline>
              <label>英文</label>
              <input
                type="number"
                value={editedRow.en}
                onChange={(e) => {
                  setEditedRow({ ...editedRow, en: e.target.value });
                }}
              />
            </Form.Field>

            <Form.Field inline>
              <label>數學</label>
              <input
                type="number"
                value={editedRow.math}
                onChange={(e) => {
                  setEditedRow({ ...editedRow, math: e.target.value });
                }}
              />
            </Form.Field>
            <Form.Field inline>
              <label>自然</label>
              <input
                type="number"
                value={editedRow.nature}
                onChange={(e) => {
                  setEditedRow({ ...editedRow, nature: e.target.value });
                }}
              />
            </Form.Field>
            <Form.Field inline>
              <label>社會</label>
              {/* <Label>a</Label> */}
              <input
                type="number"
                value={editedRow.society}
                onChange={(e) => {
                  setEditedRow({ ...editedRow, society: e.target.value });
                }}
              />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button loading={loading} primary onClick={saveRow}>
            儲存
          </Button>
          <Button
            loading={loading}
            color="red"
            floated="left"
            onClick={deleteRow}
          >
            刪除
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}
