import axios from "axios";
import { useEffect, useState } from "react";
import {Table} from  "semantic-ui-react"
export default function EmpBasic() {
  const [rows, setRows] = useState([])
  useEffect(()=>{

    axios.get('http://localhost:8888/laravel5salary/public/emp/basic/data')
    .then((res)=>{
      setRows(res.data)
      console.log(res.data)
    })
  },[])
 
  return (
    <>
    <pre>{JSON.stringify(rows)}</pre>
    {rows.map(row=>{
      return <div key={row.name}>{row.name}</div>
     
    })}
    </>
  )
}