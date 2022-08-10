import {db,db_dada} from '../utils/firebase'
import DataTable from "./DataTable";
// import {db as dada} from '../utils/firebase-dada'
import React from 'react'

export default function Cates() {
  const [rows, setRows] = React.useState([]);
  const schema = [
    {text:'名稱',value:'name',type:'string'},
    {text:'順序',value:'prior',type:'number'},
    // {text:'建立',value:'createdAt',type:'number'},   
  ]
  React.useEffect(()=>{
    db.collection('cates').get().then((snapshot)=>{     
      setRows(
        snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    })
  },[])

  return (
    <DataTable rows={rows} schema={schema} />
  )
}