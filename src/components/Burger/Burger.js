import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

import styles from './Burger.css';

const burger = (props) => {
  let transformIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, index) => {
        return <BurgerIngredients key={igKey + index} type={igKey} />;
      });
    })
    .reduce((previousElement, currentElement) => {
      return previousElement.concat(currentElement);
    }, []);

  if (transformIngredients.length === 0) {
    transformIngredients = <p>Please start adding Ingredients!</p>;
  }

  return (
    <div className={styles.Burger}>
      <BurgerIngredients type='bread-top' />
      {transformIngredients}
      <BurgerIngredients type='bread-bottom' />
    </div>
  );
};

export default burger;
