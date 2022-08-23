import axios from "axios";
import { db } from "../utils/firebase";
export class ContactService {

  static serverURL = `http://localhost:9000`;
  static getAllContacts() {
    let data = [];
    db.collection('cates').get().then(snapshot=>{
     
      snapshot.docs.map(doc=>{
        data.push({...doc.data()})
        // return {...doc.data(), id:doc.id}
      })
     
    })
    return data;     
    
    // return ['a','b']
    // return axios.get(`${this.serverURL}/money`)
  }
  
}