import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { useEffect, useState } from 'react';
import { db } from '../../../utils/firebase';

export default function SectionDropdown({ filter, handleSectionChange }) {
  // 編輯列
  const [rows, setRows] = useState([]);

  // firebase 集合
  const dbCol = db.collection('sections');

  // 取得資料
  useEffect(() => {
    dbCol.orderBy('section','desc').get().then((snapshot) => {
      let data = snapshot.docs.map((doc) => {
        return {
          key: doc.id,
          text: doc.data().section,
          value: doc.data().section,
        };
      });


      
    

      setRows(data);
    });
  }, []);

  // const friendOptions = [
  //   {
  //     key: '11201',
  //     text: '11201',
  //     value: '11201',
  //   },

  //   {
  //     key: '11112',
  //     text: '11112',
  //     value: '11112',
  //   },
  // ];

  return (
    <div>
      <Dropdown
        clearable
        onChange={handleSectionChange}
        value={filter.section}
        // placeholder="Select Friend"
        fluid
        selection
        options={rows}
      />
    </div>
  );
}
