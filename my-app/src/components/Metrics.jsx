import React from 'react';
import MetricsCard from './MetricsCard';
import styles from '../components/Metrics.module.css';

import metric1 from '../assets/metric1.svg';
import metric2 from '../assets/metric2.svg';
import metric3 from '../assets/metric3.svg';

const Metrics = () => {
  const metricData = [
    { image: metric1, title: '10.000+', description: 'Happy Customers' },
    { image: metric2, title: '20.000+', description: 'Success Progresses' },
    { image: metric3, title: '10+ Years', description: 'of Experience' }
  ];

  return (
    <div className={styles.container}>
      <h1>Work with Nusa Tech</h1>
      <MetricsCard metricData={metricData}/>
    </div>
  );
};

export default Metrics;
