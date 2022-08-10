import {db,db_dada} from '../utils/firebase'
// import {db as dada} from '../utils/firebase-dada'
import React from 'react'
export default function Cates() {
  React.useEffect(()=>{
    db_dada.collection('accounts').get().then((snapshot)=>{
      snapshot.docs.map(doc=>console.log(doc.id))
    })
  },[])
  return 'cate'
}