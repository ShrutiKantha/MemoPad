import React,{useState} from 'react';
import UserContext from './userContext';

const UsersState = () => {
    const host = "http://localhost:5000";
    const [users, setUsers] = useState({
        name:"",
        email:"",
        password:""
    });


    const createUser = async (name, email, password) => {
        const response = await fetch(`${host}/api/auth/createUser`, {
       method: "POST",
       headers: {
         "Content-Type": "application/json"
       },
       body: JSON.stringify({name, email, password}),
     });
     const json = await response.json();
    console.log(json);
 
   };
    const getUser = async () => {
        const response = await fetch(`${host}/api/auth/getUser`, {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
         "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjczODhjMGZkNDYxYWU1NDMxMmFiOTllIn0sImlhdCI6MTczMTc1OTE3N30.MG3O-z5U7V2rLR7ubm-dN1bkB2loKAPBZER-AZRPyVk"
       },
     });
     const json = await response.json();
    console.log(json);
 
   };
    const userLogin = async (email, password) => {
        const response = await fetch(`${host}/api/auth/getUser`, {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
        },
       body: JSON.stringify({email, password}),
     });
     const json = await response.json();
    console.log(json);
 
   };
 
  return (
    <UserContext.Provider value={{ users,createUser,userLogin }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UsersState