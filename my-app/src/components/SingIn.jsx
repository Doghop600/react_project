import React from 'react'
import styles from './SingIn.module.css'
import { useState } from 'react'
import Input from './Input'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const SingIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassowrd] = useState("")
    const [text, setText] = useState("")
    const navigate = useNavigate()
    
    const handleEmailInputOnChange = (event) => {
        console.log(event.target.value)
        setEmail(event.target.value)
    }
    const handlePassowordInputOnChange = (event) => {
        console.log(event.target.value)
        setPassowrd(event.target.value)
    }

    const handleBtnSingInClick = (event) => {
        setText(event.target.value)
        const users = JSON.parse(localStorage.getItem("users")) || []
        const newUser = { email, password }
        users.push(newUser)
        localStorage.setItem("user", JSON.stringify(users))
        console.log("Пользователь добавлен в localStorage", newUser)
        navigate('/main')
    }
  return (
    <div className={styles.SingInContainer}>
        <form className={styles.form}>
            <Input placeholder="enter email" onChange={handleEmailInputOnChange} value={email} className={styles.input} type="email"/>
            <Input placeholder="enter password" onChange={handlePassowordInputOnChange} value={password} className={styles.input} type="password"/>
            <Button onClick={handleBtnSingInClick} className={styles.button} value={text}>Sing In</Button>
        </form>
    </div>
  )
}

export default SingIn