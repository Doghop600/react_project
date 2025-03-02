import React from 'react'
import { companies } from './components/mock/Companies'
import styles from './Companies.module.css'

const Companies = () => {
  return (
    <div className={styles.companies}>
        <div>
            <p>Trusted by thousand companies</p>
        </div>
        <div className='companies-logo'>
        {companies.map((company) => (
          <img key={company.id} src={company.icon} alt={company.name} />
        ))}
        </div>
    </div>
  )
}

export default Companies