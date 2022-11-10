import React from 'react';

import { Form, FormInput, Input, Label } from 'semantic-ui-react';

import CateDropdown from '../../../components/CateDropdown';

export default function EditForm({ editedRow, setEditedRow }) {
  const handleInputChange = (e) => {
    setEditedRow({ ...editedRow, title: e.target.value });
    // console.log(e.target.value);
  };
  return (
    <Form unstackable>
      <CateDropdown cate={editedRow.cate} label="類別" />
      <Form.Input
        onChange={handleInputChange}
        value={editedRow?.title}
        label="項目"
      />

      <Form.Group>
        <Form.Input value={editedRow?.income} width={8} label="收入金額" />
        <Form.Input value={editedRow?.expense} width={8} label="支出金額" />
      </Form.Group>
    </Form>
  );
}
