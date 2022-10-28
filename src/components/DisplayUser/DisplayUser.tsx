import React from 'react'
import './DisplayUser.css'
import UsersList from './UsersList/UsersList'
import { User } from '../User'

const DisplayUser = ({ users }: User[] | any) => {
  return (
    <div>
      <UsersList users={users} />
    </div>
  )
}

export default DisplayUser