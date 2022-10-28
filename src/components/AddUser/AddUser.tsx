import React, { useState } from 'react'
import FormInput from '../FormInput/FormInput'
import './AddUser.css'
import UserProps from '../User'

const AddUser = ({ username, age, handleName, handleAge, handleSubmit }: UserProps) => {
    return (
        <div className='addUser'>
            <div className='addUser__input'>
                <FormInput username={username} age={age} handleName={handleName} handleAge={handleAge} handleSubmit={handleSubmit} />
            </div>
        </div>
    )
}

export default AddUser