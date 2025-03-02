import React from 'react'
import ServiceCard from './ServiceCard'
import styles from './Services.module.css'
import { services } from './mock/Service'

const Services = () => {
  return (
    <>
    <main>
      <section className='service-sect'>
        <div className='container'>
          <h2>Services</h2>
          <p>Strategic services drive digital success with tailored, comprehensive approaches</p>
        </div>
        <div className={styles.servicesList}>
          {services.map((service)=><ServiceCard name={service.name} icon={service.icon} key={service.id}/>)}
          
        </div>
      </section>
    </main>
    </>
  )
}

export default Services