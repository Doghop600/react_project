import React from 'react'
import Input from './Input'
import Button from './Button'
import styles from './Auth.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Auth = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    const handleUsernameInputOnChange = (event) => {
        console.log(1)
        setUsername(event.target.value)
    }

    const handlePasswordInputOnChange = (event) => {
        console.log(2)
        setPassword(event.target.value)
    }

    const handleEmailInputOnChange = (event) => {
        console.log(3)
        setEmail(event.target.value)
    }

    const handleBtnSignUpClick = (event) => {
        event.preventDefault()
        const users = JSON.parse(localStorage.getItem("users")) || []
        const newUser = { username, email, password }
        users.push(newUser)
        localStorage.setItem("users", JSON.stringify(users))
        console.log("Пользователь добавлен в localStorage", newUser)
        navigate('/main')
    }    

  return (
    <>
        <form>
            <div className={styles.Input}>
                <Input placeholder="enter username" onChange={handleUsernameInputOnChange}/>
                <Input placeholder="enter password" onChange={handlePasswordInputOnChange} type="password"/>
                <Input placeholder="enter email" onChange={handleEmailInputOnChange} type="email"/>
            </div>
            <Button onClick={handleBtnSignUpClick} className={styles.button}>Sing Up</Button>
        </form>
    </>
  )
}

export default Auth