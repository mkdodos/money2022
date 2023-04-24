import React from 'react';
import { Dropdown } from 'semantic-ui-react';

export default function Trans({ rows, onChange, value, text }) {
  const friendOptions = [
    {
      key: 'Jenny Hess',
      text: 'Jenny Hess',
      value: 'Jenny Hess',
    },
  ];

  return (
    <Dropdown
      value={value}
      fluid
      placeholder={text}
      selection
      options={rows}
      onChange={onChange}
    ></Dropdown>
  );
}
