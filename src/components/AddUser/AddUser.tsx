import React, { useState } from 'react'
import FormInput from '../FormInput/FormInput'
import './AddUser.css'
import UserProps from '../User'

const AddUser = ({ username, age, college, handleName, handleAge, handleCollege, handleSubmit }: UserProps) => {
    return (
        <div className='addUser'>
            <div className='addUser__input'>
                <FormInput username={username} age={age} college={college} handleName={handleName} handleAge={handleAge} handleCollege={handleCollege} handleSubmit={handleSubmit} />
            </div>
        </div>
    )
}

export default AddUser