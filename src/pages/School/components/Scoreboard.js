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
} from 'semantic-ui-react';

import { db } from '../../../utils/firebase';

import YearSelector from './YearSelector';

import SectionSelector from './SectionSelector';

export default function Scoreboard() {
  const dbCol = db.collection('schoolExams');
  // let data = [
  //   {
  //     id: '1',
  //     year: '110',
  //     section: '01',
  //     ch: 96,
  //     en: 94,
  //     math: 100,
  //     nature: 97,
  //     society: 98,
  //   },
  //   {
  //     id: '2',
  //     year: '110',
  //     section: '02',
  //     ch: 91,
  //     en: 92,
  //     math: 93,
  //     nature: 94,
  //     society: 95,
  //   },
  // ];

  // data.map((row, i) => {
  //   data[i].total = row.ch + row.en + row.math + row.nature + row.society;
  // });

  // data.sort((a, b) => {
  //   return b.section - a.section;
  // });
  const [rows, setRows] = useState([]);
  const defaultItem = {
    year: '',
    section: '',
    ch: '',
    en: '',
    math: '',
    nature: '',
    society: '',
  };
  const [editedRow, setEditedRow] = useState(defaultItem);
  const [editedIndex, setEditedIndex] = useState(-1);
  const [open, setOpen] = useState(false);
  const [yearOpen, setYearOpen] = useState(false);
  const [sectionOpen, setSectionOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dbCol.get().then((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setRows(data);
    });
  }, []);

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
      <SectionSelector
        open={sectionOpen}
        setOpen={setSectionOpen}
        setSection={setSection}
      />
      <Button
        color="teal"
        onClick={() => {
          setEditedIndex(-1);
          setOpen(true);
          setEditedRow(defaultItem);
        }}
      >
        新增
      </Button>
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
                    setOpen(true);
                  }}
                >
                  <Icon name="edit" />
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
      <Modal closeIcon open={open} onClose={() => setOpen(false)}>
        <YearSelector open={yearOpen} setOpen={setYearOpen} setYear={setYear} year={editedRow.year} />

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
              <Form.Input placeholder="期數"
              
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
