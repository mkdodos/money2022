import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { ContactService } from "./ContactService";

export default function ViewContact() {
  let {contactId} = useParams()
  useEffect(async()=>{
    let response = await ContactService.getContact(contactId);
    console.log(response.data)
  },[])
  return (
    <div>
      {contactId}
    </div>
  );
}