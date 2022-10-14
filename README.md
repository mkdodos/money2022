# money2022

## 1006
統計
components/Dashboard.js

收支
pages/Balances/index.js

記帳類型 type


## 1007 Segment 水平排列
```jsx
  <Segment.Group horizontal>
    <Segment>Left</Segment>
    <Segment>Middle</Segment>
    <Segment>Right</Segment>
  </Segment.Group>
```  

## Table

```jsx
  <Table celled unstackable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Header</Table.HeaderCell>
        <Table.HeaderCell>Header</Table.HeaderCell>
        <Table.HeaderCell>Header</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
    </Table.Body>

    <Table.Footer></Table.Footer>
  </Table>  
``` 


日期
時間
new Date().toLocaleTimeString()