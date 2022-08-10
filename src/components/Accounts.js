import { db, db_dada } from "../utils/firebase";
// import {db as dada} from '../utils/firebase-dada'
import { Table } from "semantic-ui-react";
import DataTable from "./DataTable";
import DataRow from "./DataRow";
import React from "react";
import EditForm from "./EditForm";
export default function Accounts() {
  const schema = [
    { text: "名稱", value: "name", type: "string" },
    { text: "順序", value: "prior", type: "number" },
    { text: "餘額", value: "balance", type: "number" },
  ];
  const [rows, setRows] = React.useState([]);
  const [row, setRow] = React.useState({});
  React.useEffect(() => {
    db.collection("accounts")
      .get()
      .then((snapshot) => {
        setRows(
          snapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
      });
  }, []);

  function handleRowClick(row) {
    console.log("row");
  }

  function handleClick(row) {
    setRow(row);
    // console.log(row);
  }

  function renderRow(row, i) {
    return (
      <DataRow key={i} row={row} value={i} onClick={() => handleClick(row)} />
    );
  }

  return (
    <>
    <EditForm row={row} />
      <Table unstackable>
      <Table.Header>
        <Table.Row>
          {schema.map((obj, i) => (
            <Table.HeaderCell key={i}>
              {obj.text} 
            </Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
        <Table.Body>
        {rows.map((row, i) => {
        return renderRow(row, i);
      })}
        </Table.Body>
      </Table>
     
      
      {/* <DataTable rows={rows} schema={schema} onRowClick={handleRowClick} /> */}
    </>
  );
}
