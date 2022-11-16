import React, { useState } from 'react';
import { Table, Icon, Form, Button } from 'semantic-ui-react';
export default function Scoreboard() {
  let data = [
    {
      id: '1',
      year: '110',
      section: '01',
      ch: 96,
      en: 94,
      math: 100,
      nature: 97,
      society: 98,
    },
    {
      id: '2',
      year: '110',
      section: '02',
      ch: 91,
      en: 92,
      math: 93,
      nature: 94,
      society: 95,
    },
  ];

  data.map((row, i) => {
    data[i].total = row.ch + row.en + row.math + row.nature + row.society;
  });
  // data[0].total = 100;
  // data[1].total = 200;
  data.sort((a, b) => {
    // return a.section-b.section;
    //
    return b.section - a.section;
    // return b.society-a.society;
    // return a.society-b.society;
    // return a.society<b.society;
  });
  const [rows, setRows] = useState(data);
  const [editedRow, setEditedRow] = useState({
    ch: '',
    en: '',
    math: '',
    nature: '',
    society: '',
  });
  const [editedIndex, setEditedIndex] = useState(-1);
  // console.log(data);
  return (
    <div>
      <Table striped unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              <Icon name="attention" />
              期數
            </Table.HeaderCell>
            {/* <Table.HeaderCell>期數</Table.HeaderCell> */}
            <Table.HeaderCell>國語</Table.HeaderCell>
            <Table.HeaderCell>英文</Table.HeaderCell>
            <Table.HeaderCell>數學</Table.HeaderCell>
            <Table.HeaderCell>自然</Table.HeaderCell>
            <Table.HeaderCell>社會</Table.HeaderCell>
            <Table.HeaderCell>
              <Icon name="signal" />
              {/* <Icon name="bookmark" /> */}
              {/* <Icon name="delicious" /> */}
              {/* <Icon name="world" /> */}
              {/* <Icon name="radio" /> */}
            </Table.HeaderCell>
            <Table.HeaderCell>#</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {rows.map((row, index) => {
            return (
              <Table.Row key={row.id}>
                <Table.Cell>
                  {row.year}-{row.section}
                </Table.Cell>
                <Table.Cell>{row.ch}</Table.Cell>
                <Table.Cell>{row.en}</Table.Cell>
                <Table.Cell>{row.math}</Table.Cell>
                <Table.Cell>{row.nature}</Table.Cell>
                <Table.Cell>{row.society}</Table.Cell>
                <Table.Cell>{row.total}</Table.Cell>
                <Table.Cell
                  onClick={() => {
                    setEditedRow(row);
                    setEditedIndex(index);
                  }}
                >
                  <Icon name="edit" />
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
      <Form>
        <Form.Field inline>
          <label>國語</label>
          <input
            value={editedRow.ch}
            onChange={(e) => {
              setEditedRow({ ...editedRow, ch: e.target.value });
            }}
          />
        </Form.Field>
        <Form.Field inline>
          <label>英文</label>
          <input
            value={editedRow.en}
            onChange={(e) => {
              setEditedRow({ ...editedRow, en: e.target.value });
            }}
          />
        </Form.Field>
        <Form.Field inline>
          <label>數學</label>
          <input
            value={editedRow.math}
            onChange={(e) => {
              setEditedRow({ ...editedRow, math: e.target.value });
            }}
          />
        </Form.Field>
        <Form.Field inline>
          <label>自然</label>
          <input
            value={editedRow.nature}
            onChange={(e) => {
              setEditedRow({ ...editedRow, nature: e.target.value });
            }}
          />
        </Form.Field>
        <Form.Field inline>
          <label>社會</label>
          <input
            value={editedRow.society}
            onChange={(e) => {
              setEditedRow({ ...editedRow, society: e.target.value });
            }}
          />
        </Form.Field>
        <Button
          onClick={() => {
            const newRows = rows.slice();
            // const newRow = {
            //   ...row,
            //   en: 258,
            //   total:
            //     row.ch + 258 + row.math + row.nature + row.society,
            // };
            // newRow.total =
            // row.ch + 258 + row.math + row.nature + row.society,

            editedRow.total =
              Number(editedRow.ch) +
              Number(editedRow.en) +
              Number(editedRow.math) +
              Number(editedRow.nature) +
              Number(editedRow.society);
            Object.assign(newRows[editedIndex], editedRow);
            setRows(newRows);
            console.log(editedRow);
          }}
        >
          儲存
        </Button>
      </Form>
    </div>
  );
}
