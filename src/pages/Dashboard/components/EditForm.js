import React from 'react';

import { Form, FormInput, Input, Label } from 'semantic-ui-react';

import CateDropdown from '../../../components/CateDropdown';

export default function EditForm({ editedRow }) {
  return (
    <Form unstackable>
      <CateDropdown label="類別" />
      <Form.Input value={editedRow?.title} label="項目" />

      <Form.Group>
        <Form.Input value={editedRow?.income} width={8} label="收入金額" />
        <Form.Input value={editedRow?.expense} width={8} label="支出金額" />
      </Form.Group>
    </Form>
  );
}
