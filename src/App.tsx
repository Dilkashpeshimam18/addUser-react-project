import React, { useState, useRef } from 'react';
import './App.css';
import AddUser from './components/AddUser/AddUser';
import DisplayUser from './components/DisplayUser/DisplayUser';
import { User } from './components/User';

function App() {
  const [username, setUserName] = useState<string>('')
  const [age, setAge] = useState<any>(0)
  const [college, setCollege] = useState<string>('')
  const [users, setUsers] = useState<User[]>([])

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value)
  }
  const handleAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value)
  }
  const handleCollege = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCollege(event.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (username == '' && age == 0 && college == '') {
      alert('Please enter the username, age & college name first!')
    } else if (age && college && !username) {
      alert('Please enter your username!')
    } else if (!age && username && college) {
      alert('Please enter your age!')
    } else if (!college && username && age) {
      alert('Please enter your college name!')
    } else {
      if (age <= 0) {
        alert('Age should be greater than 0')
      } else {
        setUsers((prevUser) => {
          let updateUsers = [...prevUser]
          let userDetail = {
            username: username,
            age: age,
            college: college,
          }
          updateUsers.push(userDetail)
          return updateUsers
        })
      }
    }


    setUserName('')
    setAge('')
    setCollege('')
  }
  return (
    <div className="app">
      <AddUser username={username} age={age} college={college} handleName={handleName} handleAge={handleAge} handleCollege={handleCollege} handleSubmit={handleSubmit} />
      <DisplayUser users={users} />
    </div>
  );
}

export default App;
