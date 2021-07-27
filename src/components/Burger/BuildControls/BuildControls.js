import React from 'react';
import ControlButtons from './ControlButtons/ControlButtons';

import styles from './BuildControls.css';

const labels = [
  { label: 'Salad', type: 'salad' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => (
  <div className={styles.BuildControls}>
    <p>
      Current Price: <strong>${props.price.toFixed(2)}</strong>
    </p>

    {labels.map((button) => {
      return (
        <ControlButtons
          key={button.label}
          label={button.label}
          itemAdded={() => props.ingredientAdded(button.type)}
          itemRemoved={() => props.ingredientRemoved(button.type)}
          disabled={props.disable[button.type]}
        />
      );
    })}
    <button
      className={styles.OrderButton}
      disabled={!props.purchase}
      onClick={props.showSummary}
    >
      ORDER NOW
    </button>
  </div>
);

export default buildControls;
