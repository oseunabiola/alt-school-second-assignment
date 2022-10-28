import { useState } from "react";
import { useEffect } from "react";

export default function Users() {
    const [users,setUsers] = useState(undefined);
    
  useEffect(() => {
    async function loadUsers() {
      const apiCallResponse = await fetch("https://randomuser.me/api/?results=500");
      const apiCallResponseJson = await apiCallResponse.json();

      console.log(apiCallResponseJson);
    }
    loadUsers();
  }, []);
  return <div>I am the users route</div>;
}
