import React from 'react'
import styles from './ServiceCard.module.css'

const ServiceCard = ({name,icon}) => {
  return (
   <div className={styles.serviceCard}>{name} <img src={icon}/></div>

  )
}

export default ServiceCard