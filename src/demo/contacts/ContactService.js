import axios from "axios"
import { db } from "../../utils/firebase"
// server 資料處理
export class ContactService {
  static serverURL = "http://192.168.0.12:9000"
  
  // 
  static getAllContacts() {
    let dataURL=`${this.serverURL}/contacts`
    return axios.get(dataURL)
  }

  static getAllCates() {
    return db.collection('cates').get()
  }
}