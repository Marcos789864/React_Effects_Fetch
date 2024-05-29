import './App.css';
import React, { useEffect, useState } from 'react';
import Card from './components/Card';

const UserList = () =>
{
  const urlApi = "https://randomuser.me/api/?results=5";
  const [users,setUsers] = useState([])
  useEffect(() =>{
    fetch(urlApi)
    .then(response => response.json())
    .then(data => setUsers(data.results))
    .catch(error => console.log('hubo un error' + error));
  }, [])
}

function App() {
  return (
    <>
      <h1>Usuarios</h1>
      <Card nombre = {users.name.first}/>   
      
    </>
  );
}

export default App;
