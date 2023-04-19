import React from 'react';
import { Button, Input, Icon } from 'semantic-ui-react';

export default function DateFilter({
  handleFilterDate,
  setFilterDate,
  filterDate,
}) {
  return (
    <>
      <Button onClick={() => handleFilterDate(-1)}>
        <Icon name="arrow left" />
      </Button>
      <Input
        type="date"
        value={filterDate}
        onChange={(e) => setFilterDate(e.target.value)}
      />
      <Button onClick={() => handleFilterDate(1)}>
        <Icon name="arrow right" />
      </Button>
    </>
  );
}
