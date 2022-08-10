import { db, db_dada } from "../utils/firebase";
// import {db as dada} from '../utils/firebase-dada'
import { Table } from "semantic-ui-react";
import DataTable from "./DataTable";
import React from "react";
export default function Accounts() {

  const schema = [
    {text:'名稱',value:'name',type:'string'},
    {text:'順序',value:'prior',type:'number'},
    {text:'餘額',value:'balance',type:'number'},
   
  ]
  const [rows, setRows] = React.useState([]);
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
  return (
    <>
      <DataTable rows={rows} schema={schema} />
    </>
  );
}
