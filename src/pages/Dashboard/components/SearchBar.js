import React from 'react';

// 類別下拉
import CateDropdown from '../../../components/CateDropdown';

import { Form } from 'semantic-ui-react';

export default function SearchBar({
  cateQuery,
  searchText,
  setSearchText,
  setRows,
  rowsCopy,
}) {
  return (
    <div>
      <Form unstackable>
        <Form.Group>
          <CateDropdown
          width={8}
          placeholder="類別" onChange={cateQuery} />
          
          <Form.Input
            width={8}
            fluid
            value={searchText}
            placeholder="選類別後,在此關鍵字搜尋..."
            onChange={(e) => {
              setSearchText(e.target.value);
              setRows(
                rowsCopy.filter((row) => row.title.includes(e.target.value))
              );
            }}
          />
        </Form.Group>
      </Form>
    </div>
  );
}
