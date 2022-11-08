import React from 'react';

import { Form, Input, Button, Grid, Dropdown, Icon } from 'semantic-ui-react';

import CateDropdown from '../../../components/CateDropdown';

export default function SearchBar({
  cateQuery,
  cate,
  setCate,
  searchText,
  setSearchText,
  setRows,
  rowsCopy,
}) {
  return (
    <div>
     
  
      <Form unstackable>
        <Form.Group>
          <Form.Input
            width={8}
            fluid
            value={searchText}
            placeholder="Search..."
            onChange={(e) => {
              setSearchText(e.target.value);
              setRows(
                rowsCopy.filter((row) => row.title.includes(e.target.value))
              );
            }}
          />

          <CateDropdown onChange={cateQuery} cate={cate} />
        </Form.Group>

        <Button
         basic
         color='teal'
          onClick={() => {
            setSearchText('')
            setCate('');
            setRows(rowsCopy)
          }}
          style={{ marginTop: '5px',backgroundColor:'#f4bfdb',color:'#b27092' }}
        >
          <Icon name='redo' /> 重設
        </Button>
        <Button floated="right" style={{ marginTop: '5px' }} type="submit">
          備用
        </Button>
      </Form>

      {/* <Form>
        <Form.Group unstackable widths="equal">
          <CateDropdown onChange={cateQuery} cate={cate} setCate={setCate} />

          <Form.Input placeholder="Search..." width={7} />
        </Form.Group>
        <Form.Checkbox label="I agree to the Terms and Conditions" />
        <Button
          color="olive"
          onClick={() => {
            setRows(rowsCopy.filter((row) => row.title.includes(searchText)));
          }}
        >
          Query
        </Button>
        <Form.Group unstackable widths="equal">
          <Button
            color="olive"
            onClick={() => {
              setRows(rowsCopy.filter((row) => row.title.includes(searchText)));
            }}
          >
            Query
          </Button>

          <Button
            onClick={() => {
              setRows(rowsCopy);
            }}
          >
            Clear
          </Button>
        </Form.Group>

      </Form> */}

      {/* <Form>
        <Form.Group>
          <Form.Field inline>
            <CateDropdown onChange={cateQuery} cate={cate} setCate={setCate} />

            <Input
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <Button
              color="olive"
              onClick={() => {
                setRows(
                  rowsCopy.filter((row) => row.title.includes(searchText))
                );
              }}
            >
              Query
            </Button>
            <Button
              onClick={() => {
                setRows(rowsCopy);
              }}
            >
              Clear
            </Button>
          </Form.Field>
        </Form.Group>
      </Form> */}
    </div>
  );
}
