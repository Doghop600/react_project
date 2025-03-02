import React from 'react'
import styles from './Section.module.css'
import Button from './Button'

const Section = () => {
  const handleBtnStartNowClick = () => {
    
  }
  return (
    <>
    <section className={styles.section}>
        <div className={styles.title}>
            <h2 className={styles.text}>“Stand out online and make an impact”</h2>
            <p className={styles.text}>David Smith - CEO of a Tech Startup</p>
        </div>
        <div>
            <Button className={styles.btn}>Start Now</Button>
        </div>
      </section>
    </>
  )
}

export default Section
