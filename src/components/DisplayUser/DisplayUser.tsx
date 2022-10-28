import React from 'react'
import './DisplayUser.css'
import UsersList from './UsersList/UsersList'
import { User } from '../User'

const DisplayUser = ({ users }: User[] | any) => {
  return (
    <React.Fragment>
      <UsersList users={users} />
    </React.Fragment>
  )
}

export default DisplayUser