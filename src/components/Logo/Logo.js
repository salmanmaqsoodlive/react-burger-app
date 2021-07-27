import React from 'react';

import logoImage from '../../assets/images/burger-logo.png';
import styles from './Logo.css';

const logo = () => (
  <div className={styles.Logo}>
    <img src={logoImage} alt='My-Burger'></img>
  </div>
);

export default logo;
