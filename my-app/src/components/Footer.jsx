import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <>
        <section className={styles.footerSection}>
            <div className={styles.footerContainer}>
                <p className={styles.footerText}>Nusa Tech is a leading digital marketing agency<br/>
                dedicated to driving success for businesses
                <br/>online. With expertise in SEO, PPC, social media,
                <br/>content creation, and more, we offer tailored
                <br/>solutions to maximize ROI.</p>
            </div>
            <div className={styles.Sections}>
              <div className={styles.footerService}>
                <h3>Our Services</h3>
                <ul>
                  <li><a href="">SEO Marketing</a></li>
                  <li><a href="">Research Topic Trends</a></li>
                  <li><a href="">Email Marketing</a></li>
                  <li><a href="">Google PPC</a></li>
                </ul>
              </div>
              <div className={styles.footerService}>
                <h3>Explore More</h3>
                <ul>
                  <li><a href="">About Us</a></li>
                  <li><a href="">Feature</a></li>
                  <li><a href="">Our Works</a></li>
                  <li><a href="">Resource</a></li>
                  <li><a href="">Privacy Policy</a></li>
                </ul>
              </div>
              <div className={styles.footerService}>
                <h3>Contact Us</h3>
                <ul>
                  <li><a href="">Jl. Medan Merdeka No. <br/>35 Jakarta Selatan</a></li>
                  <li><a href="">(021) 234567</a></li>
                  <li><a href="">+62 812 9188 72</a></li>
                </ul>
              </div>
            </div>
            <div className={styles.footerBottom}>
              <a href="#" className={styles.footerLink}>Terms & Conditions</a>
            </div>
        </section>
    </>
  )
}

export default Footer