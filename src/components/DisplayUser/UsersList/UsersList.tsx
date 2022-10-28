import React from 'react'
import './UsersList.css'
import { User } from '../../User'
const UsersList = ({ users }: User[] | any) => {
  return (
    <div>
      {users.map((user: any) => {
        return (
          <div>
            <p>{user.username}</p>
            <p>{user.age}</p>
          </div>
        )
      })}
    </div>
  )
}

export default UsersList