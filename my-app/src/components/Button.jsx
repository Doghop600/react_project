import React from 'react'
import styles from "./Button.module.css"

const Button = ({children,onClick,className}) => {
   console.log(onClick,children)
  return (
    <button onClick={onClick} className={className}>{children}</button>
  )
}

export default Button