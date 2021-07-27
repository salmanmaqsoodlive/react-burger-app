import React from 'react';

import styles from './ControlButtons.css';

const controlButtons = (props) => (
  <div className={styles.BuildControl}>
    <div className={styles.Label}>{props.label}</div>
    <button
      className={styles.Less}
      onClick={props.itemRemoved}
      disabled={props.disabled}
    >
      Less
    </button>
    <button className={styles.More} onClick={props.itemAdded}>
      More
    </button>
  </div>
);
export default controlButtons;
