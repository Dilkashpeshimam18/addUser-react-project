import React, { useState } from 'react'
import './FormInput.css'
import Button from '../Button/Button'
import UserProps from '../User'

const FormInput = ({ username, age, handleName, handleAge, handleSubmit }: UserProps) => {

    return (
        <div className='formInput'>
            <form onSubmit={handleSubmit}>
                <h4>Username</h4>
                <input value={username} onChange={handleName} type='text' placeholder='add your username' />
                <h4>Age</h4>
                <input value={age} onChange={handleAge} type='number' placeholder='add your age' />
                <Button />
            </form>

        </div>
    )
}

export default FormInput