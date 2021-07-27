import React from 'react';

import styles from './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
  return (
    <Aux>
      <Backdrop show={props.show} backdropClicked={props.modalClosed} />
      <div
        className={styles.Modal}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-200vh)',
          opacity: props.show ? '1' : '0',
        }}
      >
        {props.children}
      </div>
    </Aux>
  );
};

export default modal;
