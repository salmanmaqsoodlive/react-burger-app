import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const orderSummaryList = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}: </span>{' '}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with following ingredients: </p>
      <ul>{orderSummaryList}</ul>
      <p>
        <strong>Total Price: ${props.price.toFixed(2)}</strong>
      </p>
      <Button btnType='Danger' clicked={props.modalClosed}>
        CANCLE
      </Button>
      <Button btnType='Success' clicked={props.orderContinue}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
