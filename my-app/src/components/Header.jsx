import React from 'react'
import styles from './Header.module.css'
import Button from './Button'

const Header = () => {
  const handleSingInBtnClick = () => {
    console.log(1)
  }
  const handleSingUpBtnClick = () => {
    console.log(2)
  }
  return (
    <>
    <nav className={styles.navbar}>
        <div className={styles.logo}>
            <h1>logo</h1>
        </div>
        <ul className={styles.navlist}>
            <li><a>Home</a></li>
            <li><a>About Us</a></li>
            <li><a>Features</a></li>
            <li><a>Our Works</a></li>
            <li><a>Pricing</a></li>
            <li><a>Resources</a></li>
        </ul>
        <div className={styles.buttons}>
        <Button onClick={handleSingInBtnClick} className={styles.btn1}>Sing In</Button>
        <Button onClick={handleSingUpBtnClick} className={styles.btn2}>Sing Up</Button>
        </div>
    </nav>
    </>
  )
}

export default Header