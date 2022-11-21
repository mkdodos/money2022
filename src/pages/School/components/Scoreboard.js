import React, { useEffect, useState } from 'react';
import {
  Table,
  Icon,
  Form,
  Button,
  Modal,
  Input,
  Message,
  Header,
  Segment,
  Divider,
  Label,
} from 'semantic-ui-react';




export default function Scoreboard({
  rows,
  setEditedIndex,
  open,
  setOpen,
  setEditedRow,
  editedRow,
}) {
  
  const defaultItem = {
    year: '',
    section: '',
    ch: '',
    en: '',
    math: '',
    nature: '',
    society: '',
  };
 

  const types = ['期中', '期末'];

  // 儲存
  const saveRow = () => {
    const newRows = rows.slice();

    editedRow.total =
      Number(editedRow.ch) +
      Number(editedRow.en) +
      Number(editedRow.math) +
      Number(editedRow.nature) +
      Number(editedRow.society);

    setLoading(true);
    if (editedIndex > -1) {
      dbCol
        .doc(editedRow.id)
        .update(editedRow)
        .then(() => {
          Object.assign(newRows[editedIndex], editedRow);
          setRows(newRows);
          setOpen(false);
          setLoading(false);
        });
    } else {
      dbCol.add(editedRow).then((doc) => {
        setRows([...rows, { ...editedRow, id: doc.id }]);
        setOpen(false);
        setLoading(false);
      });
    }
  };

  // 刪除
  const deleteRow = () => {
    setLoading(true);
    dbCol
      .doc(editedRow.id)
      .delete()
      .then(() => {
        const newRows = rows.slice();
        newRows.splice(editedIndex, 1);
        setRows(newRows);
        setOpen(false);
        setLoading(false);
      });
  };

  const setYear = (y) => {
    setEditedRow({ ...editedRow, year: y });
  };

  const setSection = (section) => {
    setEditedRow({ ...editedRow, section });
  };
  return (
    <div>
      {/* 在用到 rowSpan 格線要正常,需使用 celled structured */}
      {/* <Table striped unstackable celled structured selectable> */}
      <Table  unstackable celled structured selectable>
        <Table.Header>
          <Table.Row textAlign="right">
            <Table.HeaderCell textAlign="center">學期</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">
              {' '}
              <Icon name="tree" />
            </Table.HeaderCell>
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
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {rows.map((row, index) => {
            return (
              <Table.Row key={row.id} textAlign="right">
                {index % 2 == 0 && (
                  <Table.Cell rowSpan="2" textAlign="center">
                    {row.year}-{row.section}
                  </Table.Cell>
                )}

                <Table.Cell textAlign="center">
                 
                  <Label color={row.type == 1 ? 'olive' : 'green'}>
                    {types[row.type - 1]}
                  </Label>
                </Table.Cell>
                <Table.Cell>{row.ch}</Table.Cell>
                <Table.Cell>{row.en}</Table.Cell>
                <Table.Cell>{row.math}</Table.Cell>
                <Table.Cell>{row.nature}</Table.Cell>
                <Table.Cell>{row.society}</Table.Cell>
                <Table.Cell textAlign="right">
                  <Header as="h4">{row.total}</Header>
                </Table.Cell>
                <Table.Cell
                  onClick={() => {
                    setEditedRow(row);
                    setEditedIndex(index);
                    setOpen(true);
                  }}
                >
                  <a href='#'> <Icon name="edit" /></a>
                 
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
