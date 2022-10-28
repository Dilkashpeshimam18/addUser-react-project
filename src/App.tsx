import React, { useState } from 'react';
import './App.css';
import AddUser from './components/AddUser/AddUser';
import DisplayUser from './components/DisplayUser/DisplayUser';
import { User } from './components/User';

function App() {
  const [username, setUserName] = useState<string>('')
  const [age, setAge] = useState<any>(0)
  const [users, setUsers] = useState<User[]>([])

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value)
  }
  const handleAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value)
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setUsers((prevUser) => {
      let updateUsers = [...prevUser]
      let userDetail = {
        username: username,
        age: age
      }
      updateUsers.push(userDetail)
      return updateUsers
    })
    setUserName('')
    setAge('')
  }
  return (
    <div className="app">
      <AddUser username={username} age={age} handleName={handleName} handleAge={handleAge} handleSubmit={handleSubmit} />
      <DisplayUser users={users} />
    </div>
  );
}

export default App;
