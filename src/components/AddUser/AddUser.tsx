import React, { useState } from 'react'
import FormInput from '../FormInput/FormInput'
import './AddUser.css'

const AddUser = () => {
    return (
        <div className='addUser'>
            <div className='addUser__input'>
                <FormInput />
            </div>
        </div>
    )
}

export default AddUser