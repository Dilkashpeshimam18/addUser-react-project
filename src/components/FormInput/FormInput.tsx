import React, { useState } from 'react'
import './FormInput.css'
import Button from '../Button/Button'

const FormInput = () => {
    const [userName, setUserName] = useState<string>('')
    const [age, setAge] = useState<any>(0)

    const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value)
    }
    const handleAge = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAge(event.target.value)
    }
    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        console.log(userName)
        console.log(age)
    }
    return (
        <div className='formInput'>
            <form onSubmit={handleSubmit}>
                <h4>Username</h4>
                <input value={userName} onChange={handleName} type='text' placeholder='add your username' />
                <h4>Age</h4>
                <input value={age} onChange={handleAge} type='number' placeholder='add your age' />
                <Button/>

            </form>

        </div>
    )
}

export default FormInput