import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import styles from './NavigationItems.css';
const navigationItems = () => (
  <ul className={styles.NavigationItems}>
    <NavigationItem link='#' active>
      Burger Builder
    </NavigationItem>
    <NavigationItem link='#'>Check Out</NavigationItem>
  </ul>
);

export default navigationItems;
