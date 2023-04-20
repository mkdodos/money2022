import React from 'react';
import {
  Button,
  Input,
  Icon,
  Menu,
  Segment,
  Grid,
  Image,
} from 'semantic-ui-react';

export default function DateFilter({
  handleFilterDate,
  setFilterDate,
  filterDate,
}) {
  return (
    <>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Button onClick={() => handleFilterDate(-1)}>
              <Icon name="arrow left" />
            </Button>
          </Grid.Column>
          <Grid.Column width={8}>
            <Input
              fluid
              type="date"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <Button onClick={() => handleFilterDate(1)}>
              <Icon name="arrow right" />
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      {/* <Menu secondary widths={3}>
        <Menu.Item>
          <Button onClick={() => handleFilterDate(-1)}>
            <Icon name="arrow left" />
          </Button>
        </Menu.Item>
        <Menu.Item>
          <Input
            size="small"
            fluid
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
          />
        </Menu.Item>
        <Menu.Item position="left">
          <Button onClick={() => handleFilterDate(1)}>
            <Icon name="arrow right" />
          </Button>
        </Menu.Item>
      </Menu> */}

      {/* <Button onClick={() => handleFilterDate(-1)}>
        <Icon name="arrow left" />
      </Button>
      <Input
        type="date"
        value={filterDate}
        onChange={(e) => setFilterDate(e.target.value)}
      />
      <Button onClick={() => handleFilterDate(1)}>
        <Icon name="arrow right" />
      </Button> */}
    </>
  );
}
