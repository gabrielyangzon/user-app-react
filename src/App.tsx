import React, { useEffect, useState }   from 'react';
import UserGrid from './components/UserGrid';
import './App.css';
import axios from 'axios';

function App() {

const[users,setUsers] = useState([] as any[])


useEffect(() => {
  axios.get("https://user-api20220825185629.azurewebsites.net/api/User/GetAllUsers").then((response) => {

     setUsers(response.data);

  }).catch(err => console.log(err))
},[])

  return (
    <div className="App">
       <UserGrid data={users}/>
    </div>
  );
}

export default App;
