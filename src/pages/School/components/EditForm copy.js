import React from 'react';

import { Modal } from 'semantic-ui-react';
import YearSelector from './YearSelector';
export default function EditForm() {
  return (
    <div>
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
              <Form.Input
                placeholder="期數"
                value={editedRow.section}
                onChange={(e) => {
                  setEditedRow({ ...editedRow, section: e.target.value });
                }}
              />
              <Form.Button
                onClick={() => {
                  setSectionOpen(true);
                }}
              >
                選擇期數
              </Form.Button>
            </Form.Group>

            {/* <Form.Field inline>
              <label>年度</label>
              <input
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
            </Form.Field> */}
            {/* <Form.Field inline>
              <label>期數</label>
              <input
                value={editedRow.section}
                onChange={(e) => {
                  setEditedRow({ ...editedRow, section: e.target.value });
                }}
                onClick={() => {
                  setSectionOpen(true);
                }}
              />
            </Form.Field> */}

            {/* <Message header="分數" content="" /> */}
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
              <Input
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
