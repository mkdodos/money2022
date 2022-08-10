import { db, db_dada } from "../utils/firebase";
import DataTable from "./DataTable";
import React from "react";

export default function Balances() {
  const [rows, setRows] = React.useState([]);
  const schema = [
    {text:'日期',value:'date',type:'date'},
    {text:'項目',value:'title',type:'string'},
    {text:'收入',value:'income',type:'number'},
    {text:'支出',value:'expense',type:'number'}
  ]

  React.useEffect(() => {
    db
      .collection("balances")
      .orderBy('date','desc')
      .get()
      .then((snapshot) => {
       
        console.log(snapshot.size)
       
        const data =  snapshot.docs.map((doc) => {
            // db.collection('balances').add(doc.data())
            return { ...doc.data(), id: doc.id };
          })
          setRows(data);


      });
  }, []);

  return <DataTable rows={rows} schema={schema} />;
}
