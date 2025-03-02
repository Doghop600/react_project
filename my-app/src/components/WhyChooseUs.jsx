import React from "react";
import styles from "./WhyChooseUs.module.css";
import img from "../assets/img.svg";
import cardImg1 from "../assets/cardImg1.svg";
import cardImg2 from "../assets/cardImg2.svg";
import cardImg3 from "../assets/cardImg3.svg";

const WhyChooseUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.imageContainer}>
          <img src={img} alt="Person at computer" className={styles.image} />
        </div>
        <div className={styles.textContent}>
          <h2 className={styles.title}>Why Choose Us?</h2>
          <div className={styles.card}>
            <img src={cardImg1} alt="Icon" className={styles.icon} />
            <p>Solutions Tailored Specifically to Your Business Needs</p>
          </div>
          <div className={styles.card}>
            <img src={cardImg2} alt="Icon" className={styles.icon} />
            <p>Creative Excellence Elevates Every Project</p>
          </div>
          <div className={styles.card}>
            <img src={cardImg3} alt="Icon" className={styles.icon} />
            <p>Client Satisfaction is Our Main Focus</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
