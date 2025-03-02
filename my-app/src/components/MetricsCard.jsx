import React from 'react';
import styles from './Metrics.module.css';

const MetricsCard = ({ metricData }) => {
  return (
    <div className={styles.metricsContainer}>
      {metricData && metricData.map((metric, index) => (
        <div key={index} className={styles.metricCard}>
          <img src={metric.image} alt={metric.title} className={styles.metricImage} />
          <h3 className={styles.metricTitle}>{metric.title}</h3>
          <p className={styles.metricDescription}>{metric.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MetricsCard;
