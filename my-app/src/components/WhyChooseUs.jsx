import React from "react";
import styles from "./WhyChooseUs.module.css";
import img from "../assets/img.svg";
import cardImg1 from "../assets/cardImg1.svg";
import cardImg2 from "../assets/cardImg2.svg";
import cardImg3 from "../assets/cardImg3.svg";
import Text from "./Text";
import Image from "./Image";
import Title from "./Title";

const WhyChooseUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.imageContainer}>
        <Image src={img} alt="Person at computer" className={styles.image} />
        </div>
        <div className={styles.textContent}>
          <Title className={styles.title}>Why Choose Us?</Title>
          <div className={styles.card}>
          <Image src={cardImg1} alt="Icon" className={styles.icon} />
            <Text>Solutions Tailored Specifically to Your Business Needs</Text>
          </div>
          <div className={styles.card}>
          <Image src={cardImg2} alt="Icon" className={styles.icon} />
            <Text>Creative Excellence Elevates Every Project</Text>
          </div>
          <div className={styles.card}>
          <Image src={cardImg3} alt="Icon" className={styles.icon} />
            <Text>Client Satisfaction is Our Main Focus</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
