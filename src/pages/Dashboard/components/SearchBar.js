import React from 'react';

import { Form, Input, Button, Grid, Dropdown } from 'semantic-ui-react';

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
      {/* <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <CateDropdown onChange={cateQuery} cate={cate} setCate={setCate} />
          </Grid.Column>
          <Grid.Column>
            <Input
              fluid
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Button
              onClick={() => {
                setRows(rowsCopy);
              }}
            >
              Clear
            </Button>
          </Grid.Column>
          <Grid.Column>
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
          </Grid.Column>
        </Grid.Row>
      </Grid> */}
{/* <CateDropdown/> */}
      <Form unstackable>


      <Form.Group >
          <Form.Input
          width={8}
          fluid
            // control={Input}
            // label='First name'
            placeholder='First name'
          />
        
          <CateDropdown onChange={cateQuery}/>
        </Form.Group>



      
        {/* <Form.Checkbox label="I agree to the Terms and Conditions" /> */}
        {/* <Button  type="submit">Submit</Button> */}
        <Button  type="submit" style={{marginTop:'5px'}}>Submit</Button>
        <Button floated='right' style={{marginTop:'5px'}} type="submit">Submit</Button>
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
