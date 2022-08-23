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

  static getContact(contactId) {
    let dataURL=`${this.serverURL}/contacts/${contactId}`
    return axios.get(dataURL)
  }

  static AddContact(contact) {
    let dataURL=`${this.serverURL}/contacts`
    return axios.post(dataURL,contact)
  }

  static UpdateContact(contact) {
    let dataURL=`${this.serverURL}/contacts/${contact.id}`
    return axios.put(dataURL,contact)
  }

  static DeleteContact(contactId) {
    let dataURL=`${this.serverURL}/contacts/${contactId}`
    return axios.delete(dataURL)
  }

  // static getAllCates() {
  //   return db.collection('cates').get()
  // }
}